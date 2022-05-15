import styled from "styled-components";

export const ImageBG = styled.div`
    width: 100%;
    height: calc(100vh - 70px);

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
    background-color: var(--blue);
    color: var(--white);
    width: 100%;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const ImageContainer = styled.div`
    padding: 0.2rem;
    background: #004a94;
    border-radius: 25px;
    box-shadow: 5px 5px 4px rgb(0 0 0 / 25%);
`

export const TextChooseContainer = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    max-width: 600px;

    button{
        width: 160px;
        height: 45px;
        font-size: 1.1rem;
        font-weight: 700;
        padding: 0.4rem;
        border: 2px solid var(--white);
        border-radius: 25px;
        color: var(--white);
        background: transparent;
        
        transition: 400ms;

        &:hover{
            color: var(--blue);
            background: var(--white);
        }
    }
`

export const ChooseBtnContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const InfoLessonsAndTeacherContainer = styled.section`
    background: hsla(0, 0%, 100%, 1);
    background: linear-gradient(283deg,hsl(0deg 0% 100%) 0%,hsl(107deg 99% 66% / 53%) 100%);
    background: -moz-linear-gradient(283deg,hsl(0deg 0% 100%) 0%,hsl(107deg 99% 66% / 53%) 100%);
    background: -webkit-linear-gradient(283deg,hsl(0deg 0% 100%) 0%,hsl(107deg 99% 66% / 53%) 100%);
    
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    p{
        font-size: 5rem;
        text-align: center;
        font-weight: 100;
        width: 80%;

        @media screen and (max-width:700px){
            font-size: 4rem;
        }

        @media screen and (max-width:560px){
            font-size: 3rem;
        }
    }
`