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
		return <div
		><h1 style={{ "padding-left": "25%" }}>Twitter Search </h1>
			<div className="container">
				<div>
					<div className="row">
						<div id="search-bar" className="col-sm" >
							<input className="form-control form-control-lg" onChange={e => this.props.onHandleChange(e.target.value)} value={value} type="text" id="search" placeholder="Enter a Keyword"></input>
						</div>
						<div className="col-sm">
							<button type="button" onClick={this.onSearchClick} className="btn btn-primary">Search</button>
						</div>
					</div>
				</div>
			</div>
			{searchedTweet && < Tweet searchedTweet={searchedTweet} />}
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