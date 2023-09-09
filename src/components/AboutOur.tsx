import type { CSSProperties } from 'react';

export function AboutOur(props: AboutOurProps) {
	const swap = props.swap ? 'md:flex-row' : 'md:flex-row-reverse';
	const style = {
		background: `linear-gradient(${props.swap ? '270' : '90'}deg, transparent 97%, ${
			props.color
		} 100%)`,
		borderRadius: props.swap ? `20px 0 0 20px` : `0 20px 20px 0`,
	};
	const translate: CSSProperties = {
		transform: props.swap ? 'translateX(2rem)' : 'translateX(-2rem)',
		textAlign: props.swap ? 'start' : 'end',
	};

	const imgTranslate = {
		transform: props.swap ? 'translateX(-4rem)' : 'translateX(4rem)',
	};

	return (
		<div className="flex w-[80vw] flex-col items-center justify-center gap-4 py-16">
			<div className="title text-5xl font-medium text-secondary-foreground">{props.title}</div>
			<div className="line h-1 w-44 rounded-md" style={{ background: props.color }} />
			<div className={'flex flex-col items-center justify-between ' + swap}>
				<div style={style} className="flex w-2/4 items-center justify-between py-6">
					<div style={translate} className="min-h-36 text-2xl font-medium text-secondary">
						{props.description}
					</div>
				</div>
				<div style={imgTranslate} className="flex flex-col items-center justify-center gap-4">
					<img src={props.img} alt={props.title} className="w-72" />
				</div>
			</div>
		</div>
	);
}

interface AboutOurProps {
	title: string;
	description: string;
	color: string;
	img: string;
	swap?: boolean;
}
