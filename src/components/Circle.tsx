import circle from '/images/circle.svg';

import { useEffect, useRef, useState } from 'react';

export function Circle(props: CircleProps) {
	const [count, setCount] = useState(1);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					let i = 1;
					const interval = setInterval(
						() => {
							if (i >= props.amount) {
								setCount(props.amount);
								clearInterval(interval);
							} else {
								setCount(i);
								i++;
								if (i <= 100) {
									setTimeout(() => {}, 1000);
								} else if (i <= 1000) {
									i = Math.ceil(i / 10) * 10;
									// setTimeout(() => {}, 25);
								} else {
									i = Math.ceil(i / 100) * 100;
									// setTimeout(() => {}, 10);
								}
							}
						},
						Math.ceil(10 / i),
					);
				}
			},
			{ threshold: 0.2 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative" ref={ref}>
				<img src={circle} alt="circle" className="circle h-36" />
				<span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-4xl font-medium text-secondary">
					{map(count)}+
				</span>
			</div>
			<div className="w-min p-2 text-center text-xl font-medium text-primary">{props.title}</div>
		</div>
	);
}

function map(num: number) {
	if (num < 1000) return String(num);
	if (num >= 1000 && num < 1000000) return ((num / 1000).toFixed(2) + 'K').replace('.00', '');
	return String(num);
}

interface CircleProps {
	title: string;
	amount: number;
}
