import React from 'react'
import Axios from "axios";
import UserListItem from "../../Components/UserListItem/UserListItem";
import classes from './UserList.module.css'
import Loading from "../../Components/Loading/Loading";
import Button from "../../Components/Button/Button";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData : null,
            error : null
        }
    }

    deleteHandler = (uuid) => {
        this.setState((prevState) => {
            let userData = prevState.userData
            for (let items in userData){
                if (userData[items].login.uuid === uuid){
                    delete userData[items]
                    break
                }
            }
            return userData
        })
    }

    refreshHandler = () => {
        window.location.reload()
    }


    componentDidMount() {
        Axios.get('https://randomuser.me/api/?results=25')
            .then(response => {
                let userData = response.data.results
                this.setState({userData})
            })
            .catch(error => this.setState({error}))
    }


    render() {
        let users = <Loading />
        if(this.state.userData){
            users = this.state.userData.map( (item) => {
                    return (
                        <UserListItem
                            userData = {item}
                            key = {item.login.uuid}
                            deleteHandler={() => this.deleteHandler(item.login.uuid)}
                        />
                    )
                }
            )
        }
        if(this.state.error){
            users = (
                <div>
                    <p>Network error, try loading again</p>
                    <Button click={this.refreshHandler}>reload</Button>
                </div>
                )
        }

        return (
            <div className={classes.UserList}>
                <h3>USERS</h3>
                {users}
            </div>
        )
    }
}

export default UserList