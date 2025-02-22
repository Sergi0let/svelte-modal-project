<script>
	import Button from '$lib/components/Button.svelte';
	import ModalFrame from '$lib/components/ModalFrame.svelte';
	import { onMount } from 'svelte';
	import '../styles/main.scss';
	let isIframe = false;

	if (typeof window !== 'undefined') {
		isIframe = window.self !== window.top;
	}
	let isOpen = false;

	function openModal() {
		isOpen = true;
	}

	function closeModal() {
		isOpen = false;
	}

	onMount(() => {
		window.addEventListener('message', (event) => {
			if (event.data?.action === 'closeModal') {
				isOpen = false;
			}
		});
	});
</script>

<div class="background" class:no-bg={isIframe}>
	<ModalFrame {isOpen} onClose={closeModal} />

	<Button onclick={openModal} {isOpen} position="bottom-right" />

	<slot />
</div>

<style lang="scss">
	.background {
		width: 100%;
		height: 100vh;
		background-image: url('/assets/bg/bg-main.webp');
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.no-bg {
		background: none !important;
	}
</style>
