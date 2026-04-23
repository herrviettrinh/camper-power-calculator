function cpcCalculate() {
    const watts = document.getElementById('cpc-watts').value;
    const hours = document.getElementById('cpc-hours').value;
    const battery = document.getElementById('cpc-battery').value;

    if (!watts || !hours || !battery) {
        alert("Bitte alle Felder ausfüllen");
        return;
    }

    // Verbrauch pro Tag (Wh)
    const dailyConsumption = watts * hours;

    // Batterie in Wh (12V System)
    const batteryWh = battery * 12;

    // Laufzeit in Tagen
    const days = batteryWh / dailyConsumption;

    document.getElementById('cpc-result').innerHTML = `
        <p><strong>Verbrauch pro Tag:</strong> ${dailyConsumption} Wh</p>
        <p><strong>Batterie hält:</strong> ${days.toFixed(1)} Tage</p>
    `;
}