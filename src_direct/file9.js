import get from 'lodash/get';
import { fn10 } from './file10.js';


export function fn9() {
  const result = get({ a: 'fn9' }, 'a');
  console.log(result);
}
