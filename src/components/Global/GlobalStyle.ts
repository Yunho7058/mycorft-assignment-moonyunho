import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        -ms-overflow-style: none;
        margin:0px;
        background-color: rgb(248,248,250);
    }
    ::-webkit-scrollbar {
        display: none;
    }
`
export const Back = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default GlobalStyle
