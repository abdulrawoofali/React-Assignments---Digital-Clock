import React, { Component, useState } from "react";
import "../styles/App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { time: new Date() };
		this.updateTime = this.updateTime.bind(this);
	}
	updateTime() {
		this.setState({ time: new Date() });
	}
	componentDidMount() {
		this.intervalId = setInterval(this.updateTime, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	render() {
		return (
			<>
				<div className="Clock">
					<h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
				</div>
			</>
		);
	}
}
