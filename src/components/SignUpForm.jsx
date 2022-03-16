import React from 'react'
import PhoneInput from './PhoneInput'
import SignUpEmailInput from './SignUpEmailInput'
import SignUpPasswordInput from './SignUpPasswordInput'
import './style/SignUpForm.css'

const SignUpForm = () => {
  return (
	<div className={'form'}>
		<h2>Form</h2>
		<SignUpEmailInput/>
		<SignUpPasswordInput/>
		<PhoneInput/>
	</div>
  )
}

export default SignUpForm