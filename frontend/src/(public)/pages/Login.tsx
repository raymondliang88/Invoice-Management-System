import React from 'react'
import { FormHeader } from '../../components/LoginFormHeader'
import LoginForm from '../../components/forms/LoginForm'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/RouteConstants'
import { LoginFormData } from '../../types/LoginFormData'
import { useAppDispatch } from '../../lib/StoreHooks'
import { useSignInAccount } from '../../lib/react-query/Queries'
import { setAuthData } from '../../store/types/AuthTypes'

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { mutateAsync: signInAccount, isPending } = useSignInAccount();

    const onSubmitForm = async (data: LoginFormData) => {
        try {
            const res: any = await signInAccount(data)

            if (res.data) {
                dispatch(setAuthData(res.data))
                navigate(ROUTES.INOVICES_ROUTE)
            }

        } catch (err) {
            // handle error here
            console.log(err)
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
