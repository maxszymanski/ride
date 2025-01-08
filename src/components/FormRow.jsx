function FormRow({ error, placeholder, type, id, formRegister, errorMessage, isPending }) {
	return (
		<div>
			<input
				className={`py-2 px-6 rounded-2xl  w-full  bg-first  outline-none focus:border-second border  transition-colors duration-300 hover:border-second placeholder:text-second/70 text-second xl:py-2.5  xl:placeholder:text-lg xl:text-lg ${
					error
						? 'border-red-500 focus:border-red-500 placeholder:text-red-500 '
						: 'border-second/20 placeholder:text-second/70'
				}`}
				placeholder={placeholder}
				id={id}
				type={type}
				disabled={isPending}
				{...formRegister}
			/>
			{error && <p className="text-xs text-red-500 mt-0.5 ml-2">{errorMessage}</p>}
		</div>
	)
}

export default FormRow
