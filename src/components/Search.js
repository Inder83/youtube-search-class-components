import React from 'react';
import youtube from '../apis/youtube'

class Search extends React.Component {
    state = {term: ''};

    search = async () => {
        console.log(this.state.term);
        const response  = await youtube.get("/search", {
            term: this.state.term
        });
        console.log(response);
    }
    
    render() {
        return (
            <div>
                <input onChange = {(e) => this.setState({term: e.target.value})}/>
                <button onClick = {this.search} label="Search">Search</button>
            </div>
            
        );
    }
}

export default Search;