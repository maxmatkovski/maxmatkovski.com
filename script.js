document.getElementById("year").textContent = new Date().getFullYear();

const clockFormatters = new Map();

function updateWorldClock() {
  const now = new Date();

  document.querySelectorAll("[data-time-zone]").forEach((clock) => {
    const timeZone = clock.dataset.timeZone;

    if (!clockFormatters.has(timeZone)) {
      clockFormatters.set(
        timeZone,
        new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    }

    clock.textContent = clockFormatters.get(timeZone).format(now);
    clock.dateTime = now.toISOString();
  });
}

updateWorldClock();
setInterval(updateWorldClock, 1000);
