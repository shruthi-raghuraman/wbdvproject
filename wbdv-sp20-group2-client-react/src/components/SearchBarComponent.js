import React, {Component} from 'react';

class SearchBarComponent extends Component {
    render() {
        return (
            //TODO decide how to go about submitting to api,
            // currently using form with action
            //TODO add CSS and format
            <div>
                <form className = "search" action="google api placeholder">
                    <input type ="text"
                           className= "input"
                           placeholder= "Search Recipes"/>
                    <button type = "submit"> Search </button>
                </form>
            </div>


        );
    }
}


export default SearchBarComponent;