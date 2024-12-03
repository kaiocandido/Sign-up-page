import styled from "styled-components";

export const Header = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.div`

`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
`

export const Nav = styled.nav`
    a{
        color: #a8a8a8;
        text-decoration: none;
        margin-left: 20px;
        transition: color 0.3s;
    }

    a:hover{
        color: white;
    }
`

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 20px;
    margin-left: 330px;
    margin-top: 100px;
`

export const Content = styled.div`
    max-width: 50%;

    h1{
        font-size: 3rem;
        color: white;
    }

    p{
        font-size: 1rem;
        color: #a8a8a8;
        line-height: 1.5;
        margin-top: 20px;
    }
`

export const FormGroup = styled.form`
    margin-top: 20px;

    input{
        padding: 15px;
        width: calc(100% - 30px);
        margin-bottom: 15px;
        border: 2px solid #333;
        border-radius: 30px;
        background: #2e2e3a;
        color: white;
    }

    button{
        background: orange;
        color: white;
        padding: 15px 40px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        transition: background 0.3s;
    }

    button:hover{
        background: #e56b44;
    }
`

export const ImageContainer = styled.div`
    max-width: 40%;
    position: relative;
    
    img{
        max-width: 100%;
        border-radius: 20px;
    }

    .ellipse{
        position: absolute;
        top: 20%;
        left: -20%;
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #ff7b54, transparent);
        border-radius: 50%;
        z-index: -1;
    }
`
