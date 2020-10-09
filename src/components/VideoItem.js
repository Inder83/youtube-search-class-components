import React from 'react'

class VideoItem extends React.Component {
    state = {thumbnail: '', title: '', description: '', id: undefined}

    componentDidMount() {
        const {snippet, id} = this.props.video;
        this.setState({thumbnail: snippet.thumbnails.medium.url, title: snippet.title, description: snippet.description, id: id.videoId});
    }

    onItemClick = () => {
        this.props.onItemClick(this.state.id);
    }

    render() {
        return (
            <div style={{border:'1px solid black'}}>
                <div><img src={this.state.thumbnail} alt={this.state.title}/></div>
                <div>
                    <div onClick={this.onItemClick} style={{cursor: 'pointer'}}>{this.state.title}</div>
                    <div>{this.state.description}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem