const express = require("express");
const app = express();
const PORT = 8080;
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
const activityRoutes = require('./routes/activity.js')
const db = require("./configs/db.js");
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes, authRoutes, activityRoutes);
app.connect(db)
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:` + PORT)
});

