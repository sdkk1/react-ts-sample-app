import ErrorBoundary from '@/components/molecules/error/ErrorBoundary'
import ErrorProvider from '@/context/error'
import Users from '@/pages/users'
import ErrorModal from '@/components/molecules/error/ErrorModal'

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ErrorProvider>
          <Users />
          <ErrorModal />
        </ErrorProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
