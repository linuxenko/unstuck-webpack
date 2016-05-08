const template = function(options) {
  return `<!doctype html>
<html>
<head>
  <title></title>${options.isCssVendor ?
  '<link rel="stylesheet" href="vendor.css" />' : ''}
  <link rel="stylesheet" href="app.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
  <div id="application" class="application"></div>${options.isJsVendor ?
  '<script src="vendor.js"></script>' : '' }
  <script src="bundle.js"></script>
</body>
</html>`
}

export default function HtmlifyConfigurator(state) {
  let options = {
    isJsVendor : state.config.chunks.enabled,
    isCssVendor : state.config.extract.enabled
  }


  return template(options)
}
