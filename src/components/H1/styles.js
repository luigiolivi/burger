import styled from 'styled-components'

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: ${props => props.isPedidos ? '36px 0 50px' : '25px 0 75px'}; 
`