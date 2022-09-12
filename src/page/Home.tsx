import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Global/Button'
import * as G from '../components/Global/GlobalStyle'
import { RootState } from '../redux/store'

const Box = styled(G.Box)`
  justify-content: space-around;
`
const Image = styled.img`
  width: 50%;
  height: 50%;
`

const Home = () => {
  const loginState = useSelector((state: RootState) => state.login)
  const navigate = useNavigate()
  const handleOrderClick = () => {
    if (loginState.isLogin) {
      alert('주문하기 성공')
    } else {
      alert('로그인 후 다시 주문해주세요.')
      navigate('/sign-up')
    }
  }
  return (
    <G.Back>
      <Box>
        <Image src={require('../assets/images/testImage.png')} />
        <Button name="주문하기" handle={handleOrderClick} />
      </Box>
    </G.Back>
  )
}

export default Home
