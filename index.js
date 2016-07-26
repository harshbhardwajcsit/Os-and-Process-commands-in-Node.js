 var os=require("os");
var path=require("path");
var process=require("process");

// give time  for which system is running
console.log(os.uptime());

// give type
console.log(os.type());

//give system memory in GB
console.log(os.totalmem()/1024/1024/1024);
//give temprary directory of system
console.log(os.tmpdir());


//give release version
console.log(os.release());
//give plaform name
console.log(os.platform());


console.log(os.networkInterfaces());

console.log(os.loadavg());

console.log(os.hostname());

console.log(os.homedir());

console.log(os.freemem());

console.log(os.endianness());


//////run the process on next tick or just after the process
process.nextTick(function () {
    console.log(os.release);

})
console.log(os.cpus());


console.log(os.EOL());

console.log(os.arch());

console.log(path.delimiter);

console.log(path.parse("https://www.hackerrank.com//challenges"));
console.log(path.win32);


console.log(process.log());


console.log(process.env);

console.log(process.cwd());
