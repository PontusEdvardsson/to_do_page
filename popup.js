document.addEventListener("DOMContentLoaded", async () => {
    const emailList = document.getElementById("emailList");

    try {
        const response = await fetch("https://raw.githubusercontent.com/PontusEdvardsson/to_do_page/main/summary.json"); // Static URL to the latest version
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const emails = await response.json(); // Assuming the text file contains JSON data

        emailList.innerHTML = ""; // Clear "Loading..." message

        if (emails.length === 0) {
            emailList.innerHTML = "<li>No unread emails.</li>";
            return;
        }

        emails.forEach(email => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${email.subject}</strong><br>${email.message}`;
            emailList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching email data:", error);
        emailList.innerHTML = `<li>Error loading emails: ${error.message}</li>`;
    }
});