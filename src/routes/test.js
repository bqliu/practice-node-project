'use strict';

/**
 * pratice Node.js project
 *
 * @author Buquan Liu <walt_lbq@163.com>
 */

module.exports = function (done) {
  $.router.get('/', function (req, res, next) {
    res.end(`现在是北京时间${new Date()}`);
  });

  done();

};
