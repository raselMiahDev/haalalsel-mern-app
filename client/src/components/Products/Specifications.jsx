import React from 'react';
import parse from 'html-react-parser';

const Specifications = (props) => {
    return (
        <div className='border p-3'>
            {
                props.data[0]?(
                    parse(props.data[0]['details']['des'])
                ):("")
            }
        </div>
    );
};

export default Specifications;