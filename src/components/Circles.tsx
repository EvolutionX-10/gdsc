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
		<div className="flex w-[90vw] flex-wrap items-start justify-around mb-12">
			<Circle {...years} />
			<Circle {...events} />
			<Circle {...members} />
			<Circle {...attendees} />
		</div>
	);
}
