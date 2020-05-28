import React from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';
import words from './words'
import Box from '@material-ui/core/Box'
export default function WordCloud(props) {

  return (
    <div style={{ width: '100%', height: '100%'}}>
      <ReactWordcloud 
        words={words}
        options={{
          enableTooltip: true,
          deterministic: false,
          fontFamily: 'impact',
          fontSizes: [5, 60],
          fontStyle: 'normal',
          fontWeight: 'normal',
          padding: 1,
          randomSeed: null,
          rotations: 3,
          rotationAngles: [0, 90],
          scale: 'sqrt',
          spiral: 'archimedean',
        }}
      ></ReactWordcloud>
    </div>
    
    
  );
}