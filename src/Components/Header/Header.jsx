import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center h-20'>
            <div className='flex'>
                <a href="#" className='text-black px-5'>خانه</a>
                <a href="#" className='text-black px-5'>کامپوننت ها</a>
                <a href="#" className='text-black px-5'>مقالات</a>
                <a href="#" className='text-black px-5'>درباره ما</a>
            </div>
            <div>
                <button className='px-[6] pt-4'>خرید اشتراک</button>
                <button className='px-[6] pt-4'>ورود یا ثبت نام</button>
            </div>
        </header>
    </div>
  )
}
