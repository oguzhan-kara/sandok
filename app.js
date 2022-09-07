
const express = require('express')
const app = express()
const port = 5000
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));
const router = express.Router();

app.use(express.static('public'));
// Specific folder example
 app.use('/css', express.static(__dirname + 'public/css'))
 app.use('/js', express.static(__dirname + 'public/js'))
 app.use('/img', express.static(__dirname + 'public/img'))

app.get('/',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.get('/index',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/blog-arcive',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/blog-arcive.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/blog-arcive',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/blog-arcive.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/testimonial',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/testimonial.html'));
    //__dirname : It will resolve to your project folder.
  });

app.get('/team',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/team.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/portfolio',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/portfolio.html'));
    //__dirname : It will resolve to your project folder.
  });
  
  app.get('/service',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/service.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/portfolio-detail',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/portfolio-detail.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/home2',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/home2.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/home3',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/home3.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/gallery',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/gallery.html'));
    //__dirname : It will resolve to your project folder.
  });
  
  app.get('/faq',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/faq.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/contact',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/contact.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/blog',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/blog.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.get('/blog-details',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/blog-details.html'));
    //__dirname : It will resolve to your project folder.
  });

   
  
  app.get('/about',function(_req,res){
    res.sendFile(path.join(__dirname+'/views/about.html'));
  });

  
  
app.use(express.static(path.join(__dirname, '/public/css')));

app.listen(process.env.port || 80);

console.log('Running at Port 80');