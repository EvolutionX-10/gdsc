import asset from '/images/home_asset.svg';

export function Home() {
	return (
		<section id="home" className="flex flex-col items-center justify-center gap-4 pb-0 pt-32">
			<div className="gdsc text-6xl font-medium">Google Developer Student Clubs</div>
			<div className="text-4xl font-medium text-secondary">RCOEM Chapter</div>

			<div className="flex w-2/4 flex-col items-center justify-center gap-4 py-8">
				<img src={asset} alt="Home Asset" className="w-3/4" />
				<div className="text-center text-3xl text-secondary">
					Google Developer Student Clubs are community groups for college and university students
					interested in Google developer technologies.
				</div>
			</div>
		</section>
	);
}
