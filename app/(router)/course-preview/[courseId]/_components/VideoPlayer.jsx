import React from 'react'

function VideoPlayer({videoUrl,poster}) {
  return (
    
        <video width={1000}
        height={250}
        controls
        key={videoUrl}
        className='rounded-sm'
        poster={poster}
        >
            <source  src={videoUrl} type='video/mp4'/>

        </video>
  
  )
}

export default VideoPlayer