/** Commit generator lambda function. */

const cmd = require('node-cmd-promise');
const { REPO_NAME, GITHUB_PASSWORD, USERNAME, EMAIL } = process.env;
const COMMITS = 100;
let command = `
        git config --global user.email ${EMAIL}
        git config --global user.name ${USERNAME}
        cd /tmp
        rm -rf ${REPO_NAME}
        git clone https://github.com/${USERNAME}/${REPO_NAME}.git
        cd ${REPO_NAME}
        git remote set-url origin https://${USERNAME}:${GITHUB_PASSWORD}@github.com/${USERNAME}/${REPO_NAME}.git
`
for (let i = 0; i < COMMITS; i++) {
    command += `
        echo ' ' >> commit-me.txt
        git add .
        git commit . -m'Add whitespace'
    `
}
command += `git push origin master`;
exports.handler = async (event, context, callback) => {
    await require('lambda-git')()
    return cmd(command).then((stdout, stderr) => {
        if (stderr) {
            callback(stderr);
        }
        callback(null, stdout)
    });
}