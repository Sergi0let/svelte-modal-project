<script>
	import Modal from '$lib/components/Modal.svelte';
	import '../../styles/main.scss';

	let isOpen = true;

	function closeModal() {
		isOpen = false;
		window.parent.postMessage({ action: 'closeModal' }, '*');
	}
</script>

{#if isOpen}
	<Modal {isOpen} onClose={closeModal} />
{/if}
