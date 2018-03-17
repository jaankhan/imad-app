var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req,res) {
  counter = counter +1 ;
  res.send(counter.toString());
});

var articles={
    articleTwo: {
    title: 'Article two | salman khan',
    heading: 'Aricle two',
    date: '6 sept',
    content:`<p>
                this is my second web page. i hope you like it. this is my second  web page. i hope you like it. this is my second  web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it.
            </p>
            <p>
                this is my second web page. i hope you like it. this is my second web page. i hope you like it. this is my second web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it.
            </p>
            <p>
                this is my second  web page. i hope you like it. this is my second web page. i hope you like it. this is my second web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it.
            </p>`
},
    articleOne: {
    title: 'Article One | salman khan',
    heading:'Article one',
    date:'5 sept',
    content:` 
            <p>
                this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it.
            </p>
            <p>
                this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it.
            </p>
            <p>
                this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it. this is my first web page. i hope you like it.
            </p>`
}
};

function createTemplate (data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/:articles', function (req, res) {
  var articleName = req.param.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});

app.get('/article-three', function (req, res) {
  res.send('article three is requested');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names=[];
app.get('/submit-name/:name', function(req, res){
   var name=req.params.name;
   names.push(name);
   req.send(JSON.stringify(names));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
