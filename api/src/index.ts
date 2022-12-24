import express from 'express'
import morgan from 'morgan'
import env from './config/env_vars'

// Init app
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.get('/ping', async (req,res)=>{
    res.send('pong')
})

// Start server
app.listen(env.PORT, ()=>{
    console.log('[SERVER]: Running on port', env.PORT)
})