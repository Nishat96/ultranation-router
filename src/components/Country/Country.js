import React from 'react';
import './Country.css';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });

const Country = (props) => {
    const classes = useStyles();

    const {name, capital, region, alpha3Code} = props.country;
    const history = useHistory();
    const handleClick = (countryName) =>{
        const url = `/country/${countryName}`;
        history.push(url);
    }

    return (
   <Card id="country-card" className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
            Name: {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Capital: {capital}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            alpha3Code: {alpha3Code}
        </Typography>
        <Typography variant="body2" component="p">
            Region: {region}
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Link className="detail-link" to={`/country/${name}`}>Detail of {name} */}
        <Button id="See-details" onClick={() => handleClick(name)} variant="contained">See Details</Button>
        {/* </Link> */}
      </CardActions>
    </Card>



        // <div style={countryStyle}>
        //     <h2>Name: {name}</h2>
        //     <h3>Capital: {capital}</h3>
        //     <h3> Region: {region}</h3>
        //     <h3> alpha3Code: {alpha3Code} </h3>
        //     <p><Link to={`/country/${name}`}>Detail of {name} 
        //     <button onClick={() => handleClick(name)}>Click me</button>
        //     </Link> </p>
          
          
        // </div>
    );
};

export default Country;