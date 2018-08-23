import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 1,
		imageUrl: 'https://picsum.photos/200',
		tags: []
	};

	styles = {
		fontSize: 14,
		fontWeigth: 'bold'
	};

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	// handleIncrement() {
	// 	console.log('clicked', this);
	// }

	handleIncrement = (params) => {
		console.log(params);
		this.setState({ count: this.state.count + 1 });
	};

	formatCount() {
		const { count } = this.state; // count = this.state.count;
		return count === 0 ? 'Zero' : count;
	}

	getBadgeClasses() {
		if (this.state.count > 0) {
			return 'badge btn btn-primary';
		} else {
			return 'badge btn btn-warning';
		}
	}

	renderTags() {
		if (this.state.tags.length === 0) {
			return <p>No tags.</p>;
		}

		return (
			<div>
				<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
			</div>
		);
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.handleIncrement(4)}>Increment</button>
				{Math.floor(Math.random() * 10) + 1}
			</div>
		);
	}
}

export default Counter;
