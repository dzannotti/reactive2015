// react-native babel doesn't seem to support export { default as X } from './foo';
import device from './device';
import colors from './colors';
import Text from './text';
import Link from './link';
import Image from './image';

export default {
  device,
  colors,
  Text,
  Link,
  Image
};
