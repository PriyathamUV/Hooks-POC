import React from 'react';

function Details(props){
return(
    <div className="container1">
           <h1 className="text-dark"> Your mail id is: </h1>
            <h3 className="text-white"> {props.email}</h3>
         </div>
);
}

export default Details;