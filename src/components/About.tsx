import { AboutOur } from './AboutOur';

export function About() {
	const mission = {
		title: 'Our Mission',
		description:
			'Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.',
		color: '#4285F4',
		img: '/images/mission.svg',
	};

	const perspective = {
		title: 'Our Perspective',
		description:
			'We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.',
		color: '#34A853',
		img: '/images/perspective.svg',
	};

	const going = {
		title: 'What Keeps Us Going?',
		description: `Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
		The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.`,
		color: '#EA4335',
		img: '/images/going.svg',
	};

	return (
		<section id="about" className="flex flex-col items-center justify-center gap-4">
			<div className="text-5xl font-medium text-secondary-foreground text-center">Get To Know Us!</div>
			<div className="flex flex-col items-center justify-center gap-4">
				<AboutOur {...mission} />
				<AboutOur {...perspective} swap />
				<AboutOur {...going} />
			</div>
		</section>
	);
}
