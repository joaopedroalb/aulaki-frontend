import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { ImageBG, BlurBG, AboutSection, AbotInfo, ChooseSection } from '../styles/HomeStyle'
import { PageBG } from '../styles/PagesComps'
import Image from 'next/image'

import AboutImg from '../../public/aboutLogo.svg'

const Home: NextPage = () => {
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
      <ChooseSection>
        Aluno ou Professor
      </ChooseSection>
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
