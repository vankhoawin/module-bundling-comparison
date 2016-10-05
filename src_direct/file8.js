import get from 'lodash/get';
import { fn9 } from './file9.js';

export function fn8() {
  const result = get({ a: 'fn8' }, 'a');
  console.log(result);

  fn9();
}
