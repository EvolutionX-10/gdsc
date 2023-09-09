import circle from '/images/circle.svg';

export function Circle(props: CircleProps) {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative">
				<img src={circle} alt="circle" className="h-36 circle" />
				<span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-4xl font-medium text-secondary">
					{map(props.amount)}+
				</span>
			</div>
			<div className="p-2 text-xl font-medium text-primary w-min text-center">{props.title}</div>
		</div>
	);
}

function map(num: number) {
	if (num < 1000) return String(num);
	if (num >= 1000 && num < 1000000) return Math.round(num / 1000) + "K";
	if (num >= 1000000 && num < 1000000000) return Math.round(num / 1000000) + "M";
	if (num >= 1000000000 && num < 1000000000000) return Math.round(num / 1000000000) + "B";
	if (num >= 1000000000000) return Math.round(num / 1000000000000) + "T";
	return String(num);
}

interface CircleProps {
	title: string;
	amount: number;
}
