export default {
  html: {
    enabled : false,
    templates : {
      html : {
        enabled : false,
        target : '/'
      },
      jade : {
        enabled : false,
        target : '/assets/html/'
      },
      markdown : {
        enabled : false,
        target : '/assets/html/'
      },
      handlebars : {
        enabled : false
      }
    }
  },
  js : {
    enabled : false,
    transpiller : {babel : false, react : false, vue : false},
    linter : false
  },
  css : {
    enabled : false

  },
  fw : [],
  tabs : {},
  config : {
    template : 'custom',
    jsdir : 'app',
    cssdir : 'css',
    chunks : { enabled : true },
    extract : { enabled : true },
    assets : {enabled : true, dir : 'assets'},
    vendors : []
  }
}
