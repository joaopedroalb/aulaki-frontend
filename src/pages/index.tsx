import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { ImageBG, BlurBG, AboutSection, AbotInfo, ChooseSection, 
        ImageContainer, TextChooseContainer, ChooseBtnContainer } from '../styles/HomeStyle'
import { PageBG } from '../styles/PagesComps'
import Image from 'next/image'

import StudantImage from '../../public/studantImage.svg'
import TeacherImage from '../../public/teacherImageChoose.svg'
import AboutImg from '../../public/aboutLogo.svg'
import { useState } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
  const [isStudent, setIsStudant] = useState(true)

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
            <strong>Aulaki</strong> é uma plataforma que junta alguem que busca conhecimento com alguem que quer ensinar <br/>
            Caso você seja um aluno você pode verificar as aulas disponiveis com diversos professores parceiros. 
            Caso você seja um professor você pode se cadastrar na plataformar e divulgar suas aulas aqui. 
          </p>
        </AbotInfo>
        <Image src={AboutImg} alt="Icon of two person studying" width={600} height={600}/>
      </AboutSection>
      {ChooseSectionRender()}
      <section>
        Cursos hoje
      </section>
      <footer>
        Footer
      </footer>
    </PageBG>
  )
}

export default Home
