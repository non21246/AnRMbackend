const express = require("express");
const app = express();
const PORT = 3000;
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/users.js');
const db = require("./configs/db.js");

app.get('/', (req, res)=>{
    res.send(400);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', authRoutes, userRoutes);
app.connect(db)
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:` + PORT)
});

