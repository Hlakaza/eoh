let express    = require('express')
    cors       = require('cors')
    bodyParser = require('body-parser')
    mongoose   = require('mongoose')
    AdressDetails  = require('./models/address.model.js')  
    config     = require('./config/config.js')  
    app        = express();
    Schema     = mongoose.Schema

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(req.body)
})

getSingleForm: (req, res) => {
    if (req.user.role[0] === 'admin') {
        Form.findById((req.params.id), function(err, form) {
            if (err) {
                return res.status(500).json({
                    message: 'An error occured',
                    err: err
                });
            }
            if (!form) {
                return res.status(404).json({
                    title: 'No form found',
                    error: { message: 'Form not found!' }
                });
            }
            res.status(200).json({
                obj: form
            });
        });
    }
},

app.post('/add', (req, res) => {
    let userData = req.body;
    const address = new AdressDetails(userData);
    address.save((err, res) => {
        if(err){
            console.log(err);
        }
     })
     console.log(userData.AddressName, 'registered')
     res.sendStatus(200)
 });


mongoose.Promise = global.Promise 
mongoose.connect(config.localDb, err => {
    if (err) {
        console.log(err)
      } else {
        console.log('Mongo is connected...')
      }
})
app.listen(3000);