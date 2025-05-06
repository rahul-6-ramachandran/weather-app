import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import mongoose from 'mongoose';

// route import
import whetherRoute from './routes/weather.js'

configDotenv()

const app = express()


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));


// Middlewares
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 2020


// routes
app.use('/api/weather', whetherRoute)

app.get('/', (req, res) => {
	res.send("Helloooo");
});


app.listen(port, ()=>{
    console.log("Server Running Succesfully")
})

