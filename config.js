const SITE = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  name:     "Joseph Reyes",
  role:     "Data Center · IT Support · Homelab",
  location: "Campbell, CA",
  bio:      "7+ years in IT consulting and data center infrastructure. I build, document, and maintain systems — from VLAN segmentation on UniFi to self-hosted Matrix stacks on VPS. Currently completing CompTIA Network+ through Calbright College.",
  status:   "Open to work",

  /* ── CONTACT LINKS ──────────────────────────────────────── */
  contact: [
    { label: "Email",    value: "joseph@homelabhustle.com",            href: "mailto:joseph@homelabhustle.com" },
    { label: "LinkedIn", value: "linkedin.com/in/jreyes1982",          href: "https://www.linkedin.com/in/jreyes1982/" },
    { label: "GitHub",   value: "github.com/jreyes82",                 href: "https://github.com/jreyes82" },
  ],

  /* ── ROLES YOU'RE OPEN TO ───────────────────────────────── */
  openRoles: [
    "Remote IT Support",
    "Help Desk (L1 / L2)",
    "Data Center Technician",
    "Junior Network Engineer",
  ],

  /* ── STATS (hero card) ──────────────────────────────────── */
  stats: [
    { key: "Experience",    value: "7+ yrs" },
    { key: "Location",      value: "Campbell, CA" },
    { key: "Certification", value: "CompTIA A+" },
    { key: "Homelab",       value: "Always on" },
    { key: "Status",        value: "Open to work", blue: true },
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: [
    {
      cat:   "Networking",
      name:  "Network Infrastructure",
      desc:  "Layer 2/3 switching, VLAN configuration, routing protocols, NAT/PAT, QoS, VPNs, and IPSec tunneling.",
      pills: ["OSPF", "VXLAN", "UniFi", "IPSec", "RADIUS", "TCP/IP", "DNS", "DHCP", "VPN"],
    },
    {
      cat:   "Data Center",
      name:  "Colocation Ops",
      desc:  "Physical infrastructure, BMS and EPMS systems, SSH access management, rack and stack, and fiber patching.",
      pills: ["BMS", "IPMI", "SSH", "Fiber", "Supermicro", "Dell", "HP", "Hardware Lifecycle"],
    },
    {
      cat:   "Homelab",
      name:  "Self-Hosted Systems",
      desc: "Docker, Portainer, VMware ESXi, Proxmox, Hyper-V, Linux administration, Cloudflare Zero Trust, Nginx Proxy Manager, and service orchestration.",
      pills: ["Docker", "Linux", "Cloudflare", "Portainer", "VMware", "Proxmox", "Hyper-V", "Nginx"],
    },
    {
      cat:   "IT Support",
      name:  "Hardware and Troubleshooting",
      desc:  "Desktop and laptop diagnostics, OS installation and imaging, hardware repair, remote support, and end-user troubleshooting across Windows environments.",
      pills: ["Windows 10/11", "Windows Server", "Hardware", "Remote Desktop", "TeamViewer", "Imaging", "Help Desk", "Ticketing", "ServiceNow", "Jira", "Zendesk", "Kayako", "CompTIA A+", "Google IT Support", "Microsoft Intune", "Okta", "ITSM", "Apache Guacamole"],
    },
  ],

  /* ── CERTIFICATIONS ─────────────────────────────────────── */
  certs: [
    { name: "CompTIA Network+",            sub: "In Progress - Calbright College", live: false, section: "In Progress" },
    { name: "CompTIA A+",                  sub: "Calbright College - Sep 2025",    live: true,  section: "Completed" },
    { name: "Google IT Support",           sub: "Coursera - 2020",                 live: true,  section: "Completed" },
    { name: "Atlassian ITSM Professional", sub: "Atlassian - Dec 2024",            live: true,  section: "Completed" },
    { name: "Microsoft Intune",            sub: "Microsoft - Feb 2025",            live: true,  section: "Completed" },
    { name: "Okta Identity Foundations",   sub: "Okta - Feb 2025",                 live: true,  section: "Completed" },
    { name: "CCNA Introduction",           sub: "Cisco Networking Academy - 2017", live: true,  section: "Completed" },
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
      desc:  "Full media pipeline running on Windows 11 via Docker -- Sonarr, Prowlarr, Overseerr, and Plex. Managed through Portainer, remotely accessible via Cloudflare tunnel and Apache Guacamole.",
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
      period:   "2021 - 2023",
      company:  "OpenCOLO",
      location: "Santa Clara, CA",
      role:     "Data Center Technician",
      bullets: [
        "Managed Layer 2 switching and VLAN configuration across colocation infrastructure",
        "Maintained BMS and EPMS systems for environmental and power monitoring",
        "Administered SSH access and performed hands-on rack and stack and fiber patching",
        "Supported customer deployments and resolved physical and network-layer issues",
      ],
    },
    {
      period:   "2016 - 2020",
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
  /* The admin panel manages this automatically -- don't edit manually */
  blog: [
    {
      date:    "March 2026",
      tag:     "Homelab",
      title:   "homelabbing.....oh my!",
      excerpt: "homelabbing.....oh my!",
      href:    "posts/homelabbingoh-my.html",
    },
  ],

};
