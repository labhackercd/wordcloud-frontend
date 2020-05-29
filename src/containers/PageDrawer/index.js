 
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Box from '@material-ui/core/Box'

//In case you want different sections in navbar, just add it as the commented lines below
const sections = [
];
/*
const sections = [
  { title: 'Audiências Interativas', url: '#' },
  { title: 'Enquetes', url: '#' },
  { title: 'Corona', url: '#' },
  { title: 'Saiba mais', url: '#' },
  { title: 'O LABHacker', url: '#' },
];
*/


export default function PageDrawer(props) {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="WordCloud" sections={sections} />
        <main>
            <Box display="flex" alignItems="center" justifyContent="center" marginTop={10}>
                {props.children}
            </Box>   
        </main>
      </Container>
      <Footer title="Footer" description="LABHacker Câmara dos Deputados 2020" />
    </React.Fragment>
  );
}