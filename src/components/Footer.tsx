import logo from '/logo.svg';
import {
	EnvelopeClosedIcon,
	InstagramLogoIcon,
	TwitterLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { IoLocationOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';

export function Footer() {
	return (
		<footer className="relative flex h-72 w-[100vw] items-start justify-between bg-gradient-to-r from-fuchsia-300 to-blue-500 pt-10">
			<div className="flex w-[30vw] flex-col items-center justify-center translate-x-16">
				<img src={logo} alt="logo" className="h-8" />
				<p className="pt-4 text-background text-lg">Google Developer Student Clubs</p>
				<span className="text-sm text-muted">RCOEM</span>
			</div>
			<div className="flex w-[50vw] flex-col items-start justify-center gap-4">
				<div className="flex items-center">
					<IoLocationOutline className="mx-12 scale-[2] text-background" />
					<div className="text-md w-2/3 text-center text-background">
						Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan, Katol
						Road, Nagpur - 440013
					</div>
				</div>
				<div className="flex w-2/3 items-center">
					<EnvelopeClosedIcon className="mx-12 scale-[1.8] text-background" />
					<div className="text-md mx-6 text-center text-background">gdsc.rknec@edu.com</div>
				</div>
				<div className="flex items-center gap-12 pt-4">
					<div className="text-md ml-8 text-background">Follow Us: </div>
					<div className="flex gap-8">
						<InstagramLogoIcon className="scale-150 cursor-pointer text-background transition-all hover:scale-[1.8]" />
						<TwitterLogoIcon className="scale-150 cursor-pointer text-background transition-all hover:scale-[1.8]" />
						<LinkedInLogoIcon className="scale-150 cursor-pointer text-background transition-all hover:scale-[1.8]" />
					</div>
				</div>
			</div>
			<div className="absolute bottom-4 w-full text-background">
				<span className="absolute h-[2px] w-[80vw] left-[10%] -translate-y-2 bg-background" />
				<span className="flex items-center justify-center gap-2">
					Made with <FaHeart /> by GDSC RCOEM
				</span>
			</div>
		</footer>
	);
}
