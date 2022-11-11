# Astronautical-Travels-React-CLI
Ongoing Project for CS 260

Destination { 

name: string 

id: int 

ticket_limit: int(30) //decrement whenever a ticket is made for this one, increment when a ticket for this one is removed. Do not allow it to be returned when 0. 

price: float 

day_of_week: string (Sunday-Saturday) 

flight_duration: int 

}

Ticket { 

id: int 

auth_token: int 

}

Ticket_holder { 

auth_token: list[int] 

name: string 

species: string 

} 

one page with a section for each destination
