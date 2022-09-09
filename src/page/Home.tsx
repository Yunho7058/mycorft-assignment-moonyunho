import styled from 'styled-components'
import Button from '../components/Global/Button'
import { Back } from '../components/Global/GlobalStyle'

const Box = styled.section`
  width: 50%;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const Image = styled.img`
  width: 50%;
  height: 50%;
`

const Home = () => {
  return (
    <Back>
      <Box>
        <Image src={require('../assets/images/testImage.png')} />
        <Button name="주문하기" />
      </Box>
    </Back>
  )
}

export default Home
