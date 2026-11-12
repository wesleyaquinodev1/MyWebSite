const fs = require('fs');
const { execSync } = require('child_process');

let commitHash =
    process.env.CF_PAGES_COMMIT_SHA ||
    process.env.WORKERS_CI_COMMIT_SHA ||
    '';

if (!commitHash) {
    try {
        commitHash = execSync('git rev-parse HEAD').toString().trim();
    } catch (e) {
        commitHash = 'local-dev';
    }
}

const shortHash = commitHash.substring(0, 7);
const appFile = './src/app/app.ts';

let content = fs.readFileSync(appFile, 'utf8');
content = content.replace(/__BUILD_HASH__/g, shortHash);
fs.writeFileSync(appFile, content);

console.log(`Hash ${shortHash} injetado no app.ts`);
