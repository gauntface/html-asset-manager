const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function manageAssets(opts) {
  if (!opts.assetPath) {
    opts.assetPath = opts.htmlPath;
  }

  try {
    const flags = [];
    if (opts.htmlPath) {
      flags.push(`--html_dir=${opts.htmlPath}`)
    }
    if (opts.assetPath) {
      flags.push(`--assets_dir=${opts.assetPath}`)
    }
    if (opts.jsonAssetsPath) {
      flags.push(`--json_assets_dir=${opts.jsonAssetsPath}`)
    }
    if (opts.genPath) {
      flags.push(`--gen_dir=${opts.genPath}`)
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