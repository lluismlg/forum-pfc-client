import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'


class LinkPost extends Component {

	render() {
		return (
			<div className="linkPost">
				<Card className="linkCard">
					<Card.Body>
						<Card.Title ><h5>Link post</h5></Card.Title>
						<div className="linkPostInput">
							<input type="text" id="LinkTitle" className="postTitle" placeholder="Title" maxLength="100" />
							<input type="text" id="LinkLink" className="postLink" placeholder="Link" maxLength="100" />
						</div>
					</Card.Body>
				</Card>
			</div>
		)
	}


}
export default LinkPost

