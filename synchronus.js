console.log("Before Preparing food");

function prepareFood(callback) {
  setTimeout(() => {
    console.log("Prepare Food");
    callback("Food is Ready");
  }, 10);
}

function mycallback(value) {
  console.log("Value =", value);
  prepareFrenchToast(frenchcallback);
}

function frenchcallback(value) {
  console.log("French Toast Callback =", value);
}
function prepareFrenchToast(callback) {
  setTimeout(() => {
    console.log("Prepare French toast");
    callback("french toast is ready");
  }, 20);
}
prepareFood(mycallback);
// prepareFood((value)=>{
//     console.log("Value =",value);
// })

console.log("After preparing food dinner ready");
