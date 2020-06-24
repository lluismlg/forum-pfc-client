import React, { Component } from "react";

import Card from "react-bootstrap/Card";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Posts: [],
        };

        this.url = "https://forum-pfc-server.herokuapp.com/";

        this.probAnuncio = 0;
    }

    componentDidMount() {
        var url = new URL(window.location.href);
        var searchTitle = url.searchParams.get("searchTitle");
        this.setState({
            SearchValue: searchTitle,
        });

        const that = this;


        console.log(this.url + "api/searchTitle?searchTitle=" + searchTitle);

        fetch(this.url + "api/searchTitle?searchTitle=" + searchTitle, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json; odata=verbose",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    // alert("We couldn't find the post you are looking for.");
                    // window.location = "/";

                    that.setState({
                    	Posts: [{
                    		"postAuthor": "RoxaS",
                    		"postContent": "We couldn't find the post you are looking for, maybe it got deleted.",
                    		"postDate": "",
                    		"postId": 0,
                    		"postLikes": 0,
                    		"postImage": null,
                    		"postTitle": "Not found",
                    		"postTopic": "Error",
                    		"postType": "text"
                    	}]
                    })
                } else {
                    console.log(data)
                    that.setState({
                        Posts: data,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                // window.location = "/";
            });
    }

    openPost = (postId) => {
        console.log(window.location.hostname + "/Post?postId=" + postId);
        window.location = "/Post?postId=" + postId;
    };
    

    render() {
        return (
            <div className="home">
                <div className="homeFeed">
                    {this.state.Posts.map((post, i) => {
                        if (post.postType === "text") {
                            return (
                                <Card className="homeCard" key={i}>
                                    <Card.Body>
                                        <Card.Title onClick={this.openPost.bind(this, post.postId)}>
                                            <h5>{post.postTitle}</h5>
                                            <p className="author">{post.postAuthor}</p>
                                        </Card.Title>
                                        <Card.Text>{post.postContent}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="footerTopic">{post.postTopic}</p>
                                        <p className="footerDate">{post.postDate}</p>
                                    </Card.Footer>
                                </Card>
                            );
                        } else if (post.postType === "image") {
                            return (
                                <Card className="homeCard" key={i}>
                                    <Card.Body>
                                        <Card.Title onClick={this.openPost.bind(this, post.postId)}>
                                            <h5>{post.postTitle}</h5>
                                            <p className="author">{post.postAuthor}</p>
                                        </Card.Title>
                                    </Card.Body>
                                    <div className="homeCardImgHolder">
                                        <Card.Img
                                            variant="top"
                                            src={post.postImage}
                                            className="homeCardImg"
                                        />
                                    </div>
                                    <Card.Footer>
                                        <p className="footerTopic">{post.postTopic}</p>
                                        <p className="footerDate">{post.postDate}</p>
                                    </Card.Footer>
                                </Card>
                            );
                        } else if (post.postType === "link") {
                            return (
                                <Card className="homeCard" key={i}>
                                    <Card.Body>
                                        <Card.Title onClick={this.openPost.bind(this, post.postId)}>
                                            <h5>{post.postTitle}</h5>
                                            <p className="author">{post.postAuthor}</p>
                                        </Card.Title>
                                        <Card.Text>
                                            <a href={post.postContent}>{post.postContent}</a>
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Footer>
                                        <p className="footerTopic">{post.postTopic}</p>
                                        <p className="footerDate">{post.postDate}</p>
                                    </Card.Footer>
                                </Card>
                            );
                        } else {
                            return (
                                <Card className="homeCard" key={i}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h5>Error</h5>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}
export default Search;
