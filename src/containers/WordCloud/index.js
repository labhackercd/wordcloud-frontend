import React, {useState, useEffect} from 'react';
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export default function WordCloud(props) {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('/api') // This will load the data from the proxy url, this url can be found in package.json


   
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);

      setIsLoading(false);
    };
 
    fetchData();
  }, []);


  return (
    <div style={{ width: '100%', height: '100%'}}>
      {isLoading ? (
        <Grid container xs={12} align="center" alignContent="center" alignItems="center">
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
        </React.Fragment>
      )}
    </div>
  );
}