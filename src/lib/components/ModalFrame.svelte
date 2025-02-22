<script>
	import { fade } from 'svelte/transition';
	export let isOpen;
	export let onClose;

	function handleOverlayClick(event) {
		if (event.target.classList.contains('iframe-overlay')) {
			onClose();
		}
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div transition:fade={{ duration: 300 }} class="iframe-overlay" on:click={handleOverlayClick}>
		<iframe on:click|stopPropagation class="iframe-modal" src="/modal" title="Modal Window"
		></iframe>
	</div>
{/if}

<style lang="scss">
	.iframe-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		padding-inline-end: 32px;
		padding-block-end: 111px;
		z-index: 1000;

		@media (max-width: 768px) {
			padding-inline-end: 4px;
			padding-block-end: 0px;
		}
	}

	.iframe-modal {
		width: 390px;
		height: 660px;
		border: none;
	}
</style>
