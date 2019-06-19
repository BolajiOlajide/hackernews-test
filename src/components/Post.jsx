import React from 'react';

// utils
import { timeDifferenceForDate, toBaseURL } from '../utils';


function Post({ title, url, score, by: { hnId }, descendants, timeISO }) {
  const timeToShow = timeDifferenceForDate(timeISO);

  return (
    <section className="hackernews__post">
      <div className="vote" />
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="post__title">
          {title}
        </a><span class="post__base_url">({toBaseURL(url)})</span>
        <section className="post__details">
          <span>{score} points by {hnId} {timeToShow} | hide | {descendants} comments </span>
        </section>
      </div>
    </section>
  )
}

export default Post;
