import express from 'express'
import dotenv from 'dotenv'

// Init app
const app = express()
const enviromentPath = "DEV" === process.env.NODE_ENV ? '.env.dev' : '.env'

// Middlewares
app.use(express.json())
dotenv.config({
    path: enviromentPath
 })

// Routes
app.get('/ping', (req,res)=>{
    console.log('someone pingued here!')
    res.send('pong')
})

// Start server
app.listen(process.env.PORT, ()=>{
    console.log('Server running on port', process.env.PORT)
})