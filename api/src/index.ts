import express from 'express'
import morgan from 'morgan'
import env from './config/env_vars'
import notesRoutes from './routes/notes.routes'
import authRoutes from './routes/auth.routes'
import { ensureToken } from './middlewares/ensureToken'

// Init app
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/notes', notesRoutes)
app.use('/api/auth', authRoutes)
app.get('/test', ensureToken, (req, res)=>{res.send('ok!')})

// Start server
app.listen(env.PORT, ()=>{
    console.log('[SERVER]: Running on port', env.PORT)
})