
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

}); 
document.addEventListener('DOMContentLoaded', function() {
    function renderWhySection() {
        const section = document.createElement('section');
        section.classList.add('why');
document.getElementById('section');
        section.innerHTML = `
            <h1>Why choose us</h1>
            <p>The main reason is because our<br> competitors have disgusting<br> sites, but we can't write that<br> here, so the text here will be<br> different</p>
            <div class="container">
                <div class="Ellipse">
                    <img src="asset/Ellipse 2.svg" alt="Ellipse">
                </div>
                <div class="payment">
                    <img src="asset/payment.svg" alt="Payment">
                </div>
            </div>
            <div class="method">
                <h1>Payment Method</h1>
                <p>We have a lot of them,<br> from cryptocurrencies to barter for potatoes</p>
            </div>
            <div class="container2">
                <div class="Ellipse">
                    <img src="asset/Ellipse 2.svg" alt="Ellipse">
                </div>
                <div class="payment">
                    <img src="asset/searching 2.svg" alt="payment">
                </div>
            </div>
            <div class="simple">
                <h2>Simple Search Process</h2>
                <p>We checked it out, even the kids did it,<br> but it is my mom's friend's son</p>
            </div>
            <div class="image-container">
                <div class="image-wrapper">
                    <img src="asset/Ellipse 2.svg" alt="Ellipse" class="ellipse">
                    <img src="asset/support.svg" alt="Support" class="support">
                </div>
            </div>
            <div class="hours">
                <h1>24/7 Support</h1>
                <p>Is there something you don't<br> understand? Feel free to call us.<br> Phone number is in the footer.</p>
            </div>
            <div class="image-container2">
                <div class="image-wrapper">
                    <img src="asset/Ellipse 2.svg" alt="Ellipse" class="ellipse">
                    <img src="asset/nice.svg" alt="Support" class="support">
                </div>
            </div>
            <div class="nice">
                <h1>We are Nice</h1>
                <p>Fantasy is over, there will be something,<br> really convincing here</p>
            </div>
        `;
        document.getElementById('dynamic-content').appendChild(section);
    }


    renderWhySection();
});

