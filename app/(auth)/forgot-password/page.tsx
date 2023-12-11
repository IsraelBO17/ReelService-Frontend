import AuthCard from '@/components/AuthCard'
import ForgotPasswordForm from '@/components/forms/forgot-password'

const ForgotPasswordPage = () => {

  return (
    <AuthCard 
      title='Forgot your password? 🤔' 
      subtitle='Enter your email address and we will send you a link to reset your password' 
      link_text='Sign-in instead' 
      link_url='/sign-in'
      sub_text='Remember your password?'
    >
      <ForgotPasswordForm />
    </AuthCard>
  )
}

export default ForgotPasswordPage