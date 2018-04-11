// a reducer takes in  2 things
// 1. the action (what happened)
// 2. takes in a copy of the current start
function posts(state=[], action){
	console.log('the Post will change');
	switch (action.type) {
		case 'INCREMENT_LIKES': 
			// return updated state
			const i = action.index;
			return [
				...state.slice(0, i),
				{...state.slice[i] ,  likes: state[i].likes + 1},
				...state.slice(i + 1 ),
			]
			break;
		default:
			return   state;
	}
}

export default posts;
