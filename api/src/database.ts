import mysql from 'mysql2/promise'
import env from './config/enviroment_var'

const conn = mysql.createPool({
    host: env.DB_HOST,
    database: 'notes',
    user: env.DB_USER,
    password: env.DB_PASSWORD
})

export default conn