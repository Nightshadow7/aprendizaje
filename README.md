## Node.js 

### Node.js Process
####Single Thread 
This is where our code is executed.
Only one thread.

```http
  import fs from 'fs';

  //Blocking code execution
  const input = fs.readFileSync(' input.txt ' , ' utf-8 ');
  console.log(input);  
```
En el caso en que se ejecuten multiples peticiones al mismo tipo. Se bloquean las peticiones y se ejecutan progresivamente esto aumenta drasticamente los tiempos de espera para los usuarios por tal razon no es optimo para volumentes de peticiones al mismo tiempo.

### Back-Ground
This is where time-consuming task should be executed!

```http
  import fs from 'fs';

  //Non-blocking code execution
  fs.readfile(' input.txt ' , ' utf-8 ' , (err , data) => {
    console.log(data);
  });
  console.log('Reading file ....');
```
En este caso los tiempos de ejecucion se reducen ya que en este caso las multiples peticiones no se bloquean sino que pasan a ejecucion en un segundo plao, donde basicamente permanece hasta que termina de leer los datos del archivo. De esta menera todos los usuarios pueden hacer las peticiones mientras que el archivo se encuentra leyendolas todas debido a que su ejecucion sigue en segundo plano.

### Callback Hell
El "callback hell" se refiere a una situación en la programación en la que múltiples funciones de devolución de llamada se anidan unas dentro de otras, lo que puede llevar a un código difícil de leer, mantener y depurar. Esto suele ocurrir cuando se trabaja con operaciones asíncronas en serie y se anidan muchas llamadas de devolución de llamada una dentro de otra, lo que puede hacer que el flujo del código sea confuso y complejo.

```http
  import fs from 'fs';

  fs.readfile(' start.txt ' , ' utf-8 ' , (err , data1) => {
    fs.readfile(` ${data1}.txt ` , ' utf-8 ' , (err , data2) => {
      fs.readfile(` ${data2}.txt ` , ' utf-8 ' , (err , data3) => {
        fs.readfile(` ${data3}.txt ` , ' utf-8 ' , (err , data4) => {
          fs.readfile(` ${data4}.txt ` , ' utf-8 ' , (err , data5) => {
            fs.readfile(` ${data5}.txt ` , ' utf-8 ' , (err , data6) => {
              fs.readfile(` ${data6}.txt ` , ' utf-8 ' , (err , data7) => {
                fs.readfile(` ${data7}.txt ` , ' utf-8 ' , (err , data8) => {
                  fs.readfile(` ${data8}.txt ` , ' utf-8 ' , (err , data9) => {
                    fs.readfile(' append.txt ' , ' utf-8 ' , (err , data10) => {
                      fs.readfile(' final.txt ' , ` ${data9} ${data10}` , ' utf-8 ' , (err) => {
                        if(err) {
                          console.log('Your file has been saved ፨D ')
                        };
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
```
