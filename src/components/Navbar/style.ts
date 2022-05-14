import styled  from "styled-components";

export const NavBG = styled.div`
    width: 100%;
    height: 70px;
    background-color: var(--white);
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5% 0 2rem;
`

export const Logo = styled.h1`
    font-size: 1.5rem;
    cursor: pointer;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const NavItem = styled.p`
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 400;

    transition: 400ms;
    &:hover{
        background-color: #e3e1e1;
    }
`