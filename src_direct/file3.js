import get from 'lodash/get';


export function fn3() {
  const result = get({ a: 'fn3' }, 'a');
  console.log(result);
}
