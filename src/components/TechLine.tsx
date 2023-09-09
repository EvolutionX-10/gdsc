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
		<section className="flex flex-col items-center justify-center flex-wrap">
			<div className="relative flex h-1 my-24 mb-32 w-[85vw] items-center justify-center rounded-sm bg-red-500">
				<span className="absolute flex items-center justify-center bg-background text-5xl text-secondary">
					Technologies
				</span>
				<p className="translate-y-16 text-2xl text-primary text-center">
					Domains That Excite Us to Collaborate and Teach!
				</p>
			</div>
			<div className="flex flex-wrap justify-around max-md:gap-12 w-full">
				<Tech {...android} />
				<Tech {...flutter} />
				<Tech {...cloud} />
			</div>
		</section>
	);
}
