import mysql from 'mysql2/promise'
import env from './config/env_vars'

const conn = mysql.createPool({
    host: env.DB_HOST,
    database: 'notes',
    user: env.DB_USER,
    password: env.DB_PASSWORD
})

export default conn