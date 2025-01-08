import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { MdDone, MdDoneAll } from 'react-icons/md'

export function Button({ disabled, active, variant, children, ...props }) {
	return (
		<button
			disabled={disabled}
			className={`flex flex-col items-center justify-center   p-2 w-24 h-24 text-xl flex-shrink-0  border-2  border-second rounded-3xl disabled:cursor-not-allowed disabled:text-second/30 disabled:border-second/30 ${
				active ? 'bg-second text-first border-solid' : 'bg-first text-second border-dotted'
			} ${variant || ''}`}
			{...props}>
			{children}
		</button>
	)
}
export function SecondButton({ variant, children, ...props }) {
	return (
		<button
			className={`bg-second py-2 px-8 text-xl text-first rounded-full disabled:bg-second/20 disabled:cursor-default ${
				variant || ''
			}`}
			{...props}>
			{children}
		</button>
	)
}

export const DateButton = forwardRef(function DateButton(props, ref) {
	const { active = false, isEnd, isOneChecked, children, ...otherProps } = props

	return (
		<button
			ref={ref}
			className={`flex flex-col items-center justify-center   p-2 text-2xl flex-shrink-0  border-2   rounded-3xl relative z-0 ${
				active ? 'bg-second text-first  border-solid border-second' : 'bg-first  border-dotted'
			} ${isEnd ? 'text-green-500 border-green-500' : ' border-second'} `}
			{...otherProps}>
			{children}
			{isEnd && (
				<span
					className={`absolute -top-4 right-0 z-20 text-green-600 rounded-full ${
						active ? 'bg-transparent' : 'bg-first'
					}`}>
					<MdDoneAll className="size-8" />
				</span>
			)}
			{isOneChecked && (
				<span
					className={`absolute -top-4 right-0 z-20 text-green-600 rounded-full ${
						active ? 'bg-transparent' : 'bg-first'
					}`}>
					<MdDone className="size-8" />
				</span>
			)}
		</button>
	)
})

Button.propTypes = {
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	variant: PropTypes.string,
	children: PropTypes.node,
}
SecondButton.propTypes = { variant: PropTypes.string, children: PropTypes.node }
DateButton.propTypes = {
	isEnd: PropTypes.bool,
	isOneChecked: PropTypes.bool,
	active: PropTypes.bool,
	children: PropTypes.node,
}
