const {exec} = require('child_process');
const args = process.argv
const execute = cmd => {
    const label = cmd
    console.time(label)
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stdout);
        console.timeEnd(label)
    });
}
const isIn = (item, list = args) => list.indexOf(item) !== -1
const isTypescript = isIn('--typescript')
const isESBuild = isIn('--esbuild')

if (isTypescript) execute('tsc')
if (isESBuild) execute('tsc -noEmit && node esbuild.js')
