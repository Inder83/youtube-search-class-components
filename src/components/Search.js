import React from 'react';
import youtube from '../apis/youtube'

class Search extends React.Component {
    state = {term: ''};

    search = async () => {
        const response  = await youtube.get("/search", {
            params: {
                q: this.state.term
            }
        });
        this.props.onSearch(response);
    }
    
    render() {
        return (
            <div>
                <input onChange={(e) => this.setState({term: e.target.value})}/>
                <button onClick={this.search} label="Search">Search</button>
            </div>
            
        );
    }
}

export default Search;