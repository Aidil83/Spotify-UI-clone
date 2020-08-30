import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

function SongRow({ track }) {
	const [, dispatch] = useDataLayerValue();
	const handleClick = () => {
		dispatch({
			type: "SET_CURRENT_SONG",
			current_song: track,
		});
	};

	return (
		<div className="songRow" onClick={handleClick}>
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
