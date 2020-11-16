/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Divider from './components/Divider';
import IconGithub from './components/IconGithub';
import IconLinkedin from './components/IconLinkedin';
import IconTwitter from './components/IconTwitter';
import Bubble from './components/Bubble';
import './App.css';

type TSocial = {
  item: string;
  link: string;
};
type TData = {
  name: string;
  presentation: string;
  location: string;
  social: TSocial[]
};
const compSocial = {
  linkedin: IconLinkedin,
  github: IconGithub,
  twitter: IconTwitter,
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
          <p>Find me on:</p>
          <div className="social-icons">
            {data.social.map((itemSocial) => {
              const IconComponent = (compSocial as any)[itemSocial.item];
              if (!IconComponent) {
                return null;
              }
              return (
                <a key={itemSocial.item} href={itemSocial.link}><IconComponent /></a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
