import styled from 'styled-components'

const Btn = styled.button`
  all: unset;
  border: 1px solid;
  width: 50%;
  height: 50px;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 255, 0.4);
  }
`

const Button = ({ name, handle }: { name: string; handle?: () => void }) => {
  return <Btn onClick={handle}>{name}</Btn>
}

export default Button
