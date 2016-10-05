import { get } from 'lodash';


export function fn3() {
  const result = get({ a: 'fn3' }, 'a');
  console.log(result);
}
