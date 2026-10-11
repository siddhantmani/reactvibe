const SITE_URL = "https://reactvibe.com";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const INDEXNOW_KEY = "653887b0cd7248d7a98f6590cd4ac183";

const submittedUrls = process.argv.slice(2);

// Validate the IndexNow key configuration.
if (!INDEXNOW_KEY || INDEXNOW_KEY === "YOUR_INDEXNOW_KEY") {
    console.error(
        "Error: Configure your actual IndexNow key before submitting URLs."
    );

    process.exit(1);
}

// Require at least one URL.
if (submittedUrls.length === 0) {
    console.error(
        "Usage: npm run indexnow -- https://reactvibe.com/your-page"
    );

    process.exit(1);
}

const validUrls = [];

for (const value of submittedUrls) {
    let url;

    try {
        url = new URL(value);
    } catch {
        console.error(`Skipping invalid URL: ${value}`);
        continue;
    }

    // Only allow HTTPS URLs belonging to React Vibe.
    if (
        url.protocol !== "https:" ||
        url.origin !== SITE_URL ||
        url.username ||
        url.password
    ) {
        console.error(`Skipping URL outside ${SITE_URL}: ${value}`);
        continue;
    }

    // Avoid submitting duplicate URLs.
    if (!validUrls.includes(url.href)) {
        validUrls.push(url.href);
    }
}

if (validUrls.length === 0) {
    console.error("No valid React Vibe URLs to submit.");
    process.exit(1);
}

// Prepare the IndexNow request.
const payload = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: validUrls,
};

try {
    console.log(
        `Submitting ${validUrls.length} URL(s) to IndexNow...`
    );

    const response = await fetch(INDEXNOW_ENDPOINT, {
        method: "POST",

        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },

        body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    if (!response.ok) {
        console.error(`IndexNow returned HTTP ${response.status}.`);

        if (responseText) {
            console.error(responseText);
        }

        process.exit(1);
    }

    console.log("\nIndexNow submission accepted.");
    console.log(`HTTP status: ${response.status}`);

    console.log("\nSubmitted URLs:");

    for (const url of validUrls) {
        console.log(`- ${url}`);
    }

    if (response.status === 202) {
        console.log(
            "\nThe submission was accepted, but key validation may still be pending."
        );
    }

    console.log(
        "\nNote: Successful submission does not guarantee indexing."
    );
} catch (error) {
    console.error("\nFailed to contact IndexNow:", error.message);

    process.exit(1);
}