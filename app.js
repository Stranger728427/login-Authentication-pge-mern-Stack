import express from 'express'
import web from './routes/web.js';
import connectDB from './db/connectDB.js';
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json());
app.use(cors())


app.use('/login',web)
      

const DATABASE_url="mongodb://localhost:27017"

connectDB(DATABASE_url)


const port = process.env.PORT || '3003'

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
