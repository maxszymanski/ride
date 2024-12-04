import PropTypes from 'prop-types'
import { forwardRef } from 'react'

export function Button({ variant, children, ...props }) {
	return (
		<button className={`  text-second  p-2 text-xl ${variant || ''}`} {...props}>
			{children}
		</button>
	)
}
export function SecondButton({ children, ...props }) {
	return (
		<button className="bg-second py-2 px-12 text-xl text-first rounded-full " {...props}>
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

Button.propTypes = { variant: PropTypes.string, children: PropTypes.node }
SecondButton.propTypes = { children: PropTypes.node }
DateButton.propTypes = { active: PropTypes.bool, children: PropTypes.node }
