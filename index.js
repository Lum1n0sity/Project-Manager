const path = require('path');
const { app, BrowserWindow, dialog, ipcMain } = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isRunning = true;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Production Manager',
    width: isDev ? 1000 : 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'renderer', 'preload.js')
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.setMinimumSize(1000, 600);
  }

  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html')); // Load index.html from the renderer folder

  mainWindow.maximize();
  mainWindow.show();
  mainWindow.setMinimumSize(1000, 600);
}

app.on('ready', () => {
  ipcMain.on('show-delete-confirmation', (event) => {
    const options = {
      type: 'warning',
      title: 'Delete Account',
      message: 'Are you sure you want to delete your account?',
      buttons: ['Cancel', 'Yes, Delete Account'],
      defaultId: 0,
      cancelId: 0, 
    };

    const choice = dialog.showMessageBoxSync(options);

    event.sender.send('delete-account-response', choice);
  });
});

app.whenReady().then(() => {
  createMainWindow();

  ipcMain.on('button-clicked', () => {
    console.log('Button clicked in renderer process, performing action in main process');
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});