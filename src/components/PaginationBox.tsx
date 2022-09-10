import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 25px;
  font-size: 15px;
  div {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-radius: 5px;
    width: 10px;
    height: 10px;
    text-align: center;
    line-height: 10px;
    cursor: pointer;
  }
`

const PaginationBox = ({ page }: { page: number }) => {
  const paginationArr = new Array(page + 1).fill(0)
  return (
    <Box>
      {paginationArr.map((_, idx) => (
        <div key={idx}>{idx + 1}</div>
      ))}
    </Box>
  )
}

export default PaginationBox
