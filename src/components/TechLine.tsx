import { Tech } from './Tech';

export function TechLine() {
	const android = {
		title: 'Android',
		img: '/images/android.svg',
		color: '#ea4335',
	};

	const flutter = {
		title: 'Flutter',
		img: '/images/flutter.svg',
		color: '#4285f4',
	};

	const cloud = {
		title: 'Cloud',
		img: '/images/cloud.svg',
		color: '#34a853',
	};

	return (
		<div className="flex w-full flex-col items-center justify-center">
			<div className="relative m-36 flex h-1 w-[85vw] items-center justify-center rounded-sm bg-red-500">
				<span className="absolute flex items-center justify-center bg-background px-16 text-5xl text-secondary">
					Technologies
				</span>
				<p className="translate-y-16 text-2xl text-primary">
					Domains That Excite Us to Collaborate and Teach!
				</p>
			</div>
			<div className="flex w-full justify-around pb-24">
				<Tech {...android} />
				<Tech {...flutter} />
				<Tech {...cloud} />
			</div>
		</div>
	);
}
