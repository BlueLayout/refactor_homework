const rankTest = require('ava');
const {voyageRisk, voyageProfitFactor, captainHistoryRisk} = require('../src/rank');

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
    const result = voyageRisk(voyage);

    //then
    t.is(result, 3)
});

rankTest('voyageRisk case 2 test. should return 3 when voyageRisk given voyage length = 9 and voyage zone  = xxxx', t => {
    //when
    const voyage = {
        length: 9,
        zone: 'xxxx'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 4)
});

rankTest('voyageRisk case 3 test. should return 7 when voyageRisk given voyage length = 5 and voyage zone  = china', t => {
    //when
    const voyage = {
        length: 5,
        zone: 'china'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 7)
});

rankTest('voyageRisk case 4 test. should return 8 when voyageRisk given voyage length = 9 and voyage zone  = china', t => {
    //when
    const voyage = {
        length: 9,
        zone: 'china'
    };

    //given
    const result = voyageRisk(voyage);

    //then
    t.is(result, 8)
});

rankTest('voyageProfitFactor case 1 test. should return 2 when voyageProfitFactor given voyage zone xxx and history.length = 1 and voyage.length = 1', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 1
    };
    const history = {
        length: 1
    };

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 2 test. should return 3 when voyageProfitFactor given voyage zone xxx and history.length = 9 and voyage.length = 1', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 1
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 3 test. should return 1 when voyageProfitFactor given voyage zone xxx and history.length = 1 and voyage.length = 15', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 15
    };
    const history = [{
        length: 1
    }];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 1);
});

rankTest('voyageProfitFactor case 4 test. should return 2 when voyageProfitFactor given voyage zone xxx and history.length = 9 and voyage.length = 15', t => {
    //when
    const voyage = {
        zone: 'xxx',
        length: 15
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 5 test. should return 6 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 1 and voyage.length = 1', t => {
    //when
    const voyage = {
        zone: 'china',
        length: 1
    };
    const history = [{
        zone: 'china',
        length: 1
    }];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 6);
});

rankTest('voyageProfitFactor case 6 test. should return 7 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 11 and voyage.length = 1', t => {
    //when
    const voyage = {
        zone: 'china',
        length: 1
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        },
        {
            zone: 'china',
            length: 10
        },
        {
            zone: 'china',
            length: 11
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 7);
});

rankTest('voyageProfitFactor case 7 test. should return 7 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 1 and voyage.length = 13', t => {
    //when
    const voyage = {
        zone: 'china',
        length: 13
    };
    const history = [
        {
            zone: 'china',
            length: 1
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 7);
});

rankTest('voyageProfitFactor case 8 test. should return 6 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 1 and voyage.length = 19', t => {
    //when
    const voyage = {
        zone: 'china',
        length: 19
    };
    const history = [
        {
            zone: 'china',
            length: 1
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 6);
});

rankTest('voyageProfitFactor case 9 test. should return 8 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 11 and voyage.length = 13', t => {
    //when
    const voyage = {
        zone: 'china',
        length: 13
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        },
        {
            zone: 'china',
            length: 10
        },
        {
            zone: 'china',
            length: 11
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 8);
});

rankTest('voyageProfitFactor case 10 test. should return 7 when voyageProfitFactor given voyage zone china and history.zone=china and history.length = 11 and voyage.length = 19', t => {
    //when
    const voyage = {
        zone: 'china',
        length: 19
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        },
        {
            zone: 'china',
            length: 10
        },
        {
            zone: 'china',
            length: 11
        }
    ];

    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 7);
});

rankTest('voyageProfitFactor case 11 test. should return 3 when voyageProfitFactor given voyage zone east-indies and voyage.length = 1 and history.length = 0', t => {
    //when
    const voyage = {
        zone: 'east-indies',
        length: 1
    };
    const history = [];
    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 3);
});

rankTest('voyageProfitFactor case 12 test. should return 4 when voyageProfitFactor given voyage zone east-indies and voyage.length = 1 and history.length = 9', t => {
    //when
    const voyage = {
        zone: 'east-indies',
        length: 1
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        }
    ];
    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 4);
});

rankTest('voyageProfitFactor case 13 test. should return 2 when voyageProfitFactor given voyage zone east-indies and voyage.length = 15 and history.length = 8', t => {
    //when
    const voyage = {
        zone: 'east-indies',
        length: 15
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        }
    ];
    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 2);
});

rankTest('voyageProfitFactor case 14 test. should return 3 when voyageProfitFactor given voyage zone east-indies and voyage.length = 15 and history.length = 9', t => {
    //when
    const voyage = {
        zone: 'east-indies',
        length: 15
    };
    const history = [
        {
            zone: 'china',
            length: 1
        },
        {
            zone: 'china',
            length: 2
        },
        {
            zone: 'china',
            length: 3
        },
        {
            zone: 'china',
            length: 4
        },
        {
            zone: 'china',
            length: 5
        },
        {
            zone: 'china',
            length: 6
        },
        {
            zone: 'china',
            length: 7
        },
        {
            zone: 'china',
            length: 8
        },
        {
            zone: 'china',
            length: 9
        }
    ];
    //given
    const result = voyageProfitFactor(voyage, history);

    //then
    t.is(result, 3);
});

rankTest('captainHistoryRisk 1 test case. should return 1 when captainHistoryRisk given history.length=5 and voyage.zone=xxx and history.profit all 0', t => {
    //given
    const voyage = {
        zone: 'xxx',
        length: 0
    };
    const history = [
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        }
    ];
    //when
    const  result = captainHistoryRisk(voyage, history);
    //then
    t.is(result, 1);
});

rankTest('captainHistoryRisk 2 test case. should return 5 when captainHistoryRisk given history.length=4 and voyage.zone=xxx and history.profit all 0', t => {
    //given
    const voyage = {
        zone: 'xxx',
        length: 0
    };
    const history = [
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        }
    ];
    //when
    const  result = captainHistoryRisk(voyage, history);
    //then
    t.is(result, 5);
});

rankTest('captainHistoryRisk 3 test case. should return 2 when captainHistoryRisk given history.length=5 and voyage.zone=xxx and history.profit one -1', t => {
    //given
    const voyage = {
        zone: 'xxx',
        length: 0
    };
    const history = [
        {
            zone: 'xxx',
            profit: -1
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        },
        {
            zone: 'xxx',
            profit: 0
        }
    ];
    //when
    const  result = captainHistoryRisk(voyage, history);
    //then
    t.is(result, 2);
});

rankTest('captainHistoryRisk 4 test case. should return 0 when captainHistoryRisk given history.length=5 and voyage.zone=china and history.zone=china and history.profit all 0', t => {
    //given
    const voyage = {
        zone: 'china',
        length: 0
    };
    const history = [
        {
            zone: 'china',
            profit: 0
        },
        {
            zone: 'china',
            profit: 0
        },
        {
            zone: 'china',
            profit: 0
        },
        {
            zone: 'china',
            profit: 0
        },
        {
            zone: 'china',
            profit: 0
        }
    ];
    //when
    const  result = captainHistoryRisk(voyage, history);
    //then
    t.is(result, 0);
});