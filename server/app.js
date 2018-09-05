let express    = require('express')
    path         = require('path'),
    cors       = require('cors')
    bodyParser = require('body-parser')
    mongoose   = require('mongoose')
    AdressDetails  = require('./models/address.model.js')  
    config     = require('./config/config.js')  
    app        = express();
    Schema     = mongoose.Schema
    serveStatic = require('serve-static');
app.use(cors())
app.use(bodyParser.json())

/**
 * Get angular project files
 */
app.use(serveStatic(path.join(__dirname,  config.paths.dist)))

app.get('/', (req, res) => {
    res.send(req.body)
})

app.post('/add', (req, res) => {
    let userData = req.body;
    const address = new AdressDetails(userData);
    address.save((err, res) => {
        if(err){
            console.log(err);
        }
     })
     console.log(userData.AddressName, 'Added')
     res.sendStatus(200)
 });


 mongoose.Promise = global.Promise;  // gets rid of the mongoose promise deprecated warning
 mongoose.connect(config.liveDb);
 mongoose.connection.on('open', (err) => {
   if (err) {
     console.log(err);
   } else {
     console.log('Mongo is connected...');
   }
 });
var distDir = __dirname + "/dist/eoh/";
app.use(express.static(distDir));
module.exports = app;