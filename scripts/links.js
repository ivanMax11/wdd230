const baseURL = "https://ivanmax11.github.io/wdd30/";
const linkURL = "https://ivanmax11.github.io/wdd30/data/links.json";

async function getLink() {
    const response = await fetch (linkURL);
    const data = await response.json();
    displayLinks(data);
    console.log(data);
}

getLink();