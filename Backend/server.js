const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDB = require('./config/db');
const authRoutes = require('./routes/users')
const feedbackRoutes = require('./routes/feedbacks');
const opinionRoutes = require('./routes/opinions');
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
app.use("/answers", feedbackRoutes);
app.use("/opinions", opinionRoutes);


//test route
app.get('/',(req, res)=>{
    res.send('<h1>Welcome</h1>');
});


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});