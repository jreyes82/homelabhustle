const SITE = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  name:     "Joseph Reyes",
  role:     "Data Center · Networking · Homelab",
  location: "Campbell, CA",
  bio:      "7+ years in IT consulting and data center infrastructure. I build, document, and maintain systems — from VLAN segmentation on UniFi to self-hosted Matrix stacks on VPS. Currently completing CompTIA Network+ through Calbright College.",
  status:   "Open to work",

  /* ── CONTACT LINKS ──────────────────────────────────────── */
  contact: [
    { label: "Email",    value: "joseph@homelabhustle.com",          href: "mailto:you@yourdomain.com" },
    { label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "https://linkedin.com/in/yourprofile" },
    { label: "GitHub",   value: "github.com/yourhandle",       href: "https://github.com/yourhandle" },
  ],

  /* ── ROLES YOU'RE OPEN TO ───────────────────────────────── */
  openRoles: [
    "Remote IT Support",
    "Help Desk (L1 / L2)",
    "Data Center Technician",
    "NOC / Network Operations",
    "Junior Network Engineer",
  ],

  /* ── STATS (hero card) ──────────────────────────────────── */
  stats: [
    { key: "Experience",    value: "7+ yrs" },
    { key: "Location",      value: "Santa Clara, CA" },
    { key: "Certification", value: "CompTIA N+" },
    { key: "Homelab",       value: "Always on" },
    { key: "Status",        value: "Open to work", blue: true },
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: [
    {
      cat:   "Networking",
      name:  "Network Infrastructure",
      desc:  "Layer 2/3 switching, VLAN configuration, routing protocols, NAT/PAT, QoS, VPNs, and IPSec tunneling.",
      pills: ["OSPF", "VXLAN", "UniFi", "IPSec", "RADIUS"],
    },
    {
      cat:   "Data Center",
      name:  "Colocation Ops",
      desc:  "Physical infrastructure, BMS and EPMS systems, SSH access management, rack & stack, and fiber patching.",
      pills: ["BMS", "EPMS", "SSH", "Fiber"],
    },
    {
      cat:   "Homelab",
      name:  "Self-Hosted Systems",
      desc:  "Docker, Portainer, Linux administration, Cloudflare Zero Trust, VPS management, and service orchestration.",
      pills: ["Docker", "Linux", "Cloudflare", "Portainer"],
    },
    {
      cat:   "Development",
      name:  "Scripting & Tooling",
      desc:  "Python automation, Node.js, React, REST API integration, SQLite, and custom network monitoring tooling.",
      pills: ["Python", "Node.js", "React", "SQLite"],
    },
  ],

  /* ── CERTIFICATIONS ─────────────────────────────────────── */
  certs: [
    { name: "CompTIA Network+",       sub: "In Progress · Calbright College", live: false },
    { name: "Data Center Operations", sub: "OpenCOLO · 2021–2023",            live: true  },
    { name: "IT Consulting",          sub: "Pointz Taken · 2016–2020",        live: true  },
  ],

  /* ── PROJECTS ───────────────────────────────────────────── */
  projects: [
    {
      id:    "Project 01",
      name:  "Matrix / Element Stack",
      desc:  "Self-hosted communication server for a gaming group. Runs Matrix Synapse, Element, and Jitsi on a RackNerd VPS under a custom domain, secured with Cloudflare Zero Trust for granular access control.",
      pills: ["Matrix Synapse", "Docker", "Jitsi", "Cloudflare ZT", "VPS"],
    },
    {
      id:    "Project 02",
      name:  "UniFi Network Dashboard",
      desc:  "Custom React 19 + Node.js monitoring widget integrated with the UniFi Network API. Multi-tab interface with SQLite persistence, embedded inside Framerr for real-time infrastructure visibility.",
      pills: ["React 19", "Node.js", "SQLite", "UniFi API"],
    },
    {
      id:    "Project 03",
      name:  "Media Automation Stack",
      desc:  "Full media pipeline running on Windows 11 via Docker — Sonarr, Prowlarr, Overseerr, and Plex. Managed through Portainer, remotely accessible via Cloudflare tunnel and Apache Guacamole.",
      pills: ["Plex", "Sonarr", "Prowlarr", "Portainer", "Guacamole"],
    },
    {
      id:    "Project 04",
      name:  "TeamSpeak 6 Music Bot",
      desc:  "Python-based music bot for a self-hosted TeamSpeak 6 server. Streams audio from YouTube via yt-dlp with a queue system, playback controls, and a full slash command interface.",
      pills: ["Python", "yt-dlp", "TeamSpeak 6", "VPS"],
    },
  ],

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      period:   "2021 – 2023",
      company:  "OpenCOLO",
      location: "Santa Clara, CA",
      role:     "Data Center Technician",
      bullets: [
        "Managed Layer 2 switching and VLAN configuration across colocation infrastructure",
        "Maintained BMS and EPMS systems for environmental and power monitoring",
        "Administered SSH access and performed hands-on rack & stack and fiber patching",
        "Supported customer deployments and resolved physical and network-layer issues",
      ],
    },
    {
      period:   "2016 – 2020",
      company:  "Pointz Taken",
      location: "San Jose, CA",
      role:     "IT Consultant",
      bullets: [
        "Delivered IT support and consulting services to small and mid-sized business clients",
        "Configured and maintained networking equipment, workstations, and servers",
        "Handled ticketing, troubleshooting, and escalation across diverse client environments",
      ],
    },
  ],

  /* ── BLOG POSTS ─────────────────────────────────────────── */
  /* To add a post: copy one block, paste it at the TOP of the array, update the fields */
  blog: [
    {
      date:    "Coming soon",
      tag:     "Networking",
      title:   "VLAN Segmentation on the UCG-Fiber: Moving Off Native",
      excerpt: "Walking through my home network segmentation project — isolating IoT, trusted, and lab gear into separate VLANs using the UniFi Network app.",
      href:    "#",
    },
    {
      date:    "Coming soon",
      tag:     "Self-Hosted",
      title:   "Self-Hosting Matrix: From VPS to Full Stack",
      excerpt: "How I deployed Matrix Synapse, Element, and Jitsi on a RackNerd VPS with Cloudflare Zero Trust for a private group communication server.",
      href:    "#",
    },
    {
      date:    "Coming soon",
      tag:     "Study Notes",
      title:   "Network+ Notes: Subnetting Without the Headache",
      excerpt: "The patterns I use to calculate subnets, host counts, and CIDRs quickly — built from my Calbright College exam prep sessions.",
      href:    "#",
    },
  ],

};
