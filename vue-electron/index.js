const { app, BrowserWindow } = require('electron')
const { join } = require('path')

const options = {
  entry_path: join(__dirname, 'development' === process.env.NODE_ENV ? './dist/index.html' : './index.html'),
  layout: {
    height: 550,
    width: 440
  },
  maximizable: false
}

var __window__ = null

const createWindow = () => {
  __window__ = new BrowserWindow({
    ...options.layout,
    maximizable: options.maximizable
  })

  __window__.loadFile(options.entry_path)

  __window__.on('closed', () => __window__ = null)
}

app.on('activate', () => {
  if (null === __window__)
    createWindow()
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
