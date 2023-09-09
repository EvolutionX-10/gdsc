import { Circle } from './Circle';

export function Circles() {
	const years = {
		title: 'Years',
		amount: 3,
	};

	const events = {
		title: 'Events',
		amount: 10,
	};

	const members = {
		title: 'Community Members',
		amount: 1000,
	};

	const attendees = {
		title: 'Attendees',
		amount: 200,
	};

	return (
		<section className="flex w-[90vw] flex-row flex-wrap items-start justify-around gap-12 max-md:flex-col max-md:items-center">
			<Circle {...years} />
			<Circle {...events} />
			<Circle {...members} />
			<Circle {...attendees} />
		</section>
	);
}
