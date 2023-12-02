import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Actions, fetchData } from '../store/reducers/getDataSlice';

export default function HandlePages(props) {
  const dispatch = useDispatch();

  const { pages, currentPage } = props;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const navigatePrev = () => {
    if (currentPage !== 1) {
      dispatch(Actions.onNavigatePrev());
    }
  };

  const navigateNext = () => {
    if (currentPage !== 20) {
      dispatch(Actions.onNavigateNext());
    }
  };

  const navigatePage = (_p) => {
    dispatch(Actions.onClickCurrentPage(_p));
  };
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
