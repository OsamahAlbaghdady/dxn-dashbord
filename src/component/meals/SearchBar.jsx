import not from '../../assets/icons/not';
import search from '../../assets/icons/search';
import { mealsAction } from '../../store/slices/meals';
import React from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch()
    return (
        <div className='search-bar-main-con'>
            {/* <div className="add-meals flex-c">
                {not}
            </div> */}
            <div className="search-bar-con">
                <input type="text" className='text6' />
                {search}
            </div>
            <div onClick={()=>dispatch(mealsAction.show())} className="add-meals flex-c">
                <span></span>
                <a></a>
            </div>
        </div>
    );
}

export default SearchBar;
