import styled from "styled-components";

export const Card = styled.div`
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--white);
    border-radius: 25px;

    h1{
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }
`