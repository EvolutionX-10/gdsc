import asset from '/images/home_asset.svg';

export function Home() {
	return (
		<section id="home" className="flex flex-col items-center justify-center gap-4 pb-0 pt-[10vw]">
			<div className="gdsc text-6xl font-medium max-md:w-min">Google Developer Student Clubs</div>
			<div className="text-4xl font-medium text-secondary max-md:text-3xl">RCOEM Chapter</div>

			<div className="flex w-4/5 flex-col items-center justify-center gap-4 py-8">
				<img src={asset} alt="Home Asset" className="w-[min(80vw,28rem)]" />
				<div className="text-center text-3xl text-secondary max-md:text-2xl md:w-2/3">
					Google Developer Student Clubs are community groups for college and university students
					interested in Google developer technologies.
				</div>
			</div>
		</section>
	);
}
