import styled from 'styled-components'


export const Image = styled.img`
    width: 246px;
    height: 354px;
`

export const Order = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 342px;
    height: 101px;

    margin-bottom: 20px;
    padding: 17px 15px 13px 27px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
        
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;
        width: 85%;

        p {
            color: #FFF;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        };

        h1 {
            color: #FFF;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            width: 24px;
            height: 28px;
        }
    }

        button {
            align-items: end;
            background: none;
            border: none;

            width: 28px;
            height: 28px;

            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
            }
        }
`