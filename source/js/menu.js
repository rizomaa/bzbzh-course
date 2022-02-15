window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.page-nav').clientHeight <= scrollDistance) {
				document.querySelectorAll('.page-nav a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.page-nav li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});