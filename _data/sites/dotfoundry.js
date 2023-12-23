module.exports = {
	name: "Dot Foundry", // optional, falls back to object key
	description: "Dot Foundry website",
	options: {
		runs: 1,
		frequency: 60 * 23, // (in minutes)
		// frequency: 1, // (in minutes)
	},
	urls: [
		"https://dotfoundry.co/",
        "https://dotfoundry.co/talent/",
        // popular posts
        "https://dotfoundry.co/what-a-design-collective-does/",
        "https://dotfoundry.co/illustrations-for-inktober-the-sketchiest-time-of-year/",
        "https://dotfoundry.co/post-ai-graphic-design/"
	]
};