import React, { useState, useEffect } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import Sidebar from "./Sidebar";
import SidebarOption from "./SidebarOption";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});

			spotify.getPlaylist("37i9dQZEVXcWEx6LF25VfO").then((response) =>
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly: response,
				})
			);
		}
	}, []);

	return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
