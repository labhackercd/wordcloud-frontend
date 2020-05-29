import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import logo from '../../images/logo_camara_v2.png'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({

  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Grid container xs={12}>
          <Grid item align="center" xs={12}>
            <Box padding={1}>
                <Box display={{ xs: 'block', md: 'none' }}>
                  <img alt="Logo da Câmara dos Deputados" src={logo} style={{ maxHeight: "100%" , maxWidth: "100%", align:'center'}}/> 
                </Box>
                <Box display={{ xs: 'none', md: 'block' }}>
                  <img alt="Logo da Câmara dos Deputados" src={logo} style={{ maxHeight: "40%" , maxWidth: "40%", align:'center'}}/> 
                </Box>
            </Box>
          </Grid>
        </Grid>

      </Toolbar>
      <Divider></Divider>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};