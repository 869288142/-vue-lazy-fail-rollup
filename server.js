const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')

async function createServer() {
  const app = express()

const vite = await createViteServer({
    server: { middlewareMode: 'ssr' }
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {

  try {
  
    const { render } = require('./dist/server/main.js')

    const appHtml =  await render()

  
    res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
  } catch (e) {

    vite.ssrFixStacktrace(e)
    console.error(e)
    res.status(500).end(e.message)
  }
  })

  app.listen(3000)
}

createServer()