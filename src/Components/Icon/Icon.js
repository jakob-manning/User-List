import React from 'react'
import classes from './Icon.module.css'

const Icon = (props) => (
        <img className={[classes.Icon, classes[props.style]].join(' ')} src={props.source} alt={props.style + " Icon"}/>
)

export default Icon