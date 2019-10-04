import React, { Component } from 'react';
import { connect } from "react-redux";

class Tweet extends Component {


    onSearchClick = () => {
        const { value, twitterData } = this.props;
        this.props.onSearchKeyword(value, twitterData);
    }


    render() {
        const { searchedTweet } = this.props;
        return <div id="tweet" className="col-sm-8">
            {searchedTweet.map(t => <h>{t.text}</h>)}
        </div>;
    }

}
export default Tweet;
