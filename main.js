const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      show: false,
    });
  
    win.loadURL('https://www.google.es/');
    win.maximize();
    win.show();
}

app.whenReady().then(createWindow);