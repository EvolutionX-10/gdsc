import { Switch } from '@/components/ui/switch';
import { useTheme } from './theme-provider';
import logo from '/logo.svg';
import { useEffect } from 'react';

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

	useEffect(() => {
		const button = document.querySelector('.switch')!;
		const thumb = document.querySelector('.switch_thumb')!;
		button.setAttribute('data-state', theme === 'dark' ? 'checked' : 'unchecked');
		thumb.setAttribute('data-state', theme === 'dark' ? 'checked' : 'unchecked');
	}, [theme]);

	return (
		<nav className="sticky top-0 z-20 flex w-[100vw] select-none items-center justify-center gap-16 overflow-visible border-b-2 bg-background p-6 drop-shadow">
			<div className="flex items-center justify-center gap-4">
				<img src={logo} className="App-logo h-8" alt="logo" />
				<h3 className="text-xl uppercase tracking-wide">GDSC RCOEM</h3>
			</div>
			<div className="flex w-2/3 justify-end gap-11 text-xl text-primary">
				<a href="#home">Home</a>
				<a href="#events">Events</a>
				<a href="#team">Team</a>
				<a href="#alumni">Alumni</a>
				<a href="#contact">Contact</a>
				<Switch onClick={toggleTheme} />
			</div>
		</nav>
	);
}
