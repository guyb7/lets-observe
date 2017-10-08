import express from 'express'
import Routes from './routes/'

const app = express()

Routes.mount(app)

app.listen(3040, () => {
  console.log('Listening on 3040')
})
