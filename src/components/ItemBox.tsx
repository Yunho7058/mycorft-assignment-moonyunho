import styled from 'styled-components'
import * as G from '../components/Global/GlobalStyle'
const Box = styled(G.Box)`
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  font-size: 15px;
  padding: 5px;
  min-width: 250px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    transform: scale(1.05);
    transition: 300ms;
  }
`

const ItemBox = ({
  id,
  itemName,
  handleItemSelect,
}: {
  id?: number
  itemName?: string
  handleItemSelect?: (id?: number) => void
}) => {
  return (
    <Box
      onClick={() => {
        handleItemSelect && handleItemSelect(id)
      }}>
      <div>No. {id}</div>
      <div>Name : {itemName}</div>
    </Box>
  )
}

export default ItemBox
