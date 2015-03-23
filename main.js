global.MODEL_MODULE = 'americano-cozy-pouchdb-multi'
console.log('loaded multi-emails');

module.exports.configure = function(opts, app, cb) {
  // app.use caching fs session
  global.session = {dbname: 'tom'};
  console.log('config multi-emails');  
  cb();
}

