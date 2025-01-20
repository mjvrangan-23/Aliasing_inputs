document.getElementById("plot-btn").addEventListener("click", function () {
    const fin1 = parseFloat(document.getElementById("fin1").value);
    const fin2 = parseFloat(document.getElementById("fin2").value);
    const fs = parseFloat(document.getElementById("fs").value);

    const tAnalog = Array.from({ length: 1000 }, (_, i) => i / 1000);
    const tSampled = Array.from({ length: Math.round(fs) }, (_, i) => i / fs);

    const signal1Analog = tAnalog.map(t => Math.sin(2 * Math.PI * fin1 * t));
    const signal2Analog = tAnalog.map(t => Math.sin(2 * Math.PI * fin2 * t));
    const signal1Sampled = tSampled.map(t => Math.sin(2 * Math.PI * fin1 * t));
    const signal2Sampled = tSampled.map(t => Math.sin(2 * Math.PI * fin2 * t));

    Plotly.newPlot("plot1", [{ x: tAnalog, y: signal1Analog, mode: "lines", name: "Signal 1" }], { title: `Analog Signal 1 (${fin1} Hz)` });
    Plotly.newPlot("plot2", [{ x: tAnalog, y: signal2Analog, mode: "lines", name: "Signal 2" }], { title: `Analog Signal 2 (${fin2} Hz)` });
    Plotly.newPlot("plot3", [
        { x: tSampled, y: signal1Sampled, mode: "markers", name: "Samples" },
        { x: tSampled, y: signal1Sampled, mode: "lines", name: "Interpolated" }
    ], { title: "Sampled Signal 1" });
    Plotly.newPlot("plot4", [
        { x: tSampled, y: signal2Sampled, mode: "markers", name: "Samples" },
        { x: tSampled, y: signal2Sampled, mode: "lines", name: "Interpolated" }
    ], { title: "Sampled Signal 2" });
});
