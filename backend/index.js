const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors()); 
app.options('*', cors());

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const route = require("./routing/seller/index");

const port = 5000;

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
