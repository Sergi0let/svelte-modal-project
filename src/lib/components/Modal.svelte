<script>
	import { createCountdown, gamesData } from '$lib';
	import Icon from '$lib/components/Icon.svelte';
	import { fade } from 'svelte/transition';
	import GameList from './GameList.svelte';
	import Tabs from './Tabs.svelte';

	export let isOpen = true;
	export let onClose;

	let countdown = '3d 7h 34m 50s';
	let stopCountdown;
	let selectedTab = 'freeSpin';

	$: if (isOpen) {
		const targetTime =
			new Date().getTime() + (3 * 24 * 60 * 60 + 7 * 60 * 60 + 34 * 60 + 50) * 1000;
		stopCountdown = createCountdown(targetTime, (newTime) => (countdown = newTime));
	} else if (stopCountdown) {
		stopCountdown();
	}

	function handleTabChange(tab) {
		selectedTab = tab;
	}
</script>

{#if isOpen}
	<div transition:fade>
		<div class="modal-block">
			<div class="modal-artstore">
				<img src="/assets/bg/store.png" width="148" height="128" alt="House of Art" />
				<div class="modal-artstore__timer bg-glass">
					<Icon name="timer" color="#C1C3D6" size="16px" /><span>{countdown}</span>
				</div>
			</div>
			<div class="modal-content">
				<div class="modal-content__decor"></div>
				<header class="modal-content__header header-modal">
					<div class="header-modal__top">
						<div class="header-modal__count">
							<Icon name="crownSmall" color="#C00165" size="16px" />
							<span>2000</span>
						</div>
						<button
							aria-label="close"
							focusable="false"
							class="header-modal__close-btn"
							on:click={onClose}
						>
							<Icon name="close" color="#C1C3D6" size="24px" />
						</button>
					</div>
					<h2 class="header-modal__title">
						<Icon name="terms" color="transparent" size="20px" />
						<span>TEST STORE</span>
						<Icon name="info" color="transparent" size="22px" />
					</h2>
				</header>
				<div class="modal-content__body">
					<GameList games={gamesData[selectedTab]} />
				</div>

				<Tabs {selectedTab} onSelectTab={handleTabChange} />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-block {
		position: relative;
		margin-top: 40px;
		z-index: 3;
	}

	.modal-artstore {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%, -34%);
		z-index: 2;

		&__timer {
			margin-block-start: -40px;
			padding-inline: 7px;
			display: flex;
			align-items: center;
			justify-content: center;
			column-gap: 5px;
			font-weight: 700;
			line-height: 26px;
			font-size: 16px;

			span {
				letter-spacing: 0.7px;
			}
		}
	}

	.modal-content {
		overflow: hidden;
		background: #0c0c10;
		border-radius: 24px;
		width: 388px;
		height: 612px;
		text-align: center;
		color: white;
		position: relative;

		&__decor {
			z-index: 1;
			overflow: hidden;
			position: absolute;
			top: -10%;
			left: 50%;
			transform: translateX(-50%);
			content: '';
			width: 360px;
			height: 100px;
			border-radius: 50%;
			background: var(--bg-modal-decor);
			filter: blur(70px);
		}

		&__body {
			padding-inline: 12px;
		}
	}

	.header-modal {
		padding: 20px 20px 17px;
		position: relative;
		z-index: 2;

		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 43px;
		}

		&__count {
			padding: 4px 9px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4px;
			color: #fcfcfc;
			font-weight: 700;
			font-size: 16px;
			line-height: 0;

			border-radius: 47px;
			background-color: #0a0a0b66;
			z-index: 2;
			letter-spacing: 1.2px;
		}

		&__close-btn {
			width: 28px;
			height: 28px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			transition: background 0.3s ease;
			z-index: 2;
			cursor: pointer;

			&:hover {
				background: #c00165;
			}
		}

		&__title {
			display: flex;
			align-items: center;
			gap: 8px;
			justify-content: center;
			font-size: 24px;
			font-weight: 700;
			line-height: 1;
			color: #fcfcfc;
		}
	}
</style>
