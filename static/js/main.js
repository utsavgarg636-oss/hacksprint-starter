document.addEventListener("DOMContentLoaded", () => {
    const testBtn = document.getElementById("test-btn");
    const responseDiv = document.getElementById("api-response");

    if (testBtn) {
        testBtn.addEventListener("click", async () => {
            try {
                const res = await fetch("/api/health");
                const data = await res.json();
                responseDiv.innerText = `[API Response]: ${data.message}`;
            } catch (err) {
                responseDiv.innerText = "[API Error]: Could not connect to backend.";
            }
        });
    }
});