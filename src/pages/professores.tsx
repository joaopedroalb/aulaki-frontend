import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { PageBG } from "../styles/PagesComps";
import { Header, TeacherContent } from "../styles/TeacherStyle";
import {useRouter} from 'next/router'
import Link from "next/link";

export type TeacherData = {
  id:number,
  name:string
  nickname:string
  city:string
}

const BASE_URL = 'http://localhost:9090/teacher'

export default function Teacher() {

  const router = useRouter()
  const {name,city} = router.query
  
  const [teachers,setTeachers] = useState<Array<TeacherData>|null>(null)

  const [queryName,setQueryName] = useState('');
  const [queryCity,setQueryCity] = useState('');

  const getData = useCallback(async ()=>{
    

    const res = await fetch(BASE_URL+`?city=${city?city:''}&name=${name?name:''}`)

    if (res.status !== 200) {
      setTeachers(null)
  } else {
      const data = await res.json();
      setTeachers(data)
  }

  },[name,city])

  useEffect(()=>{
    getData()
  },[getData])

  return (
    <PageBG>
        <Navbar />
        <TeacherContent>
          <Header>
            <input type="text" onChange={({target})=>setQueryName(target.value)} placeholder="Pesquisar pelo nome ..."/>
            <input type="text" onChange={({target})=>setQueryCity(target.value)} placeholder="Pesquisar pela cidade ..."/>
            <Link href={`/professores?city=${queryCity}&name=${queryName}`}>
              <button>
                Pesquisar
              </button>
            </Link>
          </Header>
          <div>
            {
              teachers&&teachers.map(teacher=><p key={teacher.id}>{teacher.name}</p>)
            }
          </div>
        </TeacherContent>
    </PageBG>
  )
}
