import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onSelectvideo}) => {
    const renderList=videos.map(video=>{
        return <VideoItem video={video} onSelectvideo={onSelectvideo}/>
    })
  return (
    <>
     <div>{renderList}</div> 
    </>
  )
}

export default VideoList
