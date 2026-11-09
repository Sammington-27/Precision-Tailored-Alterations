/* Part 3 */
var MAP_LAT = 40.7736; //latitude of the shop
var MAP_LNG = -73.9566; //longtitude of the shop 
 
var services = [
    {name:"Trouser Alterations", description:"Hem, waist and fit adjustment for trousers, jeans and chinos.", price:90, days:3 } ,
    {name: "Suit Alterations", description:"Jacket and suit trouser adjustment for a polished, comfortable fit.", price: 250, days:5},
    {name:"Dress Alterations", description:"Length, waist and fit adjustment for everyday and special occasion dresses.", price:200, days:5 } ,
    {name: "Shirt Alterations", description:"Sleeve and fit adjustment to improve comfort.", price: 180, days:3},
    {name:"Clothing Repairs", description:"Loose seams, damaged stitching, missing buttons and minor tears .", price:75, days:2 } ,
    {name: "Custom Tailoring ", description:"Personalised tailoring based on your measurements and requirements.", price: 1000, days:14},
    
];
var searchInput = document.getElementById('searchInput');
var sortSelect = document.getElementById('sortSelect');
var productContainer = document.getElementById('productContainer');
var products = [];
if (productContainer) {

    var listHtml = '';
    services.forEach(service => {
        listHtml = listHtml +
            '<div class="product" data-name="' + service.name + '" data-price="' + service.price + '">' +
            '<h3>' + service.name + '</h3>' +
            '<p>' + service.description + '</p>' +
            '<p class="price">From R' + service.price + ' | Ready in about ' + service.days + ' days</p>' +
            '</div>';
    });
    productContainer.innerHTML = listHtml;

    //store all the products together: an Array so that they can be sorted
    products = Array.from(document.getElementsByClassName('product'));

    //Run updatePage() whenever someone types or picks a sort option
    searchInput.addEventListener('input', updatePage);
    sortSelect.addEventListener('change', updatePage);
}

//Function that does all the sorting and searching
function updatePage() {
    //get the text that you have typed into the search bar
    var query = searchInput.value.toLowerCase();
    //get the option chosen to sort your products by
    var sortValue = sortSelect.value;
    //count how many services are showing
    var shown = 0;

    //filter either by search bar or dropdown
    products.forEach(product => {
        //get the data name of the product
        var name = product.getAttribute('data-name').toLowerCase();

        //IF statement that will either show or hide the product based on the search
        if (name.includes(query)) {
            product.style.display = 'block'; //shows product
            shown = shown + 1;
        } else {
            product.style.display = 'none'; //hides product
        }
    });

    //tell the user if nothing matches
    if (shown === 0) {
        document.getElementById('noResults').innerHTML = 'No services match your search.';
    } else {
        document.getElementById('noResults').innerHTML = '';
    }

    //Now we move over to the sort (dropdown)
    if (sortValue !== 'default') {
        products.sort((a, b) => {
            //fetch the different attributes based on the sort
            var priceA = parseFloat(a.getAttribute('data-price'));
            var priceB = parseFloat(b.getAttribute('data-price'));
            var nameA = a.getAttribute('data-name').toLowerCase();
            var nameB = b.getAttribute('data-name').toLowerCase();
            //compare the items on the dropdown choice
            if (sortValue === 'price-asc') return priceA - priceB; //low to high
            if (sortValue === 'price-desc') return priceB - priceA; //high to low
            if (sortValue === 'name-asc') return nameA.localeCompare(nameB); //A-Z
        });
        //forces the products to be shown in the new order
        products.forEach(product => productContainer.appendChild(product));
    }
}

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);

    //if the answer is showing, hide it. Otherwise show it
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

function openLightbox(clickedImage) {
    document.getElementById('lightboxImage').src = clickedImage.src;
    document.getElementById('lightboxImage').alt = clickedImage.alt;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


//Fill the service drop-down from the services list
var serviceSelect = document.getElementById('serviceType');

if (serviceSelect) {
    var optionsHtml = '<option value="">Choose a service</option>';
    services.forEach((service, index) => {
        optionsHtml = optionsHtml + '<option value="' + index + '">' + service.name + ' (from R' + service.price + ')</option>';
    });
    serviceSelect.innerHTML = optionsHtml;
}

function validateEnquiry() {
    //GET values from the input fields
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('mytel').value.trim();
    var serviceIndex = document.getElementById('serviceType').value;
    var items = parseFloat(document.getElementById('itemCount').value) || 0;
    var dropOff = document.getElementById('dropoffDate').value;
    var message = document.getElementById('message').value.trim();

    //build up a list of everything that is wrong
    var errors = '';

    if (name.length < 2) {
        errors = errors + 'Please enter your name (at least 2 characters).<br>';
    }
    if (!(email.includes('@') && email.includes('.'))) {
        errors = errors + 'Please enter a valid email, remember to add @ and a full stop.<br>';
    }
    if (phone.length !== 10 || isNaN(phone)) {
        errors = errors + 'Please enter a 10-digit phone number, numbers only (no spaces).<br>';
    }
    if (serviceIndex === '') {
        errors = errors + 'Please choose a service.<br>';
    }
    if (items < 1 || items > 20) {
        errors = errors + 'Please enter the number of items (1 to 20).<br>';
    }
    var today = new Date();
    var dropDate = new Date(dropOff);
    if (dropOff === '' || dropDate <= today) {
        errors = errors + 'Please choose a drop-off date from tomorrow onwards.<br>';
    }
    if (message.length < 10) {
        errors = errors + 'Please type an enquiry of at least 10 characters.<br>';
    }

    var errorBox = document.getElementById('enquiryErrors');
    var responseBox = document.getElementById('formResponse');
    responseBox.innerHTML = '';

    //if there are errors, show them and stop here
    if (errors !== '') {
        errorBox.innerHTML = errors;
        return;
    }
    errorBox.innerHTML = '';

    //work out the cost and the date it will be ready
    var chosen = services[serviceIndex];
    var total = chosen.price * items;
    var readyDate = new Date(dropOff);
    readyDate.setDate(readyDate.getDate() + chosen.days);

    //Display the result dynamically in the HTML
    responseBox.innerHTML =
        'Thank you, ' + name + '!<br>' +
        'Service: ' + chosen.name + '<br>' +
        'Number of items: ' + items + '<br>' +
        '<strong>Estimated cost: R' + total.toFixed(2) + '</strong> (the final price is confirmed once we see the garment)<br>' +
        'If you drop off on ' + dropOff + ', it should be ready on ' + readyDate.toDateString() + '.<br>' +
        'We will contact you at ' + email + ' to confirm.';

    //AJAX: send the form in the background, only if the form action is a real link
    var theForm = document.getElementById('enquiryForm');
    if (theForm.action.includes('formspree.io') && !theForm.action.includes('YOUR_ID')) {
        fetch(theForm.action, {
            method: 'POST',
            body: new FormData(theForm),
            headers: { 'Accept': 'application/json' }
        }).then(reply => {
            if (!reply.ok) {
                responseBox.innerHTML = responseBox.innerHTML + '<br>We could not send your enquiry to our team. Please use the Contact page.';
            }
        });
    }
}

//Clear button: also removes the messages
function clearEnquiry() {
    document.getElementById('enquiryErrors').innerHTML = '';
    document.getElementById('formResponse').innerHTML = '';
}



function validateContactForm() {
    var name = document.getElementById('contactName').value.trim();
    var email = document.getElementById('myEmail').value.trim();
    var phone = document.getElementById('contactPhone').value.trim();
    var messageType = document.getElementById('messageType').value;
    var message = document.getElementById('contactMessage').value.trim();

    var errors = '';

    if (name.length < 2) {
        errors = errors + 'Please enter your name (at least 2 characters).<br>';
    }
    if (!(email.includes('@') && email.includes('.'))) {
        errors = errors + 'Not a valid email, remember to add @ and a fullstop.<br>';
    }
    if (phone.length !== 10 || isNaN(phone)) {
        errors = errors + 'Please enter a 10-digit phone number, numbers only (no spaces).<br>';
    }
    if (messageType === '') {
        errors = errors + 'Please choose the type of message.<br>';
    }
    if (message.length < 10) {
        errors = errors + 'Please type a message of at least 10 characters.<br>';
    }

    var errorBox = document.getElementById('contactErrors');

    if (errors !== '') {
        //if the details are not correct, show the errors
        errorBox.innerHTML = errors;
        document.getElementById('resultText').innerHTML = '';
    } else {
        //so if everything is successful it will do the following
        errorBox.innerHTML = '';
        document.getElementById('resultText').innerHTML = 'Thank you for submitting! Your email app will open so you can send your message.'; //Output
        document.getElementById('contactForm').submit(); //form will be submitted to email
        document.getElementById('contactForm').reset(); //Reset and remove text from form
    }
}


if (document.getElementById('map')) {
    var map = L.map('map').setView([MAP_LAT, MAP_LNG], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([MAP_LAT, MAP_LNG]).addTo(map);

    marker.bindPopup("<b>Precision Tailored & Alterations</b><br>Come and visit us!").openPopup();
}