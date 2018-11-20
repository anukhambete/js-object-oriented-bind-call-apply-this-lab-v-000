//Your code here
function justInvoke (fn) {
  return fn();
}

function setThisWithCall (fn, name, args) {
   return fn.call(name, args);
}
