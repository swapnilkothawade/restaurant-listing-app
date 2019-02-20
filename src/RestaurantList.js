import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    objectFit: 'cover',
  },
};

const RestaurantList = (props) => {
  const { classes } = props;
  let names = props.names;
  return (
    <div className="list-wrapper">
      {names && names.restaurants.length ? names.restaurants.map(name =>
        <Card key={name.id} className={classes.card}>
          <CardActionArea>
            <div className="img-container">
              <CardMedia
                component="img"
                alt={name.name}
                className={classes.media}
                image={name.image_url}
                title={name.name}
              /></div>
            <div className="restaurant-data-container">
              <CardContent><Typography gutterBottom variant="h5" component="h2">Name: {name.name}</Typography></CardContent>
              <p>Address: {name.address}</p>
              <p>Price: $ {name.price}</p></div>
          </CardActionArea>
        </Card>
      ) : names.current_page ? <p>No Results Found</p> : null}
    </div>
  )
}

RestaurantList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RestaurantList);
