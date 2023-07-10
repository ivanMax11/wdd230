const baseURL = "https://ivanmax11.github.io/wdd30/";
const linkURL = "https://ivanmax11.github.io/wdd30/data/links.json";

async function getLink() {
    try {
        const response = await fetch(linkURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error(error);
    }
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${week.weeks}: `;

        week.links.forEach((link) => {
            const linkElement = document.createElement("a");
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            listItem.appendChild(linkElement);

            const separator = document.createTextNode(" | ");
            listItem.appendChild(separator);
    });

    activitiesList.appendChild(listItem);
});

}

getLink();