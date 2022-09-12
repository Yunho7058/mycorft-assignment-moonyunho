import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as G from '../components/Global/GlobalStyle'
import ItemBox from '../components/ItemBox'
import Spinner from '../components/Spinner'
import { itemsAPI } from '../redux/slice/items'
import { AppDispatch, RootState } from '../redux/store'

const MyOrderDetail = () => {
  const dispatch: AppDispatch = useDispatch()
  const paramsId = useParams().id
  const itemState = useSelector((state: RootState) => state.items.item)
  const [isSpinner, setIsSpinner] = useState(false)
  useEffect(() => {
    dispatch(itemsAPI(`/${paramsId}`))
    setTimeout(() => {
      setIsSpinner(true)
    }, 1500)
  }, [dispatch, paramsId])

  return (
    <G.Back>
      <G.Box>
        {!isSpinner ? (
          <Spinner />
        ) : (
          <ItemBox id={itemState?.id} itemName={itemState?.itemName} />
        )}
      </G.Box>
    </G.Back>
  )
}

export default MyOrderDetail
