import React from 'react'
import Search from './Search'
import VideoList from './VideoList'
import VideoFrame from './VideoFrame'

class App extends React.Component {
    state = {videos: []}
    onSearch = (data) => {
        this.setState({videos: data.data.items, selectedVideo: undefined});
    }

    onItemClick = (id) => {
        this.setState({selectedVideo: id});
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <div>
                    <VideoFrame videoSource={this.state.selectedVideo}/>
                    <VideoList list={this.state.videos} onItemClick={this.onItemClick}/>
                </div>
            </div>
        );
    }       
}

export default App;