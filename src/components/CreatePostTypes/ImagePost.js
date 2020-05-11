import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'


class ImagePost extends Component {

	render() {
		return (
			<div className="imagePost">
				<Card className="imageCard">
					<Card.Body>
						<Card.Title ><h5>Image post</h5></Card.Title>
						<div className="imagePostInput">
							<input type="text" id="ImageTitle" className="postTitle" placeholder="Title" maxLength="100" />
							<input type="text" id="ImageLink" className="postImage" placeholder="Link to image" maxLength="100" />
						</div>
						<div className="imageTutorial">
							<p>Steps to get the link to a image</p>
							<ul>
								<li>Find a image you like and download it</li>
								<li>Go to <a href="https://imgbb.com/">imgbb</a> and log in (or sign up)</li>
								<li>Upload the image</li>
								<li>Search the image in your profile and select insert</li>
								<li>Copy the link which says "direct link"</li>
								<li>Paste the link in the input above</li>
							</ul>
						</div>
					</Card.Body>
				</Card>
			</div>
		)
	}



}
export default ImagePost

