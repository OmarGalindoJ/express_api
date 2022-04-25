//Usando objeto express
const express = require('express')
//app de express
const app = express ()
app.use(express.json()) //Indicamos que se usará JSON
//puero en el que se visualizará nuestra app:localhost:3000
const port = 3000 

//Con esto inicializamos esta app 
app.listen(port, () => {
    console.log(`Example app listening on port {$port}`)
})

