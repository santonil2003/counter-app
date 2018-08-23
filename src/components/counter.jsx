import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 1,
		imageUrl: 'https://picsum.photos/200',
		tags: [ 'tag1', 'tag2', 'tag3' ]
	};

	styles = {
		fontSize: 14,
		fontWeigth: 'bold'
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

	render() {
		return (
			<div>
				<img src={this.state.imageUrl} alt="" style={{ display: 'none' }} />
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button className="btn btn-sm">Increment</button>

				<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
			</div>
		);
	}
}

export default Counter;
