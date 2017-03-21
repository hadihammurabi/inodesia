const {app, BrowserWindow, Menu, webContents}=require('electron')
const windowproperties = require('./src/js/window')
const path = require('path')

app.once('ready-to-show', () => {
  mainWindow.show()
})

app.on('ready',()=>{
  windowproperties.window.icon = path.join(__dirname, 'src/img/appicon.png')
  let win=new BrowserWindow(windowproperties.window)
  win.setMenu(null)
  win.setResizable(false)
  win.center()
  win.setTitle('Inodesia - Indonesia NodeJS ')
  win.loadURL(`file://${__dirname}/index.html`)
})
