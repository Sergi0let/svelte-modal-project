<script>
	import { createCountdown } from '$lib';
	import { onDestroy } from 'svelte';
	import Icon from './Icon.svelte';

	export let img;
	export let title;
	export let provider;
	export let wager;
	export let koeficient;
	export let sum;
	export let bonus;
	export let targetTime;

	let countdown = 'Loading...';
	let stopCountdown = createCountdown(targetTime, (newTime) => (countdown = newTime));
	onDestroy(() => stopCountdown());
</script>

<li class="game-item">
	<figure class="game-item__image">
		<img src={img} alt={title} width="98" height="98" />
		<p class="bg-glass">{countdown}</p>
		<figcaption class="sr-only">{title}</figcaption>
	</figure>
	<div class="game-item__content">
		<div class="game-item__info info-game">
			<div>
				<h3 class="info-game__title">{title}</h3>
				<p class="info-game__provider">{provider}</p>
			</div>

			<ul class="info-game__features">
				<li><b>{wager}</b> Wagering</li>
				<li><b>{koeficient}</b> Bet</li>
			</ul>
		</div>
		<div class="game-item__bonus">
			<p>{bonus}</p>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<a href="#" class="game-item__link">
				<Icon name="crownSmall" color="var(--txt-gray)" size="16px" />
				<span>{sum}</span>
			</a>
		</div>
	</div>
</li>

<style lang="scss">
	.game-item {
		display: flex;
		column-gap: 10px;
		padding: 8px 16px 8px 8px;
		scroll-snap-align: start;
		border-radius: 12px;
		background: var(--bg-gray);

		&__image {
			max-width: 98px;
			max-height: 98px;
			flex: 0 0 98px;
			position: relative;
			overflow: hidden;
			border-radius: 12px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			& > p {
				width: calc(100% - 4px);
				margin-inline: 2px;
				position: absolute;
				top: 2px;
				font-size: 10px;
				font-weight: 600;
				color: var(--txt-gray);
				line-height: 20px;
			}
		}

		&__content {
			display: flex;
			width: 100%;
			justify-content: space-between;
			gap: 8px;
		}
		&__info {
			max-width: 130px;
			min-width: 130px;
			flex: 0 1 130px;
		}
		&__bonus {
			max-width: 94px;
			width: 100%;
			height: 100%;
			display: grid;
			padding-block-end: 7px;

			p {
				font-size: 24px;
				font-weight: 800;
				line-height: 1.2;
				letter-spacing: -1.5px;
				margin-inline-start: auto;
				margin-block-start: auto;
			}
		}
		&__link {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 4px;
			line-height: 30px;
			display: flex;
			background: var(--bg-gradient);
			font-size: 12px;
			font-weight: 700;
			color: var(--txt-gray);
			border-radius: 8px;
			margin-top: auto;
			position: relative;
			overflow: hidden;

			&::after {
				content: '';
				position: absolute;
				top: -50%;
				left: -50%;
				height: 80px;
				transform: rotate(45deg);
				width: 20px;
				background: #ffffff82;
				transition: left 0.3s ease;
			}

			&:hover {
				&::after {
					left: 120%;
				}
			}
		}
	}
	.info-game {
		padding-block: 7px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&__title {
			text-align: left;
			font-size: 16px;
			font-weight: 700;
			line-height: 1.2;
			text-wrap: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: var(--txt-gray);
		}
		&__provider {
			margin-block-start: 5px;
			text-align: left;
			font-size: 13px;
			line-height: 1.2;
			font-weight: 500;
			color: var(--txt-gray-dark);
		}
		&__features {
			margin-block-start: 2px;
			li,
			b {
				font-weight: 500;
				line-height: 1.4;
				text-align: left;
				font-size: 13px;
			}
			li {
				color: var(--txt-gray-dark);
			}
			b {
				color: var(--txt-selected);
			}
		}
	}
</style>
