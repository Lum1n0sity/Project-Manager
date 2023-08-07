const path = require('path');
const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const mainJSPath = path.join(__dirname, 'reset-password', 'main.js');

const { createWindow } = require(mainJSPath);

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
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.setMinimumSize(1000, 600);
  }

  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  mainWindow.maximize();
  mainWindow.show();
  mainWindow.setMinimumSize(1000, 600);
}

app.whenReady().then(() => {
  createMainWindow();

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

ipcMain.on('open-password-reset-window', (event, resetToken) => {
  const passwordResetWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  passwordResetWindow.loadURL(`file://${path.join(__dirname, 'rest-pw.html')}?token=${resetToken}`);
});