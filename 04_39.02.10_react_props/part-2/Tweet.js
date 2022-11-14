const Tweet = ({key, username, author, tweetDate, message}) => (
	<div key={key}>
		<p><b>{author}</b> <a href="/">@{username}</a></p>
		<p>{message}</p>
		<p><em>{tweetDate}</em></p>
	</div>
);