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

rankTest('voyageRisk case 2 test. should return 3 when voyageRisk given voyage length = 9 and voyage zone  = xxxx', t => {
  //when
  const voyage = {
    length: 9,
    zone: 'xxxx'
  };

  //given
  const  result = voyageRisk(voyage);

  //then
  t.is(result,4)
});

rankTest('voyageRisk case 3 test. should return 7 when voyageRisk given voyage length = 5 and voyage zone  = china', t => {
    //when
    const voyage = {
        length: 5,
        zone: 'china'
    };

    //given
    const  result = voyageRisk(voyage);

    //then
    t.is(result,7)
});