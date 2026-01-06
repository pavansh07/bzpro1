import express from 'express'
import { get_fibonacci, helloWorld } from './utils.js'

const app = express()

app.get('/', helloWorld);
app.get("/fibonacci", get_fibonacci);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})