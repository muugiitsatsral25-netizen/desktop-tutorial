// Room data
const rooms = [
    {
        id: 1,
        name: "Deluxe Ocean View",
        category: "Deluxe",
        price: "$299",
        rating: "4.8",
        bed: "2 Queen Beds",
        guests: "3 Guests",
        size: "450 sq ft",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
        description: "Experience breathtaking ocean views from our spacious Deluxe room. This elegantly appointed room features contemporary design, plush bedding, and modern amenities to ensure your comfort throughout your stay.",
        amenities: ["Ocean View", "Mini Bar", "Coffee Maker", "Smart TV", "Work Desk", "Rain Shower", "Premium Toiletries", "In-room Safe"]
    },
    {
        id: 2,
        name: "Executive Suite",
        category: "Suite",
        price: "$499",
        rating: "4.9",
        bed: "King Bed",
        guests: "4 Guests",
        size: "650 sq ft",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
        description: "Our Executive Suite offers a perfect blend of comfort and sophistication. Featuring a separate living area, king-size bed, and premium amenities, this suite is ideal for both business and leisure travelers.",
        amenities: ["Separate Living Area", "Mini Bar", "Espresso Machine", "Smart TV", "Executive Desk", "Soaking Tub", "Premium Toiletries", "Walk-in Closet"]
    },
    {
        id: 3,
        name: "Presidential Suite",
        category: "Premium",
        price: "$799",
        rating: "5.0",
        bed: "King Bed",
        guests: "6 Guests",
        size: "1200 sq ft",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
        description: "The epitome of luxury, our Presidential Suite offers an extraordinary experience. With panoramic views, a master bedroom, spacious living and dining areas, this suite is designed for those who expect nothing but the best.",
        amenities: ["Panoramic Views", "Private Balcony", "Full Kitchen", "Multiple Smart TVs", "Dining Area", "Jacuzzi", "Butler Service", "Private Check-in"]
    },
    {
        id: 4,
        name: "Classic Comfort Room",
        category: "Standard",
        price: "$199",
        rating: "4.6",
        bed: "Queen Bed",
        guests: "2 Guests",
        size: "350 sq ft",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
        description: "Our Classic Comfort Room provides all the essentials for a pleasant stay. Featuring a comfortable queen bed, modern amenities, and a cozy atmosphere, this room offers excellent value without compromising on quality.",
        amenities: ["City View", "Mini Fridge", "Coffee Maker", "LED TV", "Work Area", "Private Bathroom", "Toiletries", "Free Wifi"]
    },
    {
        id: 5,
        name: "Classic Comfort Room",
        category: "Standard",
        price: "$199",
        rating: "4.6",
        bed: "Queen Bed",
        guests: "2 Guests",
        size: "350 sq ft",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
        description: "Our Classic Comfort Room provides all the essentials for a pleasant stay. Featuring a comfortable queen bed, modern amenities, and a cozy atmosphere, this room offers excellent value without compromising on quality.",
        amenities: ["City View", "Mini Fridge", "Coffee Maker", "LED TV", "Work Area", "Private Bathroom", "Toiletries", "Free Wifi"]
    },
    {
        id: 6,
        name: "Classic Comfort Room",
        category: "Standard",
        price: "$199",
        rating: "4.6",
        bed: "Queen Bed",
        guests: "2 Guests",
        size: "350 sq ft",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
        description: "Our Classic Comfort Room provides all the essentials for a pleasant stay. Featuring a comfortable queen bed, modern amenities, and a cozy atmosphere, this room offers excellent value without compromising on quality.",
        amenities: ["City View", "Mini Fridge", "Coffee Maker", "LED TV", "Work Area", "Private Bathroom", "Toiletries", "Free Wifi"]
    },
    {
        id: 7,
        name: "Classic Comfort Room",
        category: "Standard",
        price: "$199",
        rating: "4.6",
        bed: "Queen Bed",
        guests: "2 Guests",
        size: "350 sq ft",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
        description: "Our Classic Comfort Room provides all the essentials for a pleasant stay. Featuring a comfortable queen bed, modern amenities, and a cozy atmosphere, this room offers excellent value without compromising on quality.",
        amenities: ["City View", "Mini Fridge", "Coffee Maker", "LED TV", "Work Area", "Private Bathroom", "Toiletries", "Free Wifi"]
    },
    {
        id: 8,
        name: "Classic Comfort Room",
        category: "Standard",
        price: "$199",
        rating: "4.6",
        bed: "Queen Bed",
        guests: "2 Guests",
        size: "350 sq ft",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
        description: "Our Classic Comfort Room provides all the essentials for a pleasant stay. Featuring a comfortable queen bed, modern amenities, and a cozy atmosphere, this room offers excellent value without compromising on quality.",
        amenities: ["City View", "Mini Fridge", "Coffee Maker", "LED TV", "Work Area", "Private Bathroom", "Toiletries", "Free Wifi"]
    },
    {
        id: 9,
        name: "Classic Comfort Room",
        category: "Standard",
        price: "$199",
        rating: "4.6",
        bed: "Queen Bed",
        guests: "2 Guests",
        size: "350 sq ft",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
        description: "Our Classic Comfort Room provides all the essentials for a pleasant stay. Featuring a comfortable queen bed, modern amenities, and a cozy atmosphere, this room offers excellent value without compromising on quality.",
        amenities: ["City View", "Mini Fridge", "Coffee Maker", "LED TV", "Work Area", "Private Bathroom", "Toiletries", "Free Wifi"]
    }
];

// Generate room cards
const roomsGrid = document.getElementById('rooms-grid');
rooms.forEach(room => {
    const card = document.createElement('div');
    card.className = 'room-card';
    card.onclick = () => openModal(room);
    card.innerHTML = `
                <div class="room-image">
                    <img src="${room.image}" alt="${room.name}">
                    <div class="room-category">${room.category}</div>
                </div>
                <div class="room-details">
                    <div class="room-price">
                        <div>
                            <div class="price">${room.price}</div>
                            <div class="price-per-night">Per Night</div>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <span>${room.rating}</span>
                        </div>
                    </div>
                    <h3 class="room-name">${room.name}</h3>
                    <div class="room-specs">
                        <div class="spec">
                            <i class="fas fa-bed"></i>
                            <span>${room.bed}</span>
                        </div>
                        <div class="spec">
                            <i class="fas fa-user"></i>
                            <span>${room.guests}</span>
                        </div>
                        <div class="spec">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${room.size}</span>
                        </div>
                    </div>
                </div>
            `;
    roomsGrid.appendChild(card);
});

// Modal functionality
const modal = document.getElementById('roomModal');
const closeBtn = document.querySelector('.close-modal');

function openModal(room) {
    document.getElementById('modalImage').src = room.image;
    document.getElementById('modalTitle').textContent = room.name;
    document.getElementById('modalCategory').textContent = room.category;
    document.getElementById('modalPrice').textContent = room.price;
    document.getElementById('modalDescription').textContent = room.description;
    document.getElementById('modalBed').textContent = room.bed;
    document.getElementById('modalGuests').textContent = room.guests;
    document.getElementById('modalSize').textContent = room.size;
    document.getElementById('modalRating').textContent = `${room.rating} Rating`;

    const amenitiesList = document.getElementById('modalAmenities');
    amenitiesList.innerHTML = '';
    room.amenities.forEach(amenity => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${amenity}`;
        amenitiesList.appendChild(li);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeBtn.onclick = closeModal;

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});