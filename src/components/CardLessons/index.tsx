import { useCallback, useEffect, useState } from "react";
import { LessonType } from "../../pages/aulas";
import Tag from "../Tag";
import { Card, ContactContainer, Curves, Header, TagContainer } from "./style";
import {BsWhatsapp, BsFacebook} from 'react-icons/bs'
import Link from "next/link";

const BASE_URL = 'http://localhost:9090/teacher'

export default function CardLessons({id,title,isRemote, teacher_id, tags}:LessonType) {

  const [teacherName,setTeacherName] = useState<string|null>(null)

  const getTeacherName = useCallback(async () =>{

    const res = await fetch(BASE_URL+`/search/${teacher_id}`)
    const data = await res.json()

    setTeacherName(data.name)
  },[teacher_id])

  useEffect(()=>{
    getTeacherName()
  },[getTeacherName])

  return (
    <Card>
      <Header>
        <h1>{title}</h1>
        <p>{teacherName ? teacherName:"Not defined"}</p>
      </Header>
      <p>{isRemote ? "Remoto":"Presencial"}</p>
      <TagContainer>
        {
          tags&&tags.map(tag=><Tag key={tag} name={tag}/>)
        }
      </TagContainer>
      <ContactContainer>
        <p>Entre em contato </p>
        <Link href="https://wa.me/5585999999999">
          <BsWhatsapp/>
        </Link> 
        <Link href="https://www.facebook.com/">
          <BsFacebook />
        </Link>
      </ContactContainer>
      <Curves className="curves"></Curves>
    </Card>
  )
}
