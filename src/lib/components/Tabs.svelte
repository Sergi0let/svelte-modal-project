<script>
	import Icon from '$lib/components/Icon.svelte';

	export let selectedTab;
	export let onSelectTab;
</script>

<footer class="modal-tabs">
	<button
		class="modal-tabs__btn {selectedTab === 'freeSpin' ? 'active' : ''}"
		on:click={() => onSelectTab('freeSpin')}
	>
		<Icon
			name="freeSpin"
			color={selectedTab === 'freeSpin' ? 'var(--txt-gray)' : 'var(--txt-gray-dark)'}
			size="17px"
		/>
		<span>Free Spin</span>
	</button>
	<button
		class="modal-tabs__btn {selectedTab === 'bonusCash' ? 'active' : ''}"
		on:click={() => onSelectTab('bonusCash')}
	>
		<Icon
			name="starIcon"
			color={selectedTab === 'bonusCash' ? 'var(--txt-gray)' : 'var(--txt-gray-dark)'}
			size="16px"
		/>
		<span>Bonus Cash</span>
	</button>
</footer>

<style lang="scss">
	.modal-tabs {
		display: flex;
		background: #1c1c24;
		border-radius: 12px;
		margin: 12px;
		overflow: hidden;
	}

	.modal-tabs__btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		flex: 1;
		padding: 12px;
		font-size: 14px;
		font-weight: 500;
		color: var(--txt-gray-dark);
		text-align: center;
		border: none;
		cursor: pointer;
		background: transparent;
		transition: background 0.3s;

		&.active {
			background: #2a2c36;
			border-radius: 12px;
			color: var(--txt-gray);
		}
	}
</style>
