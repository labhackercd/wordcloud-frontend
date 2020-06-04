import React, {useState, useEffect} from 'react';
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

// import api from './api'

function convertTupleToJson(tuple){
  let textValue = tuple[0];
  let finalText;

  if(textValue[1]){
     finalText = textValue[0] + " " + textValue[1]
  }else {
     finalText = textValue[0]
  }

  return ({
    text: finalText, 
    value: tuple[1],
  })

}

export default function WordCloud(props) {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:8000/api";
   
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      
      const result = await axios(url);
      let jsonObject = []
      let i;

      const resultData = result.data;
      
      for (i = 0; i < resultData.length; i++) {
        jsonObject.push(convertTupleToJson(resultData[i]))
      }

      setData(jsonObject);

      setIsLoading(false);
    };
 
     fetchData();
  },[]);

  return (
    <div style={{ width: '100%', height: '100%'}}>
      {isLoading ? (
        <Grid container  align="center" alignContent="center" alignItems="center">
          <Grid item xs={12}>
            <CircularProgress color="primary"></CircularProgress>
          </Grid>
          <Grid item xs={12}>
            <Box marginTop={2}>
              <Typography variant="h6" gutterBottom>
                Buscando dados e gerando nuvem de palavras
              </Typography>
            </Box>
          </Grid>
        </Grid>
          
      ) : (
        <React.Fragment>
          <ReactWordcloud 
            words={data}
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
          <center style={{margin: '1.5rem 0 0 0'}}><i>Atualizado diariamente </i></center>
        </React.Fragment>
      )}
    </div>
  );
}