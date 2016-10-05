import get from 'lodash/get';


export function fn1() {
  const result = get({ a: 'fn1' }, 'a');
  console.log(result);
}
