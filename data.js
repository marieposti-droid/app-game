// Real apps, real pitches, real (sourced) B2C plot twists.
// Every "reveal" below is a documented, reported phenomenon — not instructions on how to do it.

const ROUNDS = [
  {
    name: "Craigslist",
    emoji: "🗒️",
    category: "Classifieds",
    pitch: "In 1995, Craig Newmark started a private email list to tell a few dozen friends about arts and tech events happening around San Francisco.",
    reveal: "It grew by word of mouth into one of the internet's biggest marketplaces — jobs, apartments, used couches, and its infamous \"Missed Connections\" section, all still running on a barebones text layout that's barely changed in 25 years.",
    source: "Newmark Craigslist origin story, multiple retrospectives (Computerworld, SFGate)"
  },
  {
    name: "Canva",
    emoji: "🎨",
    category: "Design tool",
    pitch: "Canva was built to let small-business owners and non-designers make professional-looking flyers, logos, and social posts without hiring a designer.",
    reveal: "Its easy templates turned out to be just as good at faking things: investigators have flagged look-alike Canva-made receipts and invoices as a fast-growing source of expense-report fraud.",
    source: "Reported by PYMNTS and Forbes on AI/template-generated fake receipts (2026)"
  },
  {
    name: "Life360",
    emoji: "📍",
    category: "Family safety",
    pitch: "Life360 pitches itself as a family locator app — parents get peace of mind by seeing where their kids are on a map in real time.",
    reveal: "It also spawned a teen subculture devoted to dodging it — leaving a cheap second phone at home with location sharing on while going out with the real phone tracking switched off. Mocking the app is now a running joke on TikTok.",
    source: "KENS5 News, \"Can kids spoof their smartphone's GPS to trick parents?\""
  },
  {
    name: "Zillow",
    emoji: "🏠",
    category: "Real estate",
    pitch: "Zillow's pitch is practical: search real listings, get an instant home-value estimate (the \"Zestimate\"), and find a house to actually buy.",
    reveal: "Millions of people use it purely for entertainment — scrolling bizarre, ugly, or oddly decorated homes for fun. The habit got so big it spun off the \"Zillow Gone Wild\" social account, newsletter, and eventually an HGTV show.",
    source: "Washington Post, \"The wild rise of Zillow Gone Wild\" (2024); HGTV"
  },
  {
    name: "ElevenLabs",
    emoji: "🎙️",
    category: "AI voice cloning",
    pitch: "ElevenLabs sells realistic AI voice cloning for audiobooks, game dubbing, and accessibility tools — a few seconds of audio becomes a lifelike synthetic voice.",
    reveal: "The same tech has been weaponized in \"grandparent scams\": criminals clone a relative's voice from a social video or voicemail to fake a panicked emergency call. The FBI linked AI-voice scams to roughly $893 million in reported losses in 2025.",
    source: "FBI IC3 data via Forbes/Yahoo News (Sen. Hassan letter to ElevenLabs, April 2026)"
  },
  {
    name: "LinkedIn",
    emoji: "💼",
    category: "Professional network",
    pitch: "LinkedIn positions itself firmly as a professional community — for careers, hiring, networking, and business, explicitly not for personal or romantic messages.",
    reveal: "It's quietly become a backup dating app. One 2023 survey found 91% of female users had received unsolicited romantic or flirtatious messages — enough that LinkedIn's own comms team keeps having to repeat \"this is not a dating app.\"",
    source: "CNBC, \"Some LinkedIn users are being put off the platform by flirtatious DMs\" (2024)"
  },
  {
    name: "Venmo",
    emoji: "💸",
    category: "Payments",
    pitch: "Venmo's pitch is simple: split a bill or pay a friend back in seconds, with a social feed to make paying people feel fun and casual.",
    reveal: "That public feed turned into a favorite tool for post-breakup snooping — people piece together an ex's new relationship from who they're suddenly paying, and for what (rent splits and grocery runs are a dead giveaway).",
    source: "HuffPost, \"This Is By Far The Worst App To Use Post-Breakup\"; Consumer Reports on Venmo privacy"
  },
  {
    name: "Discord",
    emoji: "🎮",
    category: "Voice & text chat",
    pitch: "Discord was built for gamers to voice-chat with their squad mid-match without alt-tabbing to a separate app.",
    reveal: "It's now home to massive \"Study With Me\" servers — some with 50,000+ members — where students share Pomodoro timers, camera study-rooms, and lo-fi playlists to grind through homework together.",
    source: "Gridfiti and student community coverage of \"Study With Me\" Discord servers"
  }
];
