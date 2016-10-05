import { get } from 'lodash';


export function fn10() {
  const result = get({ a: 'fn10' }, 'a');
  console.log(result);
}
