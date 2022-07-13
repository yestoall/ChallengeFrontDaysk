import { Link } from "react-router-dom"
import { Header } from "./styles"

interface NavigationBarProps {
  route?: string
}

const NavigationBar = (props: NavigationBarProps): JSX.Element => {
  return (
    <Header>
      <Link to={props.route ? props.route : "/"}>
        <h1>Food Recipes</h1>
      </Link>
    </Header>
  )
}

export default NavigationBar
