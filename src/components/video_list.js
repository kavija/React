//Components are two type - Functional (easy) & Class(complex and flexible)
//This file is an example of Functional Component
import React from 'react'; //React module is imported.
import VideoListItem from './video_list_item';

// Array Map Function
// var array = [1,2,3];
// array.map(function(number){return number * 2});
// would return [2, 4, 6]

const VideoList = (props) => {
    // This builds a list
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                //VideoListItem would invoke the onVideoSelect event when a list item is selected
                onVideoSelect ={props.onVideoSelect}
                // In React, List is expected to have key to improve performance                
                key={video.etag} 
                video={video} />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;