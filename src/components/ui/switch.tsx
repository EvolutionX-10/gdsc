import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';
import sun from '/images/sun.svg';
import moon from '/images/moon.svg';

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			'switch peer inline-flex h-[28px] w-[80px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input',
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				'switch_thumb pointer-events-none flex aspect-square h-5 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform duration-300 data-[state=checked]:translate-x-[52px] data-[state=unchecked]:translate-x-1',
			)}
		>
			<img src={sun} alt="sun" className="sun h-3" />
			<img src={moon} alt="moon" className="moon h-5" />
		</SwitchPrimitives.Thumb>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
