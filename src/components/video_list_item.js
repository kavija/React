//Components are two type - Functional (easy) & Class(complex and flexible)
//This file is an example of Functional Component
import React from 'react'; //React module is imported.

// const VideoListItem = (props) => {
//     const video = props.video;
//     return (
//         <li>
//             Video
//         </li>
//     );
// }

// By declaring {video}, we are indicating that 
// Incoming props has a property called video
// Create a const and assign the value of the props.video to it
// In that way, this function is equals to above.
// const VideoListItem = ({video}) => {
//     return (
//         <li>
//             Video
//         </li>
//     );
// }

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        //VideoListItem would invoke the onVideoSelect event when a list item is selected
        //that would update the selectedVideo property of the App defined in the Index.js
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-lef">
                    <img className="media-object" src={imageUrl}/>
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;


