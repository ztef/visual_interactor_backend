/*
Visual Interaction Systems Corp.


Proyecto VISUAL GENERIC SERVER v1



*/



const express = require('express')
 
const cors = require('cors');
const fs = require('fs');
 


const app = express();
var router = express.Router();


app.use(cors());
app.options('*', cors());
router.use(cors());
app.use("/",router);


app.use(express.static('public'));

router.get('/getMenu',(_req, res) => {
  if(_req.query.usr == 'visualcemex'){
    res.sendFile(__dirname + "/public/customers/cemex/menucemex.html");
  } else if(_req.query.usr == 'fernandogonzalez') {

    res.sendFile(__dirname + "/public/customers/fernandogonzalez/menu.html");

  } else {
     res.sendFile(__dirname + "/public/customers/general/menu.html");
  }
});

router.get('/getMain',(_req, res) => {

  if(_req.query.usr == 'visualcemex'){

      res.redirect('/customers/cemex/index.html'); 

  } else if(_req.query.usr == 'fernandogonzalez') {

    res.redirect('/customers/fernandogonzalez/index.html'); 

  } else {
    
    res.sendFile(__dirname + "/public/customers/general/wellcome.html");
  }

});





router.get('/img/:file', (_req,res) => {

  console.log("Solicitud de img : ");
  console.log(_req.params.file);

  fs.readFile('./img/' + _req.params.file, function(err, data) {
    if(err) {
      res.send("Archivo no encontrado.");
    } else {
      // set the content type based on the file
      res.contentType(_req.params.file);
      res.send(data);
    }
    res.end();
  });

}
);






const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Visual Interactor Middleware Server , corriendo escuchando en puerto : ${port}!`);
});
