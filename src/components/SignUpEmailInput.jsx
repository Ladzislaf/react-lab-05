import React from 'react'
import {useState} from 'react'

const SignUpEmailInput = () => {
	const [state, setState] = useState('input correct email')
	const [pClass, setPClass] = useState('incorrect')

	const onEmailInput = (e) => {
		let input = e.target
	
		if (input.value.match(/.@.+\..+/i)) { setState('correct'); setPClass('correct') }
		else { setState('input correct email'); setPClass('incorrect') }
	}

	return (
		<div className='inputPlaceholder'>
			<input
				className='emailInput'
				type='text'
				placeholder='Email'
				onInput={onEmailInput}
			/>
			<p className={pClass}>{state}</p>
		</div>
	)
}

export default SignUpEmailInput
