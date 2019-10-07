import React, { Component } from 'react';
class Tweet extends Component {

	render10Item = () => {
		const { searchedTweet, props } = this.props;
		const tweets = [];
		const { buttonHidden } = props;
		for (let i = 0; i < 10; i++) {
			tweets.push(searchedTweet[i])
		}
		{
			return <div>{tweets.map(t =>
				<div id={t.id} style={{ "margin": "2%", "padding": "2%", "height": "auto", "width": "90%", "border": "3px solid skyblue" }}>
					<div id={`${t.id}_profie-img`} className="row">
						<div className="col-md-2">
							<img src={t.user["profile_background_image_url_https"]} style={{ backgroundColor: `#${t.user["profile_background_color"]}`, height: "30px", width: "30px", marginLeft: "-160" }} />
						</div>

						<div className="col-md-4">
							<span> {t.user["name"]}</span><br />
							<span>{t.user["screen_name"]}</span>
						</div>
						<div className="col-md-4"></div>
					</div>
					{t.text}
				</div>)}
				<button className="btn btn-blue-grey btn-rounded" onClick={() => this.props.onLoadMore()} hidden={props.buttonHidden ? buttonHidden : false}>Load More</button>
			</div>
		}
	}
	renderAllItem = () => {
		const { searchedTweet, props } = this.props;
		const { buttonHidden } = props;
		return <div>{searchedTweet.map(t =>
			<div id={t.id} style={{ "margin": "2%", "padding": "2%", "height": "auto", "width": "90%", "border": "3px solid skyblue" }}>
				<div id={`${t.id}_profie-img`} className="row">
					<div className="col-md-2">
						<img src={t.user["profile_background_image_url_https"]} style={{ backgroundColor: `#${t.user["profile_background_color"]}`, height: "30px", width: "30px", marginLeft: "-160" }} />
					</div>

					<div className="col-md-4">
						<span> {t.user["name"]}</span><br />
						<span>{t.user["screen_name"]}</span>
					</div>
					<div className="col-md-4"></div>
				</div>
				{t.text}
			</div>)}
		</div>
	}

	render() {
		const { searchedTweet, props } = this.props;
		const { buttonHidden } = props;
		return <div id="tweet" >
			{searchedTweet.length > 10 && !buttonHidden ? this.render10Item() : this.renderAllItem()}
		</div >;
	}

}
export default Tweet;