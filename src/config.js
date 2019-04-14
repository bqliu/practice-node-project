'use strict';

/**
 * pratice Node.js project
 *
 * @author Buquan Liu <walt_lbq@163.com>
 */
module.exports = function (set, get, has) {
  // 服务器监听端口
  set('web.port', 3000);
  set('db.mongodb', 'db');

  //session secret
  set('web.session.secret', 'test');
};
