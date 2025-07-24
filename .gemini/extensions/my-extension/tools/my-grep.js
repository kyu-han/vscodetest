module.exports = async function(context) {
  const { exec } = require('child_process');

  const query = context.parameters.query;
  const path = context.parameters.path || '.';

  return new Promise((resolve, reject) => {
    exec(`grep -rnw '${path}' -e '${query}'`, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};
