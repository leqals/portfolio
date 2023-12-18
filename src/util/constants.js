import python from "../assets/python.png";
import docker from "../assets/docker.png";
import dribbble from "../assets/dribbble.png";
import framerMotion from "../assets/framer-motion.png";
import django from "../assets/django.png";
import ChatGPT from "../assets/ChatGPT.png";
import gitHub from "../assets/gitHub.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import userResearch from "../assets/user-research.png";
import figma from "../assets/figma.png";
import redux from "../assets/redux.png";
import prototype from "../assets/prototype.png";
import buhhda from "../assets/buhhda.png";
import christian from "../assets/christian.png";
import muslim from "../assets/muslim.png";
import jewish from "../assets/jewish.png";
import midjourney from "../assets/midjourney.png";
import muzbank from "../assets/muzbank/muzbank.png";
import admin from "../assets/muzbank/admin.png";
import download_feature from "../assets/muzbank/download_feature.png";
import video from "../assets/muzbank/videos.png";
import Blogs from "../assets/muzbank/Blogs.png";
import songs from "../assets/muzbank/songs.png";
import resultMuzbank from "../assets/muzbank/result.png";
import elonMusk from "../assets/elon_musk.jpg";
import teslaLogo from "../assets/tesla_logo.svg";
import logoMuzbank from "../assets/logoMuzbank.svg";
import logoNIDS from "../assets/nids/logo.svg";
import alertNids from "../assets/nids/alert_feature.png";
import thumbnailNids from "../assets/nids/thumbnail.png";
import thumbnailYossi from "../assets/yossi/thumbnail.png";
import splashYossi from "../assets/yossi/yossi.png";
import logoYossi from "../assets/yossi/logo.svg";
import radioPageYossi from "../assets/yossi/radio_page.png";
import anonymous from "../assets/anonymous.jpg";
import aboutFluxFive from "../assets/fluxfive/about.png";
import blogsFluxFive from "../assets/fluxfive/blog_page.png";
import logoFluxFive from "../assets/fluxfive/logo.svg";
import thumbnailFluxFive from "../assets/fluxfive/thumbnail.png";

export const about = [
  {
    title: "Software Engineer",
    description:
      "Three years immersed in software development, he's a reputation-backed engineering powerhouse, nailing tight software projects left and right. 💪🔥",
    stack: [
      {
        name: "Python",
        percentage: "84%",
        image: python,
      },
      {
        name: "GitHub",
        percentage: "70%",
        image: gitHub,
      },
      {
        name: "Docker",
        percentage: "44%",
        image: docker,
      },
      {
        name: "JavaScript",
        percentage: "89%",
        image: js,
      },
    ],
  },
  {
    title: "Full-Stack Developer",
    description:
      "A quarter decade in web development brings a wealth of expertise. Your focus on React.js and Django despite a dislike for CMS platforms shows dedication. These technologies indeed empower the creation of versatile, intricate, innovative, and robust platforms.",
    stack: [
      {
        name: "React.Js",
        percentage: "84%",
        image: react,
      },
      {
        name: "Django",
        percentage: "80%",
        image: django,
      },
      {
        name: "Redux",
        percentage: "60%",
        image: redux,
      },
      {
        name: "Framer Motion",
        percentage: "60%",
        image: framerMotion,
      },
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "He's fueled by creativity, infusing it into everything he touches. Even the simplest projects receive top-notch user interfaces, targeting user pain points and showcasing artistic magic in myriad ways.",
    stack: [
      {
        name: "Figma",
        percentage: "75%",
        image: figma,
      },
      {
        name: "Research",
        percentage: "78%",
        image: userResearch,
      },
      {
        name: "Prototyping",
        percentage: "47%",
        image: prototype,
      },
      {
        name: "Dribbble",
        percentage: "73%",
        image: dribbble,
      },
    ],
  },
  {
    title: "Prompt Engineering",
    description:
      "Prompt engineering's a fresh player in the digital scene, the future of coding. Our guy's a time traveler, trust him to sip with GPTs and feast with MidJourney. 🚀",
    stack: [
      {
        name: "ChatGPT",
        percentage: "84%",
        image: ChatGPT,
      },
      {
        name: "MidJourney",
        percentage: "70%",
        image: midjourney,
      },
    ],
  },
  {
    title: "A Human Being",
    description:
      "More than titles – he's a son, brother, friend, uncle, lover, and believer. He believes the world however bad can be made whole again if we all take responsibilty for ourselves, trust ancient wisdom and persue what is meaningful instead of criticizing it.",
    stack: [
      {
        name: "Christian",
        percentage: "90%",
        image: christian,
      },
      {
        name: "Jewish",
        percentage: "70%",
        image: jewish,
      },
      {
        name: "Muslim",
        percentage: "70%",
        image: muslim,
      },
      {
        name: "Buhhdist",
        percentage: "70%",
        image: buhhda,
      },
    ],
  },
];

export const projects = [
  {
    title: "Music Streaming Download and Blogging Platform",
    meta: [
      {
        title: "major role",
        value: "Software Engineer",
      },
      {
        title: "context",
        value: "Streaming And Blogging",
      },
      {
        title: "keywords",
        value: "Blog, Stream, Engineering",
      },
    ],
    thumbnail: muzbank,
    logo: logoMuzbank,
    color: "#AE494A",
    timeline: "July - August 2023",
    liveSite: "",
    sourceCode: "",
    stack: [
      {
        name: "Figma",
        percentage: "90%",
        image: figma,
      },
      {
        name: "User Research",
        percentage: "70%",
        image: userResearch,
      },
    ],
    overview:
      "🎵 In a world teeming with music streaming platforms, stifling users' choices for offline tunes, I embarked on a wild journey.My mission? Crafting a music streaming platform that lets you download and play your beloved tracks on any audio device, just like the good ol' days 📻.And guess what? This platform also plays nice with blogging and playlist creation 🎶. Oh yes, it's that amazing! 🤩",
    challenges:
      "But here's the plot twist: designing this platform was no walk in the park 🏞️. It demanded a deep dive into user research 🕵️, design 🖌️, and prototyping ✍️, even though I was pretty green in these realms.",
    features: [
      {
        title: "Music Streaming Service",
        description:
          "Xplore an eclectic collection of tunes curated from diverse artists, offering an auditory journey like no other.",
        thumbnail: songs,
      },
      {
        title: "Music Download Functionality",
        description:
          "Users can also download music on the platform and play on a audio player of choice.",
        thumbnail: download_feature,
      },
      {
        title: "Blog articles",
        description:
          "An interesting thing about it is the integration article blogging into the platform as crazy as it may seem.",
        thumbnail: Blogs,
      },
      {
        title: "Video streaming",
        description:
          "Now, not only can users stream their favorite songs, but they can also download captivating music videos seamlessly.",
        thumbnail: video,
      },
    ],

    result: {
      conclusion:
        "The platform is a now has 2 likes on dribbble may include a fake from my other account and over half a thousand likes. Hope I made that sound big enough.",
      proof: resultMuzbank,

      testimonial: {
        name: "Elon Musk",
        position: "CEO Telsa",
        words:
          "Your project's social integration and user engagement strategies are impressive. Keep up the great work!",
        dp: elonMusk,
        icon: teslaLogo,
      },
    },
  },
  {
    title: "Hybrid Network Intrusion Detection System",
    meta: [
      {
        title: "major role",
        value: "Software Engineer",
      },
      {
        title: "context",
        value: "Intrusion Detection",
      },
      {
        title: "keywords",
        value: "NIDS, Defence System",
      },
    ],
    thumbnail: thumbnailNids,
    logo: logoNIDS,
    color: "#040D1D",
    timeline: "August - November 2023",
    liveSite: "",
    sourceCode: "",
    stack: [
      {
        name: "Python",
        percentage: "80%",
        image: python,
      },
      {
        name: "Figma",
        percentage: "40%",
        image: figma,
      },
      {
        name: "ChatGPT",
        percentage: "70%",
        image: ChatGPT,
      },
      {
        name: "Django",
        percentage: "60%",
        image: django,
      },
    ],
    overview:
      "In our quest to craft a hybrid NIDS, 🚀 I embarked on a multifaceted role within the tight-knit team at Xboring Tech. With just my partner and me, 🤝 I assumed the roles of UI/UX designer, system architect, full-stack developer, and software engineer.",
    challenges:
      "This dynamic experience demanded not only a visually striking user interface, but also seamless integration with the system's core.Working as the sole designer and juggling various hats taught me invaluable lessons. I became adept at feature identification and research 🔍, streamlining designs for efficient development 💡, and skillfully managing client expectations 🤝, all in the relentless pursuit of delivering a top-tier product.🏆",
    features: [
      {
        title: "Attack Detection",
        description:
          "The software uses a hybrid system of anomaly and signature detection to capture incoming attacks.",
        thumbnail: thumbnailNids,
      },
      {
        title: "Attack Alerts ",
        description:
          "The software also sends a push notification when it detects and new attack.",
        thumbnail: alertNids,
      },
    ],

    result: {
      conclusion:
        "With all the effort put into the development of the project and adjustments of different features, the platform was well accepted by the client and his trust has now been well achieved in many ways .",
      proof: logoNIDS,

      testimonial: {
        name: "Anonymous John",
        position: "Anonymous",
        words:
          "Its great working with dev.silas. His goes the extra mile to get things and is suprisingly very good at software development!",
        dp: python,
        icon: python,
      },
    },
  },
  {
    title: "Online Radio App - Yossi Green Radio",
    meta: [
      {
        title: "major role",
        value: "UI/UX Designer",
      },
      {
        title: "context",
        value: "Online Radio",
      },
      {
        title: "keywords",
        value: "Yossi Green, Mobile App",
      },
    ],
    thumbnail: thumbnailYossi,
    logo: logoYossi,
    color: "#D3E1CE",
    timeline: "June 2023",
    liveSite: "",
    sourceCode: "",
    stack: [
      {
        name: "Figma",
        percentage: "90%",
        image: figma,
      },
      {
        name: "User Research",
        percentage: "86%",
        image: userResearch,
      },
    ],
    overview:
      "📜🌟This project involves the creation of a Yossi green radio app 📻.My quest? To craft a UI design 🎨 that blends the subtlety of tradition with the flair of modernity, all while delivering the ultimate user experience for online radio enthusiasts. 🎶",
    challenges:
      "This journey led me through extensive project research 📚, user research 🔍, intricate user flows 🌊, and deep dives into references 🧐. 🚀 My most cherished revelation from this adventure was gaining a profound insight into the unique world of mobile app design 📱🖌️, set apart from the realm of traditional web design. 🌐📲",
    features: [
      {
        title: "Splash Screen",
        description:
          "The app has a quick splash screen that welcomes the user, commencing the users journey into the uniques online radio experience.",
        thumbnail: splashYossi,
      },
      {
        title: "Radio Screen",
        description:
          "The app also has a list of recently played songs and the current yossi green song.",
        thumbnail: radioPageYossi,
      },
    ],

    result: {
      conclusion:
        "Although the the client ended up rejectling the app design, I was still able to learn and build my design research skills in unimaginable ways.",
      proof: resultMuzbank,

      testimonial: {
        name: "Elon Musk",
        position: "CEO Telsa",
        words:
          "Your project's social integration and user engagement strategies are impressive. Keep up the great work!",
        dp: elonMusk,
        icon: teslaLogo,
      },
    },
  },
  {
    title: "Professional Web Design Agency - FluxFive",
    meta: [
      {
        title: "major role",
        value: "UI/UX Designer",
      },
      {
        title: "context",
        value: "Agency Website",
      },
      {
        title: "keywords",
        value: "FluxFive, Rebranded, Blogging",
      },
    ],
    thumbnail: thumbnailFluxFive,
    logo: logoFluxFive,
    color: "#08261E",
    timeline: "May 2023",
    liveSite: "",
    sourceCode: "",
    stack: [
      {
        name: "Figma",
        percentage: "90%",
        image: figma,
      },
      {
        name: "User Research",
        percentage: "70%",
        image: userResearch,
      },
    ],
    overview:
      "When I was starting out in web development, my goal was clear: I wanted to create websites that not only functioned well but also looked great. I couldn't stand the thought of building sites with dull user interfaces. This drove me to embark on an entrepreneurial journey, leading to the establishment of my web design agency - FluxFive.",
    challenges:
      "The vision was pretty clear wasn't it?, but here was the problem, I knew nothing about making a creative and innovational user interface that breaks the ground standard. At this point if you ask me anything about design, I'll tell typography, color, spacing, alignment and wireframe.      ",
    features: [
      {
        title: "Converting Hero Section",
        description:
          "The website has a hero section that is designed to turn visitors to clients almost immediately thereby fulfilling the websites implicit goal of burstings sales and structure.",
        thumbnail: thumbnailFluxFive,
      },
      {
        title: "About The Agency",
        description:
          "The single-page website is a hub where everything, except the blog details, aligns seamlessly. It's crafted to swiftly convey the agency's essence, values, and beliefs for an instant, enriched user experience.",
        thumbnail: aboutFluxFive,
      },
      {
        title: "Blog articles",
        description:
          "As a pretty conventional practise the website is also built to support content blogging This amongst others.",
        thumbnail: blogsFluxFive,
      },
    ],

    result: {
      conclusion:
        "The platform is a now has 2 likes on dribbble may include a fake from my other account and over half a thousand likes. Hope I made that sound big enough.",
      proof: resultMuzbank,

      testimonial: {
        name: "Elon Musk",
        position: "CEO Telsa",
        words:
          "Your project's social integration and user engagement strategies are impressive. Keep up the great work!",
        dp: elonMusk,
        icon: teslaLogo,
      },
    },
  },
  {
    title: "Music Streaming Download and Blogging Platform",
    meta: [
      {
        title: "major role",
        value: "Software Engineer",
      },
      {
        title: "context",
        value: "Streaming And Blogging",
      },
      {
        title: "keywords",
        value: "Blog, Stream, Engineering",
      },
    ],
    thumbnail: muzbank,
    logo: logoMuzbank,
    color: "#AE494A",
    timeline: "July - August 2023",
    liveSite: "",
    sourceCode: "",
    stack: [
      {
        name: "Figma",
        percentage: "90%",
        image: figma,
      },
      {
        name: "User Research",
        percentage: "70%",
        image: userResearch,
      },
    ],
    overview:
      "🎵 In a world teeming with music streaming platforms, stifling users' choices for offline tunes, I embarked on a wild journey.My mission? Crafting a music streaming platform that lets you download and play your beloved tracks on any audio device, just like the good ol' days 📻.And guess what? This platform also plays nice with blogging and playlist creation 🎶. Oh yes, it's that amazing! 🤩",
    challenges:
      "But here's the plot twist: designing this platform was no walk in the park 🏞️. It demanded a deep dive into user research 🕵️, design 🖌️, and prototyping ✍️, even though I was pretty green in these realms.",
    features: [
      {
        title: "Music Streaming Service",
        description:
          "Xplore an eclectic collection of tunes curated from diverse artists, offering an auditory journey like no other.",
        thumbnail: songs,
      },
      {
        title: "Music Download Functionality",
        description:
          "Users can also download music on the platform and play on a audio player of choice.",
        thumbnail: download_feature,
      },
      {
        title: "Blog articles",
        description:
          "An interesting thing about it is the integration article blogging into the platform as crazy as it may seem.",
        thumbnail: Blogs,
      },
      {
        title: "Video streaming",
        description:
          "Now, not only can users stream their favorite songs, but they can also download captivating music videos seamlessly.",
        thumbnail: video,
      },
    ],

    result: {
      conclusion:
        "The platform is a now has 2 likes on dribbble may include a fake from my other account and over half a thousand likes. Hope I made that sound big enough.",
      proof: resultMuzbank,

      testimonial: {
        name: "Elon Musk",
        position: "CEO Telsa",
        words:
          "Your project's social integration and user engagement strategies are impressive. Keep up the great work!",
        dp: elonMusk,
        icon: teslaLogo,
      },
    },
  },
  {
    title: "Music Streaming Download and Blogging Platform",
    meta: [
      {
        title: "major role",
        value: "Software Engineer",
      },
      {
        title: "context",
        value: "Streaming And Blogging",
      },
      {
        title: "keywords",
        value: "Blog, Stream, Engineering",
      },
    ],
    thumbnail: muzbank,
    logo: logoMuzbank,
    color: "#AE494A",
    timeline: "July - August 2023",
    liveSite: "",
    sourceCode: "",
    stack: [
      {
        name: "Figma",
        percentage: "90%",
        image: figma,
      },
      {
        name: "User Research",
        percentage: "70%",
        image: userResearch,
      },
    ],
    overview:
      "🎵 In a world teeming with music streaming platforms, stifling users' choices for offline tunes, I embarked on a wild journey.My mission? Crafting a music streaming platform that lets you download and play your beloved tracks on any audio device, just like the good ol' days 📻.And guess what? This platform also plays nice with blogging and playlist creation 🎶. Oh yes, it's that amazing! 🤩",
    challenges:
      "But here's the plot twist: designing this platform was no walk in the park 🏞️. It demanded a deep dive into user research 🕵️, design 🖌️, and prototyping ✍️, even though I was pretty green in these realms.",
    features: [
      {
        title: "Music Streaming Service",
        description:
          "Xplore an eclectic collection of tunes curated from diverse artists, offering an auditory journey like no other.",
        thumbnail: songs,
      },
      {
        title: "Music Download Functionality",
        description:
          "Users can also download music on the platform and play on a audio player of choice.",
        thumbnail: download_feature,
      },
      {
        title: "Blog articles",
        description:
          "An interesting thing about it is the integration article blogging into the platform as crazy as it may seem.",
        thumbnail: Blogs,
      },
      {
        title: "Video streaming",
        description:
          "Now, not only can users stream their favorite songs, but they can also download captivating music videos seamlessly.",
        thumbnail: video,
      },
    ],

    result: {
      conclusion:
        "The platform is a now has 2 likes on dribbble may include a fake from my other account and over half a thousand likes. Hope I made that sound big enough.",
      proof: resultMuzbank,

      testimonial: {
        name: "Elon Musk",
        position: "CEO Telsa",
        words:
          "Your project's social integration and user engagement strategies are impressive. Keep up the great work!",
        dp: elonMusk,
        icon: teslaLogo,
      },
    },
  },
];
