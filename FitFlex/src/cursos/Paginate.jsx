import React from 'react'
import { useSelector } from 'react-redux';
import { PaginateLink } from './PaginateLink';

const Paginate = () => {
    const { pages } = useSelector((state) => state.curso);
  return (
    <>
      <ul className="pagination">
          { pages.map ( (page)=> (
                
                <PaginateLink key={page.id} page={page}/>
              
            ) ) }
        </ul>
    </>
  )
}

export default Paginate