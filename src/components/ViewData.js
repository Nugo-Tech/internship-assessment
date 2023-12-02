import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/reducers/getDataSlice';
import { Card } from 'react-bootstrap';

export default function ViewData() {
  const getData = useSelector((state) => state.getData); //returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch(); //returns a reference to the dispatch function from the Redux store

  /*useEffect perform side effect,dispatches the fetchData() action to the Redux store. Presumably, 
  fetchData is an action creator that returns an action to fetch data. The action will be processed 
  by the Redux middleware, and eventually, it should result in updating the getData in the Redux store.*/
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]); //The [dispatch] dependency array in the useEffect means that the effect will only run once when the component mounts.

  //access initialsates
  const dataPerPages = getData.dataPerPages;
  const currentPage = getData.currentPage;

  const indexOfLastPage = currentPage * dataPerPages;
  const indexOfFirstPage = indexOfLastPage - dataPerPages;

  //all the details of number of visible data in a one page
  if (getData.data.results) {
    var visibleData = getData.data.results.slice(
      indexOfFirstPage,
      indexOfLastPage
    );
  }
  //rendering visibleData object in a Card
  return (
    <div className="items">
      {visibleData
        ? visibleData.map((data) => (
            <Card key={data.id}>
              <img src={data.image} alt={data.name} />
              <Card.Body>
                <Card.Title className="title">{data.name}</Card.Title>
                <Card.Text className="text">
                  {data.name} is a {data.species} from {data.origin.name}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        : null}
    </div>
  );
}
