const fs = require("fs");
const path = require("path");
const projectDir = path.dirname(path.dirname(__filename))
const sourceDir = path.join(projectDir, "src");
const outDir = path.join(projectDir, "out");

const ignorePattern = /.*(\.ts|tsconfig\.json)$/

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

function createDirIfNotExists(dir) {
    try {
        if(!fs.existsSync(dir)) {
            createDirIfNotExists(path.dirname(dir));

            console.log("Creating dir: " + dir);
            fs.mkdirSync(dir);
        }
    }
    catch(e) {
    }
}

createDirIfNotExists(outDir);

walkDir(sourceDir, (filePath, isFile) => {
    const outPath = path.join(outDir, path.relative(sourceDir, filePath));

    if(isFile) {
        if(!filePath.match(ignorePattern)) {
            createDirIfNotExists(path.dirname(outPath));
            
            console.log("Copying file: " + outPath);
            fs.copyFileSync(filePath, outPath);
        }
    }
});