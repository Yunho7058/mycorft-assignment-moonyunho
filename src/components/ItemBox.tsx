import styled from 'styled-components'
import * as G from '../components/Global/GlobalStyle'
const Box = styled(G.Box)`
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  width: 400px;
`

const ItemBox = ({ id, itemName }: { id: number; itemName: string }) => {
  return (
    <Box>
      <div>No. {id}</div>
      <div>Name : {itemName}</div>
    </Box>
  )
}

export default ItemBox
