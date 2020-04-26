const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {Logger} = require('@hopin/logger');

const logger = new Logger({
  prefix: '@gauntface/html-asset-manager',
});

async function manageAssets(opts) {
  try {
    const flags = [];
    if (opts.config) {
      flags.push(`--config=${opts.config}`)
    }
    if (opts.debug) {
      flags.push(`--debug=${opts.debug}`)
    }
    const { stdout, stderr } = await exec(`htmlassets ${flags.join(' ')}`)
    if (opts.output) {
      if (stdout) {
        logger.log(`Output from html asset tool:\n\n${stdout}`);
      }
      if (stderr) {
        logger.error(`Error output from html asset tool:\n\n${stderr}`);
      }
    }
  } catch (err) {
    if (err.stdout) {
      logger.log(`Output from html asset tool:\n\n${err.stdout}`);
    }
    if (err.stderr) {
      logger.error(`Error output from html asset tool:\n\n${err.stderr}`);
    }
    throw err
  }
}

module.exports = {
  manageAssets,
}