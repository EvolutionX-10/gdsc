export function Tech(props: TechProps) {
	return (
		<div className="flex flex-col items-center">
			<span className="h-[5px] w-24 rounded-lg" style={{ background: props.color }} />
			<div className="box flex translate-y-1 flex-col items-center justify-center rounded-2xl px-16 py-2 shadow-[0_10px_30px_hsl(var(--shadow))]">
				<img src={props.img} alt="circle" className="h-24" />
				<span className="text-2xl font-medium text-primary">{props.title}</span>
			</div>
		</div>
	);
}

interface TechProps {
	title: string;
	img: string;
	color: string;
}
