import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

import TextPost from './CreatePostTypes/TextPost.js'
import ImagePost from './CreatePostTypes/ImagePost.js'
import LinkPost from './CreatePostTypes/LinkPost.js'

class Submit extends Component {

	constructor(props) {
		super(props);

		this.postType = null;

		this.url = "https://forum-pfc-server.herokuapp.com/"
	}

	componentDidMount() {
		var url = new URL(window.location.href);
		this.postType = url.searchParams.get("postType");

		if (this.postType == null) {
			this.changePost("text")
			url.searchParams.append("postType", "text");
			window.location.href = url
		} else {
			this.showPost(this.postType)
		}

		// document.getElementById("submitInputId").addEventListener('click', this.openSubmit.bind(this, ""));
		// document.getElementById("submitImgHolderId").addEventListener('click', this.openSubmit.bind(this, "img"));
	}

	hideCreatePosts = () => {
		document.getElementById("TextPostDiv").style.display = "none";
		document.getElementById("ImagePostDiv").style.display = "none";
		document.getElementById("LinkPostDiv").style.display = "none";
		document.getElementById("PollPostDiv").style.display = "none";
	}

	showPost = (postType) => {
		if (postType === "text") {
			document.getElementById("postSelectorInputText").classList.add("active");
			document.getElementById("TextPostDiv").style.display = "inline-block";
		} else if (postType === "image") {
			document.getElementById("postSelectorInputImage").classList.add("active");
			document.getElementById("ImagePostDiv").style.display = "inline-block";
		}
		else if (postType === "link") {
			document.getElementById("postSelectorInputLink").classList.add("active");
			document.getElementById("LinkPostDiv").style.display = "inline-block";
		} else if (postType === "poll") {
			document.getElementById("postSelectorInputPoll").classList.add("active");
			document.getElementById("PollPostDiv").style.display = "inline-block";
		} else {
			document.getElementById("postCreator").innerHTML = "Unexpected error";
		}
	}
	changePost = (postType) => {
		if (postType === "text") {

			window.location.href = "/submit?postType=text"
		} else if (postType === "image") {

			window.location.href = "/submit?postType=image"
		}
		else if (postType === "link") {

			window.location.href = "/submit?postType=link"
		} else if (postType === "poll") {

			window.location.href = "/submit?postType=poll"
		} else {
			this.hideCreatePosts()
			document.getElementById("postCreator").innerHTML = "Unexpected error";
		}
	}

	uploadPost = () => {
		var title
		var content
		var image
		var link
		var date
		var author

		var today = new Date();
		var yyyy = today.getFullYear();
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var dd = String(today.getDate()).padStart(2, '0');

		date = yyyy + '-' + mm + '-' + dd;


		/* TEMPORARY UNTIL I GET LOG IN */
		author = prompt("Please enter your name", "unknown");
		if (author == null) {
			author = "unknown";
		}

		/* GET DATA */
		if (this.postType === "text") {
			title = document.getElementById("TextTitle").value;
			content = document.getElementById("TextContent").value;
		}
		else if (this.postType === "image") {
			title = document.getElementById("ImageTitle").value;
			image = document.getElementById("ImageLink").value;
		}
		else if (this.postType === "link") {
			title = document.getElementById("LinkTitle").value;
			link = document.getElementById("LinkLink").value;
			link = "<a href='" + link + "'>" + link + "</a>"
		}
		else if (this.postType === "poll") {
			/* WIP */
		}
		else {
			this.hideCreatePosts()
			document.getElementById("postCreator").innerHTML = "Unexpected error";
		}

		/* CHECK DATA */

		console.log(date)
		console.log("author " + author)
		console.log("title " + title)
		console.log("image " + image)
		console.log("content " + content)
		console.log("link " + link)
		console.log(this.postType)

		/* UPLOAD POSTS */

		if (this.postType === "text") {
			/* TEXT */

			fetch(this.url + "api/uploadText?postDate=" + date + "&postType=" + this.postType + "&postAuthor=" + author + "&postTitle=" + title + "&postContent=" + content)
			/* RELOAD TO SHOW FEEDBACK */
			alert("You have posted susccesfully")
			window.location.reload()
		}
		else if (this.postType === "image") {
			/* IMAGE */
			fetch(this.url + "api/uploadImage?postDate=" + date + "&postType=" + this.postType + "&postAuthor=" + author + "&postTitle=" + title + "&postImage=" + image)
			/* RELOAD TO SHOW FEEDBACK */
			alert("You have posted susccesfully")
			window.location.reload()
		}
		else if (this.postType === "link") {
			/* LINK */
			fetch(this.url + "api/uploadLink?postDate=" + date + "&postType=" + this.postType + "&postAuthor=" + author + "&postTitle=" + title + "&postContent=" + link)
			/* RELOAD TO SHOW FEEDBACK */
			alert("You have posted susccesfully")
			window.location.reload()
		}
		else if (this.postType === "poll") {
			/* WIP */
		} else {
			alert("Unexpected error")
		}
	}





	render() {
		return (
			<div className="submit">
				<Card className="submitCard">
					<Card.Body>
						<Card.Title ><h5>Create a post</h5></Card.Title>
						<div className="postSelector">
							<input type="button" id="postSelectorInputText" className="postSelectorInput" value="Text" onClick={this.changePost.bind(this, "text")} />
							<input type="button" id="postSelectorInputImage" className="postSelectorInput" value="Image" onClick={this.changePost.bind(this, "image")} />
							<input type="button" id="postSelectorInputLink" className="postSelectorInput" value="Link" onClick={this.changePost.bind(this, "link")} />
							<input type="button" id="postSelectorInputPoll" className="postSelectorInput" value="Poll" onClick={this.changePost.bind(this, "poll")} />
						</div>
						<div id="postCreator">
							<div id="TextPostDiv">
								< TextPost />
							</div>
							<div id="ImagePostDiv">
								< ImagePost />
							</div>
							<div id="LinkPostDiv">
								< LinkPost />
							</div>
							<div id="PollPostDiv" className="wip">
								{/* < PollPost /> */}
							</div>
						</div>
						<div className="postUpload">
							<input type="button" value="UPLOAD" onClick={this.uploadPost} />
						</div>
					</Card.Body>
				</Card>
			</div>
		)
	}




}
export default Submit

