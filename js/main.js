const servicesModal = document.querySelectorAll('.servise-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modal = function (modalClick) {
	servicesModal[modalClick].classList.add('active');
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
	});
});

//PORTFOLIO SECTION MODAL

const portfolioModals = document.querySelectorAll('.portfolio-modal');
const imgCards = document.querySelectorAll('.img-card');
const portfolioCloseBtns = document.querySelectorAll('.portfolio-clise-btn'); // виправлена назва класу

// Функція відкриття модалки
const openPortfolioModal = (index) => {
	portfolioModals[index].classList.add('active');
};

// Функція закриття всіх модалок
const closePortfolioModals = () => {
	portfolioModals.forEach((modal) => {
		modal.classList.remove('active');
	});
};

// Відкриття по кліку на картку
imgCards.forEach((card, index) => {
	card.addEventListener('click', () => {
		openPortfolioModal(index);
	});
});

// Закриття по кліку на кнопку закриття
portfolioCloseBtns.forEach((btn) => {
	btn.addEventListener('click', closePortfolioModals);
});

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
