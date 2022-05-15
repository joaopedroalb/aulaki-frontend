import {FooterBg,LinksContainer,ColumnLink,IconsContainer} from './styles'

import {AiOutlineGithub,AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {
  return (
    <FooterBg>
        <LinksContainer>
          <ColumnLink>
            <Link href="/aulas"><p>Aulas</p></Link>
            <Link href="/professores"><p>Professores</p></Link>
          </ColumnLink>

          <ColumnLink>
          <Link href="https://github.com/joaopedroalb/aulaki-frontend"><p>Frontend Repositorio</p></Link>
          <Link href="https://github.com/joaopedroalb/aulaki-backend"><p>Backend Repositorio</p></Link>
          </ColumnLink>
        </LinksContainer>

        <IconsContainer>
          <Link href="https://github.com/joaopedroalb">
            <AiOutlineGithub size={32}/>
          </Link>

          <Link href="https://www.linkedin.com/in/jo%C3%A3o-pedro-albuquerque-3047551b9/">
            <AiFillLinkedin size={32}/>
          </Link>
        </IconsContainer>
    </FooterBg>
  )
}
