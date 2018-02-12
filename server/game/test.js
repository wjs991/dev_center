var express  = require('express');
var router   = express.Router();
var code = require('../model/code');
var path    = require('path');
var filemanger = require("../file.js");
var spawn = require('child_process').spawn;
var fs = require('fs');
var util = require('../util');
//window
const bat = spawn('cmd.exe', ['/c', 'my.bat']);
//unix
//var compile = spawn('gcc', ['temp.c']);
//


///////////////////////////////////////////////////////////////////////////////
//router
//
//
//////////////////////////////////////////////////////////////////////////////
router.post('/:username',function(req,res){
   /* code.create(req.body,function(err,code){
        res.json(err||!post? util.successFalse(err): util.successTrue(post));
    })*/
    console.log(req.params.username);
    console.log(req.body.code);
    var data = req.body.code;
    var mode = req.body.mode;
    var filename = req.params.username;
    res.setHeader('Conytent-Type','text');
    if(mode==="c_cpp"){
        console.log("c_cpp ======== mode");
        console.log("file create start =============");
        fs.writeFile(__dirname+'/test/'+filename.concat(".cpp"),data,'utf8',function(err){
            if(err){
                console.log(err);
                res.json(util.successFale(err));
            }
            else{
                console.log("create OK ============");
                //TODO: 컴파일 진입점!
                console.log(bat);
                res.json(util.consoledd("compile ready"));
                bat.stdout.on('data', (data) => {
                    console.log(data.toString());
                });
                
                bat.stderr.on('data', (data) => {
                    console.log(data.toString());
                });

                bat.on('exit', (code) => {
                console.log(`Child exited with code ${code}`);
                });

            }
        })

    }
})

router.get('/compile',function(req,res){
    
    console.log("redirect success");
})
router.get(`/`,function(req,res){
    console.log(req.query.username);
    var folder=path.resolve(__dirname);
    var folderArr = [req.query.username];
    console.log(folder);
    filemanger.arryCreateFolder(folder,folderArr);
    filemanger.createFile(testname,testbody,"c_cpp");
    

})

router.get('/remove',function(req,res){
    console.log(req.query.username);
    var folder=path.resolve(__dirname);
    var folderArr = [req.query.username];
    filemanger.arrydeleteFolder(folder,folderArr);
})

module.exports = router;