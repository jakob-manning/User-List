import React from 'react'
import classes from './UserImage.module.css'

import Icon from "../Icon/Icon";
import ManIcon from "../../assets/images/manEmoji.png";
import WomanIcon from "../../assets/images/womanEmoji.png";
import USFlag from "../../assets/images/flag-round-250.png";

const UserImage = (props) => (
        <div className={classes.Container}>
            {props.gender==="male" ? <Icon source={ManIcon} style={"Man"} /> : <Icon source={WomanIcon} style={"Woman"}/>}
            <img src={props.source} alt={"profile of " + props.name} />
            {props.country==="United States" && <Icon alt={"US Flag"} source={USFlag} style={"Right"} />}
        </div>
)


export default UserImage