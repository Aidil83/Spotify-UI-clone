import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "./DataLayer";

function Footer() {
	const [{ discover_weekly, current_song }, dispatch] = useDataLayerValue();
	console.log(discover_weekly);
	useEffect(() => {
		console.log(current_song, "Footer");
	});

	const handleSkipPrev = () => {
		dispatch({
			type: "SET_SkIP_PREV",
			// skip_prev: track,
		});
	};

	const handleSkipNext = () => {
		dispatch({
			type: "SET_SKIP_NEXT",
			// skip_next: track,
		});
	};

	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src={
						current_song?.album.images[0].url ||
						discover_weekly?.tracks.items[0].track.album.images[0].url
					}
					alt=""
				/>
				<div className="footer__songInfo">
					<strong>{current_song?.name}</strong>
					<p>
						{current_song?.artists[0].name} - {current_song?.album.name}
					</p>
				</div>
			</div>

			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" onclick={handleSkipPrev} />
				<PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
				<SkipNextIcon className="footer__icon" onclick={handleSkipNext} />
				<RepeatIcon className="footer__green" />
			</div>

			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
