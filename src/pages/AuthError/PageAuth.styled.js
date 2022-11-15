import styled from "styled-components";
import { Button } from 'reactstrap';

export const ErrorDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
`
export const ImgAuth = styled.img`
    width: 80%;
    object-fit: cover;
    margin-left: 20px;
    margin-top: 20px;
    clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
`

export const BtnAuth = styled(Button)`
    height: 40px;
    background-color: rgba(192, 53, 162, 1);
    transition: .3s all ease-in-out;
    border: none;
    &:hover, &:focus, &:active {
        background-color: rgba(192, 53, 162, .8);
    }
`