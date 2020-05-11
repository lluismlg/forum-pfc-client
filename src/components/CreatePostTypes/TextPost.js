import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'


class TextPost extends Component {

	render() {
		return (
			<div className="textPost">
				<Card className="textCard">
					<Card.Body>
						<Card.Title ><h5>Text post</h5></Card.Title>
						<div className="textPostInput">
							<input type="text" id="TextTitle" className="postTitle" placeholder="Title" maxLength="100" />
							{/* <div className="textContentOptions">
								<div id="bold" className="active textOption" />
								<div id="italics" className=" textOption" />
								<div id="link" className=" textOption" />
							</div> */}
							<textarea className="postContent" id="TextContent" placeholder="Text (optional)"></textarea>
						</div>
					</Card.Body>
				</Card>
			</div>
		)
	}

}
export default TextPost

