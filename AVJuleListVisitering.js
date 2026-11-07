function visitAkselJuleList() {
    const AabningsDato = new Date("2026-11-20T01:00:00");
      if (Date.now() >= AabningsDato) {
        window.location.href = "AkselJul2026Oensker.html";
      } else {
        window.location.href = "oenskelistCountDown.html";
      }
}
