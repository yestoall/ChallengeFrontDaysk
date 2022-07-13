type APIcallResult = {
  error: boolean
  errorMessage: string
  data?: []
}

const APIcall = async (url: string) => {
  let result: APIcallResult = {
    error: false,
    errorMessage: "",
    data: [],
  }
  try {
    const resp = await fetch(url)
    if (resp.status === 200) {
      const { data } = await resp.json()
      result = { ...result, data }
    } else {
      result = { ...result, error: true, errorMessage: `ERROR loading ${url}` }
    }
    return result
  } catch (error) {
    return { error: true, errorMessage: `ERROR loading ${url}` }
  }
}

export default APIcall
