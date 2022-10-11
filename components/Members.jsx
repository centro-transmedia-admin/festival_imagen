import React from 'react'
import Member from './Member'

const Members = ({ members }) => {
    return (
        <>
            {
                members.map(member => (<Member key={member.id} {...member} />))
            }
        </>
    )
}

export default Members