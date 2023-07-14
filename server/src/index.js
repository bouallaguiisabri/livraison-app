const bodyParser = require('body-parser');
const express = require('express');
const DBconnect = require('./config/dataBase');
const authRouter = require("./routes/authRoutes");
const { notFound, errorHandler } = require('./middlaware/errorHandler');
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
DBconnect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/admin", authRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server on PORT ${PORT}`);
        
});