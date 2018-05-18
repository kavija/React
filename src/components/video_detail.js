import React from 'react'; //React module is imported.

// By declaring {video}, we are indicating that 
// Incoming props has a property called video
// Create a const and assign the value of the props.video to it
const VideoDetail = ({video}) => {
    //Check if video object is valid
    if(!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    // const url = "https://www.youtube.com/embed/" + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;