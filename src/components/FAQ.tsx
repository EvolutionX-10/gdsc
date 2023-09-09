import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ(props: FAQProps) {
	const style = {
		background: `linear-gradient(270deg, transparent 98%, ${props.color} 100%)`,
	};
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value={props.question}>
				<AccordionTrigger style={style}>{props.question}</AccordionTrigger>
				<AccordionContent style={style}>{props.answer}</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

interface FAQProps {
	question: string;
	answer: string;
	color: string;
}
