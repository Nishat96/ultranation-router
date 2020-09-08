import React, { useState, useEffect } from 'react';
import './CountryDetail.css';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


const CountryDetail = () => {
    const classes = useStyles();
    let {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect (() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setCountry(data[0]));
    }, [])
    // const {name, capital, region} = country
    return (
        
        <Card id="country-detail-card" className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {country.flag}
        />
        <CardContent>
          <Typography className="name" gutterBottom variant="h5" component="h2">
                Name: {country.name}
          </Typography>
          <Typography className="country-info"  component="p" >
                Capital: {country.capital}
          </Typography>
          <Typography className="country-info"  component="p" >
                Region: {country.region}
          </Typography>
          <Typography className="country-info"  component="p" >
                Subregion: {country.subregion}
          </Typography>
          <Typography className="country-info"  component="p">
                 CallingCodes: {country.callingCodes}
          </Typography>
          
          <Typography className="country-info"  component="p">
                Population: {country.population}
          </Typography>
          <Typography className="country-info"  component="p">
                Timezones: {country.timezones}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>





        // <div>
            
        //     <h4>This is detail of: {countryName}</h4>
        //     <p>Name: {country.name}</p>
        //     <p>Capital: {country.capital}</p>
        //     <p>Region: {country.region}</p>
           

        // </div>
    );
};

export default CountryDetail;