const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600
  })

  mainWindow.webContents.openDevTools()

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file:',
    slashes: true
  }))
})
