import { get } from 'lodash';


export function fn7() {
  const result = get({ a: 'fn7' }, 'a');
  console.log(result);
}
