import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const AddNewUser = () => {

    const [name, setUserName] = useState('');
    const [age, setUserAge] = useState('');

    const [list, updateList] = useContext(UserContext);



    const AddUserToContext = (event) => {
        event.preventDefault();
        updateList([...list, { id: list.length + 1, name, age }])
        setUserName('');
        setUserAge('');

    };

    return (
        <form onSubmit={AddUserToContext}>
            <input type="text" name="name" value={name} onChange={(event) => setUserName(event.target.value)} placeholder="UserName" />
            <input type="number" name="age" value={age} onChange={(event) => setUserAge(event.target.value)} placeholder="Age" />
            <button>Add User</button>

        </form>
    )
};

export default AddNewUser;