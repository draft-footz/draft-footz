import styled from "styled-components";

export const StyledAssignTeamsModal = styled.div`
    background-color: #212121;
    border-radius: 1.25rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    // Aviso de nenhum time inscrito
    >span:nth-child(2) {
        box-sizing: border-box;
        width: 100%;
        align-self: center;
        padding: 1rem;

        border-radius: 1.25rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        >svg {
            width: 2rem;
            height: 2rem;
            color: white;
            transition: 500ms ease-in-out;
            opacity: 0.5;
            :hover {
                transform: rotate(360deg);
                opacity: 1;
            }
    }
}

    >h3 {
        display: flex;
        align-items: center;
        gap: 2rem;
        >svg {
            width: 2rem;
            height: 2rem;
            color: white;
            transition: 500ms ease-in-out;
            opacity: 0.5;
            :hover {
                transform: rotate(360deg);
                opacity: 1;
            }
            
        }
    }

   >div {
        >div {
            position: relative;
            >select {
                appearance: none;

                border: 1px solid rgba(255,255,255, 50%);
                background-color: rgba(255,255,255, 5%);
                box-sizing: border-box;
                width: 13.75rem;
                padding: 0.5rem 1rem;
                border-radius: 0.75rem;
                padding-right: 2rem;

                :focus{
                    outline: none;
                    border: 1px solid white;
                }

                >option {
                    background-color: #212121;
                    border-radius: 1rem;
                }
            }           
            >svg {
                    position: absolute;
                    color: white;
                    width: 1.5rem;
                    height: 1.5rem;
                    top: calc(50% - 0.75rem);
                    right: 5.25rem;
            }

            >input {
                margin-left: 1rem;
                width: 4rem;
                padding: 0.5rem 1rem;
                padding-right: 0.5rem;
                border: 1px solid rgba(255,255,255, 50%);
                background-color: rgba(255,255,255, 5%);
                border-radius: 0.75rem;
                appearance: none;
            }
        }
    }

    >div:nth-child(5) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        >div{
            >select {
                width: 13.25rem;
            }
            >svg {
                right: 0.25rem;
            }
        }
            
    }
    >button {
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        height: 2.5rem;
        margin-top: 1rem;
    }
`;