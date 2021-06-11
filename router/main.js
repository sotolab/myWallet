const bodyParser = require('body-parser');

module.exports = function(app) {
     app.use(bodyParser.json());       // to support JSON-encoded bodies
     app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
         extended: true
      }));
     
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
     
    app.get('/listall', function (req, res) {
      //res.render('about.html');
      console.log('listall...');
      const getNumber = req.body.getNumber;
      let response = {
            'result': 'true',
            'getLists': getNumber 
      }
      
      console.log('response : ' + response);
      res.status(200).json(response);
   });  // end of get
     
}
