import express from 'express'
import morgan from 'morgan'
import env from './config/env_vars'
import notesRoutes from './routes/notes.routes'

// Init app
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/notes', notesRoutes)

// Start server
app.listen(env.PORT, ()=>{
    console.log('[SERVER]: Running on port', env.PORT)
})