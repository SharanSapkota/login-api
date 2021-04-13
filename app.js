const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const SignUp = require('./routes/SignUp')
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())

app.use('/signup', SignUp)

app.get('/', async (req, res) => {
    res.status(200).json({success: true, message: "Done"})
})



mongoose.connect(
    // process.env.MONGO_URL,
    'mongodb+srv://sharan123:sharan123k@cluster0.ytgcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    
   },
    () => {
        console.log("DB connected")
    }
)

app.listen(5000, () => {
    console.log("server started on port 5000")
})