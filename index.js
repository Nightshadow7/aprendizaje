import fs from 'fs';

const hello = 'Hello word';
console.log(hello);

// blocking, synchronous way 
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `
  This is what we know about the avocado: ${textIn}.
  Created on ${Date.now()}
`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File Written!');

// Non-blocking, asynchronous way - Callback - Hell
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
