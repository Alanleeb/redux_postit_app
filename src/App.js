import React, { Fragment } from 'react';
import PostitForm from './components/PostitForm';
import PostitList from './components/PostitList';

const App = () => ( 
  <Fragment>
  <div className="App">
    <PostitForm />
    <PostitList />
  </div>
  </Fragment>
);


export default App;