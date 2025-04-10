import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {
    const token = localStorage.getItem('accessToken')

    if (token) {
        return <Navigate to="/admin/users/list" />
    }

    return <Outlet />
}

export default AuthLayout
