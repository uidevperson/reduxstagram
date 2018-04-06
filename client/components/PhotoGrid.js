import React from 'react';
import Photo from './Photo';
//
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      	<pre>
      		{this.props.posts.map((psot, i) => <Photo {...this.props} key={i} i={i}/>)}
      	</pre>
      </div>
    )
  }
});

export default PhotoGrid;
