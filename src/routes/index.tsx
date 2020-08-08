import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '../pages/Landing';
import TeachersList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/study" component={TeachersList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
