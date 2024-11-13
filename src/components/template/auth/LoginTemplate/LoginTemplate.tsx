import LoginForm from '@/components/organisms/Forms/LoginForm'
import './LoginTemplate.scss'

const LoginTemplate = () => {
  return (
    <div className='login_template'>
      <div className='login_form-container'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginTemplate