document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Спасибо, ${name}! Мы свяжемся с вами по адресу ${email}.`);
            form.reset();
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});