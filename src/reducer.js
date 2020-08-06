export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// REMOVE after finished developing...
	token:
		'BQBA-i4Yme4qQ1EUfy8vwPIAuz0A_hbH9V378OnvEK0tjOopAsAunWmgukTtGsiXo64QBgdfLJSuqNajKSm90I7zSPRgbUvkFRX0f8SvK_urEfikJdHXsMP439_XJJfDmGsg1mWKBxehkzSYvC9UhP8_09uzvLBIzM74IeeqfMcd1OpGwKGV',
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
