var ftl = require('express-freemarker')

module.exports={
  "engine": {
    "ftl": ftl() 
  },
  "rules": "mock_*.js",
  "reload": true,
  "launch": true
}