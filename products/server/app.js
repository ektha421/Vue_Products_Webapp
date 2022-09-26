//node app.js

const { request } = require('express');
const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 1000 * 60 *60 //쿠키 유효시간
    }
}));

//body에 담은 파라미터를 웹서버에서 받을때  선언해줘야함
//클라에서 요청값을 받기 위해 필요함
app.use(express.json({
    limit:'50mb'
}))

const server = app.listen(3000, ()=>{
    console.log('Server started. port 3000');
});

let sql = require('./sql.js');

//서버 재시작없이 바로바로 반영됨
fs.watchFile(__dirname + '/sql.js', (curr,prev) => {
    console.log('sql 변경시 재시작 없이 반영되도록 함');
    delete require.cache[require.resolve('./sql.js')];
    sql = require('./sql.js');
});

const db = {
    database: 'products_db',
    connectionLimit: 10,
    host:'127.0.0.1',
    user:'root',
    password:'mariadb'
};

const dbPool = require('mysql').createPool(db);

app.post('/api/login', async(request, res) => {
    // request.session['email'] = 'ektha421@gmail.com';
    // res.send('ok');
    try{
        await req.db('signUp', request.body.param);
        if(request.body.param.length > 0){
            for(let key in request.body.param[0]) request.session[key] = request.body.param[0][key];
            res.send(request.body.param[0]);
        }else{
            req.send({error:"Please tey again or contact system manager"});
        }
    }catch(err){
        res.send({
            error: "DB access error"
        })
    }
});

app.post('/api/logout', async(request, res) => {
    request.session.destroy();
    res.send('ok');
});

app.post('/api/:alias', async (request, res) => {
// if(!request.session.email){
//     return res.status(401).send({error:'You need to login'});
// }
    
    try{
     res.send(await req.db(request.params.alias, request.body.param))
    } catch(err){
     res.status(500).send({
        error: err
     })
    }
});

const req = { 
    async db(alias, param = [], where = '' ) {
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where , param, (error, rows) => {
             if ( error ) {
                if ( error.code != 'ER_DUP_ENTRY')
                    console.log(error); 
                resolve({
                    error
                });
             } else resolve(rows);
        }));
     } 
};