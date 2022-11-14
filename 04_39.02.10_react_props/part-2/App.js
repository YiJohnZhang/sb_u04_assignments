const someTweets = [
	{id: 1, username: 'someHandle1', author: 'Name Last', tweetDate: '2022-11-13', message: 'An inspiring Tweet.'},
	{id: 2, username: 'someHandle3', author: 'First Last', tweetDate: '2022-11-13', message: 'Such creative.'},
	{id: 3, username: 'someHandle2', author: 'First Name', tweetDate: '2022-11-13', message: 'I am not getting paid to do this.'},
];

const App = () => (
	<div>
		{someTweets.map((tweetObject) => <Tweet key={tweetObject.id} username={tweetObject.username} author={tweetObject.author} tweetDate={tweetObject.tweetDate}  message={tweetObject.message}/>)}
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));