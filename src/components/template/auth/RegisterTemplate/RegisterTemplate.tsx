import './RegisterTemplate.scss';

import RegisterForm from '@/components/organisms/Forms/RegisterForm'
import React from 'react'

const RegisterTemplate = () => {
  return (
    <div className='register_template'>
        <div className='register_form-container'>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default RegisterTemplate