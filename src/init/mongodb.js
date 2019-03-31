'use strict';

/**
 * pratice Node.js project
 *
 * @author Buquan Liu <walt_lbq@163.com>
 */

import mongoose from 'mongoose';

module.exports = function (done) {

  const debug = $.createDebug('init:mongodb');
  debug('connecting to MongoDB...');

  //useless: const conn = mongoose.createConnection($.config.get('db.mongodb'));
  const conn = mongoose.createConnection('mongodb://127.0.0.1/db');
  $.mongodb = conn;
  $.model = {};

  done();

}
