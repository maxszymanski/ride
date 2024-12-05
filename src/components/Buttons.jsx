import PropTypes from 'prop-types'
import { forwardRef } from 'react'

export function Button({ active, variant, children, ...props }) {
	return (
		<button
			className={`flex flex-col items-center justify-center   p-2 w-24 h-24 text-xl flex-shrink-0  border-2  border-second rounded-3xl ${
				active ? 'bg-second text-first border-solid' : 'bg-first text-second border-dotted'
			} ${variant || ''}`}
			{...props}>
			{children}
		</button>
	)
}
export function SecondButton({ variant, children, ...props }) {
	return (
		<button className={`bg-second py-2 px-8 text-xl text-first rounded-full ${variant || ''}`} {...props}>
			{children}
		</button>
	)
}

export const DateButton = forwardRef(function DateButton(props, ref) {
	const { active = false, children, ...otherProps } = props
	return (
		<button
			ref={ref}
			className={`flex flex-col items-center justify-center   p-2 text-2xl flex-shrink-0  border-2  border-second rounded-3xl ${
				active ? 'bg-second text-first border-solid' : 'bg-first text-second border-dotted'
			}`}
			{...otherProps}>
			{children}
		</button>
	)
})

Button.propTypes = { active: PropTypes.bool, variant: PropTypes.string, children: PropTypes.node }
SecondButton.propTypes = { variant: PropTypes.string, children: PropTypes.node }
DateButton.propTypes = { active: PropTypes.bool, children: PropTypes.node }
