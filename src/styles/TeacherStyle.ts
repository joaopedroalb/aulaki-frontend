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

    button{
        height: 30px;
        width: 100px;
        background-color: var(--white);
        border: none;
        border-radius: 5px;
    }
`