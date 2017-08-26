import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.sass';
import { InputArea } from './InputArea';
import { OutputArea } from './OutputArea';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(newValue) {
		this.setState({
			text: newValue
		});
	}

	render() {
		return(
			<div className="container">
				<InputArea handleChange={this.handleOnChange} textValue={this.state.text} />
				<OutputArea outputText={this.state.text} />
			</div>
		);
	}
}

ReactDOM.render(<App className="bl"/>, document.getElementById('root'));



