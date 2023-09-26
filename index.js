function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction(){
    function namedFunction(){
        console.log("This is a named function.");
    }
    return namedFunction;  // return the name of this anonymous function, not its value!
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('This is an anonymous function.');
    };
}