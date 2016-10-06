import { get } from 'lodash';


export function fn1() {
  const result = get({ a: 'fn1' }, 'a');
  console.log(result);
}
