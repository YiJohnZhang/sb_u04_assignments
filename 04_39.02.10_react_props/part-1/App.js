const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="John"/>
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'));