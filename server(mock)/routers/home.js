const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    pop: [
      {
        href: '#',
        image:
          'https://vrlab-image4.ljcdn.com/release/auto3dhd/cb3a50e3a23ae58dac670c7560c61130/screenshot/1587956350_38/pc0_B9MFPWhiu.jpg?imageMogr2/quality/70/thumbnail/1024x',
        decr: '天恒水岸壹号',
        price1: '58000元/平(单价)',
        price2: '850万/套(总价)',
      },
      {
        href: '#',
        image:
          'https://vrlab-image4.ljcdn.com/release/auto3dhd/8d7668c750ce555863c27fe952fa069f/screenshot/1596608566_38/pc0_cuKvAW2Jb.jpg?imageMogr2/quality/70/thumbnail/1024x',
        decr: '檀香府 ',
        price1: '43000元/平(单价)',
        price2: '1060万/套(总价)',
      },
      {
        href: '#',
        image:
          'https://vrlab-image4.ljcdn.com/release/auto3dhd/f54444eda6b4ee6bb38045d359ef647f/screenshot/0_0/pc0_CYxFifIve.jpg?imageMogr2/quality/70/thumbnail/1024x',
        decr: '西山甲一号',
        price1: '57000元/平(单价)',
        price2: '700万/套(总价)',
      },
      {
        href: '#',
        image:
          'https://vrlab-image4.ljcdn.com/release/auto3dhd/34f50d1efc929eadc749ddbd3810db8b/screenshot/1592973697_5/pc0_ck2SOrNsM.jpg?imageMogr2/quality/70/thumbnail/1024x',
        decr: '西山燕庐 ',
        price1: '65000元/平(单价)',
        price2: '850万/套(总价)',
      },
    ],
  });
});

module.exports = router;
