import './App.css';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/components/Home';
import { Button } from '@/components/ui/button';
import down from '/images/down.svg';
import { About } from '@/components/About';
import { Circles } from '@/components/Circles';
import { TechLine } from '@/components/TechLine';
import { FAQs } from '@/components/FAQs';
import { Footer } from '@/components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Button>JOIN US</Button>
			<img src={down} alt="scroll_down" className="mt-16 h-16" />
			<About />
			<Circles />
			<TechLine />
			<FAQs />
			<Footer />
		</>
	);
}

export default App;
