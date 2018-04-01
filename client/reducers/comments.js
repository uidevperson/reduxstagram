// a reducer takes in  2 things
// 1. the action (what happened)
// 2. takes in a copy of the current start
function comments(state=[], action){
	console.log(state, action);
	return state;
}

export default comments;
