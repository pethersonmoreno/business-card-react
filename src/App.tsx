/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Divider from './components/Divider';
import Bubble from './components/Bubble';
import SocialSection, { TSocial } from './components/SocialSection';
import './App.css';

type TData = {
  name: string;
  presentation: string;
  location: string;
  social: TSocial[]
};

function App() {
  const [data, setData] = useState<TData|null>(null);
  useEffect(() => {
    fetch(process.env.REACT_APP_API as string)
      .then((d) => d.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  return (
    <div className="app">
      <Bubble />
      {!data && <h1>Loading ...</h1>}
      {data && (
        <>
          <h1>
            I'm
            {' '}
            {data.name}
          </h1>
          <Divider />
          <p>{data.presentation}</p>
          <Divider />
          <p>{data.location}</p>
          <Divider />
          <SocialSection social={data.social} />
        </>
      )}
    </div>
  );
}

export default App;
