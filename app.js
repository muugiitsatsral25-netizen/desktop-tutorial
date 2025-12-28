fetch("data/rooms.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("rooms");
        if (!container) return;

        data.forEach(room => {
            container.innerHTML += `
        <div class="card">
          <img src="${room.image}">
          <h3>${room.name}</h3>
          <p>$${room.price} / night</p>
          <a href="room-detail.html?id=${room.id}" class="btn">View</a>
        </div>
      `;
        });
    });

// Room detail page
const params = new URLSearchParams(window.location.search);
const roomId = params.get("id");

if (roomId) {
    fetch("data/rooms.json")
        .then(res => res.json())
        .then(data => {
            const room = data.find(r => r.id == roomId);
            document.getElementById("room-detail").innerHTML = `
        <h2>${room.name}</h2>
        <img src="${room.image}">
        <p>Price: $${room.price}</p>
        <p>Beds: ${room.beds}</p>
        <p>Baths: ${room.baths}</p>
        <p>Size: ${room.size}</p>
      `;
        });
}
