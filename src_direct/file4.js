import get from 'lodash/get';


export function fn4() {
  const result = get({ a: 'fn4' }, 'a');
  console.log(result);
}
