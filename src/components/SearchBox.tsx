'use client'

import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import {  useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation';

type Props = {}

const SearchBox = (props: Props) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const searchTerm = searchParams.get('searchTerm')
    const [term, setTerm] = useState(searchTerm || '')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if(!term.trim()) return;
        event.preventDefault();
        router.push(`/search/web?searchTerm=${term}`)
        
    };
    const clickHandler = (event: React.MouseEvent) => {
        if(!term.trim()) return;
        event.preventDefault();
        router.push(`/search/web?searchTerm=${term}`)
      }

	return (
		<form onSubmit={handleSubmit} className='flex border border-gray-300 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center '>
			<input type='text' className='w-full focus:outline-none'  value={term} onChange={handleChange} />
            <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={() => setTerm('')}/>
            <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4' />
            <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
            onClick={clickHandler}/>
		</form>
	)
}

export default SearchBox
