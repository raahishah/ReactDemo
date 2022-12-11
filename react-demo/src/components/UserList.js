import React from "react";
import UserCard from "./UserCard";
import ReactTable from "react-table";  

const UserList = (props) =>
{
    console.log(props);
    const deleteUserHandler = (id) =>{
        props.getUserId(id);

    };

    const renderUserList = props.users.map((user) =>{
        return (
            <UserCard
                    user={user}
                    clickHandler={deleteUserHandler}
                    key={user.id} />
        );
    });

    return <div><table>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
    </tr>
    {renderUserList}
</table></div>
};

export default UserList;