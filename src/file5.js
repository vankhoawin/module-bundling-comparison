import { get } from 'lodash';


export function fn5() {
  const result = get({ a: 'fn5' }, 'a');
  console.log(result);
}
