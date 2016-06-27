const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  options = {
    width: 800, 
    height: 600, 
    webPreferences: {
      nodeIntegration: false,
      preload: 'if (typeof module === "object") {window.module = module; module = undefined;}'
    }
  }
  mainWindow = new BrowserWindow(options)

  mainWindow.loadURL('https://app.agantty.com/')

  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  
  if (mainWindow === null) {
    createWindow()
  }
})

