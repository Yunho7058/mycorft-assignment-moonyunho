import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import * as G from '../components/Global/GlobalStyle'
import ItemBox from '../components/ItemBox'
import PaginationBox from '../components/PaginationBox'
import Spinner from '../components/Spinner'
import { itemsAPI } from '../redux/slice/items'
import { AppDispatch, RootState } from '../redux/store'
const Box = styled(G.Box)`
  height: 540px;
  padding: 10px;
  row-gap: 5px;
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
  const navigate = useNavigate()
  const itemsState = useSelector((state: RootState) => state.items.items)
  const [currentPage, setCurrentPage] = useState(itemsState.currentPage)
  const [isSpinner, setIsSpinner] = useState(false)
  useEffect(() => {
    const url = `?page=${currentPage}`
    dispatch(itemsAPI(url))
    setTimeout(() => {
      setIsSpinner(true)
    }, 1500)
  }, [currentPage, dispatch])

  const pagesArr = new Array(itemsState.totalPages).fill(0)

  const handlePaginationClick = (page: number) => {
    setIsSpinner(false)
    setCurrentPage(page)
  }

  const handleItemSelect = (id?: number) => {
    id && navigate(`/mypage/order/${id}`)
  }
  return (
    <G.Back>
      {!isSpinner ? (
        <Box>
          <Spinner />
        </Box>
      ) : (
        <Box>
          {itemsState.content.map((el) => (
            <ItemBox
              key={el.id}
              id={el.id}
              itemName={el.itemName}
              handleItemSelect={handleItemSelect}
            />
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
      )}
    </G.Back>
  )
}

export default MyOrder
