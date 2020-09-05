import React, { useState, useEffect } from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track, index }) {
	const [{ current_song }, dispatch] = useDataLayerValue();

	const handleSong = () => {
		dispatch({
			type: "SET_CURRENT_SONG",
			current_song: track,
		});
	};
	useEffect(() => {
		if (index == 0) handleSong();
	}, []);

	const focusSong = () => (track?.name === current_song?.name ? true : false);

	return (
		<div
			className="songRow"
			style={focusSong() ? { backgroundColor: "rgba(0,0,0,.65)" } : null}
			onClick={handleSong}
		>
			<img className="songRow__album" src={track.album.images[0].url} alt="" />
			<div className="songRow__info">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(", ")} - {track.album.name}
				</p>
			</div>
		</div>
	);
}

export default SongRow;
