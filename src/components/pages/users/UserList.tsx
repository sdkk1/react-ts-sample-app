/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { UserListItem } from 'sampleapp'
import {
  USERS_URL,
  USER_LIST_TABLE_HEADERS
} from '@/constants/User'
import { useError } from '@/context/error'
import { css } from '@emotion/react'

const UserList = () => {
  const [users, setUsers] = useState([] as UserListItem[])
  const { addError } = useError()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(USERS_URL)
        if (res.status === 200 && res.data.length > 0) {
          setUsers(res.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          addError(
            error,
            error.response.statusText,
            error.response.status
          )
        } else {
          addError(error)
        }
      }
    }
    fetchUsers()
  }, [addError])

  const titleStyle = css`
    text-align: center;
  `
  const tableStyle = css`
    margin: 0 auto;
    text-align: center;
  `

  const renderTableHead = () => (
    <tr>
      {USER_LIST_TABLE_HEADERS.map((item, index) => {
        const thStyle = css`
          width: ${item.width};
          height: 30px;
          padding: 10px;
          font-size: ${item.fontSize};
        `

        return (
          <th key={index} css={thStyle}>
            {item.text}
          </th>
        )
      })}
    </tr>
  )
  const renderTableBody = () =>
    users.map((user) => {
      const tdStyle = css`
        height: 30px;
        padding: 10px;
        font-size: 16px;
      `

      return (
        <tr key={user.id}>
          <td css={tdStyle}>{user.id}</td>
          <td css={tdStyle}>{user.name}</td>
          <td css={tdStyle}>{user.mailAddress}</td>
        </tr>
      )
    })

  return (
    <>
      <h1 css={titleStyle}>ユーザー一覧</h1>
      <table css={tableStyle}>
        <thead>{renderTableHead()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </>
  )
}

export default UserList
