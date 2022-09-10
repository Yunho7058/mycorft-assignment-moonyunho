import styled from 'styled-components'
import * as G from '../components/Global/GlobalStyle'
import ItemBox from '../components/ItemBox'
import PaginationBox from '../components/PaginationBox'
const Box = styled(G.Box)`
  margin-top: 70px;
  height: 650px;
  padding: 10px;
  row-gap: 10px;
`

const dumy = {
  totalPages: 3,
  currentPage: 0,
  content: [
    {
      id: 1,
      itemName: '아이템1',
    },
    {
      id: 2,
      itemName: '아이템2',
    },
    {
      id: 3,
      itemName: '아이템3',
    },
    {
      id: 4,
      itemName: '아이템4',
    },
    {
      id: 5,
      itemName: '아이템5',
    },
    {
      id: 6,
      itemName: '아이템6',
    },
    {
      id: 7,
      itemName: '아이템7',
    },
    {
      id: 8,
      itemName: '아이템8',
    },
    {
      id: 9,
      itemName: '아이템9',
    },
    {
      id: 10,
      itemName: '아이템10',
    },
  ],
}

const Mypage = () => {
  return (
    <G.Back>
      <Box>
        {dumy.content.map((el) => (
          <ItemBox key={el.id} id={el.id} itemName={el.itemName} />
        ))}
        <PaginationBox page={dumy.totalPages} />
      </Box>
    </G.Back>
  )
}

export default Mypage
