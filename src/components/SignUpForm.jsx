import React from 'react'
import PhoneInput from './PhoneInput'
import SignUpEmailInput from './SignUpEmailInput'
import SignUpPasswordInput from './SignUpPasswordInput'
import './style/SignUpForm.css'

// TODO: заменить select на map функцию, которая выводит элементы с содержимым массивов

const SignUpForm = () => {
	const days = [], years = []
	for(let i = 1; i < 32; i++) days.push(i)
	for(let i = 2022; i > 1950; i--) years.push(i)

	const months = [
		'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December' 
	]

	const allDays = days.map((day) => {
		return <option key={day}>{day}</option>
	})

	const allYears = years.map((year) => {
		return <option key={year}>{year}</option>
	})

	const allMonths = months.map((month, index) => {
		return <option key={index}>{month}</option>
	})

  return (
	<form>
		<h2>Registration form</h2>
		<SignUpEmailInput/>
		<SignUpPasswordInput/>
		<input className={'input'} placeholder={'name'}/><br/>
		<input className={'input'} placeholder={'surname'}/><br/>
		<input className={'input'} placeholder={'second name'}/><br/>
		<input type={'radio'} name={'pol'}/>Male
		<input type={'radio'} name={'pol'}/>Female<br/>
		<select className={'sel'}>{allDays}</select>
		<select className={'sel'}>{allMonths}</select>
		<select className={'sel'}>{allYears}</select>
		<PhoneInput/>
	</form>
  )
}

export default SignUpForm