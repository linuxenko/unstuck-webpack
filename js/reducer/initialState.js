export default {
  html: {
    enabled : true,
    templates : {
      html : {
        enabled : true,
        target : '/'
      },
      jade : {
        enabled : false,
        target : '/'
      },
      markdown : {
        enabled : false,
        target : '/'
      },
      handlebars : {
        enabled : false
      }
    }
  },
  js : {
    enabled : false,
    sourceMap : 'none',
    transpiller : {babel : false, react : false, vue : false},
    linter : false
  },
  css : {
    enabled : false,
    autoprefix : false,
    transpiller : { less : false, sass : false, styl : false}
  },
  fw : [],
  tabs : {},
  config : {
    template : 'custom',
    jsdir : 'app',
    cssdir : 'css',
    chunks : { enabled : true },
    extract : { enabled : true },
    html  : { enabled : true },
    assets : {enabled : true, dir : 'assets'},
    vendors : []
  }
}
