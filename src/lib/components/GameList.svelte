<script>
	import GameItem from './GameItem.svelte';

	export let games = [];
</script>

<ul class="game-list">
	{#each games as game}
		<GameItem {...game} />
	{/each}
</ul>

<style>
	.game-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
		height: 411px;
		overflow-y: auto;
		scroll-snap-type: y mandatory;
		scrollbar-width: none;
		scroll-behavior: smooth;

		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
