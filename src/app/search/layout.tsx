import SearchHeader from '@/components/SearchHeader'
import { ReactNode } from 'react'

import './../globals.css'

type Props = {}

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<SearchHeader />
			{children}
		</div>
	)
}

export default layout
