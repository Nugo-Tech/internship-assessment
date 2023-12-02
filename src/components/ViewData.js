import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/reducers/getDataSlice';
import { Card } from 'react-bootstrap';

export default function ViewData() {
  const getData = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const dataPerPages = getData.dataPerPages;
  const currentPage = getData.currentPage;

  const indexOfLastPage = currentPage * dataPerPages;
  const indexOfFirstPage = indexOfLastPage - dataPerPages;
  //console.log(indexOfFirstPage, indexOfLastPage);

  if (getData.data.results) {
    var visibleData = getData.data.results.slice(
      indexOfFirstPage,
      indexOfLastPage
    );
  }

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
