import styled from "styled-components";

export const TeacherCard = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--white);
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    header{
        width: 100%;
        min-height: 70px;
        background-color: hsl(216deg 100% 28%);

        transition: 400ms;
    }

    img{
        width: 80px;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        top: 15px;
    }

    &:hover{
        header{
            background-color: var(--l-blue);
        }
    }
`

export const BodyContent = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem .8rem .8rem 1rem;
`

export const InfosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`