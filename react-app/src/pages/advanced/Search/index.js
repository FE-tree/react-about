// import { useState, useRef } from 'react';
import { useRef } from 'react';

import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default function Page() {
  const inputRef = useRef(null);
  
  function btnClick() {
    console.log('btnClick--', inputRef.current)
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton handleClick={btnClick} />
      </nav>
      <SearchInput defaultValue={123} ref={inputRef} />
    </>
  );
}
