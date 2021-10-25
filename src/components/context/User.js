import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
padding: 0.2em;
background: papayawhip;
`;

const User = (props) => {
    return(
        <Wrapper>
            {props.user.name}
        </Wrapper>
    )
}

export default User;