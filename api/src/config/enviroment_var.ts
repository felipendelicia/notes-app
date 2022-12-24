import dotenv from 'dotenv'
const enviromentPath = "DEV" === process.env.NODE_ENV ? '.env.dev' : '.env'

dotenv.config({
    path: enviromentPath
 })

export default process.env