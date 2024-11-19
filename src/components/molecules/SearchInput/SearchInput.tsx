'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import './SearchInput.scss'
import Input from '@/components/atoms/Input/Input'

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    params.set('name', event.currentTarget.value.toString());

    router.replace(`?${params.toString()}`);
  }

  return (
    <div className='input_search-container'>
        <Input
            placeholder='Buscar proyectos'
            onChange={handleChange}
        />
    </div>
  )
}

export default SearchInput