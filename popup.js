document.addEventListener("DOMContentLoaded", async () => {
    const emailList = document.getElementById("emailList");

    try {
        const response = await fetch("https://raw.githubusercontent.com/PontusEdvardsson/to_do_page/refs/heads/master/summary.txt?token=GHSAT0AAAAAAC6UA2ES4GFWTGPF3HBFGDIUZ5ZUWMQ"); // Replace with your public URL
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const emails = JSON.parse(text); // Assuming the text file contains JSON data

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
        emailList.innerHTML = `<li>Error loading emails: ${error.message}</li>`;
    }
});