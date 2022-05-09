import styled from "styled-components";

type PageProps = {
    bgColor?:string
}

export const PageBG = styled.div<PageProps>`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.bgColor};
    padding-bottom: 1rem;
`