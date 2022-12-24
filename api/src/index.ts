import express from 'express'
import conn from './database'
import env from './config/enviroment_var'

// Init app
const app = express()

// Middlewares
app.use(express.json())

// Routes
app.get('/ping', async (req,res)=>{
    const result = await conn.query('SELECT * FROM users')
    console.log(result[0])
    res.send('hola')
})

// Start server
app.listen(env.PORT, ()=>{
    console.log('Server running on port', env.PORT)
})