import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./Browse";

function Player({ spotify }) {
	return (
		<Router>
			<Switch>
				<div className="player">
					<div className="player__body">
						<Route exact path="/">
							<Sidebar />
							<Body text="homepage" />
							<Footer />
						</Route>
						<Route exact path="/Browse">
							<Sidebar />
							<Browse />
							<Footer />
						</Route>
						<Route exact path="/Your_Library">
							<Sidebar />
							<Body text="library" />
							<Footer />
						</Route>
					</div>
				</div>
			</Switch>
		</Router>
	);
}

export default Player;
