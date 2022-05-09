import styled from "styled-components";

export const LessonsBG = styled.div`
    width: 100%;
    padding-bottom: 1rem;
`

export const HeaderInput = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    gap: 1rem;
`

export const SearchInput = styled.input`
    max-width: 75%;
    flex: 1;
    height: 35px;
    padding: 0 1rem 0 1rem;
    border: none;
    border-bottom: 1px solid var(--black);
    background-color: transparent;

    &::placeholder{
        color: gray;
    }

    &:focus{
        background-color: var(--white);
    }
`

export const TagSelect = styled.select`
    height: 35px;
    border: none;
    text-align: center;
    font-weight: 800;
    border-radius: 5px;
`

export const BtnSearch = styled.button`
    width: 120px;
    height: 35px;
    padding: 0 1rem 0 1rem;
    border: none;
    border-radius: 5px;
    background-color: var(--white);
`

export const LessonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    padding: 0 2rem 0 2rem;
`

