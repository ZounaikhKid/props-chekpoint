import React from 'react'

const Profile = (props) => {
    console.log(props.children)
    const {fullName, profession, bio, children} = props;
    return (
        <div>
            {children}
            <p>{fullName}</p>
            <p>{profession}</p>
            <p>{bio}</p>
        </div>
    )
}

export default Profile
