import React from 'react'
import {useState} from 'react'

const SignUpEmailInput = () => {
	const [state, setState] = useState('')
	const [pClass, setPClass] = useState('incorrect')

	const onEmailInput = (e) => {
		let input = e.target
	
		if (input.value.match(/.@.+\..+/i)) { setState('correct'); setPClass('correct') }
		else { setState('input correct email'); setPClass('incorrect') }

		if(input.value === '') setState('')
	}

	return (
		<div className='inputPlaceholder'>
			<input
				className='input'
				type='text'
				placeholder='Email'
				onInput={onEmailInput}
			/>
			<p className={pClass}>{state}</p>
		</div>
	)
}

export default SignUpEmailInput
