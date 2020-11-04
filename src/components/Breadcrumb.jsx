import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import 'bootstrap/dist/css/bootstrap.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
 
    const classes = useStyles();

  return (
      <div className="breadcrumb-div">
    <div className={classes.root, "alligncenter"}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
        Set objective
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Configure Project
        </Link>
        <Typography color="textPrimary">Publish</Typography>
      </Breadcrumbs>  
    </div>
    </div>
  );
}
