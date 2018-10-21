//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {
  favorites: {
    get: function(callback){
      sqlDb.query('SELECT * FROM favorites', function(err, results){
        if(err){
          console.log('you fucked up');
        } else {
          callback(results);
        }
      })
    },
    post: function(params, callback){
      params = 'whatever the fuck was clicked AKA ? below';
      sqlDb.query('INSERT INTO favorites VALUE ?', params, function(err, results){
        if(err){
          console.log('you dumb');
        } else {
          callback(results);
        }
      })
    },
    delete: function(params, callback){
      params = 'ID of whatever movie was selected';
      sqlDb.query('DELETE FROM favorites WHERE id = ? ', params, function(err, results = '?'){
        if(err){
          console.log(err);
        } else {
          callback(results);
        }
      })
    }
  }
}