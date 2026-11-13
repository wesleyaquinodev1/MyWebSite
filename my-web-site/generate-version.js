const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const projectRoot = __dirname;

let commitHash =
    process.env.CF_PAGES_COMMIT_SHA ||
    process.env.WORKERS_CI_COMMIT_SHA ||
    '';

if (!commitHash) {
    try {
        commitHash = execFileSync('git', ['rev-parse', 'HEAD'], {
            cwd: projectRoot,
            encoding: 'utf8'
        }).trim();
    } catch {
        commitHash = '';
    }
}

const shortHash = /^[a-f0-9]{7,40}$/i.test(commitHash)
    ? commitHash.substring(0, 7)
    : 'local-dev';

const outputDirectory = path.join(projectRoot, 'src/app/core');
const outputFile = path.join(outputDirectory, 'build-info.ts');

const content = `// Arquivo gerado automaticamente por generate-version.js.
export const BUILD_INFO = {
    commitHash: '${shortHash}',
} as const;
`;

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(outputFile, content, 'utf8');

console.log(`Hash ${shortHash} injetado em build-info.ts`);