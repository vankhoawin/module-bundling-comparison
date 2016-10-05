import get from 'lodash/get';


export function fn7() {
  const result = get({ a: 'fn7' }, 'a');
  console.log(result);
}
