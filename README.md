# aprendizaje
En este lugar tenemos el primer proyecto realizado con Node.js llamado NodeFarm

Encontramos a detalle el como se hizo desde montar el servidor hasta finalizarlo con una pagina html

Para poder usar esta pagina debemos seguir la siguiente secuencia
```bash
npm i
```
O tambien de esta manera
```bash
npm install
```
Esto se hace con el fin de instalar las diferentes dependencias usadas a lo largo del proyecto. Puedes mirar cuales dependencias fueron usadas en el archivo "package.json" en el apartado "Dependencies"

Ahora procedemos a ejecutar el siguiente comando
```bash
npm run start
```
O simplemente 
```bash
npm start
```

Y por ultimo en nuestro navegador de preferencia nos dirijimos a la sigiente ruta 
```bash
http://localhost:8000
```
Teniendo en cuenta que localhost es la ip personal, la cual muchas veces es: "127.0.0.1" y el valor de "8000" es el puerto en el cual inicio el servidor.
Se informa que si lo desea puede cambiar el puerto a preferencia [aqui](./index.js#L52).

De esta menera otra forma de usar el enlace es:
```bash
http://127.0.0.1:8000
```
