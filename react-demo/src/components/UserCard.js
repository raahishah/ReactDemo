import React from "react";
import user from "../images/user.png";

const UserCard = (props) => {
    const { id, name, email } = props.user;
    
    return (
            <tr>
        {/* <td><img src={user} style={{height:"50px", width:"50px"}} alt="user" /></td> */}
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td><i className="trash alternate outline icon"
        
        style={{color:"red", marginTop:"7px"}}
        onClick={()=>props.clickHandler(id)}
        ></i></td>
    </tr>
    );
};

export default UserCard;

