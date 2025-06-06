import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Campaign from '../Campaign';
import ProtectedRoute from '../common/ProtectedRoute';
import Login from '../Login/Login';
import { useAuth } from '../../contexts/AuthContext';
import { Loading } from '../common/Loading';
import ConfidenceMethodExplanation from '../Sensor/viz/ConfidenceMethodExplanation';
const Router: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <ProtectedRoute isAuthenticated={isAuthenticated} exact path="/">
        <Home />
      </ProtectedRoute>
      <ProtectedRoute isAuthenticated={isAuthenticated} path="/campaigns">
        <Campaign />
      </ProtectedRoute>
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        path="/docs/confidence-explanation"
      >
        <ConfidenceMethodExplanation />
      </ProtectedRoute>
    </Switch>
  );
};

export default Router;
