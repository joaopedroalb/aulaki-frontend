import styled from "styled-components";

export const ImageBG = styled.div`
    width: 100%;
    height: calc(100vh - 5rem);

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(0deg, rgba(159, 159, 159, 0.1), rgba(159, 159, 159, 0.1)), linear-gradient(0deg, rgba(223, 2, 20, 0.03), rgba(223, 2, 20, 0.03)),url('homeimage.jpg') no-repeat center center;
    background-size: cover;
    background-position: right 57% bottom 24%;

    display: flex;
`

export const BlurBG = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    background: rgb(125 255 254 / 3%);
    backdrop-filter: blur(2px);
`

export const AboutSection = styled.section`
    width: 100%;
    min-height: 70vh;
    background-color: var(--orange);
    padding: 1rem;
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
`

export const AbotInfo = styled.div`
    min-width: 395px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 2rem;

    h1{
        margin-bottom: 3rem;
        font-size: 2.5rem;
    }

    p{
        font-size: 1.75rem;
        line-height: 3rem;
    }
`

export const ChooseSection = styled.section`
    background-color: var(--l-blue);
    width: 100%;
    padding: 2rem 0 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`