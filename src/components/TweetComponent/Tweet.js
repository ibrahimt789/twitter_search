import React, { Component } from 'react';

class Tweet extends Component {


	render() {

		const { searchedTweet } = this.props;
		return <div id="tweet"  >
			{searchedTweet.map(t => <div id={t.id} style={{ "margin": "2%", "padding": "2%", "height": "auto", "width": "90%", "border": "3px solid skyblue" }}>
				<div className="profile">
					{/* TODO : need to implement user information with logo of the user */}
				</div>
				{t.text}</div>)}
		</div>;
	}

}
export default Tweet;
