import styled, { keyframes } from 'styled-components'

const Rotate = keyframes`     
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`
const Main = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 4px solid #6495ed;
  border-top-color: transparent;
  border-left-color: transparent;
  animation: ${Rotate} 0.7s infinite linear;
`

const Spinner = () => {
  return <Main></Main>
}

export default Spinner
