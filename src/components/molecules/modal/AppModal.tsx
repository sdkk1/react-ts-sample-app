/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type Props = {
  title: string
  message: string
  buttonText?: string
  onClick?: () => void
}

const AppModal: React.FC<Props> = ({
  title,
  message,
  buttonText,
  onClick
}) => {
  const modalStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `
  const modalWrapperStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
  `
  const modalTitleStyle = css`
    padding: 20px 0;
    border-bottom: 2px solid black;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  `
  const modalMessageStyle = css`
    padding: 20px 0;
    text-align: center;
    font-size: 16px;
  `
  const modalButtonStyle = css`
    margin: 0 auto;
  `

  return (
    <>
      <div css={modalStyle}>
        <div css={modalWrapperStyle}>
          <div css={modalTitleStyle}>{title}</div>
          <div css={modalMessageStyle}>{message}</div>
          {buttonText && (
            <button
              onClick={onClick}
              css={modalButtonStyle}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default AppModal
