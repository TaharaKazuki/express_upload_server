import cors from 'cors'
import path from 'path'
import express from 'express'
import { success } from 'consola'

import { PORT } from './config'

import imagesRoutes from './routes/images'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/images', imagesRoutes)

app.use(express.static(path.join(__dirname, './public')))


const startApp = () => {
  app.listen(PORT, () => success({ badge: true, message: `Server started on port ${PORT}`}))
}

startApp()