var http = require('http')
    , util = require('util')
    , mu   = require('mu2');

mu.root = __dirname + '/templates';


var express = require('express');
var app = express();
var mu   = require('mu2');

mu.root = __dirname + '/templates';


app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
//    res.send('hello world');

    mu.clearCache();

    var stream = mu.compileAndRender('index.mustache', {
        name: "john",
        banner: {
          heading: "Nice to put a face to a name",
          lead: "Video chat with no imperfections, all possible with Optus 4G",
          smallPrint: "Min total cost over 24 months $1,080. Cost of 1MB included data $0.05",
          cta: "Shop now",
          image: "banner_talentshot_mobile.png"
        },
        quickLinks: {
            items: [{
                title: "Pay bill",
                icon: "pay-bill"
            }, {
                title: "Check bill",
                icon: "view-bill"
            }, {
                title: "Recharge now",
                icon: "recharge"
            }, {
                title: "Usage",
                icon: "usage"
            }]
        },
        navigation: {
            items: [{
                title: "Mobile",
                link: "category-mobile.html",
                icon: "personal_home-phone"
            },{
                title: "Tablet",
                link: "category-mobile.html",
                icon: "personal_tablet"
            }, {
                title: "Homephone",
                link: "category-mobile.html",
                icon: "personal_home-phone"
            }]
        }

    });
    util.pump(stream, res);
});

app.listen(8000);