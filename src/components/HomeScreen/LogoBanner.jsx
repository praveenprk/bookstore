import React from 'react'

function LogoBanner() {
    return (
        <div className='main' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15%'
                // backgroundColor: 'grey'
            }   
        }>
        <h1 style={
            {
            fontSize:'3em',
        }}>
            NIKE
        </h1>
        <p className='text-center'>
        Wants the hottest trends right now? 919Kicks has all the styles you need to create that glamorous, sexy, &amp; sophisticated you!
        </p>
        </div>
    )
}

export default LogoBanner