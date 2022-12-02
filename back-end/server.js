const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const Destination = new mongoose.model('Destination',{
    name: String,
    id: Number,
    ticket_limit: Number, //decrement whenever a ticket is made for this one, increment when a ticket for this one is removed. Do not allow it to be returned when 0.
    price: mongoose.Types.Decimal128,
    day_of_week: String, //(Sunday-Saturday)
    flight_duration: Number
});

const Ticket = new mongoose.model('Ticket',{
    id: Number, //destination's id
    auth_token: Number //ticketholder's authtoken
});

const TicketHolder = new mongoose.model('TicketHolder',{
    auth_token: [Number],
    name: String,
    species: String
});

const europa = new Destination({
    name: "Europa",
    id: 0,
    ticket_limit: 50,
    price: 800.00,
    day_of_week: "Wednesday",
    flight_duration: 10
});

const taran_nebula = new Destination({
    name: "Tarantula Nebula",
    id: 1,
    ticket_limit: 50,
    price: 2300.00,
    day_of_week: "Tuesday",
    flight_duration: 300
});

const mars = new Destination({
    name: "Mars",
    id: 2,
    ticket_limit: 50, 
    price: 700.00,
    day_of_week: "Friday",
    flight_duration: 10
});

const mzzixpa = new Destination({
    name: "Mzzixpa",
    id: 3,
    ticket_limit: 30,
    price: 1300.00,
    day_of_week: "Monday",
    flight_duration: 60
});

const trappist_1e = new Destination({
    name: "TRAPPIST-1e",
    id: 4,
    ticket_limit: 40, //decrement whenever a ticket is made for this one, increment when a ticket for this one is removed. Do not allow it to be returned when 0.
    price: 1500,
    day_of_week: "Friday", //(Sunday-Saturday)
    flight_duration: 180
});

async function work() {
    if (!(await Destination.find({name: 'Europa'}))) {
        await europa.save();
    }
    if (!(await Destination.find({name: 'Tarantula Nebula'}))) {
        await taran_nebula.save();
    }
    if (!(await Destination.find({name: "Mars"}))) {
        await mars.save();
    }
    if (!(await Destination.find({name: "Mzzixpa"}))) {
        await mzzixpa.save();
    }
    if (!(await Destination.find({name: "TRAPPIST-1e"}))) {
        await trappist_1e.save();
    }
  
  console.log('Destinations loaded.');
  let dest = await Destination.find();
  console.log(dest);
}
//gets all destinations
app.get('/at/destinations', async (req, res) =>{
    try{
        let destinations = await Destination.find();
        //console.log(destinations);
        res.send({destinations: destinations});
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//removes all destinations
app.delete('/at/destinations', async (req, res) => {
    try{
        //let destinations = await Destination.find();
        await Destination.deleteMany({});
        let destinations = await Destination.find();
        console.log(destinations);
        res.sendStatus(200);
    }catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//gets all current ticketHolders
app.get('/at/ticketholder', async (req, res) =>{
    try{
        let ticketHolders = await TicketHolder.find();
        //console.log(destinations);
        res.send({ticketHolders: ticketHolders});
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//gets a specific ticketholder
app.get('/at/ticketholder/:name/:species', async (req, res) => {
    try {
        let user = await TicketHolder.find({name: req.params.name, species: req.params.species});
        console.log(user);
        if (!user) {
            res.status(404).send("Sorry, this user does not exist.");
        }
        else {
            res.send(user);
        }
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//Add a ticketHolder, or add an authtoken to an existing one it it is already present. authtoken must be in the req body, not the url
app.post('/at/ticketholder/:name/:species', async (req, res) => {
    try {
        let user = await TicketHolder.find({name: req.params.name, species: req.params.species});
        console.log(user);
        if (user.length === 0) {
            console.log(req.body.auth_token)
            let ticketHolder = new TicketHolder({
                auth_token: [req.body.auth_token],
                name: req.params.name,
                species: req.params.species
            });
            await ticketHolder.save();
            console.log(ticketHolder);
            res.send(ticketHolder);
        }
        else {
            console.log("already there. " + user);
            if (!user[0].auth_token.find(x => x === req.body.auth_token)){
                user[0].auth_token.push(req.body.auth_token);
                await user[0].save();
                console.log(await TicketHolder.find({name: req.params.name, species: req.params.species}));
            }
            
            res.sendStatus(200);
        }
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//deletes an authToken from a ticketholder, if an authToken is given. Else it deletes the ticketholder. As above, authtoken must be in the body, not the url
app.delete('/at/ticketholder/:name/:species', async (req, res) => {
    try {
        let user = await TicketHolder.find({name: req.params.name, species: req.params.species});
        console.log(user);
        if (user.length > 0) {
            if (req.body.authToken) {
                user[0].auth_token.splice(user[0].auth_token.indexOf(x => x === req.body.authToken));
                await user[0].save();
                res.status(200).send(user);
            }
            else {
                await TicketHolder.deleteOne({name: req.params.name, species: req.params.species});
                res.sendStatus(200);
            }
        }
        else {
            res.status(404).send("ticketHolder not found.");
        }
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//gets all tickets currently in the server
app.get('/at/tickets', async (req, res) => {
    try{
        let tickets = await Ticket.find();
        res.send({tickets: tickets});
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//gets all tickets for the specified destination id
app.get('/at/tickets/:id', async (req, res) => {
    try {
        let tickets = await Ticket.find({id: req.params.id});
        res.send({tickets: tickets});
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//adds a ticket to the Ticket collection
app.post('/at/tickets/:id', async (req, res) => {
    try{
        let ticket = new Ticket({
            id: req.params.id,
            auth_token: req.body.auth_token
        });
        await ticket.save();
        res.send(ticket);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//deletes a ticket with the specified id and authtoken
app.delete('/at/tickets/:id', async (req, res) => {
    try {
        await Ticket.deleteOne({
            id: req.params.id,
            auth_token: req.body.auth_token
        });
        res.send("Ticket deleted.");
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

work();

app.listen(3000, ()=> console.log('Server listening on port 3000!'));