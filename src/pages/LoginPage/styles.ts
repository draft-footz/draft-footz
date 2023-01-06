import styled from "styled-components";
import bg from "../../img/background.svg"

export const BackgroundDiv = styled.div`
    background: url(${bg});
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormBox = styled.div`
    background: rgba(33, 33, 33, 0.58);
    border-radius: 20px;
    width: 40%;
    min-width: 292px;
    height: 549px;
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
        margin-top: 26px;
    }

    h2 {
        font-weight: 500;
        font-size: 18px;
    }

    form {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        
        div {
            display: flex;
            justify-content: flex-end;
        }

        small {
            font-weight: 700;
            font-size: 10px;
            

            :hover {
                cursor: pointer;
            }
        }

        span {
            color: #F94646;
            font-weight: 700;
            font-size: 9px;
        }
    }

    h4 {
        font-weight: 500;
        font-size: 13px;
        margin: 20px 0 22px 0;
    }

    .social {
        display: flex;
        justify-content: center;
        gap: 35px;
        width: 100%;

        @media (max-width: 850px){
            padding: 0 10px;
        }
    }

    p {
        font-weight: 500;
        font-size: 14px;
        margin-top: 21px;

        @media (max-width: 850px){
            font-size: 10px;
        }

        .link {
            font-weight: 700;
            font-size: 14px;
            color: var(--primary);

            @media (max-width: 850px){
            font-size: 10px;
            }

            :hover{
                cursor: pointer;
            }
        }
    }
`