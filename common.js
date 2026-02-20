export function loadTrips() {
  return JSON.parse(localStorage.getItem("trips")) || [];
}

export function saveTrips(trips) {
  localStorage.setItem("trips", JSON.stringify(trips));
}