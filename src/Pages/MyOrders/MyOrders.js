import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css";

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrder] = useState([]);
    const [isCanceled, setIsCanceled] = useState(null);

    useEffect(()=>{
        fetch('https://aqueous-tundra-83298.herokuapp.com/myOrders')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[isCanceled]);

    const handleCancel = id =>{
        fetch(`https://aqueous-tundra-83298.herokuapp.com/myOrders/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(result=> {
            if(result.deletedCount){
                alert('Delete Successfully');
                setIsCanceled(true);
            }
            else{
                setIsCanceled(false);
            }
        });
    }
    const order = orders.filter(ord => ord.email === user.email);
    console.log(order);
    return (
        <div className="orders">
            <h1 className="text-center my-5">Here is Your Orders</h1>
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>Package Name</th>
                        <th>Package Price</th>
                        <th>Your Mobile</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
            {
                order.map(or=> 
                    <tbody key={or._id}>
                        <tr>
                            <td>{or.packageName}</td>
                            <td>${or.packagePrice}</td>
                            <td>{or.mobile}</td>
                            <td>{or.from}</td>
                            <td>{or.to}</td>
                            <td>{or.status}</td>
                            <td>
                                <button onClick={()=>handleCancel(or._id)} className="btn btn-danger">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                    )
            }
            </Table>
        </div>
    );
};

export default MyOrders;