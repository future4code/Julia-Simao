import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TripInfoItem from './TripInfoItem'

function TripInfoCard () {

    return (
        <div>
            <h3>Info</h3>
            <Card >
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Código da viagem #
            </Typography>
            <Typography variant="h5" component="div">
            Informações da viagem
            </Typography>
            <TripInfoItem infoName={'Nome'} info={'Festa'}/>
            <TripInfoItem infoName={'Planeta'} info={'Marte'}/>
            <TripInfoItem infoName={'Descrição'} info={'vai ser top'}/>
            <TripInfoItem infoName={'Data'} info={'21/10/2023'}/>
            <TripInfoItem infoName={'Descrição em dias'} info={'60'}/>
        </CardContent>
        </Card>
    </div>
    )
}

export default TripInfoCard