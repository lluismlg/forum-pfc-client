import React, { Component } from 'react';

class Footer extends Component {


	render() {

		return (
			<footer className="site-footer">
				{/* <div className="row"> */}
					{/* <div className="col-xs-6 col-md-4">
							<h6>Categories</h6>
							<ul className="footer-links">
								<li><a href="#">Frontend</a></li>
								<li><a href="#">Backend</a></li>
								<li><a href="#">Java</a></li>
								<li><a href="#">Python</a></li>
							</ul>
						</div> */}
					<div className="col-md-6">
						<h6>Quick Links</h6>
						<ul className="footer-links">
							<li><a href="/about_us">About Us</a></li>
							<li><a href="/contact">Contact Us</a></li>
							<li><a href="/privacy">Privacy Policy</a></li>
							<li><a href="https://www.gloomaps.com/9acyonT3Hp">Sitemap</a></li>
						</ul>
					</div>
					<div className="col-md-6">
						<h6>Social Media</h6>
						<div className="social-icons">
							<a className="facebook" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
							<a className="twitter" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
							{/* <br/> */}
							<a className="instagram" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
							<a className="linkedin" href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
						</div>
					</div>
				{/* </div> */}
			</footer>

		)
	}

}
export default Footer
