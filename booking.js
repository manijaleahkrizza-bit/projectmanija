const STORAGE_KEY = 'northern_mindanao_bookings';

const destinations = [
    {
        id: 1,
        name: "Camiguin Island",
        description: "The 'Island Born of Fire' with 7 volcanoes, hot springs, and the iconic Sunken Cemetery.",
        price: 500,
        location: "Camiguin Province",
        image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        name: "Maria Cristina Falls",
        description: "The 'Mother of All Falls' - a majestic 320-foot twin cascade in Iligan City.",
        price: 300,
        location: "Iligan City, Lanao del Norte",
        image: "https://images.pexels.com/photos/1430675/pexels-photo-1430675.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        name: "Dahilayan Adventure Park",
        description: "Home to Asia's longest dual zipline amidst Bukidnon's cool pine forests.",
        price: 800,
        location: "Manolo Fortich, Bukidnon",
        image: "https://images.pexels.com/photos/1271710/pexels-photo-1271710.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        name: "White Island",
        description: "Stunning sandbar off Camiguin with powdery white sand and views of Mt. Hibok-Hibok.",
        price: 400,
        location: "Mambajao, Camiguin",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 5,
        name: "Tinago Falls",
        description: "A hidden waterfall in Iligan City with an emerald pool and cave formations.",
        price: 250,
        location: "Iligan City, Lanao del Norte",
        image: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const restaurants = [
    {
        id: 1,
        name: "Paseo del Mar",
        description: "Seaside dining with fresh seafood and stunning sunset views over Iligan Bay.",
        price: 350,
        cuisine: "Seafood, Filipino",
        location: "Iligan City",
        image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        name: "Mossimo's Cafe",
        description: "Cozy cafe in Bukidnon known for organic coffee and homemade pastries.",
        price: 300,
        cuisine: "Cafe, Pastries",
        location: "Bukidnon",
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        name: "Camiguin's Secret Garden",
        description: "Garden restaurant featuring local delicacies and fresh island ingredients.",
        price: 400,
        cuisine: "Filipino, Local",
        location: "Camiguin",
        image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        name: "Dahilayan Forest Grill",
        description: "Mountain restaurant with grilled specialties and panoramic forest views.",
        price: 450,
        cuisine: "Grill, Asian",
        location: "Bukidnon",
        image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 5,
        name: "Oro's Finest Restaurant",
        description: "Fine dining establishment serving international and local fusion cuisine.",
        price: 500,
        cuisine: "Fusion, International",
        location: "Cagayan de Oro",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const resorts = [
    {
        id: 1,
        name: "Camiguin Volcanic Beach Resort",
        description: "Beachfront resort with views of Mt. Hibok-Hibok and natural hot springs.",
        price: 4500,
        location: "Camiguin",
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        name: "Dahilayan Forest Park Resort",
        description: "Mountain resort nestled in pine forests with cool climate and adventure activities.",
        price: 5500,
        location: "Bukidnon",
        image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        name: "Iligan Country Club",
        description: "Luxurious resort with golf course, swimming pools, and mountain views.",
        price: 4800,
        location: "Iligan City",
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        name: "Pearl Beach Resort",
        description: "Exclusive beachfront property with private white sand beach and diving spots.",
        price: 6200,
        location: "Camiguin",
        image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 5,
        name: "Mountain View Nature's Park",
        description: "Eco-friendly resort with native cottages and panoramic mountain scenery.",
        price: 3800,
        location: "Bukidnon",
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const PRICES = {
    DESTINATION_PER_PERSON: 500,
    RESTAURANT_PER_BOOKING: 350,
    ADULT_RATE: 1500,
    CHILD_RATE: 800,
    SENIOR_RATE: 1200
};

let selectedDestinations = [];
let selectedRestaurants = [];
let selectedResort = null;
let adultCount = 2;
let childCount = 0;
let seniorCount = 0;
let nights = 2;
let qrCode = null;

function saveBookingToStorage(bookingData) {
    const existing = localStorage.getItem(STORAGE_KEY);
    const bookings = existing ? JSON.parse(existing) : [];
    bookings.push(bookingData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    if (!grid) return;
    
    grid.innerHTML = destinations.map(dest => `
        <div class="destination-card card-item" data-id="${dest.id}" data-type="destination">
            <div class="card-image" style="background-image: url('${dest.image}')">
                ${selectedDestinations.some(d => d.id === dest.id) ? '<div class="selected-badge"><i class="fas fa-check"></i></div>' : ''}
            </div>
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="price">₱${dest.price.toLocaleString()} <small>per person</small></div>
                <div class="location"><i class="fas fa-map-pin"></i> ${dest.location}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.destination-card').forEach(card => {
        card.addEventListener('click', () => toggleDestination(parseInt(card.dataset.id)));
    });
}

function renderRestaurants() {
    const grid = document.getElementById('restaurantsGrid');
    if (!grid) return;
    
    grid.innerHTML = restaurants.map(rest => `
        <div class="restaurant-card card-item" data-id="${rest.id}" data-type="restaurant">
            <div class="card-image" style="background-image: url('${rest.image}')">
                ${selectedRestaurants.some(r => r.id === rest.id) ? '<div class="selected-badge"><i class="fas fa-check"></i></div>' : ''}
            </div>
            <div class="card-content">
                <h3>${rest.name}</h3>
                <p>${rest.description}</p>
                <div class="cuisine"><i class="fas fa-utensil-spoon"></i> ${rest.cuisine}</div>
                <div class="price">₱${rest.price.toLocaleString()} <small>per booking</small></div>
                <div class="location"><i class="fas fa-map-pin"></i> ${rest.location}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.addEventListener('click', () => toggleRestaurant(parseInt(card.dataset.id)));
    });
}

function renderResorts() {
    const grid = document.getElementById('resortsGrid');
    if (!grid) return;
    
    grid.innerHTML = resorts.map(resort => `
        <div class="resort-card card-item" data-id="${resort.id}" data-type="resort">
            <div class="card-image" style="background-image: url('${resort.image}')">
                ${selectedResort && selectedResort.id === resort.id ? '<div class="selected-badge"><i class="fas fa-check"></i></div>' : ''}
            </div>
            <div class="card-content">
                <h3>${resort.name}</h3>
                <p>${resort.description}</p>
                <div class="price">₱${resort.price.toLocaleString()} <small>per night</small></div>
                <div class="location"><i class="fas fa-map-pin"></i> ${resort.location}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.resort-card').forEach(card => {
        card.addEventListener('click', () => selectResort(parseInt(card.dataset.id)));
    });
}

function toggleDestination(destinationId) {
    const destination = destinations.find(d => d.id === destinationId);
    const index = selectedDestinations.findIndex(d => d.id === destinationId);
    
    if (index === -1) {
        selectedDestinations.push(destination);
    } else {
        selectedDestinations.splice(index, 1);
    }
    
    updateSelectedDestinationsList();
    updatePriceBreakdown();
    renderDestinations();
}

function toggleRestaurant(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const index = selectedRestaurants.findIndex(r => r.id === restaurantId);
    
    if (index === -1) {
        selectedRestaurants.push(restaurant);
    } else {
        selectedRestaurants.splice(index, 1);
    }
    
    updateSelectedRestaurantsList();
    updatePriceBreakdown();
    renderRestaurants();
}

function selectResort(resortId) {
    const resort = resorts.find(r => r.id === resortId);
    
    if (selectedResort && selectedResort.id === resortId) {
        selectedResort = null;
    } else {
        selectedResort = resort;
    }
    
    updateSelectedResortList();
    updatePriceBreakdown();
    renderResorts();
}

function updateSelectedDestinationsList() {
    const container = document.getElementById('selectedDestinationsList');
    if (!container) return;
    
    if (selectedDestinations.length === 0) {
        container.innerHTML = '<p class="empty-message">No destinations selected yet</p>';
        return;
    }
    
    container.innerHTML = selectedDestinations.map(dest => `
        <div class="selected-item">
            <span><strong>${dest.name}</strong> - ₱${dest.price.toLocaleString()}</span>
            <button class="remove-btn" data-id="${dest.id}" data-type="destination">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.remove-btn[data-type="destination"]').forEach(btn => {
        btn.addEventListener('click', () => toggleDestination(parseInt(btn.dataset.id)));
    });
}

function updateSelectedRestaurantsList() {
    const container = document.getElementById('selectedRestaurantsList');
    if (!container) return;
    
    if (selectedRestaurants.length === 0) {
        container.innerHTML = '<p class="empty-message">No restaurants selected yet</p>';
        return;
    }
    
    container.innerHTML = selectedRestaurants.map(rest => `
        <div class="selected-item">
            <span><strong>${rest.name}</strong> - ₱${rest.price.toLocaleString()}</span>
            <button class="remove-btn" data-id="${rest.id}" data-type="restaurant">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.remove-btn[data-type="restaurant"]').forEach(btn => {
        btn.addEventListener('click', () => toggleRestaurant(parseInt(btn.dataset.id)));
    });
}

function updateSelectedResortList() {
    const container = document.getElementById('selectedResortList');
    if (!container) return;
    
    if (!selectedResort) {
        container.innerHTML = '<p class="empty-message">No resort selected yet</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="selected-item">
            <span><strong>${selectedResort.name}</strong> - ₱${selectedResort.price.toLocaleString()}/night</span>
            <button class="remove-btn" data-id="${selectedResort.id}" data-type="resort">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    const removeBtn = document.querySelector('.remove-btn[data-type="resort"]');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => selectResort(selectedResort.id));
    }
}

function updateTravelerCounts() {
    const adultInput = document.getElementById('adultCount');
    const childInput = document.getElementById('childCount');
    const seniorInput = document.getElementById('seniorCount');
    
    if (adultInput) adultCount = parseInt(adultInput.value) || 0;
    if (childInput) childCount = parseInt(childInput.value) || 0;
    if (seniorInput) seniorCount = parseInt(seniorInput.value) || 0;
    
    const nightsInput = document.getElementById('nights');
    if (nightsInput) nights = parseInt(nightsInput.value) || 1;
    
    updatePriceBreakdown();
}

function calculateTravelerTotal() {
    const adultTotal = adultCount * PRICES.ADULT_RATE;
    const childTotal = childCount * PRICES.CHILD_RATE;
    const seniorTotal = seniorCount * PRICES.SENIOR_RATE;
    return { adultTotal, childTotal, seniorTotal, grandTotal: adultTotal + childTotal + seniorTotal };
}

function updatePriceBreakdown() {
    const totalTravelers = adultCount + childCount + seniorCount;
    const destinationsTotal = selectedDestinations.reduce((sum, dest) => sum + dest.price, 0) * totalTravelers;
    const restaurantsTotal = selectedRestaurants.reduce((sum, rest) => sum + rest.price, 0);
    const resortTotal = selectedResort ? selectedResort.price * nights : 0;
    const { adultTotal, childTotal, seniorTotal, grandTotal: travelerTotal } = calculateTravelerTotal();
    const grandTotal = destinationsTotal + restaurantsTotal + resortTotal + travelerTotal;
    
    const destinationsPriceElem = document.getElementById('destinationsPrice');
    const restaurantsPriceElem = document.getElementById('restaurantsPrice');
    const resortPriceElem = document.getElementById('resortPrice');
    const adultsTotalElem = document.getElementById('adultsTotalPrice');
    const childrenTotalElem = document.getElementById('childrenTotalPrice');
    const seniorsTotalElem = document.getElementById('seniorsTotalPrice');
    const totalPriceElem = document.getElementById('totalPrice');
    
    if (destinationsPriceElem) destinationsPriceElem.textContent = `₱${destinationsTotal.toLocaleString()}`;
    if (restaurantsPriceElem) restaurantsPriceElem.textContent = `₱${restaurantsTotal.toLocaleString()}`;
    if (resortPriceElem) resortPriceElem.textContent = `₱${resortTotal.toLocaleString()}`;
    if (adultsTotalElem) adultsTotalElem.textContent = `₱${adultTotal.toLocaleString()}`;
    if (childrenTotalElem) childrenTotalElem.textContent = `₱${childTotal.toLocaleString()}`;
    if (seniorsTotalElem) seniorsTotalElem.textContent = `₱${seniorTotal.toLocaleString()}`;
    if (totalPriceElem) totalPriceElem.textContent = `₱${grandTotal.toLocaleString()}`;
}

function generateQRCode(bookingData) {
    const qrContainer = document.getElementById('qrCanvas');
    if (!qrContainer) return;
    
    qrContainer.innerHTML = '';
    
    const qrString = JSON.stringify({
        bookingId: bookingData.bookingId,
        name: bookingData.fullName,
        email: bookingData.email,
        destinations: bookingData.selectedDestinations.length,
        resort: bookingData.selectedResort?.name || 'None',
        total: bookingData.priceBreakdown.totalPrice,
        date: new Date().toISOString()
    });
    
    try {
        qrCode = new QRCode(qrContainer, {
            text: qrString,
            width: 150,
            height: 150,
            colorDark: "#e67e22",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });
        
        const modalQrContainer = document.getElementById('modalQrContainer');
        if (modalQrContainer) {
            modalQrContainer.innerHTML = '';
            new QRCode(modalQrContainer, {
                text: qrString,
                width: 120,
                height: 120,
                colorDark: "#e67e22",
                colorLight: "#ffffff"
            });
        }
        
        const qrNote = document.querySelector('.qr-note');
        if (qrNote) qrNote.textContent = '✓ QR Code generated! Scan for booking confirmation';
    } catch (error) {
        console.error('QR Generation Error:', error);
        qrContainer.innerHTML = '<p style="color:red;">QR generation failed</p>';
    }
}

function handleBookingSubmit(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const checkIn = document.getElementById('checkIn')?.value;
    const specialRequests = document.getElementById('specialRequests')?.value;
    
    if (!fullName || !email || !phone || !checkIn) {
        alert('Please fill in all required fields (Name, Email, Phone, Check-in Date)');
        return;
    }
    
    if (selectedDestinations.length === 0 && !selectedResort) {
        alert('Please select at least one destination or a resort to continue');
        return;
    }
    
    if (adultCount === 0 && childCount === 0 && seniorCount === 0) {
        alert('Please add at least one traveler (Adult, Child, or Senior)');
        return;
    }
    
    const totalTravelers = adultCount + childCount + seniorCount;
    const destinationsTotal = selectedDestinations.reduce((sum, dest) => sum + dest.price, 0) * totalTravelers;
    const restaurantsTotal = selectedRestaurants.reduce((sum, rest) => sum + rest.price, 0);
    const resortTotal = selectedResort ? selectedResort.price * nights : 0;
    const { adultTotal, childTotal, seniorTotal } = calculateTravelerTotal();
    const totalPrice = destinationsTotal + restaurantsTotal + resortTotal + adultTotal + childTotal + seniorTotal;
    
    const bookingData = {
        id: 'NM-' + Date.now(),
        bookingId: 'NM-' + Date.now(),
        fullName,
        email,
        phone,
        checkIn,
        checkOut: document.getElementById('checkOut')?.value || '',
        nights,
        specialRequests,
        travelers: { adultCount, childCount, seniorCount, total: totalTravelers },
        selectedDestinations: selectedDestinations.map(d => ({ name: d.name, price: d.price })),
        selectedRestaurants: selectedRestaurants.map(r => ({ name: r.name, price: r.price })),
        selectedResort: selectedResort ? { name: selectedResort.name, price: selectedResort.price, nights } : null,
        priceBreakdown: {
            destinationsTotal,
            restaurantsTotal,
            resortTotal,
            adultTotal,
            childTotal,
            seniorTotal,
            totalPrice
        },
        status: 'pending',
        bookingDate: new Date().toISOString()
    };
    
    console.log('Booking Confirmed:', bookingData);
    
    saveBookingToStorage(bookingData);
    
    generateQRCode(bookingData);
    
    showModal();
    
    setTimeout(() => {
        resetAllSelections();
    }, 500);
}

function resetAllSelections() {
    selectedDestinations = [];
    selectedRestaurants = [];
    selectedResort = null;
    adultCount = 2;
    childCount = 0;
    seniorCount = 0;
    nights = 2;
    
    const adultInput = document.getElementById('adultCount');
    const childInput = document.getElementById('childCount');
    const seniorInput = document.getElementById('seniorCount');
    const nightsInput = document.getElementById('nights');
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    if (adultInput) adultInput.value = 2;
    if (childInput) childInput.value = 0;
    if (seniorInput) seniorInput.value = 0;
    if (nightsInput) nightsInput.value = 2;
    if (checkInInput) checkInInput.value = '';
    if (checkOutInput) checkOutInput.value = '';
    
    updateSelectedDestinationsList();
    updateSelectedRestaurantsList();
    updateSelectedResortList();
    updatePriceBreakdown();
    renderDestinations();
    renderRestaurants();
    renderResorts();
}

function showModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

const chatbotResponses = {
    "hello": "Hello! 👋 Welcome to Northern Mindanao Round Trip! How can I help you today?",
    "hi": "Hi there! I'm your travel assistant. Need help with destinations, resorts, or booking?",
    "destinations": "We offer 5 amazing destinations: Camiguin Island, Maria Cristina Falls, Dahilayan Adventure Park, White Island, and Tinago Falls. Each offers unique experiences!",
    "resorts": "Our top resorts include Camiguin Volcanic Beach Resort, Dahilayan Forest Park Resort, Iligan Country Club, Pearl Beach Resort, and Mountain View Nature's Park. Prices start at ₱3,800/night.",
    "restaurants": "We have 5 great restaurants: Paseo del Mar, Mossimo's Cafe, Camiguin's Secret Garden, Dahilayan Forest Grill, and Oro's Finest Restaurant.",
    "price": "Our pricing includes: Destinations ₱500/person, Restaurants ₱350/booking, Adults ₱1,500, Children ₱800, Seniors ₱1,200 (20% discount). Resort prices vary.",
    "booking": "To book, select your preferred destinations, restaurants, and resort from the cards above. Then fill out the booking form with your details.",
    "camiguin": "Camiguin Island is known as the 'Island Born of Fire' with 7 volcanoes, hot springs, and the iconic Sunken Cemetery. It's a paradise for nature lovers!",
    "cdo": "Cagayan de Oro is the gateway to Northern Mindanao, known for white water rafting and delicious local cuisine.",
    "admin": "You can access the admin dashboard to view all bookings. Click here to go to Admin Dashboard: <a href='admin.html' target='_blank' style='color:#e67e22;'>Admin Dashboard</a>",
    "dashboard": "The admin dashboard lets you view, search, and manage all traveler bookings. Visit admin.html to see all confirmed bookings.",
    "default": "I'm here to help! You can ask me about destinations, resorts, restaurants, prices, admin dashboard, or how to book. What would you like to know?"
};

function initChatbot() {
    const toggleBtn = document.getElementById('chatbotToggle');
    const closeBtn = document.getElementById('chatbotClose');
    const container = document.getElementById('chatbotContainer');
    const sendBtn = document.getElementById('chatbotSend');
    const input = document.getElementById('chatbotInput');
    const messagesDiv = document.getElementById('chatbotMessages');
    
    if (!toggleBtn || !container) return;
    
    toggleBtn.addEventListener('click', () => {
        container.classList.toggle('open');
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            container.classList.remove('open');
        });
    }
    
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'bot-message';
        messageDiv.innerHTML = isUser ? 
            `<p><i class="fas fa-user"></i> ${text}</p>` : 
            `<p><i class="fas fa-robot"></i> ${text}</p>`;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    
    function getBotResponse(userInput) {
        const inputLower = userInput.toLowerCase();
        
        if (inputLower.includes('admin') || inputLower.includes('dashboard') || inputLower.includes('view bookings') || inputLower.includes('see bookings')) {
            return "📊 You can view all bookings in the Admin Dashboard. <a href='admin.html' target='_blank' style='color:#e67e22; font-weight:bold;'>Click here to open Admin Dashboard →</a>";
        } else if (inputLower.includes('hello') || inputLower.includes('hi') || inputLower.includes('hey')) {
            return chatbotResponses.hello;
        } else if (inputLower.includes('destination') || inputLower.includes('place') || inputLower.includes('see')) {
            return chatbotResponses.destinations;
        } else if (inputLower.includes('resort') || inputLower.includes('stay') || inputLower.includes('hotel')) {
            return chatbotResponses.resorts;
        } else if (inputLower.includes('restaurant') || inputLower.includes('eat') || inputLower.includes('food')) {
            return chatbotResponses.restaurants;
        } else if (inputLower.includes('price') || inputLower.includes('cost') || inputLower.includes('rate')) {
            return chatbotResponses.price;
        } else if (inputLower.includes('book') || inputLower.includes('reservation')) {
            return chatbotResponses.booking;
        } else if (inputLower.includes('camiguin')) {
            return chatbotResponses.camiguin;
        } else if (inputLower.includes('cagayan') || inputLower.includes('cdo')) {
            return chatbotResponses.cdo;
        } else {
            return chatbotResponses.default;
        }
    }
    
    function sendMessage() {
        const message = input.value.trim();
        if (!message) return;
        
        addMessage(message, true);
        input.value = '';
        
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 500);
    }
    
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
}

function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const nightsInput = document.getElementById('nights');
    
    if (checkInInput) {
        checkInInput.min = today;
        checkInInput.addEventListener('change', () => {
            const checkInDate = new Date(checkInInput.value);
            if (nightsInput && !isNaN(checkInDate)) {
                const nights = parseInt(nightsInput.value) || 1;
                const checkOutDate = new Date(checkInDate);
                checkOutDate.setDate(checkInDate.getDate() + nights);
                if (checkOutInput) {
                    checkOutInput.value = checkOutDate.toISOString().split('T')[0];
                    checkOutInput.min = checkInInput.value;
                }
            }
        });
    }
    
    if (nightsInput) {
        nightsInput.addEventListener('change', () => {
            if (checkInInput && checkInInput.value) {
                const checkInDate = new Date(checkInInput.value);
                const nights = parseInt(nightsInput.value) || 1;
                const checkOutDate = new Date(checkInDate);
                checkOutDate.setDate(checkInDate.getDate() + nights);
                if (checkOutInput) {
                    checkOutInput.value = checkOutDate.toISOString().split('T')[0];
                }
            }
        });
    }
    
    if (checkOutInput) {
        checkOutInput.min = today;
    }
}

function initTravelerListeners() {
    const adultInput = document.getElementById('adultCount');
    const childInput = document.getElementById('childCount');
    const seniorInput = document.getElementById('seniorCount');
    const nightsInput = document.getElementById('nights');
    
    if (adultInput) adultInput.addEventListener('change', updateTravelerCounts);
    if (childInput) childInput.addEventListener('change', updateTravelerCounts);
    if (seniorInput) seniorInput.addEventListener('change', updateTravelerCounts);
    if (nightsInput) nightsInput.addEventListener('change', updateTravelerCounts);
    
    updateTravelerCounts();
}

function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderRestaurants();
    renderResorts();
    setMinDates();
    initTravelerListeners();
    initMobileMenu();
    initChatbot();
    
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});