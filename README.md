## Node.js 

### Node.js Process
####Single Thread 
This is where our code is executed.
Only one thread.

```bash
  import fs from 'fs';

  //Blocking code execution
  const input = fs.readFileSync(' input.txt ' , ' utf-8 ');
  console.log(input);  
```
En el caso en que se ejecuten multiples peticiones al mismo tipo. Se bloquean las peticiones y se ejecutan progresivamente esto aumenta drasticamente los tiempos de espera para los usuarios por tal razon no es optimo para volumentes de peticiones al mismo tiempo.

### Back-Ground
This is where time-consuming task should be executed!

```bash
  import fs from 'fs';

  //Non-blocking code execution
  fs.readfile(' input.txt ' , ' utf-8 ' , (err , data) => {
    console.log(data);
  });
  console.log('Reading file ....');
```
En este caso los tiempos de ejecucion se reducen ya que las multiples peticiones no se bloquean sino que pasan a ejecucion en un segundo plano, donde basicamente permanece hasta que termina de leer los datos del archivo. De esta menera todos los usuarios pueden hacer las peticiones mientras que el archivo se encuentra leyendolas todas debido a que su ejecucion sigue en segundo plano.

### Callback Hell
El "callback hell" se refiere a una situación en la programación en la que múltiples funciones de devolución de llamada unas dentro de otras, lo que puede llevar a un código difícil de leer, mantener y depurar. Esto suele ocurrir cuando se trabaja con operaciones asíncronas en serie y se anidan muchas llamadas de devolución una dentro de otra, lo que puede hacer que el flujo del código sea confuso y complejo.

```bash
  import fs from 'fs';

  fs.readFile('./txt/start.txt' , 'utf-8' , (err , data1) => {
  console.log(data1);
  fs.readFile(`./txt/${data1}.txt` , 'utf-8' , (err , data2) => {
    console.log(data2);
    fs.readFile(`./txt/${data2}.txt` , 'utf-8' , (err , data3) => {
      console.log(data3)
      fs.readFile(`./txt/${data3}.txt` , 'utf-8' , (err , data4) => {
        console.log(data4)
        fs.readFile(`./txt/${data4}.txt` , 'utf-8' , (err , data5) => {
          console.log(data5)
          fs.readFile(`./txt/${data5}.txt` , 'utf-8' , (err , data6) => {
            console.log(data6)
            fs.readFile(`./txt/${data6}.txt` , 'utf-8' , (err , data7) => {
              console.log(data7)
              fs.readFile(`./txt/${data7}.txt` , 'utf-8' , (err , data8) => {
                console.log(data8)
                fs.readFile(`./txt/${data8}.txt` , 'utf-8' , (err , data9) => {
                  console.log(data9)
                  fs.readFile('./txt/append.txt' , 'utf-8' , (err , data10) => {
                    console.log(data10)
                    fs.writeFile('./txt/final.txt' , ` ${data9} ${data10}` , 'utf-8' , (err) => {
                      if(!err) {
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

## NPM
npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic License 2.0.

## Configuración Inicial

### Instalación de Node.js y npm

Para usar Node.js y npm toca instalarlos localmente desde el siguiente enlace [node](https://nodejs.org/).

### Creación de un Proyecto Node.js

Desde una terminal entra en la carpeta donde desea iniciar el proyecto y ejecuta el siguiente comando el cual creara el archivo `package.json` el cual nos dara toda la informacion del proyecto

```bash
npm init -y
```

### Estructura Básica de un Proyecto

La estructura de un proyecto Node.js puede variar, pero una estructura básica puede ser:

| Nombre del Proyecto     |                                                        |
| ----------------------- | ------------------------------------------------------ |
| 📁 nombre-del-proyecto/ | Directorio principal del proyecto.                     |
| ├── 📄 package.json     | Archivo de configuración del proyecto en formato JSON. |
| ├── 📄 index.js         | Archivo JavaScript principal del proyecto.             |

## Gestión de Paquetes con npm

### Instalación de Paquetes

Con el siguiente comando se descarga el paquete que desea ser guardado como dependencia en `package.json`

```bash
npm install [nombre-del-paquete]
```

Se puede realizar de la siguiente manera

```bash
npm i express
```

Con el siguiente lo instalamos en el proyecto y tambien nos genera el archivo `package-lock.json` el cual nos da una descripcion detallada de las versiones de los paquetes/dependencias que se estan utilizando

```bash
npm install
```

Otra forma de realizarlo

```bash
npm i
```

## Dependencias para Desarrollo

Para empezar a usar unas dependecias para desarrollo. A la hora de hacer la instacion del paquete se debe especificar de la siguiente manera 

```bash
npm i -D [nombre-del-paquete]
```

### Actualización y Eliminación de Paquetes

Comando para actualizar un paquete a su última versión

```bash
npm update [nombre-del-paquete]
```

La forma corta del comando update es up

```bash
npm up [nombre-del-paquete]
```

Si desea actualizar todas las dependencias del proyecto

```bash
npm up
```

Si desea actualizar a una version en especifico

```bash
npm up [nombre-del-paquete@version]
```

Ejemplo

```bash
npm up nodemon@2.0.13
```

Para eliminar un paquete y/o dependencia

```bash
npm uninstall [nombre-del-paquete]
```

Y su forma corta es `un`

```bash
npm un [nombre-del-paquete]
```

