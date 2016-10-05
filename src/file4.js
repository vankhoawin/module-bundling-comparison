import { get } from 'lodash';


export function fn4() {
  const result = get({ a: 'fn4' }, 'a');
  console.log(result);
}
