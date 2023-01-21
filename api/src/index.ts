import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import env from './config/env_vars'
import notesRoutes from './routes/notes.routes'
import authRoutes from './routes/auth.routes'

// Init app
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use('/api/notes', notesRoutes)
app.use('/api/auth', authRoutes)

// Start server
app.listen(env.PORT, ()=>{
    console.log('[SERVER]: Running on port', env.PORT)
})