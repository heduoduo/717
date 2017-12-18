var express = require('express');
var bodyParser = require('body-parser');
var queryApi = require('./queryApi');
var jwt = require('jsonwebtoken');
var app = express();
var fs = require('fs');

app.use(bodyParser.json());

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

var queryGoodsList = '/mall/index/getGoodsChannel'; // 请求图片
var Cart = '/admin/add/addCart';
var login = '/admin/loginUser';
var register = '/admin/register';
var city = '/location/city';

app.post(login, function (req, res, next) {
    var token, response, flag = true;
    var adminList = JSON.parse(fs.readFileSync('./dataTable/admin.json'), {
        encoding: 'utf-8'
    });
    adminList.list.forEach((item) => {
        if (item.user === req.body.user) {
            flag = true;
            if (item.userPassword === req.body.userPassword) {
                token = jwt.sign(req.body, 'hdd', {expiresIn: 60 * 30});
                response = {
                    'code': 1,
                    'token': token,
                    'msg': 'SUCCESS'
                };
            } else {
                response = {
                    'code': 2,
                    'error': 'error',
                    'msg': '密码错误'
                };
            }
        }
    });
    if (!flag) {
        response = {
            'code': 3,
            'error': 'error',
            'msg': '此用户不存在'
        };
    }
    res.end(JSON.stringify(response));
});

app.post(register, function (req, res, next) {
    var adminList = fs.readFileSync('./dataTable/admin.json', {
        encoding: 'utf-8'
    });
    adminList = JSON.parse(adminList);
    adminList.list.push(req.body);
    fs.writeFileSync('./dataTable/admin.json', JSON.stringify(adminList), {
        encoding: 'utf-8'
    });
    var obj = {
        'code': 1,
        'msg': 'SUCCESS'
    };
    res.end(JSON.stringify(obj));
});

app.post(Cart, (req, res) => {
    // var name = req.body.id;
    // var price = req.body.goodsPrice;
    // var name = req.body.goodsName;
    // var carList = JSON.parse(fs.readFileSync('./dataTable/addCart.json', 'utf-8'));
    // carList.list.push(req.body);
    // fs.writeFileSync('./dataTable/addCart.json', JSON.stringify(carList), 'utf-8');
    // carList = JSON.parse(fs.readFileSync('./dataTable/addCart.json', 'utf-8'));
    // console.log(carList);
    // res.end(JSON.stringify(carList));
    res.end('11');
});

app.post(queryGoodsList, (req, res) => {
    queryApi(queryGoodsList, req.body, 'POST').then((data) => {
        res.end(data);
    });
});

app.post(city, (req, res) => {
    var cityList = JSON.parse(fs.readFileSync('./dataTable/location.json'));
    res.end(JSON.stringify(cityList));
});

app.listen('3000', function () {
    console.log('server listening 3000');
});