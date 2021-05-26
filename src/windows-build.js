// C:\Users\sdkca\Desktop\electron-workspace\build.js
const electronInstaller = require('electron-winstaller');

// In this case, we can use relative paths
const settings = {
    // Specify the folder where the built app is located
    appDirectory: 'release-builds/theDungeon-win32-ia32',
    // Specify the existing folder where 
    outputDirectory: './theDungeons-instalador',
    // The name of the Author of the app (the name of your company)
    authors: 'Gustavo Ferraz',
    // The name of the executable of your built
    exe: 'theDungeon.exe'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});