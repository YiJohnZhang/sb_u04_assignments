import React from "react";
import axios from "axios";
import Joke from "./Joke";
import LoadingSpinner from './LoadingSpinner';
import "./JokeList.css";

class JokeList extends React.Component{

	constructor(props){

		super(props);
		this.numberOfJokes = props.numJokesToGet;

		this.state = {
			jokes: []
		};

		this.generateNewJokes = this.generateNewJokes.bind(this);
		this.vote = this.vote.bind(this);

	}

	async getJokes(){

		let currentJokeList = [...this.state.jokes];
		let appendedJokes = new Set();
		
		try{

			while(currentJokeList.length < this.numberOfJokes){
				
				await setTimeout(()=>null, 300)
				let response = await axios.get('https://icanhazdadjoke.com',
					{headers:{ Accept: 'application/json' }});
				
				const { status, ...jokeObject } = response.data;

				if(!appendedJokes.has(jokeObject.id)){
					appendedJokes.add(jokeObject.id);
					currentJokeList.push({...jokeObject, votes:0});
				}					

			}

			// console.log(this.state)
			this.setState({jokes: currentJokeList})

		}catch(error){
			console.log(error);
		}

	}

	componentDidMount(){

		if (this.state.jokes.length <= this.numberOfJokes)
			this.getJokes();

	}

	componentDidUpdate(){

		if (this.state.jokes.length !== this.numberOfJokes)
			this.getJokes();
			// if I did `this.state.joke.length  <= ...) it will warn max call depth because e/ call when updating the state will be fasle and trigger a new cal, i guess.

		

	}

	/* empty joke list and then call getJokes */
	generateNewJokes(){
		this.setState({jokes: []});
			// remember to bind business logic -___________-
	}

	/* change vote for this id by delta (+1 or -1) */
	vote(id, delta){

		this.setState(() => ({

			jokes: this.state.jokes.map((joke) => (
				joke.id === id ? { ...joke, votes: joke.votes + delta} : joke))
			
		}));

	}

	render(){

		if(!this.state.jokes.length)
			return <LoadingSpinner />;

		const sortedJokesList = [...this.state.jokes].sort((a, b) => b.votes - a.votes);

		return (
		<div className="JokeList">
		
			<button className="JokeList-getmore" onClick={this.generateNewJokes}>
				Get New Jokes
			</button>
	  
			{sortedJokesList.map(joke => (
				<Joke text={joke.joke} key={joke.id} id={joke.id} votes={joke.votes} vote={this.vote} />
			))}
		
		</div>
		);

	}

}

JokeList.defaultProps = {
	numJokesToGet: 10
}

export default JokeList;
