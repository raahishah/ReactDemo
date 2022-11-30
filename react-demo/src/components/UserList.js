import React from "react";
import UserCard from "./UserCard";

const UserList = (props) =>{

    const deleteUserHandler = (id) =>{
        props.getUserId(id);

    };

    const renderUserList = props.users.map((user) =>{
        return (
            <UserCard 
            user={user}
            clickHandler={deleteUserHandler}
            key={user.id}
            />
        );
    });

    return <div></div>
};

export default UserList;