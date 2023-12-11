import AuthCard from '@/components/AuthCard'
import SignUpForm from '@/components/forms/sign-up'


const SignUpPage = () => {

  return (
    <AuthCard 
      title='Adventure starts here 🚀' 
      subtitle='Sign up. Make your experience easy and fun!' 
      link_text='Sign-in instead' 
      link_url='/sign-in'
      sub_text='Already have an account?'
    >
      <SignUpForm />
    </AuthCard>
  )
}

export default SignUpPage