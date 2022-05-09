import styled from "styled-components";

export const Card = styled.div`
    width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--red);
    color: var(--white);
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    box-shadow: 5px 8px 4px 3px rgb(0 0 0 / 25%);

    h1{
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }

    p{
        z-index: 2;
    }

    &:hover{
        .curves::before{
            background-color: hsl(216deg 100% 28%);
        }
    }
`

export const Header = styled.header`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    h1,p {
        z-index: 2;
    }
`

export const Curves = styled.div`
    position: absolute;
    height: 250px;
    width: 100%;
    bottom: 0;
    text-align: center;

    &::before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 52%;
        width: 100%;
        height: 120%;
        transform: translateX(21%);
        background-color: hsl(216,21%,16%);

        transition: 400ms;
    }
`

export const TagContainer = styled.div`
    z-index: 2;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const ContactContainer = styled.div`
    z-index: 2;
    width: 100%;
`