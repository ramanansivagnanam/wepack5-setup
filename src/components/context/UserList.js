import React, { useContext } from 'react';

import User from './User';
import { UserContext } from './UserContext';



const Userlist = () => {
    const [ list, updatelist] = useContext(UserContext);
    return (
        <div>
            {list.map(user => {
                return (
                    <User key={user.id} user={user} />
                );
            })}
        </div>
    );
}

export default Userlist;