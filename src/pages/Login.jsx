import { useForm } from 'react-hook-form'
import FormRow from '../components/FormRow'
import Spinner from '../components/Spinner'
import useLogin from '../hooks/useLogin'

function Login() {
	const { login, isPending } = useLogin()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = user => {
		login(user, {
			onSuccess: () => {
				reset()
			},
		})
	}

	return (
		<div className="h-full justify-center flex-1 flex flex-col items-center">
			<h2 className="text-6xl md:text-7xl text-center text-second/80 mb-16  xl:text-8xl ">Admin</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="px-8 py-12 flex flex-col gap-5 border border-second/20 bg-third/80 backdrop-blur-sm rounded-2xl md:px-12  xl:gap-5">
				<FormRow
					error={errors?.email || null}
					errorMessage={errors?.email?.message || null}
					id="email"
					type="email"
					placeholder="Email"
					isPending={isPending}
					formRegister={register('email', {
						required: 'Nieprawidłowy adres email',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: 'Proszę podać poprawny adres email',
						},
					})}
				/>
				<FormRow
					error={errors?.password || null}
					errorMessage={errors?.password?.message || null}
					id="password"
					type="password"
					placeholder="Hasło"
					isPending={isPending}
					formRegister={register('password', {
						required: 'Podane hasło jest nieprawidłowe',
						minLength: {
							value: 8,
							message: 'Hasło nie może być krótsze niż 8 znaków',
						},
					})}
				/>
				<button
					type="submit"
					className="w-full p-2 bg-first rounded-2xl font-semibold text-second transition-colors duration-300 hover:bg-second/50 flex items-center justify-center gap-2 md:text-xl text-lg border border-second/20"
					disabled={isPending}>
					{isPending && <Spinner />}Zaloguj
				</button>
			</form>
		</div>
	)
}

export default Login
