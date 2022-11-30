import React from "react";
import user from "../images/user.png";

const UserCard = (props) => {
    const { id, name, email } = props.user;
    return (
        <div>
            <img src={user} alt="user" />
            <div>
                <div>{name}</div>
                <div>{email}</div>
            </div>
        <i 
        
        style={{color:"red", marginTop:"7px"}}
        onClick={()=>props.clickHandler(id)}
        ></i>
        </div>
    );
};

export default UserCard;

