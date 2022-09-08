import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <h1>
        <b>CV MAKER</b>
          </h1>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
`

const HeaderWrapper = styled.div`

  font-family:'Lovelo' ,'OpenSans' , cursive, sans-serif;
  display: flex;
  align-items: center;
  max-width: 1800px;
  padding: 3rem 8rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.5rem;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`

export default Header
