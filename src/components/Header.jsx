import { RxHamburgerMenu } from 'react-icons/rx'
import { Button } from './Buttons'
function Header() {
	return (
		<header className="flex items-center justify-between p-4 border border-third">
			<h1 className="font-semibold  text-stone-950 text-xl  text-center uppercase">Moje dojazdy </h1>
			<Button variant="font-bold" onClick={() => console.log('działa')}>
				<RxHamburgerMenu className="size-6 pointer-events-none" />
			</Button>
		</header>
	)
}

export default Header
