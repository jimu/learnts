//import * from 'build/Pod.js';
const [Pod] = require('./Pod.js');


test('Pod.toString() returns typename', () => {
  var p = new Pod(Pod.Laser);
  expect(p.toString()).toBe('Laser');
  expect(p.toString()).toEqual('Laser');

  p = new Pod(Pod.DestroyedCabin);
  expect(p.toString()).toBe('Destroyed Cabin');
});


test('Object assignment is equal but not exact', () => {
  var p = new Pod(Pod.Laser);
  var q = new Pod(Pod.Laser);
  expect(p).not.toBe(q);
  expect(p).toEqual(q);
});

test('Pod names returned from Pod.toString(Pod)', () => {
  expect(Pod.toString(Pod.Laser)).toEqual('Laser');
  expect(Pod.toString(Pod.DestroyedCabin)).toEqual('Destroyed Cabin');
  expect(Pod.toString(1)).toEqual('Laser');
});

test('destroy(pod) are destroyed', () => {
  var pok = Pod.Laser;
  expect(Pod.okay(pok)).toBe(true);
  var pdead = Pod.destroy(pok);
  expect(Pod.okay(pdead)).toBe(false);
  expect(Pod.toString(pdead)).toBe('Destroyed Laser');
});
