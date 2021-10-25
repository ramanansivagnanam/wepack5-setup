import React , { useContext  } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/UserContext';

const NavBarWrapper = styled.div`
   display:flex;
   flex:1;
   height:60px;
   background: palevioletred;
   text-align:center;
`;

const NavBar = () => {

    const [ list, updatelist] = useContext(UserContext);


    return(
        <NavBarWrapper>
            <h5>Total Users: {list.length}</h5>
        </NavBarWrapper>
    )
};


export default NavBar;
