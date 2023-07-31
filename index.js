const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isRunning = true;

function createMainWindow()
{
  const mainWindow = new BrowserWindow({
    title: 'Production Manager',
    width: isDev ? 1000 : 500,
    height: 500
    
  });

  if (isDev)
  {
    mainWindow.webContents.openDevTools();

    mainWindow.setMinimumSize(1000, 600);
  }

  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

  mainWindow.maximize();
  mainWindow.show();
  mainWindow.setMinimumSize(1000, 600);
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
    {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
  {
    app.quit()
  }
});