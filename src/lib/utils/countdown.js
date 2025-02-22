function createCountdown(targetTime, callback) {
	function updateCountdown() {
		const now = new Date().getTime();
		const timeLeft = Math.max(0, targetTime - now);

		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		callback(`${days}d ${hours}h ${minutes}m ${seconds}s`);

		if (timeLeft <= 0) clearInterval(interval);
	}

	updateCountdown();

	const interval = setInterval(updateCountdown, 1000);

	return () => clearInterval(interval);
}

export { createCountdown };
