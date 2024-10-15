/* eslint-disable import/named */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/store';
import { Navigate, useLocation, Location } from 'react-router-dom';
import { tokenSelectors } from 'src/app/store/token';

export type NavigationState = {
  from?: Location;
};

export interface IProtectedRoute {
  isRestricted?: boolean;
  children: React.ReactNode;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const location = useLocation();
  if (token) return <>{children}</>;
  return <Navigate to="/auth" state={{ from: location } as NavigationState} replace />;
};
