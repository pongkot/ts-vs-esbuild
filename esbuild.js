const fs = require('fs');

function getFiles(dir, files_) {
    files_ = files_ || [];
    let files = fs.readdirSync(dir);
    for (let i in files) {
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

require("esbuild")
    .buildSync({
        entryPoints: getFiles('src'),
        bundle: false,
        platform: "node",
        format: "cjs",
        outdir: "dist",
        tsconfig: "tsconfig.json"
    })
