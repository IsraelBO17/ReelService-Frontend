import AuthCard from '@/components/AuthCard'
import SignInForm from '@/components/forms/sign-in'


const SignInPage = () => {

  return (
    <AuthCard 
      title='Welcome to ReelService! 👋' 
      subtitle='Please sign-in to your account and start the adventure' 
      link_text='Create an account' 
      link_url='/sign-up'
      sub_text='New on our platform?'
    >
      <SignInForm />
    </AuthCard>
  )
}

export default SignInPage