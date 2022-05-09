import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { PageBG } from "../styles/PagesComps";
import {useRouter} from 'next/router'
import Link from "next/link";
import { BtnSearch, HeaderInput, SearchInput,LessonsContainer } from "../styles/ClassStyle";
import CardLessons from "../components/CardLessons";

export type LessonType = {
  id: number, 
  title:string,
  isRemote: boolean,
  teacher_id: number,
  tags:Array<string>
}

const BASE_URL = "http://localhost:9090/class"


export default function Aulas() {

  const router = useRouter();
  const {title} = router.query
  const [filter,setFilter] = useState<string>('')

  const [lessons, setLessons] = useState<Array<LessonType>|null>(null)

  const getData = useCallback(async () =>{
    const res = title ? await fetch(BASE_URL+`?title=${title}`):await fetch(BASE_URL)
    const data = await res.json()
    setLessons(data)
    setFilter(typeof title == "string" ? title:'')
  },[title])

  useEffect(()=>{
    getData()
  },[getData])
  

  return (
    <PageBG bgColor="var(--l-blue)">
        <Navbar/>
        <div>
          <HeaderInput>
            <SearchInput type="text" onChange={({target})=>setFilter(target.value)} value={filter} placeholder="Pesquise por titulos ..."/>
            <Link href={`/aulas?title=${filter}`}>
              <BtnSearch >Pesquisar</BtnSearch>
            </Link>
          </HeaderInput>
          <LessonsContainer>
            {
              lessons&&lessons.map(lesson=><CardLessons {...lesson} key={lesson.id}/>)
            }
          </LessonsContainer>
        </div>
    </PageBG>
  )
}
