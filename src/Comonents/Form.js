import React, { useState, useRef,useEffect } from "react";
import Onscreen from "./Onscreen";

const Form = () => {
    const [entereddata, setentereddata] = useState([]);

    const Nameref = useRef()
    const Emailref = useRef()
    const Phoneref = useRef()

    const handleFormSubmit = (event) => {
        console.log('iam inside hanlde frim submit')
        event.preventDefault();

         const form_data = {
            Name: event.target.elements.name.value,
            Bus: event.target.elements.selector.value,
            Email:event.target.elements.email.value,
            Phone:event.target.elements.number.value,
            key:3,
        };

        setentereddata([form_data,...entereddata]);
    };
    const deleteHandler = (item) => {
        setentereddata(entereddata.filter((_, i) => i !== item));

    };
    const editHandler = (item,ele) => {
        setentereddata(entereddata.filter((_,i)=>i!==item))
        Nameref.current.value=ele.Name
        Emailref.current.value=ele.Email
        Phoneref.current.value=ele.Phone

    };
    const [filteryear,setfilteryear]=useState('all')
    const FilterYearFunc2=(event)=>{
        setfilteryear(event.target.value)
        console.log('im inside filtertearfunc2')
    }

    const FilterYearFunc= (entereddata=>{
        if(filteryear==="all"){
            return entereddata
        }
        else{
            return(entereddata.filter(item=>item.Bus===filteryear))
        }      
    })


    return (
        <div>
            <h1>BUS Booking</h1>
            <select onChange={(event)=>FilterYearFunc2(event)} id='selector0'>
                <option id='all' value='all'>All</option>
                <option id='Bus10' value='Bus1'>BUS1</option>
                <option id="BUs20" value='Bus2'>BUS2</option>
                <option id="Bus30" value='Bus3'>Bus3</option>
            </select>
            <br></br>
            <form onSubmit={handleFormSubmit}>

                
                <label htmlFor="name">Name</label>
                <input ref={Nameref}type='text' id='name'></input>
                <select id='selector'>
                    <option id='Bus1' value='Bus1'>BUS1</option>
                    <option id="BUs2" value='Bus2'>BUS2</option>
                    <option id="Bus3" value='Bus3'>Bus3</option>
                </select>
                <label htmlFor="number">PHONE</label>
                <input  ref={Phoneref}type='number' id='number'></input>
                <label htmlFor="email">Email</label>
                <input ref = {Emailref} id='email' type='email'></input>
                <button type='submit'>submit</button>


            </form>
             <Onscreen totaldata={FilterYearFunc(entereddata)} Ondelete={deleteHandler} onEdit={editHandler} />

        </div>
    );
};

export default Form;
