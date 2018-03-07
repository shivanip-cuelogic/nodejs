var createBoomError = require('create-boom-error');
var myError = createBoomError('my error',404,"Code has some error");
var err = new myError();
console.log(err.message);
