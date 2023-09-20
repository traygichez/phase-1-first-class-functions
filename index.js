function receivesAFunction(spy) {
    console.log(spy());
  }
function returnsANamedFunction(){
    function spy() {
    }
    return spy;
}
function returnsAnAnonymousFunction(){
   return function () {
    };
}
