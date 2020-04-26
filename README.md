# HTML Asset Manager

[![Build and Test](https://github.com/gauntface/html-asset-manager/workflows/Build%20and%20Test/badge.svg)](https://github.com/gauntface/html-asset-manager/actions?query=workflow%3A%22Build+and+Test%22) [![Publish](https://github.com/gauntface/html-asset-manager/workflows/Publish/badge.svg)](https://github.com/gauntface/html-asset-manager/actions?query=workflow%3APublish)

Run go-html-asset-manager commands easily from node.

## Install

```shell
go get -u github.com/gauntface/go-html-asset-manager/cmds/htmlassets/
```

## API

```javascript
const ham = require('@gauntface/html-asset-manager');

const projectPath = "~/example-project/";

// manage assets
await ham.manageAssets({
  htmlPath: path.join(projectPath, 'public'),
  assetPath: path.join(projectPath, 'public'),
  jsonAssetsPath: path.join(projectPath, 'data'),
  genPath: path.join(projectPath, 'static', 'generated'),
  debug: 'example-file.html',
  output: true,
});
```