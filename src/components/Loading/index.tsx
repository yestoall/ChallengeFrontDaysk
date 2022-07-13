import styled from "styled-components"

export const LoadingBar = styled.div`
  background-color: #f20;
  color: #fff;
  padding: 10px 10px 15px 10px;
  font-size: 30px;
  font-weight: bold;
`

const Loading = (): JSX.Element => {
  return <LoadingBar>Loading...</LoadingBar>
}

export default Loading
