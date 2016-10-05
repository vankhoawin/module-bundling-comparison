import get from 'lodash/get';


export function fn5() {
  const result = get({ a: 'fn5' }, 'a');
  console.log(result);
}
