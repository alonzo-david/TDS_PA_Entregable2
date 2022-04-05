const { app, BrowserWindow } = require('electron')


var ventana
function createWindow() {
    ventana = new BrowserWindow({
        // webPreferences: {
        //     preload: path.join(app.getAppPath(), 'preload.js')
        // }
    })
    //ventana.webContents.openDevTools();
    ventana.maximize();
    ventana.loadFile('autenticar.html')
}

app.whenReady().then(createWindow)