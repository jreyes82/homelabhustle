# josephsousa.com — Portfolio Site

## Editing the site

**You only ever need to touch one file: `config.js`**

Open it in any text editor (Notepad, VS Code, etc.) and update the values. Everything on the site — your name, bio, projects, blog posts, contact links — is in there.

### Adding a blog post
Find the `blog:` section in `config.js` and add a new block at the **top** of the array:

```js
{
  date:    "March 2025",
  tag:     "Networking",
  title:   "Your Post Title Here",
  excerpt: "A short description of what the post is about.",
  href:    "posts/your-post-filename.html",
},
```

### Adding a project
Find the `projects:` section and add a new block:

```js
{
  id:    "Project 05",
  name:  "Your Project Name",
  desc:  "What you built and how it works.",
  pills: ["Tool1", "Tool2", "Tool3"],
},
```

---

## Deploying changes

1. Edit `config.js`
2. Open a terminal in this folder
3. Run:
   ```
   git add .
   git commit -m "update site"
   git push
   ```
4. Your site updates automatically within ~60 seconds.

---

## First-time GitHub Pages setup

1. Create a new repo on GitHub (e.g. `josephsousa.com` or `portfolio`)
2. Upload these files to it
3. Go to repo **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. GitHub will give you a URL like `https://yourusername.github.io/portfolio`

## Connecting your Cloudflare domain

1. In GitHub Pages settings, add your custom domain (e.g. `josephsousa.com`)
2. In Cloudflare DNS, add these records:

| Type  | Name | Content                  |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | yourusername.github.io    |

3. Set Cloudflare proxy to **DNS only** (grey cloud) for the A records
4. SSL/HTTPS is handled automatically by GitHub Pages

---

## Files

| File        | Purpose                            |
|-------------|------------------------------------|
| `config.js` | ✏️ All your content — edit this    |
| `index.html` | Site template — don't touch this  |
| `README.md`  | These instructions                 |
