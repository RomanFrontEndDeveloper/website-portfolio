//////////dark theme
// 1-а спроба переключення теми:

// const body = document.body;
// const menuBtn = document.getElementById('menuBtn1');

// menuBtn.addEventListener('click', () => {
// 	// перемикаємо dark-theme на body
// 	body.classList.toggle('dark-theme');
// 	menuBtn.classList.toggle('dark-theme');
// 	// перемикаємо стан кнопки
// });
//----------------------------------------------------------------------------------------------

// 2-а спроба переключення теми:
// const themeBtn = document.querySelector('.them-btn');

// //функція для отримання поточної теми

// const fetCurrentTheme = () =>
// 	document.body.classList.contains('dark-theme') ? 'dark' : 'light';

// /// фенкція для поточного значка

// const getCurentIcon = () =>
// 	themeBtn.classList.contains('fa-sun') ? 'fa-sun' : 'fa-moon';

// // переключ теми

// themeBtn.addEventListener('click', function () {
// 	document.body.classList.toggle('dark-theme');
// 	themeBtn.classList.toggle('fa-sun');
// });
//--------------------------------------------------------------
// 3-а спроба переключення теми:
document.addEventListener('DOMContentLoaded', () => {
	const themeBtn = document.querySelector('.them-btn');
	if (!themeBtn) return;

	const moonIcon = themeBtn.querySelector('.fa-moon');
	const sunIcon = themeBtn.querySelector('.fa-sun');
	if (!moonIcon || !sunIcon) return;

	function updateIcons() {
		const isDark = document.body.classList.contains('dark-theme');
		// якщо темна тема — показуємо сонце, ховаємо місяць
		moonIcon.style.display = isDark ? 'none' : 'inline-block';
		sunIcon.style.display = isDark ? 'inline-block' : 'none';
	}

	// ---- Функція для збереження теми ----
	function saveTheme() {
		const theme = document.body.classList.contains('dark-theme')
			? 'dark'
			: 'light';
		localStorage.setItem('theme', theme);
	}

	themeBtn.addEventListener('click', () => {
		document.body.classList.toggle('dark-theme');
		updateIcons();
		saveTheme();
	});

	// Accessibility: дозволити переключати клавішами Enter / Space
	themeBtn.tabIndex = 0;
	themeBtn.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			themeBtn.click();
		}
	});

	// ---- При завантаженні сторінки підтягуємо тему з localStorage ----
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		document.body.classList.add('dark-theme');
	} else {
		document.body.classList.remove('dark-theme');
	}

	// Ініціалізація стану іконок при завантаженні сторінки
	updateIcons();
});

//////Header effect scroll  /////////////////////////

const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
	window.scrollY > 1
		? header.classList.add('sticky')
		: header.classList.remove('sticky');
});

////navigation menu item active

window.addEventListener('scroll', function () {
	const sections = document.querySelectorAll('section');
	const scrollY = window.scrollY;

	sections.forEach(function (current) {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50; // було offsetHeight — неправильно
		const sectionId = current.getAttribute('id');
		const navItem = document.querySelector(
			`.nav-link[href="#${sectionId}"]`
		);

		if (navItem) {
			if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
				navItem.classList.add('active'); // було link — не існувало
			} else {
				navItem.classList.remove('active');
			}
		}
	});
});

////////skroll to top button

const scrollToTop = document.querySelector('.scrollToTop');
window.addEventListener('scroll', function () {
	scrollToTop.classList.toggle('active', this.window.scrollY > 500);
});

scrollToTop.addEventListener('click', function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

////////-initial scrollreveal

const revealConfigurations = [
	{
		selector: '.inner-title, .inner-second-title',
		config: { opacity: 0, delay: 500 },
	},
	{
		selector: '.home-info h1, .about-img, .contact-card .title',
		config: { delay: 500, origin: 'left' },
	},
	{
		selector: '.home-img, .description',
		config: { delay: 600, origin: 'right' },
	},
	{
		selector:
			'.skills-description, .work-exp-title, .services-description, .contacr-right p, .contact-left h2',
		config: { delay: 600, origin: 'top' },
	},
	{
		selector: '.media-icons a, .list-item, .inner-info-link',
		config: { delay: 700, origin: 'bu ttom', interval: 300 },
	},
	{
		selector: '.education',
		config: { origin: 'top', delay: 600, interval: 300 },
	},
	{
		selector:
			'.work-exp, .experience-card, .services-container, .contact-list li, .portfolio-img-card, .first-row, .second-row, .third-row',
		config: { origin: 'top', delay: 600, interval: 300 },
	},
	{
		selector: '.home-info h3, .home-info p, .home-info-link',
		config: { delay: 600, origin: 'left' },
	},
];

function initializeScrollReveal() {
	window.sr = ScrollReveal({
		reset: true,
		distance: '60px',
		duration: 2500,
		delay: 100,
	});

	revealConfigurations.forEach(({ selector, config }) => {
		sr.reveal(selector, config);
	});
}

initializeScrollReveal();

// Функція відключення ScrollReveal

function disableScrollReveal() {
	sr.clean(); ///очистка всіх елементів від анімацій
	document.documentElement.style.overflowY = 'hidden';
	document.body.style.overflowY = 'hidden';

	revealConfigurations.forEach(({ selector }) => {
		document.querySelectorAll(selector).forEach((el) => {
			el.style.transform = '';
			el.style.opacity = '';
			el.style.transition = '';
			el.style.visibility = '';
		});
	});

	console.log('ScrollReveal вимкнено');
}

// Функция повторной инициализации ScrollReveal function enableScrollReveal() {
function enableScrollReveal() {
	document.documentElement.style.overflow = '';
	document.body.style.overflow = '';
	initializeScrollReveal();
	console.log(jkjkjh);
}

//////Services section -Modal /////////////////////////

const servicesModal = document.querySelectorAll('.servise-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modal = function (modalClick) {
	servicesModal[modalClick].classList.add('active');
	disableScrollReveal();
};

learnMoreBtn.forEach((button, i) => {
	button.addEventListener('click', function () {
		modal(i);
	});
});

modalCloseBtn.forEach((button) => {
	button.addEventListener('click', () => {
		servicesModal.forEach((modal) => {
			modal.classList.remove('active');
		});
		enableScrollReveal();
	});
});

///Responsive navigation menu toggle

const navBtn = document.querySelector('.nav-menu-btn');
const navBar = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-ul-menu');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', function () {
	navBtn.classList.toggle('close1');
	navBar.classList.toggle('active');
	navMenu.classList.toggle('active');
});

navLinks.forEach(function (Link) {
	Link.addEventListener('click', function () {
		navBtn.classList.remove('close1');
		navBar.classList.remove('active');
		navMenu.classList.remove('active');
	});
});

//PORTFOLIO SECTION MODAL /////////////////////////////

const portfolioModals = document.querySelectorAll('.portfolio-modal');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-clise-btn'); // виправлена назва класу

// Функція відкриття модалки
const portfolioModal = function (modalClick) {
	portfolioModals[modalClick].classList.add('active');
	disableScrollReveal();
};

//Функція закриття всіх модалок
const closePortfolioModals = () => {
	portfolioModals.forEach((modal) => {
		modal.classList.remove('active');
	});
};

// Відкриття по кліку на картку
imgCards.forEach((button, i) => {
	button.addEventListener('click', () => {
		portfolioModal(i);
	});
});

// Закриття по кліку на кнопку закриття
portfolioCloseBtns.forEach((button) => {
	button.addEventListener('click', () => {
		portfolioModals.forEach((modelViev) => {
			modelViev.classList.remove('active');
		});
		enableScrollReveal();
	});
});

/////////// OUR CLIENTS section ///////////////////

var swiper = new Swiper('.client-swipper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
