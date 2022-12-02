import { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [ticketHolders, setHolders] = useState([]);
    //const [auth_token, setToken] = useState(10000);
    const [id, setID] = useState(-1);
    var auth_token = 10000;
    
    const fetchTickets = async(e) => {
        e.preventDefault();
    try {      
        const response = await axios.get("/at/tickets");
        setTickets(response.data);
        } catch(error) {
            setError("error retrieving tickets: " + error);
        }
    }
    
    const getTicket = async(id, auth_token) => {
        await tickets.find(x => x.auth_token === auth_token);
    }
    
    const createHolder = async(e, name) => {
        e.preventDefault();
        try {
            //have them enter their name. If they are not already a user,
            //Add them to the list of holders. If they are, just add the token
            //to their list
          console.log("Do we make it");
          await axios.post("/at/tickets", {name: name, species: 'Human'});
        } catch(error) {
          setError("error adding a ticketHolder: " + error);
        }
    }
    
    
    //Create a token and create a user if the name is new
    const createTicket = async(e) => {
        e.preventDefault();
        console.log(name);
        if(e.name === "") {
            //TODO: Pop up here "Please enter a name"
            alert('Please enter a valid name');
        }
        else {
            console.log("Else top");
            if(!ticketHolders.find(x => x === name)) {
                console.log("Before CreateHolder");
                await createHolder(name);
                console.log("After CreateHolder");
            }
            
            try {
                //TODO: Have them enter their name. If they are not already a user,
                //Add them to the list of holders. If they are, just add the token
                //To their list
              auth_token = auth_token + 101;
              alert('AuthToken: ' + auth_token);
              console.log("Before Axios Post");
              //await axios.post("/at/tickets/", {id: e.id, auth_token: auth_token});
              console.log("After Axios Post");
              //TODO: put an auth_token on the screen here
            } catch(error) {
              console.log(error);
              setError("error adding a ticket: " + error);
            }
        }
    }
    
    useEffect(() => {
        //TODO: put the tickets back here later
    },[]);
    
    const deleteTicket = async(ticket, auth_token) => {
        await deleteOneTicket(ticket, auth_token);
        fetchTickets();
    }
    
    const deleteOneTicket = async(ticket, auth_token) => {
        try {
            await axios.delete("/at/tickets/" + auth_token);
        } catch(error) {
            setError("error deleting a ticket" + error);
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
        		        Name:
        		        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        		        </label>
        		        <h2>Click a button below to choose a location</h2>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" value={1} onClick={e=>setID(0)}>
        		        Europa!</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(1)}>
        		        Tarantula Nebula</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(2)}>
        		        Mars Colony 1</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(3)}>
        		        Mzzixpa</button>
        		    </div>
        		    <div className="BookingRow">
        		        <button className="BookingButton" onClick={e=>setID(4)}>
        		        Trappist_1e</button>
        		    </div>
    		    </form>
    		</div>
        </div>
    )
}
export default Booking