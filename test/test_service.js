var request = require('request');
var assert = require('assert');

var PORT = process.env.SQLTABS_SHARING_SERVER_PORT || 8080;
var API_VERSION = '1.0';

var test_url = 'http://localhost:' + PORT;
var test_url_new = 'http://localhost:' + PORT + '/api/' + API_VERSION + '/docs';
var test_url_get = 'http://localhost:' + PORT + '/api/' + API_VERSION + '/docs/';

describe('SQLTABS sharing server:', function(){

    it('root request', function(done){
        request(test_url, function(error, response, body){
            assert.equal(response.statusCode, 200);
            done();
        });
    });

    var docid = null;

    it('insert new doc', function(done){

        var doc = [{"query":"select 1","datasets":[{"nrecords":1,"fields":[{"name":"?column?","type":23}],"data":[["1"]],"cmdStatus":"SELECT 1","resultStatus":"PGRES_TUPLES_OK","resultErrorMessage":""}],"start_time":4289.00099999737,"duration":9047.297}];

        request({
            method: 'POST',
            uri: test_url_new,
            json: true,
            headers: {"content-type": "application/json"},
            body: JSON.stringify(doc)}, 
            function(error, response, body){
                docid = body.result;
                assert.equal(response.statusCode, 200);
                done();
            }
        );
    });

    it('get doc', function(done){
        var url = test_url_get+docid;
        request(url,
            function(error, response, body){
                assert.equal(response.statusCode, 200);
                done();
            }
        );
    });

/*
    it('', function(done){
        done();
    });
*/

});
