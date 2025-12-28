// ROOMS DATA
fetch("rooms.json")
  .then(res => res.json())
  .then(data => renderRooms(data.rooms));

function renderRooms(rooms) {
  const grid = document.getElementById("rooms-grid");
  grid.innerHTML = "";

  rooms.forEach(room => {
    const div = document.createElement("div");
    div.className = "room-card";
    div.innerHTML = `
      <div class="room-image">
        <img src="${room.image}">
        <div class="room-category">${room.category}</div>
      </div>
      <div class="room-details">
        <div class="room-price">
          <div>
            <div class="price">$${room.price}</div>
            <div class="price-per-night">Per Night</div>
          </div>
          <div class="rating">
            <i class="fas fa-star"></i> ${room.rating}
          </div>
        </div>
        <h3>${room.name}</h3>
      </div>
    `;
    div.onclick = () => openModal(room);
    grid.appendChild(div);
  });
}

// MODAL
const modal = document.getElementById("roomModal");

function openModal(room) {
  document.getElementById("modalTitle").innerText = room.name;
  document.getElementById("modalPrice").innerText = "$" + room.price;
  document.getElementById("modalImage").src = room.image;
  modal.classList.add("active");
}

document.querySelector(".close-modal").onclick = () => {
  modal.classList.remove("active");
};

document.querySelector(".login-btn").onclick = () => {
  const email = document.querySelector(".auth input[type=email]").value;
  if (!email) return alert("Enter email");
  localStorage.setItem("user", email);
  alert("Logged in");
};

document.querySelector(".book-room-btn").onclick = () => {
  const user = localStorage.getItem("user");
  if (!user) return alert("Login first");

  alert("Room booked successfully!");
};
document.getElementById("confirmBooking").onclick = () => {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const user = localStorage.getItem("user");

  if (!user) return alert("Login first");
  if (!checkin || !checkout) return alert("Select dates");

  const booking = {
    user,
    room: document.getElementById("modalTitle").innerText,
    checkin,
    checkout
  };

  document.querySelector(".book-room-btn").onclick = () => {
    const user = localStorage.getItem("currentUser");
    if (!user) return alert("Login first");

    const booking = {
      user,
      room: document.getElementById("modalTitle").innerText,
      date: new Date().toLocaleString()
    };

    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(booking);
    localStorage.setItem("history", JSON.stringify(history));

    alert("Room booked!");
  };
}

function loginFromHeader() {
  const email = document.getElementById("headerEmail").value;
  const password = document.getElementById("headerPassword").value;

  if (!email || !password) return alert("Enter email & password");

  localStorage.setItem("currentUser", email);
  localStorage.setItem("isLoggedIn", "true");

  alert("Login successful");
  location.reload();
}
