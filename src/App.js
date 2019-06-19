import React, { Fragment } from 'react';
import { Query } from 'react-apollo'

// components
import Layout from './components/Layout';
import Header from './components/Header';
import Post from './components/Post';

// queries
import { STORY_QUERY } from './utils';


function App() {
  const renderPosts = ({ node }) => {
    return <li key={node.id}>
      <Post {...node} />
    </li>;
  }

  const variables = { id: "clayallsopp", isUserId: true };
  const mock =[{
    "cursor": "YXJyYXljb25uZWN0aW9uOjA=",
    "node": {
      "id": "aXRlbToxNjAzMzgxNA==",
      "hnId": "16033814",
      "score": 2,
      "url": "https://lethain.com/things-learned-in-2017/",
      "title": "Engineering management things learned in 2017",
      "timeISO": "2017-12-30T04:12:07.000Z",
      "descendants": 0,
      "by": {
        "id": "SGFja2VyTmV3c1YyVXNlcjpjbGF5YWxsc29wcA==",
        "hnId": "clayallsopp"
      }
    }
  }]

  return (
    <Layout>
      <Header />
      <ol className="post-container">

        <Query query={STORY_QUERY} variables={variables}>
          {(loading, error, data) => {

            if (error) return <h1>Error: {error.message}</h1>;
            if (loading) return null;

            const { data: { hn2: { nodeFromHnId: { submitted: { edges: posts } } } } } = data;
            return (
              <Fragment>
                {/* {mock.map(renderPosts)} */}
                {posts.map(renderPosts)}
              </Fragment>
            )
          }}
        </Query>

      </ol>
    </Layout>
  );
}

export default App;
