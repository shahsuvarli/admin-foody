import styled from "styled-components";
import {
    Dropdown,
    DropdownMenu,
} from "reactstrap";

export const LoginSection = styled.div`
    background-color: #1E1E30;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    z-index: 999;
`

export const LogoDiv = styled.div`
    margin-top: 30px;
    margin-left: 22px;
`

export const LoginDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(56, 57, 78, 1);
    width: 800px;
    height: 350px;
    display: flex;
    @media (max-width: 872px) {
        width: 700px;
    }
    @media (max-width: 768px) {
        width: 50%;
        flex-direction: column-reverse;
        background-color: transparent;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 572px) {
        width: 70%;
    }
`

export const LoginForm = styled.div`
    width: 50%;
    padding: 40px 30px;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const LoginImage = styled.div`
    background-color: #fff;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
        display: block;
    }
    @media (max-width: 768px) {
        background-color: transparent;
        width: 100%;
    }
`

export const DropdownLang = styled(Dropdown)`
    position: absolute;
    top: 10px; 
    right: -10px;
    button {
        background-color: transparent !important;
        border: none;
        padding: 0;
        margin-right: 20px;
        &:hover, &:active, &:focus {
            box-shadow: none !important;
        }
        img {
            width: 41px;
        }
    }
    @media (max-width: 768px) {
        top: -100px; 
        right: -40px;
    }
`

export const DropdownMenuLang = styled(DropdownMenu)`
    background-color: transparent;
    min-width: 60px !important;
    max-width: 60px;
    border: none;
    margin-left: -9px;
    .dropdown-item {
        margin: 0 9px;
        min-width: 42px !important;
        max-width: 42px;
        img {
            padding: 5px 0 7px 0;
        }
    }
`

export const WelcomeText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    color: rgba(199, 199, 199, 1);
    @media (max-width: 572px) {
        font-size: 16px;
    }
`
export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    @media (max-width: 768px) {
        height: 100%;
    }
`
export const SignInput = styled.input`
    padding: 15px 20px;
    background-color: rgba(90, 91, 112, 1);
    border-radius: 4px;
    border: none;
    color: rgba(199, 199, 199, 1);
    font-weight: 400;
    font-size: 18px;
    &::placeholder {
        color: rgba(199, 199, 199, 1);
        font-weight: 400;
        font-size: 18px;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 3px 0 rgba(192, 53, 162, 1);
    }
    @media (max-width: 572px) {
        font-size: 14px;
        padding: 5px 10px;
        &::placeholder {
        font-size: 14px;
    }
    }
`
export const SignBtn = styled.button`
    background-color: rgba(192, 53, 162, 1);
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    transition: .3s all ease-in-out;
    &:hover {
        background-color: rgba(192, 53, 162, .8);
    }
    @media (max-width: 572px) {
        font-size: 16px;
        padding: 5px;
    }
`

export const ErrorText = styled.div`
    font-size: 13px;
    color: red;
`