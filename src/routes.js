import React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import HomePage from './components/HomePage';
import MediaGalleryPage from './containers/MediaGallery'

const Page = () => (
  <div>
    <Route path="/" component={App}/>
    <Route exact path="/" component={HomePage}/>
    <Route path="/library" component={MediaGalleryPage}/>
  </div>
)

export default Page
