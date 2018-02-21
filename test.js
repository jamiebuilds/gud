// @flow
'use strict';
const test = require('ava');

function run() {
  delete require.cache[require.resolve('./')];
  return require('./')();
}

test('creates a new id each time', t => {
  t.is(run(), 1);
  t.is(run(), 2);
  t.not(run(), run());
  t.not(run(), run());
  t.not(run(), run());
});
