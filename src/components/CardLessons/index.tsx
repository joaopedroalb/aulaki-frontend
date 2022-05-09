import { useCallback, useEffect, useState } from "react";
import { LessonType } from "../../pages/aulas";
import { Card } from "./style";

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
      <h1>{title}</h1>
      <p>{isRemote ? "Remoto":"Presencial"}</p>
      <p>{teacherName ? teacherName:"Not defined"}</p>
    </Card>
  )
}
