const express = require('express');
const app = express();
const home = require('./routers/home.js');
const detail = require('./routers/detail');

app.use('/api/home', home);
app.use('/api/detail', detail);

// app.get('/', (req, res) => {
//   res.send({ msg: 123 });
// });

app.listen(3030, function () {
  console.log('服务器运行在3030端口');
});
