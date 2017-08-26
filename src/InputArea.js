import React from 'react';

export class InputArea extends React.Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		const inputValue = e.target.value;
		this.props.handleChange(inputValue);
	}

	render() {
		return(
			<textArea className="input-field" onChange={this.handleInput} value={this.props.textValue}></textArea>
		);
	}
}