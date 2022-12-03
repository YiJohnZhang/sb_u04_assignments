import React from "react";
import "./Joke.css";

class Joke extends React.Component{

	constructor(props){
		
		super(props);

		const { vote, votes, text, id } = props;

		this.vote = vote;
		this.state = {
			votes,
			text,
			id
		}

		this.upVote = this.upVote.bind(this);
		this.downVote = this.downVote.bind(this);

	}

	updateState(){

		console.log(this.props.votes);
		this.setState({...this.state, votes: this.props.votes});

	}

	componentDidUpdate(previousProps, previousState, snapshot){
		// follow this suggestion: https://stackoverflow.com/a/39155024

		// console.log(this.props.votes);
		//ok, so the problem with the component not updating is that I am getting it from props. but since state has changed, props receieved by component changes; but yet state doesn't change yet?
		// ah, isee so props are new. react doesn't update on props change through so I have to set State to be props.
		// this.updateState();

		// console.log(`previousProps:${previousProps.votes} : ${this.props.votes}`)
		// console.log(`previousState: ${previousState.votes} : `)
		if(this.props.votes !== previousProps.votes)
			this.setState({...previousState, votes:this.props.votes});

	}

	upVote = () => this.vote(this.state.id, 1);

	downVote = () => this.vote(this.state.id, -1);

	render(){

		return (
		<div className="Joke">

			<div className="Joke-votearea">

				<button onClick={this.upVote}>
					<i className="fas fa-thumbs-up" />
				</button>
				<button onClick={this.downVote}>
					<i className="fas fa-thumbs-down" />
				</button>
				{this.state.votes}

			</div>

			<div className="Joke-text">{this.state.text}</div>
		
		</div>
		);

	}

}

export default Joke;
