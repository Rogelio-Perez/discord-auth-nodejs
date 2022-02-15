const { Router } = require("express")
const { isAuthorized } = require("../utils/auth")

const router = Router()

router.get("/", isAuthorized, (req, res) => {
  res.render("dashboard")
})

router.get("/settings", isAuthorized, (req, res) => {
  res.send("settings")
})

module.exports = router
