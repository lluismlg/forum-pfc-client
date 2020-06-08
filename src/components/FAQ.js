/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// import axios from 'axios';

class FAQ extends Component {

	// state = {
	// 	faqs: []
	// }

	render() {
		let myfaqs = {
			"faqs": [
				{
					"categoria": "General",
					"pregunta": "What does the 'Cs' in 'forumCs' stand for?",
					"respuesta": "It stands for 'Castellón' which is where I'm from"
				},
				{
					"categoria": "General",
					"pregunta": "What's the main topic in this forum?",
					"respuesta": "This forum was designed as a tool to help citizens solve common problems, such as bureaucracy, economic or political ones"
				},
				{
					"categoria": "Privacy",
					"pregunta": "Who can see my posts or comments?",
					"respuesta": "Anyone can see them so it's more likely it will reach someone who can help you, or that you can reach someone you may be able to help"
				},
				{
					"categoria": "Account",
					"pregunta": "Will we be able to log in with our google accounts in the future?",
					"respuesta": "That's a possibility we have thought about but we lack the time to work on it at the moment"
				},
				{
					"categoria": "General",
					"pregunta": "I'm having problems working my way around the web, can I get any help?",
					"respuesta": "I'd recommend checking out the sitemap of our website, you can access it from the footer at any page. If you are still having problems please send us an email from the contact page once we implement it"
				},
				{
					"categoria": "General",
					"pregunta": "How do you make money?",
					"respuesta": "We are planning on adding a feature which will allow us to put ads in the feed"
				}
			]
		}

		return (
			<div className="faq" >
				<div className="titleFAQ card border-primary mb-3">
					<div className="card-header text-primary">Frequently Asked Questions</div>
				</div>
				<div className="preguntas">
					{
						myfaqs.faqs.map((faq, i) => {
							return (
								<div className="faqCard card border-dark mb-3" key={i}>
									<div className="card-header">{faq.categoria}</div>
									<div className="preguntaFAQ card-body text-dark">
										<h5 className="card-title">{faq.pregunta}</h5>
										<p className="card-text">{faq.respuesta}</p>
									</div>
								</div>
								// <div className="preguntaFAQ" key={i}>
								// 	<h3><b>{faq.pregunta}</b></h3>
								// 	<p>{faq.respuesta}</p>
								// </div>

							)
						})
					}
				</div>

				{/* <h2>{this.state.faqs.titulo}</h2> */}
			</div>
		)
	}

}
export default FAQ
