import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username} {user.email}</b>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'donguk',
            email: 'sajacall82@naver.com'
        },
        {
            id: 2,
            username: 'abc',
            email: 'abc@naver.com'
        },
        {
            id: 1,
            username: 'def',
            email: 'def@naver.com'
        }
    ];

    return (
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>
    );
}

export default UserList;