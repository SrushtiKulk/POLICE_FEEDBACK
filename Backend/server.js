const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDB = require('./config/db');
const authRoutes = require('./routes/users')

//config dotenv
dotenv.config();

//database config
mongoDB();

const app = express();
// middlewares
app.use(express.json());
app.use(cors());

// Route
// app.use('/auth', authRoutes);
app.use("/auth", authRoutes);


//test route
app.get('/',(req, res)=>{
    res.send('<h1>Welcome</h1>');
});


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});