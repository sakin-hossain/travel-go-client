import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Services.css";

const Services = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://aqueous-tundra-83298.herokuapp.com/addPackages')
        .then(res => res.json())
        .then(data=> setPackages(data));
    },[]);
    return (
        <div className="titles" id="services">
            <div>
                <span>Popular Destinations</span>
                <h2 className="mx-2">Travel Most Popular Place <br /> In The World</h2>
            </div>
            <div className="row">
                {
                    packages.map(pk=>
                        <div className="col-md-4 shadow col-sm-12 package" key={pk.id}>
                            <div className="package__photo mx-auto">
                            <img className="img-fluid" src={pk.image} alt="" />
                            </div>
                            <div className="package__details">
                                <h4>{pk.title}</h4>
                                <h5>${pk.price}</h5>
                                <Link to ={`services/${pk._id}`}>
                                    <button className="btn__regular">Book this Package</button>
                                </Link>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Services;