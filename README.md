# HTML Asset Manager

[![Build and Test](https://github.com/gauntface/html-asset-manager/workflows/Build%20and%20Test/badge.svg)](https://github.com/gauntface/html-asset-manager/actions?query=workflow%3A%22Build+and+Test%22) [![Publish](https://github.com/gauntface/html-asset-manager/workflows/Publish/badge.svg)](https://github.com/gauntface/html-asset-manager/actions?query=workflow%3APublish)

Run go-html-asset-manager commands easily from node.

## Install

```shell
go get -u github.com/gauntface/go-html-asset-manager/cmds/htmlassets/
go get -u github.com/gauntface/go-html-asset-manager/cmds/genimgs/
```

## API

```javascript
const ham = require('@gauntface/html-asset-manager');

// manage assets
await ham.manageAssets({
  config: path.join('~/example-project/asset-manage.json'),
  output: true,
  debug: 'example-file.html',
});

// generage images
await ham.generateImages({
  config: path.join('~/example-project/asset-manage.json'),
  output: true,
});
```

## Config File

```json
{
  "html-dir": "public/",
  "assets": {
    "static-dir": "public/",
    "generated-dir": "public/generated/",
    "json-dir": "data/"
  },
  "gen-assets": {
    "static-dir": "static/",
    "output-dir": "static/generated/",
    "max-width": 800,
    "max-density": 3
  },
  "img-to-picture": [
    {
      "id": "l-blog",
      "max-width": 800,
      "source-sizes": [
        "(min-width: 800px) 800px",
        "100vw"
      ]
    },
    {
      "id": "c-blog-item__img",
      "max-width": 200,
      "source-sizes": [
        "(min-width: 800px) 200px",
        "20vw"
      ]
    }
  ],
  "ratio-wrapper": ["l-blog"]
}
```