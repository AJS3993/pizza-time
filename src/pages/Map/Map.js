import React from 'react';
import Banner from "../../components/Banner/Banner";
import Footer from "./../../components/Footer/Footer";
import {MDBContainer} from 'mdbreact';

import GoogleMapReact from 'google-map-react';

const Map = () => {
    return (
<>
<Banner/>

      <h2 className= "text-white text-center font-weight-bold">Store Locater</h2>
      
      <MDBContainer>


<div
                  className='z-depth-1-half map-container-2 mb-4 p-0 blue darken-4 border border-white'
                  style={{ width: '100%', height: '400px' }}
                >
                  <GoogleMapReact
                  
                    defaultCenter={{ lat: 10, lng: 10 }}
                    defaultZoom={7}
                    options={{
                      mapTypeId: 'satellite'
                    }}
                  />
                </div>
                </MDBContainer>
                <Footer/>
</>
        );
};

export default Map;