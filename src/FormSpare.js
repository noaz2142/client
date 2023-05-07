import React from 'react';

import { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
function FormSpare(){
    
    const [inputFiels, setInputFiels]= useState([
        {
            type:"number",
            placeholder:"enter id for part for device"
        },
        {
            type:"text",
            placeholder:"enter status for part"
        },
        {
            type:"number",
            placeholder:"enter user id"
        },
        {
            type:"date",
            placeholder:"enter date of taken"
        },
        {
            type:"number",
            placeholder:"enter price of part"
        }
   ] )
    return (
        <form>
            {inputFiels.map(item=> 
           <MDBInput label='Form control lg' type={item.type} placeholder={item.placeholder} />
                //<input type={item.type} placeholder={item.placeholder}/>
                )}
        </form>
    );

}
export default FormSpare;