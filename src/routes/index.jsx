import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

// Application Components.
import Home from '../containers/home';
import Signin from '../pages/signin/Signin';
import NewsFormpage from '../pages/Home/NewsFormpage';
import NewsViewpage from '../pages/Home/NewsViewPage';
import MilestoneView from '../pages/About/MilestoneView';
import MilestoneForm from '../pages/About/MilestoneForm';
import PartnershipForm from '../pages/About/PartnershipForm';
import PartnershipView from '../pages/About/PartnershipView';
import NetworkForm from '../pages/Home/NetworkForm';
import NetworkView from '../pages/Home/NetworkView';
import CoverageView from '../pages/Media/CoverageView';
import ImageGalleryview from '../pages/Media/ImageGalleryView';
import Videosview from '../pages/Media/Videosview';
import CoverageFormpage from '../pages/Media/CoverageFormpage';
import ImageGalleryFormpage from '../pages/Media/ImageGalleryFormpage';
import VideosFormpage from '../pages/Media/VideosFormpage';
import Mediakitview from '../pages/Media/Meidakitview';
import MediakitForm from '../pages/Media/MediakitForm';


const Routes = () => {
  return (
    <Router history={useHistory}>
      <Switch>
        <Route exact path='/' component={Signin} />
        {/* <Route exact path='/signin' component={Signin} /> */}
        <Route exact path='/newsform' component={NewsFormpage} />
        <Route exact path='/newsview' component={NewsViewpage} />
        <Route exact path='/milestoneview' component={MilestoneView} />
        <Route exact path='/milestoneform' component={MilestoneForm} />
        <Route exact path='/partnershipform' component={PartnershipForm} />
        <Route exact path='/partnershipview' component={PartnershipView} />
        <Route exact path='/networkform' component={NetworkForm} />
        <Route exact path='/networkview' component={NetworkView} />
        <Route exact path='/coverageview' component={CoverageView} />
        <Route exact path='/imagegalleryview' component={ImageGalleryview} />
        <Route exact path='/videosview' component={Videosview} />
        <Route exact path='/coverageform' component={CoverageFormpage} />
        <Route
          exact
          path='/imagegalleryform'
          component={ImageGalleryFormpage}
        />
        <Route exact path='/videosform' component={VideosFormpage} />
        <Route
          exact
          path='/mediakitview'
          component={Mediakitview}
        />
        <Route exact path='/mediakitform' component={MediakitForm} />
      </Switch>
    </Router>
  );
};

export default Routes;
