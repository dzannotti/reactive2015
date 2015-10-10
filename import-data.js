import Reindex from 'reindex-js';
import data from './data/json';

const reindex = new Reindex(process.env.REINDEX_URL);
reindex.setToken(process.env.REINDEX_TOKEN);

function createMutation(name) {
  const lowerName = name.toLowerCase();
  return `
    mutation Import${name}(\$${lowerName}: _Create${name}Input) {
      create${name}(input: \$${lowerName}) {
        id
      }
    }`;
}

function path(obj, path) {
  try {
    return eval('obj.' + path);
  } catch(e) {
    console.log('pathing error', e);
    return undefined;
  }
}

function resolveRefs(item) {
  const refs = {};
  Object.keys(item).forEach((key) => {
    if (typeof item[key] !== 'string') {
      return;
    }
    if (item[key].indexOf('$ref') === 0) {
      const ref = item[key].match(/\(([^)]+)\)/)[1];
      refs[key] = path(data, ref).id
    }
  });
  return {
    ...item,
    ...refs
  };
}

async function importEntity(entity, mutation, mutationKey) {
  for (const idx in data[entity]) {
    const item = data[entity][idx];
    const solvedItem = resolveRefs(item);
    console.log(solvedItem);
    try {
      const result = await reindex.query(mutation, { [mutationKey]: solvedItem });
      if (typeof result.errors !== 'undefined') {
        console.log(result.errors);
        throw "mutation error";
      }
      const firstKey = Object.keys(result.data)[0];
      data[entity][idx].id = result.data[firstKey].id;
      console.log('created ' + mutationKey + ': ' + result.data[firstKey].id);
      console.log(item);
    } catch(e) {
      console.log('mutation error', e.stack);
      throw e;
    }
  }
  return Promise.resolve({});
}


const createCompany = createMutation('Company');
const createSpeaker = createMutation('Speaker');
const createSponsor = createMutation('Sponsor');
const createEvent = createMutation('Event');

async function doImport() {
  try {
    await importEntity('companies', createCompany, 'company');
    await importEntity('sponsors', createSponsor, 'sponsor');
    await importEntity('speakers', createSpeaker, 'speaker');
    await importEntity('events', createEvent, 'event');
  } catch(e) {
    console.log('import error', e.stack);
  }
  console.log('** done **');
}

console.log('** importing data **');
try {
 doImport();
} catch(e) {
  console.error(e);
}
