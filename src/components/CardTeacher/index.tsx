import { useCallback, useEffect, useState } from "react";
import { TeacherData } from "../../pages/professores"
import { BodyContent, InfosContainer, TeacherCard } from "./style";

const IMAGE_DEFAULT = "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
const BASE_URL = "http://localhost:9090/class/teacher/"

export default function CardTeacher({id,name,nickname,city}:TeacherData) {
    const [lessonsCount,setLessonsCount] = useState(0)

    const getData = useCallback(async () =>{
        const res = await fetch(BASE_URL+id)
        if(res.status===200){
            const data = await res.json()
            setLessonsCount(data.length)
        }else{
            setLessonsCount(0)
        }
    },[id])

    useEffect(()=>{
        getData()
    },[getData])
    
    return (
        <TeacherCard>
            <header></header>
            <BodyContent>
                <img src={IMAGE_DEFAULT} alt="Foto de perfil"/>
                <h1>{nickname}</h1>
                <InfosContainer>
                    <p><strong>{city}</strong></p>
                    <p><strong>
                        {name}</strong> de {city} traz tem um total 
                        de {lessonsCount} {lessonsCount>1?"aulas":"aula"} na nossa plataforma
                    </p>
                </InfosContainer>
            </BodyContent>
        </TeacherCard>
    );
}
