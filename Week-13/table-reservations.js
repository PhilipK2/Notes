// call all requires
var express =

//set up express app 
var app = express();
var port =

app.use(bodyParser.json());
//app.use
//app.use
//app.use

//EMPTY ARRAY FOR OUR RESERVATIONS
currentTables = []; 


//MAKE ROUTES
// GET ROUTE FOR HOME PAGE
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "SOMETHING.html"));
});
// GET ROUTE FOR RESERVATION PAGE
// GET ROUTE FOR LIST ONLINE


//POST ROUTE TO THE RESERVATION LIST
app.post('/api/new', function(req, res){
    var newRes = req.body;
    newres.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
});


