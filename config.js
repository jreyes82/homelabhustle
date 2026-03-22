const SITE = {

  /* ââ PERSONAL INFO ââââââââââââââââââââââââââââââââââââââââ */
  name:     "Joseph Reyes",
  role:     "Data Center Â· IT Support Â· Homelab",
  location: "Campbell, CA",
  bio:      "7+ years in IT consulting and data center infrastructure. I build, document, and maintain systems â from VLAN segmentation on UniFi to self-hosted Matrix stacks on VPS. Currently completing CompTIA Network+ through Calbright College.",
  status:   "Open to work",

  /* ââ CONTACT LINKS ââââââââââââââââââââââââââââââââââââââââ */
  contact: [
    { label: "Email",    value: "joseph@homelabhustle.com",            href: "mailto:joseph@homelabhustle.com" },
    { label: "LinkedIn", value: "linkedin.com/in/jreyes1982",          href: "https://www.linkedin.com/in/jreyes1982/" },
    { label: "GitHub",   value: "github.com/jreyes82",                 href: "https://github.com/jreyes82" },
  ],

  /* ââ ROLES YOU'RE OPEN TO âââââââââââââââââââââââââââââââââ */
  openRoles: [
    "Remote IT Support",
    "Help Desk (L1 / L2)",
    "Data Center Technician",
    "Junior Network Engineer",
  ],

  /* ââ STATS (hero card) ââââââââââââââââââââââââââââââââââââ */
  stats: [
    { key: "Experience",    value: "7+ yrs" },
    { key: "Location",      value: "Campbell, CA" },
    { key: "Certification", value: "CompTIA A+" },
    { key: "Homelab",       value: "Always on" },
    { key: "Status",        value: "Open to work", blue: true },
  ],

  /* ââ SKILLS âââââââââââââââââââââââââââââââââââââââââââââââ */
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

  /* ââ CERTIFICATIONS âââââââââââââââââââââââââââââââââââââââ */
  certs: [
    { name: "CompTIA Network+",            sub: "In Progress - Calbright College", live: false, section: "In Progress" },
    { name: "CompTIA A+",                  sub: "Calbright College - Sep 2025",    live: true,  section: "Completed" },
    { name: "Google IT Support",           sub: "Coursera - 2020",                 live: true,  section: "Completed" },
    { name: "Atlassian ITSM Professional", sub: "Atlassian - Dec 2024",            live: true,  section: "Completed" },
    { name: "Microsoft Intune",            sub: "Microsoft - Feb 2025",            live: true,  section: "Completed" },
    { name: "Okta Identity Foundations",   sub: "Okta - Feb 2025",                 live: true,  section: "Completed" },
    { name: "CCNA Introduction",           sub: "Cisco Networking Academy - 2017", live: true,  section: "Completed" },
  ],

  /* ââ PROJECTS âââââââââââââââââââââââââââââââââââââââââââââ */
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

  /* ââ EXPERIENCE âââââââââââââââââââââââââââââââââââââââââââ */
  experience: [
    {
      period:   "2021 - 2023",
      company:  "OpenCOLO",
      location: "Santa Clara, CA",
      role:     "Data Center Technician",
      bullets: [
        "Managed daily operations in a high-availability colocation environment focused on uptime and SLA compliance",
        "Provisioned Linux, Windows Server, and VMware vSphere environments with detailed documentation for remote handoffs",
        "Monitored and resolved support tickets via NOC dashboard, conducting root-cause analysis to prevent recurring incidents",
        "Maintained SOC 2 security compliance including guest access, visitor logging, and secure area procedures",
        "Oversaw asset management including intake, labeling, and inventory audits to reduce deployment errors",
      ],
    },
    {
      period:   "2016 - 2020",
      company:  "Pointz Taken",
      location: "San Jose, CA",
      role:     "IT Consultant",
      bullets: [
        "Delivered remote and on-site technical support for small business clients resolving hardware, software, and network issues",
        "Provided remote troubleshooting via RDP and screen-sharing tools, minimizing need for in-person visits",
        "Designed and deployed custom desktop systems tailored to client performance and budget requirements",
        "Executed system imaging, OS installations, and data migrations with verified backups ensuring data integrity",
        "Implemented preventative maintenance schedules and remote monitoring to reduce downtime and improve reliability",
      ],
    },
  ],

  /* ââ BLOG POSTS âââââââââââââââââââââââââââââââââââââââââââ */
  /* The admin panel manages this automatically -- don't edit manually */
  blog: [
    {
      date:    "March 2026",
      tag:     "Self-Hosted",
      title:   "Adding Portainer and Migrating My Docker Services",
      excerpt: "I had Docker running but no good way to manage everything. Here's how I added Portainer and migrated five services — and the port conflicts I hit along the way.",
      href:    "posts/adding-portainer-and-migrating-my-docker-services.html",
    },
{
      date:    "March 2026",
      tag:     "Homelab",
      title:   "homelabbing.....oh my!",
      excerpt: "homelabbing.....oh my!",
      href:    "posts/homelabbingoh-my.html",
    },
  ],

};;
