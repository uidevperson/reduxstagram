// action creator
// increment
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}
// add comment
export function addComment(postID, author, comment){
	console.log('addComment CALLED');
	return {
		type: 'ADD_COMMENT',
		author,
		comment
	}
}
// remove comment
export function removeComment(postID, index){
	return {
		type: 'REMOVE_COMMENT',
		index
	}
}