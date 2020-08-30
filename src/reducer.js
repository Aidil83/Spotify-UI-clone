export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// REMOVE after finished developing...
	// token:
	// 	"BQBA-i4Yme4qQ1EUfy8vwPIAuz0A_hbH9V378OnvEK0tjOopAsAunWmgukTtGsiXo64QBgdfLJSuqNajKSm90I7zSPRgbUvkFRX0f8SvK_urEfikJdHXsMP439_XJJfDmGsg1mWKBxehkzSYvC9UhP8_09uzvLBIzM74IeeqfMcd1OpGwKGV",
};

const reducer = (state, action) => {
	console.log(action.current_song);
	// action is from the dispatch function

	// Action -> type, [payload]

	switch (action.type) {
		case "SET_USER":
			return {
				...state, // Keep the current state
				user: action.user, // Update the state
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		case "SET_CURRENT_SONG":
			return {
				...state,
				current_song: action.current_song,
			};
		default:
			return state;
	}
};

export default reducer;
