import fs from 'fs';
import crypto from 'crypto'; //proviene de Node.js para encriptacion

const start = Date.now();
process.env.UV_THREADPOOL_size = 3; //Para cambiar el tamaño de los hilos que ejecuta al mismo tiempo


//How works node.js

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Inmediate 1 finished'));

fs.readFile("./txt/text-file.txt", () => {
  console.log('I/O fiished');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick'));

  //Forma Asyncrona mediante callbacks
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  crypto.pbkdf2('password' , 'salt' , 110000 , 1024 , 'sha512' , () => {
    console.log( Date.now() - start , 'Password encrypted');
  });
  
  //Forma Syncronica
  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');

  crypto.pbkdf2Sync('password' , 'salt' , 110000 , 1024 , 'sha512');
  console.log( Date.now() - start , 'Password encrypted');
}); 

console.log("Hello from the top-level code....");