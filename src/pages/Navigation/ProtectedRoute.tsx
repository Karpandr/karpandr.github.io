/* eslint-disable import/named */
import React, { FC } from 'react';
import { Navigate, useLocation, Location } from 'react-router-dom';
import { useProfileSelector } from 'src/app/store/profile';
import { useTokenSelector } from 'src/app/store/token';

export type NavigationState = {
  from?: Location;
};

export interface IProtectedRoute {
  isRestricted?: boolean;
  children: React.ReactNode;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children, isRestricted = false }) => {
  const token = useTokenSelector((state) => state.token);
  const profile = useProfileSelector((state) => state.profile.profile);
  const location = useLocation();
  if (token) {
    if (!isRestricted) return <>{children}</>;
    if (isRestricted && profile.isAdmin) return <>{children}</>;
  }
  return <Navigate to="/auth" state={{ from: location } as NavigationState} replace />;
};
