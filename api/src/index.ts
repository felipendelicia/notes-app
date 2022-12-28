import express, {Response, Request} from 'express'
import morgan from 'morgan'
import env from './config/env_vars'
import {ensureToken} from './middlewares/ensureToken'

// Init app
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.get('/ping', ensureToken, (req:Request,res:Response)=>{
    res.send('Hello')
})

// Start server
app.listen(env.PORT, ()=>{
    console.log('[SERVER]: Running on port', env.PORT)
})