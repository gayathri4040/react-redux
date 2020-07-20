import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from'./Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if(errorMessage){
    content = <div>Error: {errorMessage}</div>;
  } else if(lat){
    content = <div><SeasonDisplay lat={lat}/></div>;
  } else {
    content = <Spinner message="Please accept location request"/>;
  }

  return (
    <div>{content}</div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);