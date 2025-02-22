<script>
	import { goto } from '$app/navigation';
	import '../styles/main.scss';
</script>

<div class="home-content">
	<button class="open-store-btn" onclick={() => goto('/store')}> To Second Page </button>
</div>

<style lang="scss">
	.home-content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
