import React from 'react'
import { FormHeader } from '~/components/LoginFormHeader'
import LoginForm from '~/components/forms/LoginForm'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '~/constants/RouteConstants'
import { authenticateUser } from '~/store/actions/AuthActions'
import { LoginFormData } from '~/types/LoginFormData'
import { useAppDispatch } from '~/lib/StoreHooks'

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const onSubmitForm = async (data: LoginFormData) => {
        try {
            dispatch(authenticateUser(data))
            navigate(ROUTES.INOVICES_ROUTE)
        } catch (rejectedValueOrSerializedError) {
            // handle error here
        }
    }

    return (
        <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <FormHeader />
                <LoginForm onSubmitForm={onSubmitForm} />
            </div>
        </div>
    )
}

export default LoginPage
