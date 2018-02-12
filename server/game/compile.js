//window
const bat = spawn('cmd.exe', ['/c', 'filename']);
//unix
//var compile = spawn('gcc', ['temp.c']);
//

bat.stdout.on('data', (data) => {
    console.log(data.toString());
});
  
bat.stderr.on('data', (data) => {
console.log(data.toString());
});

bat.on('exit', (code) => {
console.log(`Child exited with code ${code}`);
});

