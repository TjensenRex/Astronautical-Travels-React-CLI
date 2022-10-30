const Home = () => {
    console.log("Home Page got rendered???");
  return (
    <div className="renderHolder">
        <div className="intro">
            <h1>L E T ' S</h1> <img src="images/clipart3059991.png" onerror='this.onerror = null; this.src="build/images/clipart3059991.png"'/> <h1>F L Y !</h1>
        </div>
        <div className="text-box">
            <p>Astronautical Travels is your go-to travel and tourism service for off-world vacationing. Our fleet of state-of-the-art interstellar cruisers are 
                Tesla-Prime&trade; certified, and can carry you safely across the galaxy to any of our contracted resorts within hours.</p>
            <div className="horizontal-links-box">
                <p><a href="about.html">Learn Who We Are</a></p>
                <p><a href="activities.html">Plan Your Week of Fun</a></p>
                <p><a href="destinations.html">Our Available Locations</a></p>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
        <div>
           <p className="fakeFooter">Created by Timothy Jensen and Kyle Standing and Matthew Kennedy. Repository at: 
           <a href="https://github.com/TjensenRex/Astronautical-Travels-React-CLI">https://github.com/TjensenRex/Astronautical-Travels-React-CLI</a></p>
        </div>;
    </div>
  );
};

export default Home;