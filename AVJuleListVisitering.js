function visitAkselJuleList() {
    // dato format: "YYYY-MM-DDTHH:MM:SS" (24-timers format)
    const AabningsDato = new Date("2026-11-20T01:00:00");
      if (Date.now() >= AabningsDato) {
        window.location.href = "AkselJul2026Oensker.html";
      } else {
        window.location.href = "oenskelistCountDown.html";
      }
}
