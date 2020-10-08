import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import VideoList from './components/VideoList'

const App = () => {
    const onSearch = () => {
        console.log("on search");
    }

    return (
        <div>
            <Search onSearch = {onSearch}/>
            <VideoList/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));