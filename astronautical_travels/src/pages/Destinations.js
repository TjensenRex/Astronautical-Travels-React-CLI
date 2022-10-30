const Destinations = () => {
  return (
      <div className="renderHolder">
      <div className="destinationPopularMargin">
			<h1>Popular Destinations</h1>
        </div>
        <div className="container">
            <div className="destination-one">
                <div className="content">
                    <h2>Colony 1: Mars</h2>
                    <img src="images/terraformed_mars.jpeg" className="article-image"/>
                    <p>
                        One of the greatest feats of human ingenuity and geological 
                        engineering of the 21st century: Mars. Colony 1 has been
                        a massive success over recent decades. The first settlers 
                        paved the way for tourists like you to enjoy the newly 
                        thriving Mars landscape. Just 10 years ago you would not 
                        have been able to enjoy the surface without life-support 
                        equipment. Now, the environment has been improved to where 
                        just about anyone can explore with incredible ease and comfort.
                        Come to Colony 1 to find great entertainment.
                    </p>
                </div>
            </div>
            
            <div className="destination-two">
                <div className="content">
                    <h2>Europa</h2>
                    <img src="images/europa_surface.jpg" onerror="build/images/europa_surface.jpg" className="article-image"/>
                    <p>
                        With our famous resort here on this planet, Europa 
                        has easily become one of the most popular space
                        destinations. With jagged icy hills, interesting 
                        geothermal activity, and incredible fishing. Europa
                        feels like Alaska on Earth, but billions of miles away!
                    </p>
                </div>
            </div>
            
            <div className="destination-three">
                <div className="content">
                    <h2>The Tarantula Nebula</h2>
                    <img src="images/tarantula_nebula.jpg" onerror="build/images/tarantula_nebula.jpg" className="article-image"/>
                    <p>
                        Take a tour on one of our many cruise-style space trips. 
                        On a sprawling ship with many amenities and tasty space-inspired 
                        dishes, you can sight see as we pass young stars, black-holes, 
                        and most importantly the Tarantula Nebula! This fabulous 
                        nebula has become incredibly popular ever since the James 
                        Webb Telescope captured its beauty in fabulous detail in 2022.
                    </p>
                </div>
            </div>
        </div>
        <div>
             <p className="fakeFooter">Created by Timothy Jensen and Kyle Standing and Matthew Kennedy. Repository at: https://github.com/TjensenRex/Astronautical-Travels-React-CLI</p>
         </div>;
        </div>
      );
};

export default Destinations;

/* */