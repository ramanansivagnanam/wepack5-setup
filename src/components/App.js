
import styled from 'styled-components';
import AddNewUser from './context/AddUserToContext';
import { UserProvider } from './context/UserContext';


import Userlist from './context/UserList';
import NavBar from './Nav/NavBar';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 0.2em;
background: papayawhip;
`;

const App = () => {
    return (
        <>
            <UserProvider>
                <NavBar />
                <AddNewUser/>
                <Wrapper>
                    <Title>
                        React Contex
                    </Title>
                    <Userlist />
                </Wrapper>
            </UserProvider>
        </>
    )
}

export default App;