import React from 'react'
import Typography from '@mui/material/Typography'

function TripInfoItem (props) {
    return (
        <Typography variant={'body1'}>
        <strong>{props.infoName}:</strong> {props.info}<br />
        </Typography>
        
    )
}

export default TripInfoItem