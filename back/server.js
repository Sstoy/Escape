const express = require('express')


const PORT = 4000
const app = express()


app.listen(PORT, () => {
  console.log(`Сервер взлетел на ${PORT} порту` );
})
