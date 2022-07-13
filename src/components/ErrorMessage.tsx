import styled from "styled-components"

interface ErrorMessageProps {
  error: string
}

export const ErrorBar = styled.div`
  background-color: #f20;
  color: #fff;
  padding: 10px 10px 15px 10px;
  font-size: 20px;
  font-weight: bold;
`

const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => {
  return <ErrorBar>{error}</ErrorBar>
}

export default ErrorMessage
