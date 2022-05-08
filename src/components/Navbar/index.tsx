import Link from 'next/link'
import {NavBG,Logo,NavContainer,NavItem} from './style'

export default function Navbar(){
    return(
        <NavBG>
            <Link href='/'>
                <Logo>
                    Aulaki
                </Logo>
            </Link>
            <NavContainer>
                <Link href='/aulas'>
                    <NavItem>Aulas</NavItem>
                </Link>
                <NavItem>Professores</NavItem>
            </NavContainer>
        </NavBG>
    )
}