const SITE = {

  /* ---- PERSONAL INFO ---------------------------------------- */
  name:     "Joseph Reyes",
  role:     "Data Center | IT Support | Homelab",
  location: "Campbell, CA",
  bio:      "7+ years in IT consulting and data center infrastructure. CompTIA A+ certified with Network+ in progress. I build and maintain hands-on homelab infrastructure - from Docker service migrations to self-hosted communication stacks on VPS. Currently seeking remote IT support and data center roles in the Bay Area.",
  status:   "Open to work",

  /* ---- CONTACT LINKS ---------------------------------------- */
  contact: [
    { label: "Email",    value: "joseph@homelabhustle.com",   href: "mailto:joseph@homelabhustle.com" },
    { label: "LinkedIn", value: "linkedin.com/in/jreyes1982", href: "https://www.linkedin.com/in/jreyes1982/" },
    { label: "GitHub",   value: "github.com/jreyes82",        href: "https://github.com/jreyes82" },
  ],

  /* ---- ROLES YOU'RE OPEN TO --------------------------------- */
  openRoles: [
    "Remote IT Support",
    "Help Desk (L1 / L2)",
    "Data Center Technician",
    "Junior Network Engineer",
  ],

  /* ---- STATS (hero card) ------------------------------------ */
  stats: [
    { key: "Experience",    value: "7+ yrs" },
    { key: "Location",      value: "Campbell, CA" },
    { key: "Certification", value: "CompTIA A+" },
    { key: "Homelab",       value: "Always on" },
    { key: "Status",        value: "Open to work", blue: true },
  ],

  /* ---- SKILLS ----------------------------------------------- */
  skills: [
    {
      cat:   "Networking",
      name:  "Network Infrastructure",
      desc:  "Layer 2/3 switching, VLAN configuration, routing protocols, NAT/PAT, QoS, VPNs, and IPSec tunneling.",
      pills: ["VXLAN", "UniFi", "TCP/IP", "DNS", "DHCP", "VPN"],
    },
    {
      cat:   "Data Center",
      name:  "Colocation Ops",
      desc:  "Physical infrastructure, BMS and EPMS systems, SSH access management, rack and stack, and fiber patching.",
      pills: ["BMS", "IPMI", "SSH", "Fiber", "Supermicro", "Dell", "HP", "Hardware Lifecycle", "Asset Management"],
    },
    {
      cat:   "Homelab",
      name:  "Self-Hosted Systems",
      desc:  "Docker, Portainer, VMware ESXi, Proxmox, Hyper-V, Linux administration, Cloudflare Zero Trust, Nginx Proxy Manager, and service orchestration.",
      pills: ["Docker", "Linux", "Cloudflare", "Portainer", "VMware", "Proxmox", "Hyper-V", "Nginx"],
    },
    {
      cat:   "IT Support",
      name:  "Hardware and Troubleshooting",
      desc:  "Desktop and laptop diagnostics, OS installation and imaging, hardware repair, remote support, and end-user troubleshooting across Windows environments.",
      pills: ["Windows 10/11", "Windows Server", "Hardware", "Remote Desktop", "TeamViewer", "Imaging", "Help Desk", "Ticketing", "ServiceNow", "Jira", "Zendesk", "Kayako", "CompTIA A+", "Google IT Support", "Microsoft Intune", "Okta", "ITSM", "Apache Guacamole"],
    },
  ],

  /* ---- CERTIFICATIONS --------------------------------------- */
  certs: [
    { name: "CompTIA Network+",            sub: "In Progress - Calbright College", live: false, section: "In Progress" },
    { name: "CompTIA A+",                  sub: "Calbright College - Sep 2025",    live: true,  section: "Completed" },
    { name: "Google IT Support",           sub: "Coursera - 2020",                 live: true,  section: "Completed" },
    { name: "Atlassian ITSM Professional", sub: "Atlassian - Dec 2024",            live: true,  section: "Completed" },
    { name: "Microsoft Intune",            sub: "Microsoft - Feb 2025",            live: true,  section: "Completed" },
    { name: "Okta Identity Foundations",   sub: "Okta - Feb 2025",                 live: true,  section: "Completed" },
    { name: "CCNA Introduction",           sub: "Cisco Networking Academy - 2017", live: true,  section: "Completed" },
  ],

  /* ---- PROJECTS --------------------------------------------- */
  projects: [
    {
      id:    "Project 01",
      name:  "Matrix / Element Stack",
      desc:  "Self-hosted communication server for a private group. Deployed Matrix Synapse, Element, and Jitsi on a RackNerd VPS, configured Cloudflare Zero Trust for access control, and managed DNS and domain setup end to end.",
      pills: ["Matrix Synapse", "Docker", "Jitsi", "Cloudflare ZT", "VPS"],
    },
    {
      id:    "Project 02",
      name:  "Media Automation Stack",
      desc:  "Self-hosted media pipeline running on Windows 11 via Docker - Sonarr, Prowlarr, Overseerr, and Plex managed through Portainer. Configured remote access via Cloudflare tunnel and Apache Guacamole.",
      pills: ["Plex", "Sonarr", "Prowlarr", "Portainer", "Guacamole"],
    },
    {
      id:    "Project 03",
      name:  "Homelab Portfolio Site",
      desc:  "Designed and deployed this portfolio site at homelabhustle.com. Set up GitHub for version control, Cloudflare Pages for hosting, Cloudflare Zero Trust to secure the admin panel, custom domain DNS configuration, and email routing through Cloudflare.",
      pills: ["Cloudflare Pages", "GitHub", "Zero Trust", "DNS", "HTML/CSS"],
    },
    {
      id:    "Project 04",
      name:  "Docker Service Migration to Portainer",
      desc:  "Migrated five self-hosted services from standalone Docker containers into managed Portainer stacks on Windows 11. Converted to docker-compose deployments, resolved port conflicts during migration, and centralized container management and monitoring.",
      pills: ["Docker", "Portainer", "Windows 11", "docker-compose"],
    },
    {
      id:    "Project 05",
      name:  "ContainerWatch",
      desc:  "Custom Flask and Python Docker management dashboard built from scratch and deployed as a container. Monitors running containers, checks images against remote registries for updates, triggers one-click pulls, scans Python dependencies inside containers, streams live logs, and sends Discord notifications. Runs behind Cloudflare Zero Trust.",
      pills: ["Python", "Flask", "Docker", "SQLite", "Cloudflare ZT"],
    },
  ],

  /* ---- EXPERIENCE ------------------------------------------- */
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
        "Oversaw asset management including intake, labeling, and inventory audits to maintain SOC 2 compliance and reduce deployment errors",
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

  /* ---- BLOG POSTS ------------------------------------------- */
  /* The admin panel manages this automatically - do not edit manually */
  blog: [
    {
      date:    "April 2026",
      tag:     "Homelab",
      title:   "ContainerWatch: Building My Own Docker Dashboard from Scratch",
      excerpt: "Portainer is great until it isn't. Here's why I built ContainerWatch — a custom Flask dashboard that does exactly what I need and nothing I don't.",
      href:    "posts/containerwatch-building-my-own-docker-dashboard-from-scratch.html",
    },
{
      date:    "April 2026",
      tag:     "Study Notes",
      title:   "Network+ Study Notes: Subnetting â Why We Need It and How to Do It",
      excerpt: "Subnetting took me a while to click â CIDR notation, host ranges, network addresses, all of it. Here's the full breakdown I wish I had from the start, with exam tips throughout.",
      href:    "posts/network-study-notes-subnetting-why-we-need-it-and-how-to-do-it.html",
    },
{
      date:    "March 2026",
      tag:     "Study Notes",
      title:   "Network+ Study Notes: IPv6 Address Simplification and Expansion",
      excerpt: "IPv6 addresses look intimidating at first. Here's how I broke down the two biggest concepts - how to simplify them and why we needed them in the first place.",
      href:    "posts/network-study-notes-ipv6-address-simplification-and-expansion.html",
    },
{
      date:    "March 2026",
      tag:     "Homelab",
      title:   "RackNerd KVM VPS: How I Run 4 Services for $11 a Year",
      excerpt: "A full Linux VPS running Matrix, Jitsi, TeamSpeak, and a music bot for $11 a year. Here's how I found the deal and what I'm running on it.",
      href:    "posts/racknerd-kvm-vps-how-i-run-4-services-for-11-a-year.html",
    },
{
      date:    "March 2026",
      tag:     "Career",
      title:   "How I Got My CompTIA A+ for Free Through Calbright College",
      excerpt: "The A+ exam costs $250 a pop and you need to pass two of them. Here's how I found Calbright College and got fully certified in under 6 months without paying a dime.",
      href:    "posts/how-i-got-my-comptia-a-for-free-through-calbright-college.html",
    },
{
      date:    "March 2026",
      tag:     "Homelab",
      title:   "Adding Portainer and Migrating My Docker Services",
      excerpt: "I had Docker running but no good way to manage everything. Here's how I added Portainer and migrated five services - and the port conflicts I hit along the way.",
      href:    "posts/adding-portainer-and-migrating-my-docker-services.html",
    },
  ],

};
