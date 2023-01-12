import styled from "styled-components";

export const StyledDashboardMenu = styled.div`
    background-color: rgba(33,33,33,90%);
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 2rem;
    position: relative;

    box-sizing: border-box;
    height: 5rem;

    >figure {
        >img {
            display: none;
        }

        >div {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
    }

    >div:nth-child(2) {
        width: 2rem;
        height: 2rem;

        >svg {
            height: 100%;
            width: 100%;
            >:nth-child(1) {
                color: white;
            }
        }
        :hover {
            >div:nth-child(2) {
                display: flex;
            }
        }
        >div:nth-child(2) {
            background-color: rgba(33,33,33,95%);
            display: none;
            flex-direction: column;
            z-index: 2;

            width: max-content;
            position: absolute;
            right: 0;
            top: 5rem;


            border-bottom-left-radius: 1.5em;
            border-bottom-right-radius: 1.5em;

            >nav {
                display: flex;
                flex-direction: column;
                width: 100vw;
                >button {
                    background-color: transparent;
                    padding: 0.5rem 2.5rem;
                    border-bottom: 1px solid rgba(255,255,255, 5%);
                }

                .selected {
                    background-color: var(--primary);
                }
            }
            >button {
                background-color: rgba(55,55,55,95%);
                padding: 0.5rem 2.5rem;
                border-bottom-left-radius: 1.5em;
                border-bottom-right-radius: 1.5em;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }
            }

        }


        @media (min-width: 800px) {    
            display: flex;
            flex-direction: column;
            min-width: 18rem;
            height: 100%;
            align-items: center;
            justify-content: flex-start;
            position: relative;

            padding: 0;

            box-sizing: border-box;

            border-bottom-left-radius: 1.5rem;
            border-top-left-radius: 1.5rem;

            >figure {
                >img {
                    padding: 2rem;
                    display: block;
                }

                >div {
                    display: none;

                }
            }

            >div:nth-child(2) {
                width: 100%;
                height: max-content;

                >svg {
                    display: none;
                }
                

                >div:nth-child(2) {
                    background-color: rgba(33,33,33,95%);
                    display: flex;
                    flex-direction: column;

                    width: 100%;
                    position: static;

                    >nav {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        
                        >button {
                            background-color: transparent;
                            padding: 1.25rem 2.5rem;
                            border-bottom: 1px solid rgba(255,255,255, 5%);

                            :hover {
                                filter: brightness(1.1);
                            }
                        }

                        .selected {
                            background-color: var(--primary);
                        }
                    }
                    >button {
                        background-color: rgba(55,55,55,95%);
                        padding: 1.25rem 2.5rem;
                        border-bottom-left-radius: 1.5em;
                        border-bottom-right-radius: 0;

                        position: absolute;
                        bottom: 0;
                        width: 18rem;
                    }
                    }

                }
        }
`;