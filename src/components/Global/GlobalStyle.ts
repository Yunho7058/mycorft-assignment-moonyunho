import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        -ms-overflow-style: none;
        margin:0px;
        background-color: rgb(248,248,250);
        height:100vh;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    input{
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.4);
        width: 46%;
        height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 20px;
        border-radius: 15px;
    }
    h1{
        font-size: 18px;
    }
`
export const Back = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled.section`
  max-width: 500px;
  min-width: 340px;
  margin-top: 100px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default GlobalStyle
