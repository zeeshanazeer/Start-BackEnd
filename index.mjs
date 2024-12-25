import express from 'express'
const app = express()
const port = 1208

app.get('/:id', (req, res) => {
    console.log(`Hello World! zeeshan ${req.params.id}`)

  res.send({name: req.params.id, fathername:'Nazeer gull' , age: '18',})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
