import express from "express"
import userRoute from './routes/userRoutes'
// import User from './src/models/userModel'
// import UserDetails from './src/models/contactDetailsModel'
const db = require('./util/database')
const app = express();
const port:number = 15000;
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.get('/' ,(req ,res) =>{
    return res.send("Hello world")
})


app.use('/users',userRoute)

app.listen(port,()=>{
    console.log("Server is Runnung.............")
})
  
  
