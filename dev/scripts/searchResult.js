import React from 'react';

const SearchResult = (props) => {
    return (
        <div id = {props.data.jobkey} onClick = {props.onClick} className = "search-result">
            <h3>{props.data.jobtitle}</h3>
            <h4>{props.data.company}</h4>
            {/* <button id = {props.data.jobkey} onClick = {props.onClick}>See more</button> */}
        </div>
    )
}


export default SearchResult;