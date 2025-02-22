<script>
	import CheckIcon from './icons/CheckIcon.svelte';
	import CloseIcon from './icons/CloseIcon.svelte';
	import CrownIcon from './icons/CrownIcon.svelte';
	import CrownLargeIcon from './icons/CrownLargeIcon.svelte';
	import FreeSpinIcon from './icons/FreeSpinIcon.svelte';
	import InfoIcon from './icons/InfoIcon.svelte';
	import StarIcon from './icons/StarIcon.svelte';
	import TermsIcon from './icons/TermsIcon.svelte';
	import TimerIcon from './icons/TimerIcon.svelte';

	export let name = 'crownSmall';
	export let color = 'currentColor';
	export let size = '24px';
	export let style = '';

	const icons = {
		crownSmall: CrownIcon,
		crownLarge: CrownLargeIcon,
		starIcon: StarIcon,
		freeSpin: FreeSpinIcon,
		close: CloseIcon,
		timer: TimerIcon,
		terms: TermsIcon,
		info: InfoIcon,
		check: CheckIcon
	};
</script>

<svelte:component this={icons[name]} {size} {color} {style} />
