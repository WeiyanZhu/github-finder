import React from 'react'
import PropTypes from 'prop-types'

const UserItem = (props) => {
    const {login, html_url, avatar_url} = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" style={{width:"60px"}} alt="Profile"></img>
            <h3>{login}</h3>
            <div>
                <a href={html_url} className = "btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
}

UserItem.propTpyes=
{
    user:PropTypes.object.isRequired
}

export default UserItem
