import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const SecureAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if (loading || !adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default SecureAdmin;