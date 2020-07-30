/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-14 20:13:34
 * @LastEditors: edwardnie
 * @FilePath: /kuaishou-frontend-ad-business-operation/app.js
 */ 
/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-14 17:15:43
 * @LastEditors: edwardnie
 * @FilePath: /mpweb/signal.js
 */

const http = require('http');
const cp = require('child_process');

const PORT = 9988;
var deployServer = http.createServer(async function(request, response) {
    if (request.url.search(/deploy\/?$/i) > 0) {
        if (request.method == 'GET') {
            response.writeHead(200);
            response.end('1');
        } else {
            var postdata = '';
            request.on('data', function(postchunk) {
                postdata += postchunk;
            });

            request.on('end', function() {
                
                console.log(postdata);
                response.writeHead(200);
                response.end(JSON.stringify(postdata));
            });
        }

        // const bodyData = await handleJson(request, response);
        // const commands = ['cd ' + PATH, 'git pull'].join(' && ');

        // exec(commands, function(err, out, code) {
        //     if (err instanceof Error) {
        //         response.writeHead(500);
        //         response.end('Server Internal Error.');
        //         throw err;
        //     }
        //     process.stderr.write(err);
        //     process.stdout.write(out);
        //     response.writeHead(200);
        //     response.end('Deploy Done.');
        // });
    } else {
        response.writeHead(404);
        response.end('Not Found.');
    }
});

deployServer.listen(PORT);