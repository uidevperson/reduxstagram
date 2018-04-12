import React from 'react';

const Comments = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    console.log('e', e, 'refs', this.refs);
    const {postId} = this.props.params;
    const comment =  this.refs.comment.value;
    const author = this.refs.author.value;
    this.props.addComment(postId, author, comment);
    
  },
  renderComment(comment, i) {
    return ( 
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;