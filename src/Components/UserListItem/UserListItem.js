import React from 'react'
import classes from './UserListItem.module.css'
import Button from "../Button/Button";
import UserImage from "../userImage/UserImage";

const UserListItem = (props) => {

    let item = props.userData

    return (
        <div className={classes.UserListItem}>
            <UserImage
                gender = {item.gender}
                source = {item.picture.large}
                name ={item.name.first}
                country = {item.location.country}
            />
            <p>{item.name.first} {item.name.last}</p>
            <p>{item.email}</p>
            <p>{item.location.city}, {item.location.state}, {item.location.country}</p>
            <Button click={props.deleteHandler}>Delete</Button>
        </div>
    )
}

export default UserListItem