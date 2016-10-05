import get from 'lodash/get';


export function fn6() {
  const result = get({ a: 'fn6' }, 'a');
  console.log(result);
}
