import React from "react";
import PostListCardActions from "./postlistcardactions";
import PostListCardInfo from "./postlistcardinfo";
import PostListCardVote from "./postlistcardvote";

export default function PostListCard(props) {
  const {
    // will need this id later on
    // _id,
    createdOn,
    voteScore,
    comments,
    author,
    content,
    title,
    community,
  } = props;

  return (
    <div className="postlist-card">
      <PostListCardVote voteScore={voteScore} />
      <div className="postlist-card__details">
        <PostListCardInfo
          community={community.name}
          author={author.username}
          createdOn={createdOn}
        />
        <h3 className="postlist-card__details__title">{title}</h3>
        <div className="postlist-card__details__content">{content}</div>
      </div>
      <PostListCardActions numOfComments={comments.length} />
    </div>
  );
}