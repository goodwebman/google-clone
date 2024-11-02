import Link from 'next/link'
import Parse from 'html-react-parser';

type Props = {}

const WebSearchResults = ({ results }: { results: any }) => {
	return (
		<div className='w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
			<p className='text-gray-600 text-sm mb-5 mt-3'>
				About {results.searchInformation?.formattedTotalResults} results{' '}
				{results.searchInformation?.formattedSearchTime} seconds
			</p>
			{results.items?.map((result: any) => (
				<div className='mb-8 max-w-xl' key={result.link}>
					<div className='group flex flex-col'>
						<Link href={result.link}>{result.formattedUrl}</Link>
						<Link
							href={result.link}
							className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'
						>
							{result.title}
						</Link>
                        <div>
                            <p>{Parse(result.htmlSnippet)}</p>
                        </div>
					</div>
				</div>
			))}
		</div>
	)
}

export default WebSearchResults
