import React from 'react'
import { useSelector } from 'react-redux';
import { PaginateLink } from './PaginateLink';

const Paginate = () => {
    const { pages } = useSelector((state) => state.places);
    console.log(pages);
  return (
    <>
      <ul className="pagination">
          { pages.map ( (page)=> (
                
                <PaginateLink page={page}/>
              
            ) ) }
        </ul>
    </>
  )
}

export default Paginate