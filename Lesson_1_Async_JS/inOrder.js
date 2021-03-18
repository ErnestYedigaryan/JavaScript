function logOne() {
    setTimeout(function () {
        console.log('one!');
    }, Math.random() * 1000);
}
    
function logTwo() {
    setTimeout(function () {
        console.log('two!');
    }, Math.random() * 1000);
}
    
     
    
function inOrder(cb1, cb2) {
    setTimeout(() => cb2(), 1000);
    cb1();
}
    
inOrder(logOne, logTwo); 