import * as firebase from "@firebase/app"
import "@firebase/auth"
import "@firebase/firestore"

import express from "express"

import * as Config from "./public/config.js"

// Initialize Firebase
firebase.default.initializeApp(Config.firebaseConfig)

const app = express()

app.use(express.static("public"))

app.get("/", async (req, res) => {
  res.sendFile("./public/index.html")
  console.log(!!firebase)

})

app.listen(3000, () => {
  console.log(`listening.`)
})