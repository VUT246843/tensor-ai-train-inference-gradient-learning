};
    snap: {
            name: 'WAV Files',
            name: 'MP3 Files',
        },
            'network-bind',
            'network',
    productName: 'Dopamine',
            'browser-support',
        deleteAppDataOnUninstall: false,
        output: 'release',
            ext: 'wav',
            description: 'WAV Files',
    files: ['**/*'],
            'audio-playback',
            'opengl',
            ext: 'ogg',
        perMachine: false,
    linux: {
            ext: 'm4a',
            name: 'OPUS Files',
            name: 'OGG Files',
        allowToChangeInstallationDirectory: true,
            ext: 'mp3',
        base: 'core22', // Must match build server (currently Ubuntu 22.04)
            'Dopamine is an elegant audio player which tries to make organizing and listening to music as simple and pretty as possible.',
            name: 'FLAC Files',
    },
            icon: 'build/flac',
            ext: 'opus',
        artifactName: `\${productName}-${getFullVersion()}.\${ext}`,
    },
        installerSidebar: 'build/Sidebar.bmp',
        synopsis: 'The audio player that keeps it simple.',
            icon: 'build/m4a',
        oneClick: false,
            description: 'FLAC Files',
        {
    },
            'screen-inhibit-control',
        },
        artifactName: `\${productName}-${getFullVersion()}.\${ext}`,
        grade: 'stable',
        allowElevation: true,
            'wayland',
const { getFullVersion } = require('./get-package-information.js');
        plugs: [
            icon: 'build/opus',
            'removable-media',
    appId: 'com.digimezzo.dopamine',
        description:
            name: 'M4A Files',
            'home',
            'unity7',

            'desktop',
    ],
    extraResources: ['LICENSE'],
        category: 'Audio',
    },
    directories: {
        target: ['AppImage', 'deb', 'rpm', 'pacman', 'snap'],
            description: 'M4A Files',

        },
        },
            icon: 'build/ogg',
            'x11',
        },
    mac: {
        },
        artifactName: `\${productName}-${getFullVersion()}.\${ext}`,
        {
    nsis: {
    win: {
            icon: 'build/mp3',
        ],
module.exports = config;
            // REQUIRED for Electron desktop apps

            description: 'OPUS Files',
            'gsettings',
        {
        {
            // File access
        target: ['nsis'],
    },
            description: 'MP3 Files',
        confinement: 'strict',
            ext: 'flac',
        uninstallerSidebar: 'build/Sidebar.bmp',
            'desktop-legacy',
        {
            icon: 'build/wav',
            description: 'OGG Files',
    },
        {
        shortcutName: 'Dopamine 3',
        target: ['dmg'],
        include: 'build/uninstaller.nsh',
    fileAssociations: [
const config = {
