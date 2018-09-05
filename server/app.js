let express    = require('express')
    cors       = require('cors')
    bodyParser = require('body-parser')
    mongoose   = require('mongoose')
    addresses  = require('./models/address.model.js')  
    config     = require('./config/config.js')  
    app        = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/addresses', (req, res) => {
    res.send(addresses)
})

app.post('/add', (req, res) => {
   let data = req.body
   const address = new Address(data)
   address.save((err, res) => {
       if(err){
           console.log(err)
       }
    })
    console.log(data.AddressName, 'Address added')
    res.sendStatus(200)
})

mongoose.Promise = global.Promise 
mongoose.connect(config.localDb, err => {
    if (err) {
        console.log(err)
      } else {
        console.log('Mongo is connected...')
      }
})
app.listen(3000);