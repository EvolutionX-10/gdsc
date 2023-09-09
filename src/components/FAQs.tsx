import { FAQ } from './FAQ';

export function FAQs() {
	const faqs = [
		{
			question: 'What is GDSC?',
			answer:
				'Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
		},
		{
			question: 'How can you become a part of GDSC?',
			answer:
				'We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.',
		},
		{
			question: 'What does a GDSC Lead do?',
			answer:
				'A GDSC Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
		},
		{
			question: 'How is GDSC related to Google?',
			answer:
				'A GDSC Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
		},
		{
			question: 'How to reach us?',
			answer: 'Mail us at "gdsc.rknec@gmail.com "',
		},
	];

	const colors: Record<number, string> = {
		0: '--red',
		1: '--green',
		2: '--blue',
		3: '--yellow',
		4: '--red',
	};

	return (
		<div className="flex w-full flex-col items-center justify-center pb-24">
			<p className="p-12 text-3xl font-medium text-primary">FAQs</p>
			<div className="flex w-4/5 flex-col items-center justify-center gap-6">
				{faqs.map((faq, i) => (
					<FAQ key={i} color={`var(${colors[i]})`} question={faq.question} answer={faq.answer} />
				))}
			</div>
		</div>
	);
}
