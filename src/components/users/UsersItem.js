import React from 'react';
import PropTypes from 'prop-types';

const UsersItem=({user:{login,avatar_url,html_url}})=>{
    return (
        
        <div className="card text-center">
            <img src={avatar_url} alt="Profile" className="round-img" style={{ width:"60px"}}/>
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-dark btn-sm my1">Profile</a>
        
        </div>
    )
        }
UsersItem.propTypes={
    user:PropTypes.object.isRequired,
}
    
export default UsersItem

