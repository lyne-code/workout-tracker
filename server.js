const express = require("express")
let mongoose = require("mongoose");
const app = express()
const PORT = process.env.PORT || 8080
app.use (express.static("public"))
app.use (express.urlencoded({extended:true}))
app.use (express.json())
app.use (require("./routes/hmtl-routes"))
app.use (require("./routes/api-routes"))
mongoose.connect( process.env.MONGODB_URI ||   "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
})

app.listen(PORT, function(){
    console.log("app.listen port", PORT)
})