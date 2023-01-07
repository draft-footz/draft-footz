import styled from "styled-components";

export const CreatePlayerStyled = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        max-width: 477px;
        display: flex;
        flex-direction: column;
        gap: 29px;

        label, input, select, option {
            font-weight: 500;
            font-size: 18px;
        }

        fieldset:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        div:nth-child(2){
            display: flex;
            align-items: center;
            gap: 63px;

            fieldset {
                display: flex;
                flex-direction: column;
                gap: 15px;
                min-height: 110px;

                select {
                    width: 100%;
                    height: 40px;

                    background-color: var(--inputsBackground);

                    border-radius: 4px;
                    padding-left: 10px;
                    color: white;
                    font-size: 12px;

                    :focus {
                        border-color: var(--gray0);
                        background-color: var(--inputsBackgroundFocus);
                    }
                }
            }
        }

        span {
            color: #F94646;
            font-weight: 700;
            font-size: 9px;
        }

        button {
            max-width: 250px;
            margin: 0 auto;
        }
    }
`