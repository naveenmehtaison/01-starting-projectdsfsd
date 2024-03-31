
import React, { useState } from "react";

const Onscreen = (props) => {
    console.log(props.Ondelete)
    

    // const [totaldata1, setTotalData] = useState(props.totaldata);

    const deleteHandler = (item) => {
        // console.log(props.Ondelete)
        // setTotalData(totaldata1.filter((_, i) => i !== item));
        props.Ondelete(item)
    };
    const Edithandler =(item,ele)=>{
        props.onEdit(item,ele)
        // setTotalData(totaldata1.filter((_,i)=>i!==item))
        
    }

    return (
        <div>
            {props.totaldata.map((ele, item) => (

                <div key={item}>
                    <p>{ele.Name}</p>
                    <p>{ele.Bus}</p>
                    <p>{ele.Email}</p>
                    <p>{ele.Phone}</p>
                    <button onClick={() => deleteHandler(item)}>Delete</button>
                    <button onClick={()=>Edithandler(item,ele)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default Onscreen;
