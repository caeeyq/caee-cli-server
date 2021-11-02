'use strict'
const cloudbase = require('@cloudbase/node-sdk')

let app
const TCB_ENV = 'caee-0gng86wh4c820557'
if (process.env.TCB_SECRET_ID && process.env.TCB_SECRET_KEY) {
  app = cloudbase.init({
    env: TCB_ENV,
    secretId: process.env.TCB_SECRET_ID,
    secretKey: process.env.TCB_SECRET_KEY
  })
} else {
  app = cloudbase.init({env: TCB_ENV})
}

const templateCollection = app.database().collection('caee-cli-template')

module.exports = {
  templateCollection
}
