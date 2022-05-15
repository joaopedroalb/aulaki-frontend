import styled from "styled-components";

export const FooterBg = styled.footer`
    width: 100%;
    min-height: 20vh;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5% 0 10%;
    color: #868788;
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const ColumnLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
        cursor: pointer;
        transition: 400ms;
        &:hover{
            color: var(--white);
        }
    }
`

export const IconsContainer = styled.div`
    align-self: flex-end;
    display: flex;
    gap: .5rem;
    margin-bottom: 3.5rem;

    svg{
        color: #868788;
        transition: 400ms;
        &:hover{
            color: var(--white);
        }
    }
`