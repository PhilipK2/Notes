console.log('Sriracha. Goes great on everything');

function test (a,b) {
    if (a==b){
        console.log('1yes');
    }
    else {
        console.log('2no');
    }
};
console.log(process.argv);
test(process.argv[2], process.argv[3]);
