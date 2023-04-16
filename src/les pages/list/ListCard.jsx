import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ListCard = ({list}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={list.imageURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {list.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {list.Ticketprice}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/hotel/${list.id}`}><Button size="small">See Offer</Button></Link>
      
      </CardActions>
    </Card>
    </div>
  )
}

export default ListCard
