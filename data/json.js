export default {
  companies: [
    {
      name: 'Mozzilla',
      logo: 'https://reactive2015.com/assets/img/companies/mozilla_logo.png',
      url: 'http://www.mozilla.org'
    },
    {
      name: 'Futurice',
      logo: 'http://summit.devaamo.fi/2013/wp-content/uploads/futurice_logo_horizK_k_rgb_sm.jpg',
      url: 'http://futurice.com'
    }
  ],
  speakers: [
    {
      firstName: 'Andre',
      lastName: 'Staltz',
      bio: 'Andre is a user interface engineer at Futurice, with extensive knowledge in reactive programming. He is a contributor to RxJS, has built RxMarbles, written an introduction to reactive programming which went viral, and collaborated to design ReactiveX.io. His current mission is to redefine how we understand and structure user interfaces with the reactive web framework Cycle.js.',
      company: '$ref(companies[1])'
    }
  ]
}
