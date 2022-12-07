import { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [ticketHolders, setHolders] = useState([]);
    const [id, setID] = useState(-1);
    const [ticket, setTicket] = useState();
    
    //Fills the list of tickets from the back end
    const fetchTickets = async() => {
    try {      
        const response = await axios.get("/at/tickets");
        console.log(response);
        setTickets(response.data);
        
        } catch(error) {
            setError("error retrieving tickets: " + error);
        }
    }
    
    //Fills the list of ticketHolders from the back end
    const fetchTicketHolders = async() => {
    try {      
        const response = await axios.get("/at/ticketHolder");
        console.log(response);
        setHolders(response.data);
        console.log(response.data);
        } catch(error) {
            setError("error retrieving ticketHolders: " + error);
        }
    }
    
    //gets a specific ticket from the server
    const getTicket = async(planetID, name) => {
        try {
            let response = await axios.get("/at/ticker" + id + "/" + name);
            console.log("Got Ticket");
            setTicket(response.data);
        } catch(error) {
            setError("error getting the ticketHolders: " + error);
        }
    }
    
    const createHolder = async(e) => {
        e.preventDefault();
        try {
            //have them enter their name. If they are not already a user,
            //Add them to the list of holders. If they are, just add the token
            //to their list
            await axios.post("/at/ticketholder/" + name + "/" + species);
        } catch(error) {
            setError("error adding a ticketHolder: " + error);
        }
    }
    
    const getHolders = async() => {
        try {
            let response = await axios.get("/at/ticketholder");
            console.log(response);
            setHolders(response.data);
            console.log(ticketHolders);
        } catch(error) {
            setError("error getting the ticketHolders: " + error);
        }
    }
    
    //Create a token and create a user if the name is new
    const createTicket = async(e) => {
        e.preventDefault();
        console.log(name);
        if(name === "") {
            alert('Please enter a valid name');
        }
        else {
            await fetchTicketHolders();
            console.log("Fetched Holders");
            console.log(ticketHolders);
            if(!ticketHolders.find(x => x.name === name)) { //This is still a problem
                console.log("Before CreateHolder");
                await createHolder(e);
                console.log("After CreateHolder");
            }
            try {
              //Add a ticket with an ID and name here
              //alert("In here");
              console.log("Before Axios Post");
              await axios.post("/at/tickets/" + id + "/" + name);
              console.log("After Axios Post");
            } catch(error) {
              console.log(error);
              setError("error adding a ticket: " + error);
            }
        }
        fetchTicketHolders();
        fetchTickets();
    }
    
    useEffect(() => {
        //TODO: put the tickets back here later
        fetchTicketHolders();
        fetchTickets();
    },[]);
    
    const deleteTicket = async(ticket) => {
        await deleteOneTicket(ticket);
        fetchTickets();
    }
    
    const deleteHolder = async(holder) => {
        await deleteOneHolder(holder);
        fetchTicketHolders();
    }
    
    const deleteOneTicket = async(ticket) => {
        try {
            await axios.delete("/at/tickets/" + ticket.id + "/" + ticket.name);
        } catch(error) {
            setError("error deleting a ticket" + error);
        }
    }
    
    const deleteOneHolder = async(ticketHolder) => {
        try {
            await axios.delete("/at/ticketHolder/" + ticketHolder.name + "/" + ticketHolder.species);
        } catch(error) {
            setError("error deleting a ticketHolder" + error);
        }
    }
    
    const displayLocation = (id) => {
        if(id === 1) {
            return "Europa";
        }
        if(id === 2) {
            return "Tarantula Nebula";
        }
        if(id === 3) {
            return "Mars Colony 1";
        }
        if(id === 4) {
            return "Mzzixpa";
        }
        if(id === 5) {
            return "Trappist_1e";
        }
        else {
            return "Error: no planet for that ID";
        }
    }
    
    return (
        <div className="renderHolder">
            <div className="about-header">
    			<h1>Booking</h1>
    		</div>
    		<div className="BookingContainer">
    		    <form  onSubmit={createTicket}>
        		    <div className="BookContainHeader">
        		        <h2>Ener your name</h2>
        		        <label>
        		        <p>Name:</p>
        		        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        		        </label>
        		        <label>
        		        <p>  Species:</p>
        		        <input type="text" value={species} onChange={e=>setSpecies(e.target.value)} />
        		        </label>
        		        <h2>Click a button below to choose a location</h2>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(1)} value="Submit">
        		        Europa (1)</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(2)} value="Submit">
        		        Tarantula Nebula (2)</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(3)} value="Submit">
        		        Mars Colony 1 (3)</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(4)} value="Submit">
        		        Mzzixpa (4)</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(5)} value="Submit">
        		        Trappist_1e (5)</button>
        		    </div>
    		    </form>
    		    <p>You will automatically be charged for any tickets you do not remove from the list below prior to exiting the page</p>
    		 </div>
    		 <div className="BookingContainer">
    		    <h2>Users</h2>
    		    {ticketHolders.map( holder => (
                <div key={holder.id} className="ticket">
                      <div className="name">
                        <p className="bookingText">{holder.name}, {holder.species}</p>
                      </div>
                      <button className="deleteButton" onClick={e => deleteHolder(holder)}>Remove User Data</button>
                    </div>
                ))}
    		</div>
    		<div className="BookingContainer">
    		    <h2>Tickets</h2>
    		    {tickets.map( ticket => (
                <div key={ticket.id} className="ticket">
                      <div className="name">
                        <p className="bookingText">{ticket.name}, {displayLocation(ticket.id)}</p>
                      </div>
                      <button className="deleteButton" onClick={e => deleteTicket(ticket)}>Remove Ticket</button>
                    </div>
                ))}
    		</div>
    		<div className="extraSpace"></div>
        </div>
    )
}
export default Booking
