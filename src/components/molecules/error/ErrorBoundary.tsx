import React, { ReactNode } from 'react'
import AppModal from '@/components/molecules/modal/AppModal'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, _errorInfo: unknown) {
    // TODO: エラー監視ツールへの送信処理
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <AppModal
          title={'エラー'}
          message={'予期せぬエラーが発生しました'}
        />
      )
    }
    return this.props.children
  }
}
