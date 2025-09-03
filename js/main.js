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
