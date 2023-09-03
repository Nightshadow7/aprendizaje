import fs from 'fs';
import http from 'http';
import url from 'url';
import { fileURLToPath } from 'url'
import path from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html` , `utf-8`);
const tempCard = fs.readFileSync(`${__dirname}/templates/cards.html` , `utf-8`);
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html` , `utf-8`);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json` , `utf-8`);
const dataObject = JSON.parse(data);

//SERVER
const replaceTemplate = (temp , product) => {
  let output = temp.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%NAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
};

const server = http.createServer((req , res) => {
  const {query , pathname} = url.parse(req.url , true );
  //overview Page
  if(pathname === '/overview' || pathname === '/') {
    res.writeHead(200, { 'content-type': 'text/html'});
    const cardsHtml = dataObject.map(el => replaceTemplate(tempCard , el));
    const output = tempOverview.replace('{%PRODUCT-CARDS%}' ,  cardsHtml);
    res.end(output);

  //Product Page
  } else if(pathname === '/product'){
    res.writeHead(200 , {'Content-Type': 'text/html'});
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct , product);
    res.end(output);

  //API Page
  }else if(pathname === '/api') {
    res.writeHead(200, { 'Content-type' : 'application/json'});
    console.log(dataObject); 
    res.end(data);

  //Not Found
  }else {
    res.writeHead(404 , {
      'Content-type' : 'text/html',
      'my-own-header' : 'Hello-word'
    });
    res.end('<h1>This page not found!</h1>');
  };
  
});
const port = 8000;
server.listen(port , '127.0.0.1' , () => {
  console.log('Listenin to request on post 8000')
});
