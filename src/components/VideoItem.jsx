import React from 'react'

const VideoItem = ({video ,onSelectvideo}) => {
  return (
    <>
    <div className="col-md-12 "onClick={()=>onSelectvideo(video)}>
      <div className="row p-2" style={{cursor:"pointer"}}>
        <div className="col-md-3">
          <img 
            height="50px"
            width="60px"
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url} 
          />
        </div>
        <div className="cpl-md-9">
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default VideoItem
