import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { PageBG } from "../styles/PagesComps";
import {useRouter} from 'next/router'
import Link from "next/link";
import { BtnSearch, HeaderInput, SearchInput,InptContainer,LessonsContainer, TagSelect, LessonsBG } from "../styles/ClassStyle";
import CardLessons from "../components/CardLessons";

export type LessonType = {
  id: number, 
  title:string,
  isRemote: boolean,
  teacher_id: number,
  tags:Array<string>
}

const BASE_URL = "https://aulaki-api.herokuapp.com/class"


export default function Aulas() {

  const router = useRouter();
  const {title} = router.query

  const [filter,setFilter] = useState<string>('')
  const [lessons, setLessons] = useState<Array<LessonType>|null>(null)
  const [tags,setTags] = useState<Array<string>|null>(null)
  const [filterTag,setFilterTags] = useState<string>("")

  const getData = useCallback(async () =>{
    const res = title ? await fetch(BASE_URL+`?title=${title}`):await fetch(BASE_URL)
    const data = await res.json()
    setLessons(data)
    setFilter(typeof title == "string" ? title:'')
  },[title])

  const getTags = async () =>{
    const res = await fetch(BASE_URL+"/tag")
    const data = await res.json()

    setTags(data)
  }

  useEffect(()=>{
    getData()
    getTags()
  },[getData])

  const getList = (lst:Array<LessonType>):Array<LessonType> => {
    const filterList = filterTag !="" ? lst.filter(x=>x.tags.indexOf(filterTag)>=0) : lst

    return filterList
  }
  

  return (
    <PageBG bgColor="var(--l-blue)">
        <Navbar/>
        <LessonsBG>
          <HeaderInput>
            <SearchInput type="text" onChange={({target})=>setFilter(target.value)} value={filter} placeholder="Pesquise por titulos ..."/>
            <InptContainer>
              <TagSelect onChange={({target})=>setFilterTags(target.value)}>
                <option defaultValue={""} value="">All</option>
                {
                  tags&&tags.map((tag,i:number)=><option key={i} value={tag}>{tag}</option>)
                }
              </TagSelect>
              <Link href={`/aulas?title=${filter}`}>
                <BtnSearch >Pesquisar</BtnSearch>
              </Link>
            </InptContainer>
          </HeaderInput>
          <LessonsContainer>
            {
              lessons&&getList(lessons).map(lesson=><CardLessons {...lesson} key={lesson.id}/>)
            }
          </LessonsContainer>
        </LessonsBG>
    </PageBG>
  )
}
