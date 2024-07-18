module.exports = {
	name: "Pittsburgh Design Agency Websites", // optional, falls back to object key
	description: "Pittsburgh Design Agency Websites VS Dot Foundry",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
        runs: 1,
		frequency: 60, // 24 hours
		// frequency: 1,
        // bypassAxe: true,
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://dotfoundry.co/",
        "https://builtbytophat.com/",
        "https://redtreewebdesign.com/",
        "https://actualsize.com/",
        "https://bluetomatodesign.com/",
        "https://www.responsival.com/",
        "https://www.brunnerworks.com/",
        "https://carney.co/",
        "https://www.finehumans.com/",
        "https://www.deeplocal.com/",
        "https://www.gatesmanagency.com/",
        "https://www.bootstrapdesignco.com/",
        "https://landesbergdesign.com/",
        "https://huemor.rocks/",
        "https://roketco.com/",
        "https://www.zoltun.com/",
        "https://ghadv.com/",
        "https://www.barkleyus.com/",
        "https://redshiftdm.com/",
        "https://cosmitto.digital/",
        "https://www.sparqdesigns.com/",
        "https://www.walltowall.com/",
        "https://www.bluearcher.com/",
        "https://oystercreates.com",
        "https://www.ocreations.com"
	]
};