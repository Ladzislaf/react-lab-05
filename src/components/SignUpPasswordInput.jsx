import React, { useEffect } from 'react'
import { useState } from 'react'

const SignUpPasswordInput = () => {
	const [state, setState] = useState('check pass')
	const [pClass, setPClass] = useState('incorrect')
	const [security, setSecurity] = useState('low')
	const [match, setMatch] = useState('match')
	const [passValues, setPassValues] = useState({ first: '', second: '' })

	const onPass1Input = (e) => {
		setPassValues({ first: e.target.value, second: passValues.second })
	}

	// выходила на берег катюша
	
	const onPass2Input = (e) => {
		setPassValues({ first: passValues.first, second: e.target.value })
	}

	useEffect(() => {
		if (passValues.first === passValues.second) setMatch('match')
		else setMatch('no match')
		console.log(passValues)
	}, [passValues])

	return (
		<div className='inputPlaceholder'>
			<input
				className='passInput'
				type='Password'
				placeholder='password'
				onChange={onPass1Input}
			/>
			<br />
			<input
				className='passInput'
				type='Password'
				placeholder='confirm password'
				onChange={onPass2Input}
			/>
			<p className={pClass}>{match}</p>
			<p>security: {security}</p>
			<p>{passValues.first}</p>
			<p>{passValues.second}</p>
		</div>
	)
}

export default SignUpPasswordInput
