document.addEventListener("DOMContentLoaded", async () => {
    const emailList = document.getElementById("emailList");

    try {
        const response = await fetch("https://pobben.app.n8n.cloud/webhook-test/6576c0a0-377e-4bab-bbc1-0a817cd95973"); // Replace with your n8n webhook URL
        const emails = await response.json();

        emailList.innerHTML = ""; // Clear "Loading..." message

        if (emails.length === 0) {
            emailList.innerHTML = "<li>No unread emails.</li>";
            return;
        }

        emails.forEach(email => {
            const li = document.createElement("li");
            li.textContent = `${email.priority}: ${email.subject}`;
            emailList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching email data:", error);
        emailList.innerHTML = "<li>Error loading emails.</li>";
    }
});