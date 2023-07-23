import styled from 'styled-components'

export const Container = styled.div `
    background: #0A0A10;
    height: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 10px 0 50px;
`;

export const H1 = styled.h1 `
    color: #FFF;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 25px 0 75px;
`

export const Image = styled.img `
    width: 246px;
    height: 354px;
`

export const InputLabel = styled.label `
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: calc(56px - 36px);
`
export const Input = styled.input `
    display: flex;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 40px;

    border: none;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    outline: none;

    width: 340px;
    height: 60px;

    color: white;
    font-size: 18px;
`;

export const Button = styled.button `    
    width: 342px;
    height: 68px;

    background: #D93856;

    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px;

    border: none;
    outline: none;
    cursor: pointer;

    &:hover { opacity: 0.8; }
    &:active { opacity: 0.6; }

    margin-top: calc(76px - 40px);
`
