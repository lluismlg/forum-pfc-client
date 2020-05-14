import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

import ImagePost from '../images/imagePost.png'

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			Posts: []
		}

		this.url = "https://forum-pfc-server.herokuapp.com/"

		this.probAnuncio = 0;
	}

	componentDidMount() {
		const that = this;

		fetch(this.url + "api/forum", {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json; odata=verbose",
			},
		})
			.then(response => response.json())
			.then(data => {
				that.setState({
					Posts: data
				})
				console.log(data)
			})
			.catch((error) => {
				alert("There has been an error with the database")
				console.log(error)
			  });

		document.getElementById("submitInputId").addEventListener('click', this.openSubmit.bind(this, "text"));
		document.getElementById("submitImgHolderId").addEventListener('click', this.openSubmit.bind(this, "image"));
	}

	openPost = (postId) => {
		console.log(window.location.hostname + "/Post?postId=" + postId)
		window.location = "/Post?postId=" + postId;
	}
	openSubmit = (postType) => {
		if (postType === "") {
			window.location = "/submit";
		} else {
			window.location = "/submit?postType=" + postType;
		}
	}


	render() {
		return (
			<div className="home">
				<div className="homeFeed">
					<Card className="homeSubmitCard">
						<Card.Body>
							<input type="text" placeholder="Create post" id="submitInputId"></input>
							<div className="submitImgHolder" id="submitImgHolderId">
								<img src={ImagePost} alt="post pic"></img>
							</div>
						</Card.Body>
					</Card>
					{
						this.state.Posts.map((post, i) => {
							if (post.postType === "text") {
								return (
									<Card className="homeCard" key={i}>
										<Card.Body>
											<Card.Title onClick={this.openPost.bind(this, post.postId)}><h5>{post.postTitle}</h5><p className="author">{post.postAuthor}</p></Card.Title>
											<Card.Text>{post.postContent}</Card.Text>
										</Card.Body>
										<Card.Footer><p className="footerTopic">{post.postTopic}</p><p className="footerDate">{post.postDate}</p></Card.Footer>
									</Card>
								)
							} else if (post.postType === "image") {
								return (
									<Card className="homeCard" key={i}>
										<Card.Body>
											<Card.Title onClick={this.openPost.bind(this, post.postId)}><h5>{post.postTitle}</h5><p className="author">{post.postAuthor}</p></Card.Title>
										</Card.Body>
										<div className="homeCardImgHolder">
											<Card.Img variant="top" src={post.postImg} className="homeCardImg" />
										</div>
										<Card.Footer><p className="footerTopic">{post.postTopic}</p><p className="footerDate">{post.postDate}</p></Card.Footer>
									</Card>
								)
							} else if (post.postType === "link") {
								return (
									<Card className="homeCard" key={i}>
										<Card.Body>
											<Card.Title onClick={this.openPost.bind(this, post.postId)}><h5>{post.postTitle}</h5><p className="author">{post.postAuthor}</p></Card.Title>
											<Card.Text><a href={post.postContent}>{post.postContent}</a></Card.Text>
										</Card.Body>

										<Card.Footer><p className="footerTopic">{post.postTopic}</p><p className="footerDate">{post.postDate}</p></Card.Footer>
									</Card>
								)
							} else {
								return (
									<Card className="homeCard" key={i}>
										<Card.Body>
											<Card.Title><h5>Error</h5></Card.Title>
										</Card.Body>
									</Card>
								)
							}
						})
					}
				</div>
			</div>
		)
	}
}
export default Home

