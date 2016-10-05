import { get } from 'lodash';


export function fn2() {
  const result = get({ a: 'fn2' }, 'a');
  console.log(result);
}
