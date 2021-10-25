import React, { useState, createContext } from 'react';

import { data } from '../data/users';


export const UserContext = createContext();

export const UserProvider = (props) => {
    const [list, updateList] = useState(data);

     return (
         <UserContext.Provider value={[list, updateList]} >
             {props.children}
         </UserContext.Provider>
     );
};



