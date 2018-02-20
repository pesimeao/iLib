

//var
//    fs = require('fs'),
//    path = require('path');


//require.paths.push(process.cwd());
//var args = (process.ARGV || process.argv).slice(2);

var files = [];
console.log("!!!!!!!!!!!!!")
var testrunner,
    config_file,
    config_param_found = false,
    output_param_found = false,
    reporter_file = 'default',
    reporter_param_found = false,
    testspec_param_found = false,
    testFullSpec_param_found = false;

var usage = "Usage: nodeunit [options] testmodule1.js testfolder [...] \n" +
            "Options:\n\n" +
            "  --config FILE     the path to a JSON file with options\n" +
            "  --reporter FILE   optional path to a reporter file to customize the output\n" +
            "  --list-reporters  list available build-in reporters\n" +
            "  -r                recursively run tests in sub-directories\n" +
            "  -t testName,      specify a test to run\n" +
            "  -f fullTestName,  specify a specific test to run. fullTestName is built so: \"outerGroup - .. - innerGroup - testName\"\n"  +
            "  -h, --help        display this help and exit\n" +
            "  -v, --version     output version information and exit";



// load default options
//var content = fs.readFileSync(__dirname + '/nodeunit.json', 'utf8');
//var options = JSON.parse(content);

//// a very basic pseudo --options parser
//args.forEach(function (arg) {
//    if (arg.slice(0, 9) === "--config=") {
//        config_file = arg.slice(9);
//    } else if (arg === '--config') {
//        config_param_found = true;
//    } else if (config_param_found) {
//        config_file = arg;
//        config_param_found = false;
//    } else if (arg.slice(0, 9) === "--output=") {
//        options.output = arg.slice(9);
//    } else if (arg === '--output') {
//        output_param_found = true;
//    } else if (output_param_found) {
//        options.output = arg;
//        output_param_found = false;
//    } else if (arg.slice(0, 11) === "--reporter=") {
//        reporter_file = arg.slice(11);
//    } else if (arg === '--reporter') {
//        reporter_param_found = true;
//    } else if (reporter_param_found) {
//        reporter_file = arg;
//        reporter_param_found = false;
//    } else if (arg === '-r') {
//        options.recursive = true;
//    } else if (arg === '-t') {
//        testspec_param_found = true;
//    } else if (testspec_param_found) {
//        options.testspec = arg;
//        testspec_param_found = false;
//    } else if (arg === '-f') {
//        testFullSpec_param_found = true;
//    } else if (testFullSpec_param_found) {
//        options.testFullSpec= arg;
//        testFullSpec_param_found = false;
//    } else if (arg === '--list-reporters') {
//        var reporters = fs.readdirSync(__dirname + '/../lib/reporters');
//        reporters = reporters.filter(function (reporter_file) {
//            return (/\.js$/).test(reporter_file);
//        }).map(function (reporter_file) {
//            return reporter_file.replace(/\.js$/, '');
//        }).filter(function (reporter_file) {
//            return reporter_file !== 'index';
//        });
//        console.log('Built-in reporters: ');
//        reporters.forEach(function (reporter_file) {
//            var reporter = require('../lib/reporters/' + reporter_file);
//            console.log('  * ' + reporter_file + (reporter.info ? ': ' + reporter.info : ''));
//        });
//        process.exit(0);
//    } else if ((arg === '-v') || (arg === '--version')) {
//        var content = fs.readFileSync(__dirname + '/../package.json', 'utf8');
//        var pkg = JSON.parse(content);
//        console.log(pkg.version);
//        process.exit(0);
//    } else if ((arg === '-h') || (arg === '--help')) {
//        console.log(usage);
//        process.exit(0);
//    } else {
//        files.push(arg);
//    }
//});

// defaults to `test`
if (files.length === 0) {
    files = ['test'];
}

if (config_file) {
    content = fs.readFileSync(config_file, 'utf8');
    var custom_options = JSON.parse(content);

    for (var option in custom_options) {
        if (typeof option === 'string') {
            options[option] = custom_options[option];
        }
    }
}

//var builtin_reporters = require(__dirname + '/../lib/reporters');
var testrunner = Qt.include('./lib/reporters/default.js');

console.log(" testrunner  " + testrunner);

testrunner.run("./testSample/test.js", null, function(erro){
    console.log("ERROR!!!!!")
})

//if (reporter_file in builtin_reporters) {
//    console.log("reporter_file" + reporter_file);
//    testrunner = builtin_reporters[reporter_file];
//}
//else {
//    testrunner = Qt.include(reporter_file);
//}

////testrunner.run(files, options, function(err) {
//testrunner.run(files, null, function(err) {
//    //process.exit(err ? 1 : 0);
//});
