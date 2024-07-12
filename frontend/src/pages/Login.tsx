import React from 'react'
import { FormHeader } from '~/components/LoginFormHeader'
import LoginForm from '~/components/forms/LoginForm'

const LoginPage: React.FC = () => {
    return (
        <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <FormHeader />
            <LoginForm />
        </div>
    )
}

export default LoginPage
