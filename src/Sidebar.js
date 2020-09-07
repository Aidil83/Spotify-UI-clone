import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import { BrowserRouter as Router, Switch, Route, useParams, Link } from "react-router-dom";

function Sidebar() {
	const [{ playlists }, dispatch] = useDataLayerValue();

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<Link to="/" style={{ textDecoration: "none" }}>
				<SidebarOption Icon={HomeIcon} title="Home" />
			</Link>
			<Link to="/Browse" style={{ textDecoration: "none" }}>
				<SidebarOption Icon={SearchIcon} title="Browse" />
			</Link>
			<Link to="/Your_Library" style={{ textDecoration: "none" }}>
				<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
			</Link>

			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
		</div>
	);
}

export default Sidebar;
