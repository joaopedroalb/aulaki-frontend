import { useCallback, useEffect, useState } from "react";
import { LessonType } from "../../pages/aulas";
import Tag from "../Tag";
import { Card, ContactContainer, Curves, Header, TagContainer } from "./style";
import {BsWhatsapp, BsFacebook} from 'react-icons/bs'
import Link from "next/link";

const BASE_URL = 'http://localhost:9090/teacher'

type TeacherInfos = {
  name:string
  nickname:string
  phone:string
  facebook:string
}

export default function CardLessons({id,title,isRemote, teacher_id, tags}:LessonType) {

  const [teacher,setTeacher] = useState<TeacherInfos|null>(null)

  const getTeacher = useCallback(async () =>{

    const res = await fetch(BASE_URL+`/search/${teacher_id}`)
    const data = await res.json()
    const {name,nickname,phone,facebook} = data

    setTeacher({name,nickname,phone,facebook})
  },[teacher_id])

  const getUrlWpp = () =>{
    const msg = ('Ola gostaria de ter aula de '+title).replaceAll(/\s/g,"%20")
    const link = `https://api.whatsapp.com/send/?phone=${teacher?.phone}&app_absent=0&text=${msg}`
    return link
  }

  useEffect(()=>{
    getTeacher()
  },[getTeacher])

  return (
    <Card>
      <Header>
        <h1>{title}</h1>
        <p>{teacher?.name ? teacher.name:"Not defined"}</p>
      </Header>
      <p>{isRemote ? "Remoto":"Presencial"}</p>
      <TagContainer>
        {
          tags&&tags.map(tag=><Tag key={tag} name={tag}/>)
        }
      </TagContainer>
      <ContactContainer>
        <p>Entre em contato </p>
        <Link href={teacher != null ? getUrlWpp(): ''}>
          <BsWhatsapp/>
        </Link> 
        <Link href={teacher != null ? teacher.facebook:''}>
          <BsFacebook />
        </Link>
      </ContactContainer>
      <Curves className="curves"></Curves>
    </Card>
  )
}
