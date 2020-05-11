import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

import Downvote from '../images/downvote.png'
import Upvote from '../images/upvote.png'

class Post extends Component {

	constructor(props) {
		super(props);

		this.state = {
			PostId: null,
			Post: [],
			Comments: []
		}

		this.voted = "";

		this.url = "https://forum-pfc-node.herokuapp.com"
	}

	componentDidMount() {

		var url = new URL(window.location.href);
		var postId = url.searchParams.get("postId");
		this.setState({
			PostId: postId
		})

		const that = this;

		fetch(this.url + "/api/post?postId=" + postId)
			.then(response => response.json())
			.then(data => {
				that.setState({
					Post: data
				})
			});
		fetch(this.url + "/api/comments?postId=" + postId)
			.then(response => response.json())
			.then(data => {
				that.setState({
					Comments: data
				})
			});
	}

	votePost = (postId, postLikes, vote) => {
		if (this.voted === "") {
			if (vote === "upvote") {
				console.log("upvoted");
				this.voted = "upvoted";
				document.getElementById("Upvote").style.filter = "contrast(100%)";
				document.getElementById("Likes").innerHTML = postLikes + 1;

				// LLAMAR A NODE PARA VOTAR (+1)
				fetch(this.url + "/api/vote?postId=" + postId + "&vote=1")


			} else {
				console.log("downvoted");
				this.voted = "downvoted"
				document.getElementById("Downvote").style.filter = "contrast(100%)";
				document.getElementById("Likes").innerHTML = postLikes - 1;

				// LLAMAR A NODE PARA VOTAR (-1)
				fetch(this.url + "/api/vote?postId=" + postId + "&vote=-1")

			}
		} else {
			// UPVOTE
			if (this.voted === "upvoted") {
				if (vote === "upvote") {
					console.log("You removed the upvoted")
					document.getElementById("Upvote").style.filter = "contrast(0%)";
					document.getElementById("Likes").innerHTML = postLikes;
					this.voted = "";

					// LLAMAR A NODE PARA VOTAR (-1)
					fetch(this.ip + "/api/vote?postId=" + postId + "&vote=-1")

				} else {
					console.log("You upvoted but now downvote")
					this.voted = "downvoted"
					document.getElementById("Upvote").style.filter = "contrast(0%)";
					document.getElementById("Downvote").style.filter = "contrast(100%)";
					document.getElementById("Likes").innerHTML = postLikes - 1;

					// LLAMAR A NODE PARA CAMBIAR EL VOTO (-2)
					fetch(this.ip + "/api/vote?postId=" + postId + "&vote=-2")

				}
			}
			// DOWNVOTE
			else {
				if (vote === "downvote") {
					console.log("You removed the downvoted")
					document.getElementById("Downvote").style.filter = "contrast(0%)";
					document.getElementById("Likes").innerHTML = postLikes;
					this.voted = "";

					// LLAMAR A NODE PARA VOTAR (+1)
					fetch(this.url + "/api/vote?postId=" + postId + "&vote=1")

				}
				else {
					console.log("You downvoted but now upvoted")
					this.voted = "upvoted"
					document.getElementById("Upvote").style.filter = "contrast(100%)";
					document.getElementById("Downvote").style.filter = "contrast(0%)";
					document.getElementById("Likes").innerHTML = postLikes + 1;

					// LLAMAR A NODE PARA CAMBIAR EL VOTO (+2)
					fetch(this.url + "/api/vote?postId=" + postId + "&vote=2")

				}
			}
		}
	}

	uploadComment = () => {
		var content
		var date = ""

		/* GET DATE */
		var today = new Date();
		var yyyy = today.getFullYear();
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var dd = String(today.getDate()).padStart(2, '0');
		date = yyyy + '-' + mm + '-' + dd;

		/* TEMPORARY UNTIL I GET LOG IN */
		var author = "unknown";

		/* GET DATA */
		content = document.getElementById("CommentContent").value;

		/* CHECK DATA */
		console.log(this.state.PostId)
		console.log(date)
		console.log("author " + author)
		console.log("content " + content)

		/* UPLOAD COMMENT */
		fetch(this.url + "/api/uploadComment?postId=" + this.state.PostId + "&commentDate=" + date + "&commentAuthor=" + author + "&commentContent=" + content)

		/* RELOAD TO SHOW COMMENT */
		window.location.reload()
	}

	render() {
		return (
			<div className="post">

				{/* Divide in different kinds of post */}

				{
					this.state.Post.map((post, i) => {
						return (
							<Card className="postCard" key={i}>
								<Card.Body>
									<Card.Title>{post.postTitle}<p className="author">{post.postAuthor}</p></Card.Title>
									<Card.Text>{post.postContent}</Card.Text>
									<div className="votes">
										<div className="arrow" onClick={this.votePost.bind(this, post.postId, post.postLikes, "upvote")}>
											<img
												src={Upvote}
												alt="Upvote"
												id="Upvote"
											/>
										</div>
										<p id="Likes">{post.postLikes}</p>
										<div className="arrow" onClick={this.votePost.bind(this, post.postId, post.postLikes, "downvote")}>
											<img
												src={Downvote}
												alt="Downvote"
												id="Downvote"
											/>
										</div>
									</div>
								</Card.Body>
								<Card.Img variant="top" src={post.postImg} className="postCardImg" />
								<Card.Footer><p className="footerTopic">{post.postTopic}</p><p className="footerDate">{post.postDate}</p></Card.Footer>
							</Card>
						)
					})

				}
				<div className="comments">
					<h2>Comments</h2>
					<div className="commentCreator">
						<Card className="commentInputCard">
							<Card.Body>
								<Card.Title ><h5>Write your comment</h5></Card.Title>
								<div className="commentInput">
									<input type="text" id="CommentContent" className="commentContent" placeholder="Comment" maxLength="250" />
									<input type="button" className="commentUploadButton" value="UPLOAD" onClick={this.uploadComment} />
								</div>
							</Card.Body>
						</Card>
					</div>
					{
						this.state.Comments.map((comment, i) => {
							return (
								<Card className="commentCard" key={i}>
									<Card.Body>
										<Card.Title><p className="commentAuthor">{comment.commentAuthor}</p><p className="commentDate">{comment.commentDate}</p></Card.Title>
										<Card.Text>{comment.commentContent}</Card.Text>
									</Card.Body>
								</Card>
							)
						})
					}
				</div>
			</div>
		)
	}
}
export default Post

