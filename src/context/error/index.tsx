import {
  createContext,
  useContext,
  useState,
  useCallback
} from 'react'

const ErrorContext = createContext({
  error: null,
  errorMessage: '',
  errorCode: 0,
  removeError: () => {},
  addError: (
    error: any,
    errorMessage?: string,
    errorCode?: number
  ) => {}
})

export const useError = () => {
  const {
    error,
    errorMessage,
    errorCode,
    removeError,
    addError
  } = useContext(ErrorContext)
  return {
    error,
    errorMessage,
    errorCode,
    removeError,
    addError
  }
}

const ErrorProvider = ({ children }: any) => {
  const [error, setError] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorCode, setErrorCode] = useState(0)

  const removeError = () => {
    setError(null)
    setErrorMessage('')
    setErrorCode(0)
  }
  const addError = (
    error: any,
    errorMessage?: string,
    errorCode?: number
  ) => {
    setError(error)
    if (errorMessage) {
      setErrorMessage(errorMessage)
    }
    if (errorCode) {
      setErrorCode(errorCode)
    }

    // TODO: エラー監視ツールへの送信処理
    console.log(error)
  }

  const contextValue = {
    error,
    errorMessage,
    errorCode,
    removeError: useCallback(() => removeError(), []),
    addError: useCallback(
      (error, errorMessage, errorCode) =>
        addError(error, errorMessage, errorCode),
      []
    )
  }

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorProvider
