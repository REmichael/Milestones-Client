import React from 'react';
import MilestoneIndex from '../milestone/MilestoneIndex';

const Splash = (props) => {
    return (
        <div>
            <MilestoneIndex token = {props.sessionToken} />
        </div>
    )
}

export default Splash;