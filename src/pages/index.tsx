import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { ImageBG, BlurBG, AboutSection, AbotInfo, ChooseSection, 
        ImageContainer, TextChooseContainer, ChooseBtnContainer,
        InfoLessonsAndTeacherContainer} from '../styles/HomeStyle'
import { PageBG } from '../styles/PagesComps'
import Image from 'next/image'

import StudantImage from '../../public/studantImage.svg'
import TeacherImage from '../../public/teacherImageChoose.svg'
import AboutImg from '../../public/aboutLogo.svg'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

const BASE_URL_TEACHER = 'https://aulaki-api.herokuapp.com/teacher'
const BASE_URL_LESSON = "https://aulaki-api.herokuapp.com/class"

const Home: NextPage = () => {
  const [isStudent, setIsStudant] = useState(true)
  const [teachersCount,setTeachersCount] = useState(0)
  const [lessonsCount,setLessonsCount] = useState(0)

  const getCountsData = async() =>{
    const resTeacher = await fetch(BASE_URL_TEACHER)
    const dataTeacher = await resTeacher.json()

    setTeachersCount(dataTeacher.length)

    const resLesson = await fetch(BASE_URL_LESSON)
    const dataLesson = await resLesson.json()

    setLessonsCount(dataLesson.length)
  }

  useEffect(()=>{
    getCountsData()
  },[])

  const ChooseSectionRender = () =>{
    if(isStudent)
      return (
        <ChooseSection>
          <ImageContainer>
            <Image src={StudantImage} alt="Icon of two person studying" width={450} height={450}/>
          </ImageContainer>
          <TextChooseContainer>
            <p>
              Caso você seja um estudante buscando aprender algo novo, verifique nossas aulas clicando aqui 
            </p>
            <ChooseBtnContainer>
              <Link href="/aulas">
                <button>
                  Ver aulas
                </button>
              </Link>
              <button onClick={()=>setIsStudant(false)}>
                Sou Professor
              </button>
            </ChooseBtnContainer>
          </TextChooseContainer>
        </ChooseSection>
      )

      return (
        <ChooseSection>
          <TextChooseContainer>
            <p>
              Caso você seja um professor e queira compartilhar suas aulas, aqui é seu lugar. Clique para ir para o cadastro de professores  </p>
            <ChooseBtnContainer>
              <button onClick={()=>setIsStudant(true)}>
                Sou Aluno
              </button>
              <button>
                Me Cadastrar
              </button>
            </ChooseBtnContainer>
          </TextChooseContainer>
          <ImageContainer>
            <Image src={TeacherImage} alt="Icon of two person studying" width={450} height={450}/>
          </ImageContainer>
        </ChooseSection>
      )
  }

  return (
    <PageBG>
      <Navbar />
      <ImageBG>
        <BlurBG>
        </BlurBG>
      </ImageBG>
      <AboutSection>
        <AbotInfo>
          <h1>Quem somos ?</h1>
          <p>
            <strong>Aulaki</strong> é uma plataforma que junta alguém que busca conhecimento com alguém que quer ensinar. <br/>
            Caso você seja um aluno você pode verificar as aulas disponiveis com diversos professores parceiros. 
            Caso você seja um professor você pode se cadastrar na plataformar e divulgar suas aulas aqui. 
          </p>
        </AbotInfo>
        <Image src={AboutImg} alt="Icon of two person studying" width={600} height={600}/>
      </AboutSection>
      {ChooseSectionRender()}
      <InfoLessonsAndTeacherContainer>
        <p>
          Atualmente nossa plataforma tem <strong>{teachersCount}</strong> professores 
          com um total de <strong>{lessonsCount} </strong> cursos de diversas áreas
        </p>
      </InfoLessonsAndTeacherContainer>
      <Footer/>
    </PageBG>
  )
}

export default Home
