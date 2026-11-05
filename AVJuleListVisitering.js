function visitAkselJuleList() {
    const AabningsDato = new Date("2026-10-10T01:00:00");
      if (Date.now() >= AabningsDato) {
        window.location.href = "AkselJul2026Oensker.html";
      } else {
        window.location.href = "oenskelistCountDown.html";
      }
}