const fs = require("fs");
const path = require("path");
const projectDir = path.dirname(path.dirname(__filename))
const sourceDir = path.join(projectDir, "src");
const outDir = path.join(projectDir, "out");

const ignorePattern = /.*\.ts$/

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        
        if (fs.statSync(dirPath).isDirectory()) {
            callback(dirPath, false);
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f), true);
        }
    });
}

function createDir(dir) {
    console.log("Creating dir: " + dir);

    try {
        fs.mkdirSync(dir);
    }
    catch(e) {
    }
}

createDir(outDir);

walkDir(sourceDir, (filePath, isFile) => {
    const outPath = path.join(outDir, path.relative(sourceDir, filePath));

    if(isFile) {
        if(!filePath.match(ignorePattern)) {
            console.log("Copying file: " + outPath);
            fs.copyFileSync(filePath, outPath);
        }
    } else {
        createDir(outPath);
    }
});