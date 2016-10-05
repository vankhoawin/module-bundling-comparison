import get from 'lodash/get';


export function fn10() {
  const result = get({ a: 'fn10' }, 'a');
  console.log(result);
}
