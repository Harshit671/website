import styled from "styled-components";

const Button= styled.button`
        background-color: $(props => props.primary ? rgb(31, 124, 31) : grey) ;
        color: $(props => props.primary ? #fff : black) ;
`;

export default Button