import React, {Component} from 'react';
import SearchBarComponent from "../components/SearchBarComponent";
import LandingPageHeading from "./LandingPageHeading";

class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <LandingPageHeading/>
                <SearchBarComponent/>
            </div>
        );
    }
}


export default LandingPageContainer;