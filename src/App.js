import React from 'react';

// components
import Layout from './components/Layout';
import Header from './components/Header';
import Post from './components/Post';


function App() {
  const mockData = [{
    "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
    "node": {
      "id": "aXRlbToxNjAzMzgxNA==",
      "hnId": "16033814",
      "score": 2,
      "url": "https://lethain.com/things-learned-in-2017/",
      "title": "Engineering management things learned in 2017",
      "timeISO": "2017-12-18T22:09:29.000Z",
      "descendants": 0,
      "by": {
        "id": "SGFja2VyTmV3c1YyVXNlcjpjbGF5YWxsc29wcA==",
        "hnId": "clayallsopp"
      }
    }
  },
  {
    "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
    "node": {
      "id": "aXRlbToxNTk1NTk3NA==",
      "hnId": "15955974",
      "score": 5,
      "url": "https://pitchfork.com/features/article/is-secretive-virtual-reality-startup-magic-leap-dreaming-up-the-future-of-music/",
      "title": "Magic Leap Dreaming Up the Future of Music",
      "timeISO": "2017-12-30T04:12:07.000Z",
      "descendants": 0,
      "by": {
        "id": "SGFja2VyTmV3c1YyVXNlcjpjbGF5YWxsc29wcA==",
        "hnId": "clayallsopp"
      }
    }
  }];

  const renderPosts = ({ node }) => {
    return <li key={node.id}>
      <Post {...node} />
    </li>;
  }

  return (
    <Layout>
      <Header />
      <ol className="post-container">
        {mockData.map(renderPosts)}
      </ol>
    </Layout>
  );
}

export default App;
