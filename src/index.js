// index.js is the top most parent component
// data fetching should be done at the top level parent

import React, { Component } from 'react'; 
 //React module is imported.
import ReactDOM from 'react-dom'; //React-Dom is required to include the "App" on index.html
import SearchBar from './components/search_bar';//Import the SearchBar component from ./components/search_bar.js
import VideoList from './components/video_list';//Import the Video List component from ./components/video_list.js
import VideoDetail from './components/video_detail';//Import the Video Detail component from ./components/video_detail.js
import YTSearch from 'youtube-api-search'; //This module would search on Youtube
import _ from 'lodash'; //Usually _ is used to refer lodash

//const(constant) is part of ES6
const API_KEY = 'Youtube-API-Key'; //youtube API Key

class App extends Component {
    constructor(props) {
        super(props);
      
        this.state = { 
            videos: [], //{ videos: ''} is an object with term as property
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    //function that performs search
    videoSearch(term) {
        //YTSearch({key: API_KEY, term: 'searchKeyword'}, (videos) => {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos: videos,//It equals to this.setState({videos: videos});
                selectedVideo : videos[0]//Result of the first item is considered as selected Video
            });
        });
    }

    render() {
        //We do not to search everytime user changes something on the search bar
        //Instead we want to search only every 300 milliseconds
        //Here is where we use lodash
        //Lets debounce function as shown below 
        //debounce accepts the function and set it call only after XXXmillseconds
        const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar
                    //onSearchTermChange is a property of  SearchBar
                    //onSearchTermChange acts a delegate function that would point the anonymous function
                    //anonymous function would accept the term and invoke the videoSearch function
                    //This process is called "Callback" where child or its child would notify the parent
                    // onSearchTermChange={term => this.videoSearch(term)} 
                    onSearchTermChange={videoSearch} 
                    /> 
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    //onVideoSelect is a property of VideoList
                    //onVideoSelect acts a delegate function that would point the anonymous function
                    //anonymous function would accept the video and set it as selectedVideo
                    //In short, onVideoSelect function which would update the selectedVideo
                    //VideoList would pass the onVideoSelect property to its child - VideoListItem
                    //VideoListItem would invoke the onVideoSelect event when a list item is selected
                    //This process is called "Callback" where child or its child would notify the parent
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />{/* passing state is called props */}
            </div>
        );
    }
 }

//Include the "App" on index.html
//index.html is the home page. 
//index.html has a div called container which would act as a parent node for all the components
 ReactDOM.render(<App/>,document.querySelector('.container'));
