import { TableHeader } from 'sampleapp'

/**
 * users url
 * Backlog APIのユーザー一覧取得APIを想定
 */
export const USERS_URL =
	'https://xx.backlog.jp/api/v2/users'

/**
 * response users
 * 動作確認用のユーザー一覧
 */
export const responseUsers = [
	{
		id: 1,
		userId: 'admin',
		name: 'admin',
		roleType: 1,
		lang: 'ja',
		mailAddress: 'admin@nulab.example'
	},
	{
		id: 2,
		userId: 'general',
		name: 'general',
		roleType: 2,
		lang: 'ja',
		mailAddress: 'general@nulab.example'
	}
]

export const USER_LIST_TABLE_HEADERS: TableHeader[] = [
	{
		text: 'id',
		width: '25%',
		fontSize: '18px'
	},
	{
		text: 'Name',
		width: '25%',
		fontSize: '18px'
	},
	{
		text: 'Mail',
		width: '50%',
		fontSize: '18px'
	}
]
