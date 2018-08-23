import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
		imageUrl: 'https://picsum.photos/200'
	};

	styles = {
		fontSize: 14,
		fontWeigth: 'bold'
	};

	formatCount() {
		const { count } = this.state; // count = this.state.count;
		return count === 0 ? 'Zero' : count;
	}

	render() {
		return (
			<div>
				<img src={this.state.imageUrl} alt="" />
				<span style={this.styles} className="badge badge-primary m-2">
					{this.formatCount()}
				</span>
				<button className="btn btn-sm">Increment</button>
			</div>
		);
	}
}

export default Counter;
