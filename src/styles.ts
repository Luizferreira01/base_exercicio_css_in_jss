import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width:
  width:
  margin:

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
