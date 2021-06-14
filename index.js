const express = require('express')
const app = express()

// const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req,res) => {
  res.send('Hi World');
  console.log(process.env.NODE_ENV);
})

app.listen(3000, () => {
  console.log(`Server is running on ${port}`);
})

// process.exit();
