import styled from 'styled-components'

export const Button = styled.button `    
    width: 342px;
    height: 68px;

    background: ${props => props.isGray ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};

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
