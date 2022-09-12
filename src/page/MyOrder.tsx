import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import * as G from '../components/Global/GlobalStyle'
import ItemBox from '../components/ItemBox'
import PaginationBox from '../components/PaginationBox'
import { itemsAPI } from '../redux/slice/items'
import { AppDispatch, RootState } from '../redux/store'
const Box = styled(G.Box)`
  margin-top: 70px;
  height: 650px;
  padding: 10px;
  row-gap: 10px;
  div {
    display: flex;
    flex-direction: row;
    column-gap: 25px;
    align-items: center;
    justify-content: center;
  }
`

const MyOrder = () => {
  const dispatch: AppDispatch = useDispatch()
  const itemsState = useSelector((state: RootState) => state.items.items)
  const [currentPage, setCurrentPage] = useState(itemsState.currentPage)
  useEffect(() => {
    dispatch(itemsAPI(currentPage))
  }, [currentPage])
  const pagesArr = new Array(itemsState.totalPages).fill(0)
  const handlePaginationClick = (page: number) => {
    setCurrentPage(page)
  }
  return (
    <G.Back>
      <Box>
        {itemsState.content.map((el) => (
          <ItemBox key={el.id} id={el.id} itemName={el.itemName} />
        ))}
        <div>
          {pagesArr.map((_, idx) => (
            <PaginationBox
              key={idx}
              page={idx}
              handlePaginationClick={handlePaginationClick}
            />
          ))}
        </div>
      </Box>
    </G.Back>
  )
}

export default MyOrder
