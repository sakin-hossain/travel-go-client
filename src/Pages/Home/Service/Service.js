import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const{user} = useAuth();

    useEffect(()=>{
        fetch(`https://aqueous-tundra-83298.herokuapp.com/addPackages/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.packageName = service.title;
        data.packagePrice = service.price;
        data.status = "pending";
        fetch('https://aqueous-tundra-83298.herokuapp.com/myOrders',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            if(result.insertedId){
                alert('Package Added');
                reset(); 
            }
        })
    }
    return (
        <div className="row">
            <div className="col-md-8">
                <h1>{service?.title}</h1>
                <div className="service__img">
                    <img className="img-fluid" src={service?.image} alt="" />
                </div>
                <p>{service?.description}</p>
            </div>
            <div className="col-md-4 form__container">
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue={user?.displayName} placeholder="Your Name" {...register("name")} /> <br />
            <input defaultValue={user?.email} placeholder="Your Email" {...register("email")} /> <br />
            <label htmlFor="from">From</label> <br />
            <input type="date" {...register("from")} /> <br />
            <label htmlFor="to">To</label> <br />
            <input type="date" {...register("to")} /> <br />
            <input placeholder="Your Mobile No" {...register("mobile", { required: true })} /> <br />
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Service;