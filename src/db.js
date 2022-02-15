const { connect } = require("mongoose")
const { MONGODB_URI } = require("./config")

connect(MONGODB_URI)
  .then(() => console.log("Mongo DB Connected"))
  .catch((err) => console.log(err))
