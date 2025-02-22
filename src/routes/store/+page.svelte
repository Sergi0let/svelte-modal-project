<script>
	import { goto } from '$app/navigation';
	import ModalFrame from '$lib/components/ModalFrame.svelte';
	let isOpen = true; // Відкриваємо iframe за замовчуванням

	function closeModal() {
		isOpen = false;
	}
</script>

<button class="open-store-btn" onclick={() => goto('/')}> To Previous Page </button>
<ModalFrame {isOpen} onClose={closeModal} />
