import { HeaderContainer, Logo } from "./styled"
import React from 'react'

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="https://i.postimg.cc/pLmsHWzv/tmdblogo.png" alt="The Movie Database Logo" />
        </HeaderContainer>
    )
}

export default Header