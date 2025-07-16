import { forwardRef } from 'react';

/* export default function SearchInput({ props, ref }) {
  return (
    <input
      {...props} 
      ref={ref}
      placeholder="找什么呢？"
    />
  );
} */

const SearchInput = forwardRef(( props, ref ) => {
  return (
    <input
      {...props} 
      ref={ref}
      placeholder="找什么呢？"
    />
  );
})
 
export default SearchInput;
  