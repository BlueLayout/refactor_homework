const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('voyageRisk case 1 test. should return 3 when voyageRisk given voyage length = 5 and voyage zone  = xxxx', t => {
  //when
  const voyage = {
    length: 5,
    zone: 'xxxx'
  };

  //given
  const  result = voyageRisk(voyage);

  //then
  t.is(result,3)
});
