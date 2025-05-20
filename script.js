// Function to update the booking form dynamically based on selected option
function showBookingForm(type) {
    let title = document.getElementById("booking-title");
    let formContainer = document.getElementById("booking-form");

    if (type === "flight") {
        title.innerHTML = "Book International and Domestic Flights";
        formContainer.innerHTML = `
            <form id="flight-form" class="form-container">
                <div class="form-group">
                    <label for="from">From:</label>
                    <input type="text" id="from" placeholder="Enter departure city" required>
                </div>
                <div class="form-group">
                    <label for="to">To:</label>
                    <input type="text" id="to" placeholder="Enter destination city" required>
                </div>
                <div class="form-group">
                    <label for="departure">Departure:</label>
                    <input type="date" id="departure" required>
                </div>
                <div class="form-group">
                    <label for="travellers">Travellers:</label>
                    <input type="number" id="travellers" min="1" value="1" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "hotel") {
        title.innerHTML = "Book Your Stay at Top Hotels";
        formContainer.innerHTML = `
            <form id="hotel-form" class="form-container">
                <div class="form-group">
                    <label for="location">Location:</label>
                    <input type="text" id="location" placeholder="Enter city or hotel name" required>
                </div>
                <div class="form-group">
                    <label for="checkin">Check-in:</label>
                    <input type="date" id="checkin" required>
                </div>
                <div class="form-group">
                    <label for="checkout">Check-out:</label>
                    <input type="date" id="checkout" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "homestay") {
        title.innerHTML = "Find Best Homestays & Villas";
        formContainer.innerHTML = `
            <form id="homestay-form" class="form-container">
                <div class="form-group">
                    <label for="homestay-location">Location:</label>
                    <input type="text" id="homestay-location" placeholder="Enter city or villa name" required>
                </div>
                <div class="form-group">
                    <label for="homestay-checkin">Check-in:</label>
                    <input type="date" id="homestay-checkin" required>
                </div>
                <div class="form-group">
                    <label for="homestay-checkout">Check-out:</label>
                    <input type="date" id="homestay-checkout" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "package") {
        title.innerHTML = "Book Holiday Packages";
        formContainer.innerHTML = `
            <form id="package-form" class="form-container">
                <div class="form-group">
                    <label for="destination">Destination:</label>
                    <input type="text" id="destination" placeholder="Enter preferred destination" required>
                </div>
                <div class="form-group">
                    <label for="package-date">Travel Date:</label>
                    <input type="date" id="package-date" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "train") {
        title.innerHTML = "Book Your Train Tickets";
        formContainer.innerHTML = `
            <form id="train-form" class="form-container">
                <div class="form-group">
                    <label for="train-from">From:</label>
                    <input type="text" id="train-from" placeholder="Enter departure station" required>
                </div>
                <div class="form-group">
                    <label for="train-to">To:</label>
                    <input type="text" id="train-to" placeholder="Enter destination station" required>
                </div>
                <div class="form-group">
                    <label for="train-date">Travel Date:</label>
                    <input type="date" id="train-date" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "bus") {
        title.innerHTML = "Book Your Bus Tickets";
        formContainer.innerHTML = `
            <form id="bus-form" class="form-container">
                <div class="form-group">
                    <label for="bus-from">From:</label>
                    <input type="text" id="bus-from" placeholder="Enter departure city" required>
                </div>
                <div class="form-group">
                    <label for="bus-to">To:</label>
                    <input type="text" id="bus-to" placeholder="Enter destination city" required>
                </div>
                <div class="form-group">
                    <label for="bus-date">Travel Date:</label>
                    <input type="date" id="bus-date" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "cab") {
        title.innerHTML = "Book a Cab";
        formContainer.innerHTML = `
            <form id="cab-form" class="form-container">
                <div class="form-group">
                    <label for="pickup">Pickup Location:</label>
                    <input type="text" id="pickup" placeholder="Enter pickup location" required>
                </div>
                <div class="form-group">
                    <label for="drop">Drop Location:</label>
                    <input type="text" id="drop" placeholder="Enter drop location" required>
                </div>
                <div class="form-group">
                    <label for="cab-date">Travel Date:</label>
                    <input type="date" id="cab-date" required>
                </div>
                <button type="submit" class="search-button">SEARCH</button>
            </form>
        `;
    } else if (type === "insurance") {
        title.innerHTML = "Get Travel Insurance";
        formContainer.innerHTML = `
            <form id="insurance-form" class="form-container">
                <div class="form-group">
                    <label for="traveller-name">Traveller Name:</label>
                    <input type="text" id="traveller-name" placeholder="Enter full name" required>
                </div>
                <div class="form-group">
                    <label for="trip-start">Trip Start Date:</label>
                    <input type="date" id="trip-start" required>
                </div>
                <div class="form-group">
                    <label for="trip-end">Trip End Date:</label>
                    <input type="date" id="trip-end" required>
                </div>
                <button type="submit" class="search-button">GET QUOTE</button>
            </form>
        `;
    }
}

//  JavaScript for Smooth Scrolling
function scrollLeft(containerId) {
    let container = document.getElementById(containerId);
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(containerId) {
    let container = document.getElementById(containerId);
    container.scrollBy({ left: 300, behavior: 'smooth' });
}

function toggleDropdown() {
    let dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
function applySelection() {
    alert("Selection Applied!");
    document.getElementById("languageDropdown").style.display = "none";
}

function applySelection() {
    let country = document.querySelector("#languageDropdown select:nth-of-type(1)").value;
    let language = document.querySelector("#languageDropdown select:nth-of-type(2)").value;
    
    let countryCode = country === "India" ? "IN" : country === "USA" ? "US" : country === "UK" ? "UK" : "XX";
    let languageCode = language === "English" ? "ENG" : language === "Hindi" ? "HIN" : "XX";
    
    document.querySelector(".dropdown-select").textContent = `${countryCode} | ${languageCode}`;
    
    document.getElementById("languageDropdown").style.display = "none";
}


