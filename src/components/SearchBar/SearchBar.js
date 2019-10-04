import React, { Component } from 'react';
import { connect } from "react-redux";
import Tweet from "../TweetComponent/Tweet";
import { doHandleChange, doLoadInitialData, doSearchKeyword } from "./action";
const twitter = require("./twitter-data.json");

class SearchBar extends Component {

    componentWillMount() {
        this.props.loadInitalData({ twitterData: twitter })
    }

    onSearchClick = () => {
        const { value, twitterData } = this.props;
        this.props.onSearchKeyword(value, twitterData);
    }


    render() {
        const { value, searchedTweet } = this.props;
        return <div id="search-bar" className="container-fluid">
            <div className="row">
                <input class="form-control form-control-lg" onChange={e => this.props.onHandleChange(e.target.value)} value={value} type="text" id="search" placeholder="Enter a Keyword"></input>
                <button type="button" onClick={this.onSearchClick} class="btn btn-primary">Search</button>
                {searchedTweet && < Tweet searchedTweet={searchedTweet} />}
            </div>
        </div>;
    }

}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        twitterData: state.twitterData,
        searchedTweet: state.searchedTweet
    };
};
const mapDispatchToprops = (dispatch) => {
    return {
        onHandleChange: (value) => dispatch(doHandleChange(value)),
        loadInitalData: ({ twitterData }) => dispatch(doLoadInitialData(twitterData)),
        onSearchKeyword: (searchKey, twitterData) => dispatch(doSearchKeyword(searchKey, twitterData)),
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(SearchBar)
// connect(maPStateToProps, mapDispatchToprops)(Basic)