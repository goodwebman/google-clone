import { ReactNode } from 'react'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'Google Clone',
	description:
		'An open source Google clone built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body className='relative min-h-screen'>
				{children}
				<Footer />
			</body>
		</html>
	)
}
