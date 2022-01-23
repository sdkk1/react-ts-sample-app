import { useError } from '@/context/error'
import AppModal from '@/components/molecules/modal/AppModal'

const ErrorModal = () => {
  const {
    error,
    errorMessage,
    errorCode,
    removeError
  } = useError()

  const title = () => {
    switch (errorCode) {
      case 400:
        return '400 Bad Request'
      case 401:
        return '401 Unauthorized'
      case 404:
        return '404 Not Found'
      default:
        return 'エラー'
    }
  }
  const message = () => {
    switch (errorCode) {
      case 400:
      case 404:
        return errorMessage
      case 401:
        return '認証エラーが発生しました。再度ログインしてください。'
      default:
        return '予期せぬエラーが発生しました。'
    }
  }

  return (
    <>
      {!!error && (
        <AppModal
          title={title()}
          message={message()}
          buttonText={'閉じる'}
          onClick={removeError}
        />
      )}
    </>
  )
}

export default ErrorModal
