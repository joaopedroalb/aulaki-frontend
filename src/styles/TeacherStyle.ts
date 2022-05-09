import styled from "styled-components";

export const TeacherContent = styled.div`
    width: 100%;
    flex:1;
    background-color: var(--red);
    display: flex;
    padding: 1rem 0 1rem 0;
    flex-direction: column;
    gap: 1rem;
`

export const Header = styled.div`
    width: 100%;
    padding: 0 1rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;

    input{
        flex:1;
        height: 30px;
        border: none;
        border-radius: 5px;
    }

    .inputCity{
        max-width: 30%;
    }

    .inputName{
        flex-grow: 3;
    }

    button{
        height: 30px;
        width: 100px;
        background-color: var(--white);
        border: none;
        border-radius: 5px;
    }
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`