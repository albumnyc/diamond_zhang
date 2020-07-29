/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-29 19:44:55
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/node/jsonp_server.js
 */

var http = require("http");
var urllib = require("url");

var port = 8080;
var data = { data: "我爱你， 不是说说而已" };

http.createServer(function (req, res) {
    console.log({req})
    var params = urllib.parse(req.url, true);
    if (params.query.callback) {
        console.log(params.query.callback);
        var str = params.query.callback + "(" + JSON.stringify(data) + ")";
        res.end(str);
    } else {
        res.end();
    }
}).listen(port, function () {
    console.log("jsonp server is on");
});
