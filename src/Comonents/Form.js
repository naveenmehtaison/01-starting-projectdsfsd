import React, { useState, useRef } from "react";
import Onscreen from "./Onscreen";

const Form = () => {
    const [entereddata, setentereddata] = useState([]);
    const [submitted, setsubmitted] = useState(false);



    const handleFormSubmit = (event) => {
        console.log('iam inside hanlde frim submit')
        event.preventDefault();

         const form_data = {
            Name: event.target.elements.name.value,
            Bus: event.target.elements.selector.value,
            Email:event.target.elements.email.value,
            Phone:event.target.elements.number.value,
            key:3
        };

        setentereddata([form_data,...entereddata]);
        <Onscreen totaldata={entereddata} />


    };
    const editHandler = (ele) => {
        // You can update the entereddata array directly
        setentereddata(entereddata.map(item => {
            if (item === ele) {
                return {
                    ...item,
                    Name: ele.Name,
                    Bus: ele.Bus,
                    Email: ele.Email,
                    Phone: ele.Phone
                };
            }
            return item;
        }));
    };
    console.log(entereddata)

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h1>BUS Booking</h1>
                
                <label htmlFor="name">Name</label>
                <input type='text' id='name'></input>
                <select id='selector'>
                    <option id='Bus1' value='Bus1'>BUS1</option>
                    <option id="BUs2" value='Bus2'>BUS2</option>
                    <option id="Bus3" value='abhik'>Bus3</option>
                </select>
                <label htmlFor="number">PHONE</label>
                <input type='number' id='number'></input>
                <label htmlFor="email">Email</label>
                <input id='email' type='email'></input>
                <button type='submit'>submit</button>


            </form>
             <Onscreen totaldata={entereddata} />

        </div>
    );
};

export default Form;
