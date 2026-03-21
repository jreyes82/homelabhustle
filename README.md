# homelabhustle.com

## Files

| File | Purpose |
|------|---------|
| `config.js` | ✏️ Your content — the only file you regularly edit |
| `index.html` | Main portfolio page — don't touch |
| `blog.html` | Blog index page — don't touch |
| `shared.css` | Shared styles — don't touch |
| `posts/post-template.html` | Copy this to write a new post |

---

## Writing a new blog post

### Step 1 — Create the post file
1. Go to your repo on GitHub
2. Click into the `posts/` folder
3. Click `post-template.html` → click the **pencil icon** to edit
4. Edit the content (title, date, tag, body text — marked with `<!-- EDIT -->` comments)
5. When done, click **Commit changes** — but change the filename first:
   - At the top of the editor, change `post-template.html` to your post name
   - Example: `vlan-segmentation.html`
   - Keep it lowercase with dashes, no spaces

### Step 2 — Add it to the blog list
Open `config.js` and find the `blog:` array. Add a new block at the **top**:

```js
{
  date:    "March 2025",
  tag:     "Networking",
  title:   "Your Post Title Here",
  excerpt: "One or two sentences describing the post.",
  href:    "posts/vlan-segmentation.html",
},
```

Commit that change too — your post is now live on the blog page.

---

## Tags to use
Keep tags consistent so the filter buttons work properly:

- `Networking`
- `Homelab`
- `Self-Hosted`
- `Study Notes`
- `Troubleshooting`
- `Career`

---

## Updating your portfolio

Edit `config.js` for:
- Name, bio, location, status
- Contact links
- Skills and pills
- Certifications
- Projects
- Experience / job history
- Open roles in the contact section

Commit the change — live in ~60 seconds.

---

## Deploying

Any time you commit a change to GitHub, the site updates automatically via GitHub Pages.

To make changes locally and push:
```
git add .
git commit -m "describe what you changed"
git push
```
