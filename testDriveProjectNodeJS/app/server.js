var express = require('express');
let bodyParser = require("body-parser");
var app = express();
//let cors = require("cors");

//app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/login",           require("./login"));
app.use("/register",        require("./register"));
app.use("/update",          require("./update"));
app.use("/delete",          require("./delete"));
app.use("/getAllEmployees", require("./getAllEmployees"));
app.use("/booking",         require("./booking"));
app.use("/fetchbookings",         require("./fetchbookings"));

// app.use("/home",      require("./home"));
// app.use("/getemp",    require("./getemp"));
// app.use("/getallemp", require("./getallemp"));


app.listen(3000);
console.log("Server Started from Port No 3000");
