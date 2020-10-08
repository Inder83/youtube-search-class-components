import React from 'react'
import Search from './Search'
import VideoList from './VideoList'

class App extends React.Component {
    state = {videos: []}
    onSearch = (data) => {
        console.log(data.data.items);
        this.setState({videos: data.data.items});
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onSearch}/>
                <VideoList list={this.state.videos}/>
            </div>
        );
    }       
}

export default App;