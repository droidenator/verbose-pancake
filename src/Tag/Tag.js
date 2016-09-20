import React from 'react';

function Tag(props) {
  return (
    <div className="tag" data-tag-id={props.tag.id}>
      {props.tag.value}
    </div>
  );
}

export default Tag;
