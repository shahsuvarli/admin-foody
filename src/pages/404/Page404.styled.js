import styled from "styled-components";
import { Button } from 'reactstrap';

export const Img404 = styled.img`
    margin: auto;
`

export const Btn404 = styled(Button)`
    height: 40px;
    background-color: rgba(192, 53, 162, 1);
    transition: .3s all ease-in-out;
    border: none;
    &:hover, &:focus, &:active {
        background-color: rgba(192, 53, 162, .8);
    }
    
`