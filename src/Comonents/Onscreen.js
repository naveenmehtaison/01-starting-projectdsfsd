// import React, { useState } from "react"
// const Onscreen=(props)=>{
    
//     const [totaldata,setTotalData]=useState(props.totaldata)

//     const deletehandler = (item) => {
//         setTotalData(totaldata.filter((_, i) => i !== item));
//     };
//     console.log(totaldata)
    
//     return(
//         <div>
//             {totaldata.map((ele,item)=>(
//                 <div key={item}>
//                     <p>{ele.Name}</p>
//                     <p>{ele.Bus}</p>
//                     <p>{ele.Email}</p>
//                     <p>{ele.Phone}</p>
//                     <button onClick={()=>deletehandler(item)} >Delete</button>
//                     <button>Edit</button>
//                 </div>
//             ))}
//         </div>


//     )

// }
// export default Onscreen
import React, { useState } from "react";

const Onscreen = (props) => {

    const [totaldata, setTotalData] = useState(props.totaldata);

    const deleteHandler = (item) => {
        setTotalData(totaldata.filter((_, i) => i !== item));
    };
    const Edithandler =(item,ele)=>{
        props.onEdit(ele)
        setTotalData(totaldata.filter((_,i)=>i!==item))
        
    }
    
    return (
        <div>
            {totaldata.map((ele, item) => (
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
