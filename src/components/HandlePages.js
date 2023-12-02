import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Actions, fetchData } from '../store/reducers/getDataSlice';

export default function HandlePages(props) {
  const dispatch = useDispatch(); //returns a reference to the dispatch function from the Redux store

  const { pages, currentPage } = props; //accepts pages,currentPage values as props

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  //function to go to previous page
  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(Actions.onNavigatePrev());
    }
  };

  //function to go to next page
  const navigateNext = () => {
    if (currentPage !== 20) {
      dispatch(Actions.onNavigateNext());
    }
  };

  //function to go to page page that want
  const navigatePage = (_p) => {
    dispatch(Actions.onClickCurrentPage(_p));
  };
  //render pages array which passes from App.js
  return (
    <div>
      <p className="button-set">
        <span className="button" onClick={navigatePrev}>
          Prev
        </span>
        {pages.map((_p) => (
          <span
            key={_p}
            className="button"
            onClick={() => navigatePage.call(null, _p)}
          >
            {_p}
          </span>
        ))}
        <span className="button" onClick={navigateNext}>
          Next
        </span>
      </p>
    </div>
  );
}
