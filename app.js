var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
   //propriedades
    connectionLimit: 50,
    host: 'https://mysql128497-hitkznodejs.jelasticlw.com.br',
    user: 'root',
    password: 'XRMiiv19264',
    database: 'testedb'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    } else{
        console.log('Connected');
    }
});

app.get('/',function(req,resp){

        connection.query("SELECT * FROM testeclientes",function(error,rows,field){
                if(!!error){
                    console.log('Error in the query');
                }
                else{
                    console.log('Success !');
                    resp.json(rows);
                }
            });

});

app.listen(1337);

console.log('Fim..');
