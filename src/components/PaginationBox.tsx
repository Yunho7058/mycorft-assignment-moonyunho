import styled from 'styled-components'

const PageNum = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);

  border-radius: 5px;
  width: 20px;
  height: 20px;

  cursor: pointer;
`

const PaginationBox = ({
  page,
  handlePaginationClick,
}: {
  page: number
  handlePaginationClick: (page: number) => void
}) => {
  return (
    <PageNum
      onClick={() => {
        handlePaginationClick(page)
      }}>
      {page + 1}
    </PageNum>
  )
}

export default PaginationBox
