const express = require("express");
const app = express();
const PORT = 3000;
const routes = require('./routes/auth.js');
const db = require("./configs/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.connect(db)
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:` + PORT)
});

