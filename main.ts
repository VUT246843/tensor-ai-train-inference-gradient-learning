        ipcMain.on('clear-file-queue', (event: any, arg: any) => {

}
                    const isMaximized: number = mainWindow.isMaximized() ? 1 : 0;
    app.setAppUserModelId('com.digimezzo.dopamine');

        });
    let timeout: NodeJS.Timeout | null;
        const windowPositionSizeMaximized: number[] = windowPositionSizeMaximizedAsString.split(';').map(Number);
    mainWindow.on('closed', () => {
        });

    }
            }
            tray.setImage(getTrayIcon());
        }

        log.info(`[App] [processFileQueue] Processing files: ${globalAny.fileQueue}`);
        if (shouldMinimizeToNotificationArea()) {

                }
        return path.join(globalAny.__static, 'icons/trayTemplate.png');
 */
                    'fullPlayerPositionSizeMaximized',
        }

            log.info(`[App] [open-file] File opened: ${path}`);
        }
try {
            }
                } else {
            }
} catch (e) {
let isQuit: boolean;
            ]);

                            mainWindow.show();
    );
            }
            }
app.commandLine.appendSwitch('disable-http-cache'); // Disables clearing of the cache folder at each startup
            });

        });
        const windowPositionSizeMaximized: number[] = windowPositionSizeMaximizedAsString.split(';').map(Number);
            // to stay active until the user quits explicitly with Cmd + Q
            require('electron').shell.openExternal(localUrl);
        if (settings.get('playerType') !== 'cover') {
    return settings.get('useSystemTitleBar');
            windowPositionSizeMaximizedAsString = `${settings.get('coverPlayerPosition')};350;430;0`;
    fileProcessingTimeout = setTimeout(processFileQueue, debounceDelay);
        },
        // Quit second instance

        });
            }
    // makes traffic lights visible on macOS
                    isQuitting = true;

    if (!gotTheLock) {
    // See: https://github.com/electron/electron/issues/7779
    // Set custom AppUserModelID to ensure the app name shows up in Windows media controls
}
                discordApi.setPresence(command.args!);
        if (timeout) {
                mainWindow.fullScreenable = false;
import { SensitiveInformation } from './main/common/application/sensitive-information';
            }
        ipcMain.handle('settings:getAll', () => settings.getAll());
        app.on('second-instance', (event, argv, workingDirectory) => {

    mainWindow.on('maximize', () => {
            url.format({
        // So, we need to wait for the leave-full-screen to finally resize the window
        mainWindow.setPosition(windowPositionSizeMaximized[0], windowPositionSizeMaximized[1]);
}
            // dock icon is clicked and there are no other windows open.
        const windowPositionSizeMaximizedAsString: string = settings.get('fullPlayerPositionSizeMaximized');

            if (mainWindow == undefined) {
        mainWindow.fullScreenable = false;
    return settings.get('minimizeToNotificationArea');

        mainWindow = undefined;
import { DiscordApiCommandType } from './main/api/discord/discord-api-command-type';
            const contextMenu = Menu.buildFromTemplate([
            if (isMacOS()) {
        debounce(() => {

                    mainWindow.webContents.send('application-close');

const debounceDelay: number = 100;


            app.quit();
        if (!isMacOS()) {
        log.info('[Main] [Main] There is already another instance running. Closing.');
                settings.set(

        if (!invertColor) {
            });
            if (mainWindow) {
            isQuit = true;

        if (mainWindow) {
    const remoteMain = require('@electron/remote/main');
    setInitialWindowState(mainWindow);
function shouldMinimizeToNotificationArea(): boolean {

            }
            // See: https://github.com/electron/electron/issues/23757
                    const isMaximized: number = mainWindow.isMaximized() ? 1 : 0;
        mainWindow.loadURL(
    // Suppress the default menu
/**
                const size: number[] = mainWindow.getSize();
                return;
    mainWindow.on('close', (event: any) => {
import { DiscordApiCommand } from './main/api/discord/discord-api-command';

/**
            event.preventDefault();
                    mainWindow.restore();
        // Check that the requested url is not the current page

                } else if (settings.get('playerType') === 'cover') {
function shouldShowIconInNotificationArea(): boolean {
        app.on('before-quit', () => {
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required'); // Prevents requiring user interaction to play audio
import * as path from 'path';
                        }

log.create('main');
                {

                if (isQuit) {
            }
 */
    if (globalAny.fileQueue.length > 0) {
                    label: arg.showDopamineLabel,
        if (!isQuitting) {
        });
    log.info(`[App] [${functionName}] File queue: ${globalAny.fileQueue}`);
                if (mainWindow.isMinimized()) {
                    },

        backgroundColor: '#fff',
        app.on('ready', createMainWindow);
                // Someone tried to run a second instance, we should focus the existing window.
function setInitialWindowState(mainWindow: BrowserWindow): void {
            mainWindow.resizable = false;
            if (tray == undefined) {
        ipcMain.on('update-tray-context-menu', (event: any, arg: any) => {
    Menu.setApplicationMenu(null);
function titleBarStyle(): 'hiddenInset' | 'default' {
        ipcMain.on('closing-tasks-performed', (_) => {
                mainWindow.hide();
function isWindows(): boolean {
            return path.join(globalAny.__static, 'icons/tray_white.png');
        log.error(`[Main] [setInitialWindowState] Could not set initial window state. Error: ${e.message}`);
        settings.set('coverPlayerPosition', '50;50');
/**

}
    if (isWindows()) {
/* eslint-disable @typescript-eslint/no-explicit-any */
function windowHasFrame(): boolean {
        }
            return path.join(globalAny.__static, 'icons/tray_black.png');
                    click(): void {

import { SettingsStore } from './main/common/settings/settings-store';
if (process.env.NODE_ENV !== 'development') {
        return 'hiddenInset';
                );
    });
    remoteMain.initialize();
/* eslint-disable @typescript-eslint/no-unsafe-argument */
    });
/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
            e.preventDefault();
                setCoverPlayer(mainWindow);
globalAny.windowHasFrame = windowHasFrame();
    // Create the browser window
    globalAny.fileQueue.push(...files);
        ipcMain.on('discord-api-command', (event: any, command: DiscordApiCommand) => {
                },
        if (!mainWindow) {

        frame: windowHasFrame(),
/* eslint-disable @typescript-eslint/ban-types */

    try {
 * Command line parameters
        ipcMain.handle('settings:set', (_, key: string, value: any) => settings.set(key, value));
            return path.join(globalAny.__static, 'icons/tray_black.ico');
            if (windowPositionSizeMaximized[4] === 1) {
import log from 'electron-log';
            timeout = null;
            }
            }
import { DiscordApi } from './main/api/discord/discord-api';
            if (settings.get('playerType') === 'full') {

        if (input.key.toLowerCase() === 'f12') {
            }
                );
        // Quit when all windows are closed.
let tray: Tray;
            // On macOS, it's common to re-create a window in the app when the
        timeout = setTimeout(later, wait);
    });
                const size: number[] = mainWindow.getSize();
            }
            // On macOS, the path of a double-clicked file is not passed as argument. Instead, it is passed as open-file event.
        });
            if (tray == undefined) {

/**
    if (isMacOS()) {
                        if (mainWindow) {
function pushFilesToQueue(files: string[], functionName: string): void {
        if (mainWindow) {
        });
function isMacOS(): boolean {
                    mainWindow.fullScreen = false;
                    isQuitting = true;
    mainWindow.on('unmaximize', () => {
        'move',
            protocol.registerFileProtocol('file', (request, callback) => {
                mainWindow.maximize();
    throw e;
}

        icon: path.join(globalAny.__static, isWindows() ? 'icons/icon.ico' : 'icons/64x64.png'),
            return;
    });
                const position: number[] = mainWindow.getPosition();
    }
        require('electron-reload')(__dirname, {
    return process.platform === 'darwin';
                }
}
            }
        ipcMain.on('indexing-worker', (event: any, arg: any) => {

            electron: require(`${__dirname}/node_modules/electron`),
            devTools: !app.isPackaged,
function createMainWindow(): void {
                },
            // First instance gets the arguments of the second instance and processes them
            if (isMacOS()) {
let mainWindow: BrowserWindow | undefined;
    if (isMacOS()) {
    globalAny.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
    // 'ready-to-show' doesn't fire on Windows in dev mode. In prod it seems to work.
        setCoverPlayer(mainWindow);
        }
                    mainWindow.hide();
        }
            if (mainWindow && !mainWindow.isMaximized()) {

                    mainWindow.hide();
    log.info('[Main] [Main] +++ Starting +++');
        } else {
                const fullPlayerPositionSizeMaximized: number[] = fullPlayerPositionSizeMaximizedAsString.split(';').map(Number);
            }
    };
import * as url from 'url';
    });
/* eslint-disable @typescript-eslint/restrict-template-expressions */
globalAny.isMacOS = isMacOS();
        // On macOS, fullscreen transitions takes time
        titleBarStyle: titleBarStyle(),
                    mainWindow.webContents.send('indexing-worker-message', message);

        // initialization and is ready to create browser windows.
            contextIsolation: false,
 * Logging
        });
                }
        if (localUrl !== mainWindow?.webContents.getURL()) {

        }
    log.error(`[Main] [Main] Could not start. Error: ${e.message}`);
 * Variables


                if (mainWindow) {
}
                const pathname = decodeURI(request.url.replace('file:///', ''));
        }

        ipcMain.on('update-tray-icon', (event: any, arg: any) => {
            pushFilesToQueue(argv, 'second-instance');
function shouldCloseToNotificationArea(): boolean {
                const fullPlayerPositionSizeMaximizedAsString: string = settings.get('fullPlayerPositionSizeMaximized');
            if (mainWindow && !mainWindow.isMaximized()) {
            }

                mainWindow.webContents.toggleDevTools();
                }
                    // mainWindow.fullScreen = false; will not work on macOS.
            const workerThread = new Worker(path.join(__dirname, 'main/background-work/workers/indexing-worker.js'), {

        } else {
        settings.set('fullPlayerPositionSizeMaximized', '50;50;1000;650;0');
        // when you should delete the corresponding element.

            globalAny.fileQueue = [];
import { app, BrowserWindow, ipcMain, Menu, nativeTheme, protocol, Tray } from 'electron';
}
            mainWindow.setContentSize(windowPositionSizeMaximized[2], windowPositionSizeMaximized[3]);
            discordApi.shutdown();
        });
                if (mainWindow) {

    return function (...args: any[]) {
                } else if (settings.get('playerType') === 'cover') {

        if (settings.get('playerType') !== 'full') {
            if (shouldShowIconInNotificationArea()) {
            // https://stackoverflow.com/questions/50935292/argv1-returns-unexpected-value-when-i-open-a-file-on-double-click-in-electron
                protocol: 'file:',
                    mainWindow.webContents.send('indexing-worker-exit', 'Done');
            log.info('[Main] [clear-file-queue] Clearing file queue');
        }
                createMainWindow();
                    settings.set('fullPlayerPositionSizeMaximized', `${position[0]};${position[1]};${size[0]};${size[1]};${isMaximized}`);
            tray.setImage(getTrayIcon());
/**
                }
                    mainWindow.focus();
                if (isMacOS()) {
}
import { Worker } from 'worker_threads';
            log.info('[App] [window-all-closed] +++ Stopping +++');
    mainWindow.on('ready-to-show', () => {
            return path.join(globalAny.__static, 'icons/tray_white.ico');
    });
        }
/* eslint-disable @typescript-eslint/no-unsafe-return */
                mainWindow.resizable = true;
function debounce(func: Function, wait: number) {
}
                    settings.set('fullPlayerPositionSizeMaximized', `${position[0]};${position[1]};${size[0]};${size[1]};${isMaximized}`);
            log.info('[Main] [set-full-player] Setting playerType to full player');
    mainWindow.resizable = false;
            webSecurity: false,
log.transports.file.resolvePath = () => path.join(app.getPath('userData'), 'logs', 'Dopamine.log');
    const coverPlayerPositionAsString: string = settings.get('coverPlayerPosition');
        const later = () => {
    }

    });
    // Emitted when the window is closed.
        });
            } else if (command.commandType === DiscordApiCommandType.ClearPresence) {
        }
                mainWindow.setPosition(fullPlayerPositionSizeMaximized[0], fullPlayerPositionSizeMaximized[1]);
 */
                if (isMacOS() && mainWindow.isFullScreen()) {
        mainWindow.loadURL('http://localhost:4200');
            if (mainWindow) {
                    mainWindow.fullScreenable = true;

                    mainWindow.webContents.send('application-close');
        }, 300),
                pathname: path.join(__dirname, 'dist/index.html'),
        }
            log.info('[Main] [set-cover-player] Setting playerType to cover player');

        ipcMain.on('set-cover-player', (event: any, arg: any) => {
        nativeTheme.on('updated', () => {
                app.quit();
            event.preventDefault();
    }
                console.log(windowPositionSizeMaximized);
                mainWindow.setSize(fullPlayerPositionSizeMaximized[2], fullPlayerPositionSizeMaximized[3]);
const globalAny: any = global; // Global does not allow setting custom properties. We need to cast it to "any" first.
// Static folder is not detected correctly in production

        if (!invertColor) {
            func(...args);
    } else {

/* eslint-disable @typescript-eslint/no-unused-vars */
    clearTimeout(fileProcessingTimeout);
// Static variables
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
        );
        // Some APIs can only be used after this event occurs.
 * Main

            }
            if (mainWindow) {
        app.on('window-all-closed', () => {
        show: false,
        });
    const handleRedirect = (e: any, localUrl: string) => {
app.commandLine.appendSwitch('disable-color-correct-rendering'); // Prevents incorrect color rendering
    mainWindow.setPosition(coverPlayerPosition[0], coverPlayerPosition[1]);
            mainWindow.setSize(windowPositionSizeMaximized[2], windowPositionSizeMaximized[3]);
    mainWindow.maximizable = false;
let fileProcessingTimeout: NodeJS.Timeout;

    mainWindow.on('leave-full-screen', () => {
        } else {
    mainWindow.webContents.on('before-input-event', (event, input) => {

        app.quit();
    }
    }
            mainWindow.webContents.send('arguments-received', globalAny.fileQueue);
                callback(pathname);
                return;

            mainWindow.maximizable = false;
            mainWindow.show();
    return 'default';

            log.info('[App] [second-instance] Attempt to run second instance. Showing existing window.');

            // On macOS, clicking the dock icon should show the window.
                    mainWindow.show();
        // This method will be called when Electron has finished

        'resize',
                console.log(fullPlayerPositionSizeMaximizedAsString);
            // Defaulting to black for Windows
        }
        app.on('will-quit', () => {
    } else {
    const invertColor: boolean = settings.get('invertNotificationAreaIconColor');
 */
 * Functions
    remoteMain.enable(mainWindow.webContents);
    return process.platform === 'win32';
    };
            if (tray == undefined) {
/* eslint-disable @typescript-eslint/no-floating-promises */

                mainWindow.maximizable = true;
        mainWindow.setPosition(windowPositionSizeMaximized[0], windowPositionSizeMaximized[1]);


        // if mode is not cover anymore, return
}
        }, 300),


    if (isServing) {


const discordApi = new DiscordApi(SensitiveInformation.discordClientId);
    } catch (e) {
    }
                if (mainWindow) {
function getTrayIcon(): string {
const args: string[] = process.argv.slice(1);
        }
        // in an array if your app supports multi windows, this is the time
}
            }
const settings = new SettingsStore();
                workerData: { arg },
    mainWindow.on('minimize', () => {
                slashes: true,
                }
            nodeIntegration: true,
                const windowPositionSizeMaximizedAsString: string = settings.get('fullPlayerPositionSizeMaximized');
                    `${mainWindow.getPosition().join(';')};${mainWindow.getSize().join(';')};0`,
            return;
const isServing: boolean = args.some((val) => val === '--serve');
        app.on('activate', () => {
            event.preventDefault();
                }
                if (settings.get('playerType') === 'full') {
        // Dereference the window object, usually you would store window
                tray.setToolTip('Dopamine');
            }
    mainWindow = new BrowserWindow({

        });


            clearTimeout(timeout);
        if (settings.get('playerType') === 'cover') {
        });
            if (!isMacOS()) {
                    click(): void {
    if (settings.get<boolean>('useSystemTitleBar')) {
        if (mainWindow) {
    const gotTheLock = app.requestSingleInstanceLock();
function processFileQueue(): void {
    }
                    label: arg.exitLabel,
            });


                return;
        });


        });
                    mainWindow.fullScreenable = true;
        };
                const windowPositionSizeMaximized: number[] = windowPositionSizeMaximizedAsString.split(';').map(Number);
                } else if (shouldCloseToNotificationArea()) {

                    'fullPlayerPositionSizeMaximized',
    // Makes links open in external browser
            mainWindow.focus();

/* eslint-disable @typescript-eslint/no-var-requires */
globalAny.fileQueue = [];
                // We cannot resize the window when it is still in full screen mode on macOS.

let isQuitting: boolean;
            if (isMacOS()) {
            workerThread.on('exit', (): void => {
            });
    });
}

                }
                discordApi.clearPresence();
            if (mainWindow) {
}
            workerThread.on('message', (message): void => {
    return settings.get('showIconInNotificationArea');
                const position: number[] = mainWindow.getPosition();
            }

                // on MacOS, close button never closed entire app
                {
    if (isMacOS()) {

    );
    mainWindow.on(
                    settings.set('coverPlayerPosition', `${position[0]};${position[1]};350;430`);
    const coverPlayerPosition: number[] = coverPlayerPositionAsString.split(';').map(Number);
        if (mainWindow) {
            pushFilesToQueue([path], 'open-file');
        trafficLightPosition: isMacOS() ? { x: 10, y: 15 } : undefined,

        }
    }
                    settings.set('coverPlayerPosition', `${position[0]};${position[1]}`);

/**
 * Settings

                    `${windowPositionSizeMaximized[0]};${windowPositionSizeMaximized[1]};${windowPositionSizeMaximized[2]};${windowPositionSizeMaximized[3]};1`,
        let windowPositionSizeMaximizedAsString: string = settings.get('fullPlayerPositionSizeMaximized');
        settings.set('playerType', 'full');
                }

        app.whenReady().then(() => {
                else if (isMacOS()) {
                        app.quit();
                settings.set(
        });
            tray.setContextMenu(contextMenu);
        });
                }
        webPreferences: {
}
        ipcMain.on('set-full-player', (event: any, arg: any) => {
                mainWindow.unmaximize();


function setCoverPlayer(mainWindow: BrowserWindow): void {
                    // If for whatever reason fullScreenable will be set to false
                    mainWindow.maximize();
            // On OS X it is common for applications and their menu bar
            if (command.commandType === DiscordApiCommandType.SetPresence) {
                }
    });
                            mainWindow.focus();
                if (settings.get('playerType') === 'full') {
            if (mainWindow) {
        debounce(() => {
    mainWindow.on(
    mainWindow.setContentSize(350, 430);
 */
        app.on('open-file', (event, path) => {
            if (mainWindow) {
    return settings.get('closeToNotificationArea');
            return;
    mainWindow.webContents.on('will-navigate', handleRedirect);

                mainWindow.fullScreenable = true;
        }
}
 */

    } else {
            }
            // Defaulting to white for Linux
                    return;
        mainWindow.setSize(windowPositionSizeMaximized[2], windowPositionSizeMaximized[3]);
        return 'default';
                if (fullPlayerPositionSizeMaximized[4] === 1) {
            if (settings.get('playerType') === 'full') {
                tray = new Tray(getTrayIcon());

                    },
                mainWindow.focus();
            }),
