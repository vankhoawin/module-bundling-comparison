(function (lodash) {
'use strict';

function fn1() {
  const result = lodash.get({ a: 'fn1' }, 'a');
  console.log(result);
}

function fn2() {
  const result = lodash.get({ a: 'fn2' }, 'a');
  console.log(result);
}

function fn3() {
  const result = lodash.get({ a: 'fn3' }, 'a');
  console.log(result);
}

function fn4() {
  const result = lodash.get({ a: 'fn4' }, 'a');
  console.log(result);
}

function fn5() {
  const result = lodash.get({ a: 'fn5' }, 'a');
  console.log(result);
}

function fn6() {
  const result = lodash.get({ a: 'fn6' }, 'a');
  console.log(result);
}

function fn7() {
  const result = lodash.get({ a: 'fn7' }, 'a');
  console.log(result);
}

function fn9() {
  const result = lodash.get({ a: 'fn9' }, 'a');
  console.log(result);
}

function fn8() {
  const result = lodash.get({ a: 'fn8' }, 'a');
  console.log(result);

  fn9();
}

fn1();
fn2();
fn3();
fn4();
fn5();
fn6();
fn7();
fn8();

}(lodash));
