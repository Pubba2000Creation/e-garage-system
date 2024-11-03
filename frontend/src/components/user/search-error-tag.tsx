import React from 'react'

export default function SearchErrorTag(props: { search_key_word: string}) {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold text-gray mb-2" >The search <span className='text-black'>{props.search_key_word}</span>  did not match any services.</h3>
        
        <ul className='text-gray list-disc pl-5 pt-3'>
          <li>Make sure all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>   
        </ul>
      </div>
    </>
  )
}
