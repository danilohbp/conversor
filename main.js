const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })

  // e carrega o arquivo index.html do seu aplicativo.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow);