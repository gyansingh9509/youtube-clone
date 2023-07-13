import React from 'react'

const VideoDetail = ({video}) => {
    if(!video){return <div>Lading...</div>}
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
       <div>
          <iframe 
          src={videoSrc}
          title="Video Player"
          className='w-100'
          style={{height:"380px"}}
          ></iframe>
       </div>
       <div className="border p-2">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
       </div>
    </>
  )
}

export default VideoDetail
