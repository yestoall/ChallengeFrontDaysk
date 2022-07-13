import { DEFAULT_PHOTO_IMAGE } from "../configuration/APIurls"

interface RecipeImageProps {
  photo?: string
}

const RecipeImage = ({ photo }: RecipeImageProps): JSX.Element => {
  return <img src={photo ? photo : DEFAULT_PHOTO_IMAGE} alt="" />
}

export default RecipeImage
