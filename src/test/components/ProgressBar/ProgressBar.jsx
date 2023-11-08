import React, { useState, useEffect, useRef } from 'react';
import { Line, Circle } from 'rc-progress';

import './ProgressBar.scss';

export default function ProgressBar(props) {
    const [length, setLength] = useState();
    const procent = Math.round(props.item * 100 /props.amount)
    return (
        <>
            <div className='container_progress' >
                <Line percent={procent} strokeWidth={2} strokeColor="rgb(234, 93, 128)" />
            </div>


        </>
    );
}