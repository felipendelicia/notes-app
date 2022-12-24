import express from 'express'

// Init app
const app = express()
const PORT = 3000

// Middlewares
app.use(express.json())

// Routes
app.get('/ping', (req,res)=>{
    console.log('someone pingued here!')
    res.send('pong')
})

// Start server
app.listen(PORT, ()=>{
    console.log('Server running on port', PORT)
})