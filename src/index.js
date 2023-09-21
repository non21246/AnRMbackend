const express = require("express");
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
const db = require("./configs/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes, authRoutes);
app.connect(db)
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:` + PORT)
});

