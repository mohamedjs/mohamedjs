# CapCut From Zero → Your Own Reel Template
### A complete beginner's plan (no prior editing experience assumed)

---

## First, the important design change

You told me the **top half isn't always text**. Sometimes it's:

- a **screen recording** of an app you're talking about
- a **GIF** or short video clip
- a **static image or diagram**
- **text with highlights** (the original reference style)

So we are **not** going to build a text template. We're going to build a **"top slot" template** — a fixed, correctly-sized empty box in the top half that you drop *anything* into. Same position, same size, same rounded corners, every single time.

That's the whole trick. Build the frame once. Swap the filling forever.

```
┌─────────────────────┐
│                     │
│    TOP SLOT         │  ← video / GIF / screen rec / text
│    (swappable)      │     ~45% of frame height
│                     │
├─────────────────────┤
│   [headline text]   │  ← optional, sits on the seam
├─────────────────────┤
│                     │
│    YOU TALKING      │  ← webcam, always the same
│                     │     ~50% of frame height
│      [captions]     │
└─────────────────────┘
```

---

# PART 0 — Understand the screen (20 minutes)

Open CapCut → **New project**. You'll see four areas. Learn these names, everything below refers to them.

**1. The Library (top-left)**
Tabs across the top: `Media` `Audio` `Text` `Stickers` `Effects` `Transitions` `Filters` `Adjustment` `Templates` `AI avatar`. This is where you get *stuff* to put in your video. Your imported files live under **Media → Yours**.

**2. The Player (top-right)**
The preview of your video. The **Ratio** button is at the bottom-right of this panel — that's how you set vertical/horizontal.

**3. The Inspector (far right)**
Changes depending on what you have selected. Select a video clip and you get `Video` / `Audio` tabs with **Position & Size** (Scale, Position, Rotate), Mask, Background, Animation. **This panel is empty until you select something on the timeline** — that confuses every beginner.

**4. The Timeline (bottom half)**
Your video laid out left-to-right in time. Stacked top-to-bottom in **layers** — anything on a higher track appears *in front of* things below it. This layering is the single most important concept in this whole project.

**The one keyboard shortcut you must know:** `⌘B` splits a clip at the playhead. That's 90% of editing.

---

# PART 1 — Day 1: Learn by making something disposable (2 hours)

**Do not start the template yet.** Make one throwaway video first. You'll learn more in 2 hours of doing than 2 hours of reading.

### Drill 1 — Import and trim (20 min)
1. Record 30 seconds of yourself on your phone or webcam. Anything. Count to twenty.
2. CapCut → **Media → Import** → select the file.
3. Drag it from the library down onto the timeline.
4. Move the **playhead** (the vertical white line) to the 10-second mark.
5. Press `⌘B`. The clip splits in two.
6. Click the second half, press `Delete`.
7. **You just edited a video.** That's the core skill.

### Drill 2 — Resize and move (20 min)
1. Select your clip on the timeline.
2. Inspector → **Video → Basic → Position & Size**.
3. Drag the **Scale** slider down to ~50%. Watch it shrink in the Player.
4. In the Player, drag the clip around. Notice the blue snapping guides.
5. Get comfortable with this. You'll do it constantly.

### Drill 3 — Add text (20 min)
1. Library → **Text** tab → **Default text** → drag onto the timeline **above** your video clip.
2. Double-click it in the Player and type something.
3. Inspector → change the font, size, color.
4. Drag its ends on the timeline to control when it appears and disappears.

### Drill 4 — Auto-captions (20 min)
1. Say something out loud in your test clip.
2. Library → **Text → Auto captions** → **Generate**.
3. Watch CapCut transcribe you. Style the result.

### Drill 5 — Export (20 min)
1. Top-right → **Export**.
2. Set 1080p, 30fps, MP4.
3. Export it. Open the file. Confirm it works.

**End of Day 1.** You now know: import, trim, resize, text, captions, export. That is genuinely enough to make this template.

---

# PART 2 — Day 2: Get your top-slot content ready (1–2 hours)

Before building, learn how to *produce* the four kinds of top content.

### A. Screen recording an app on your Mac
- Press `⌘ Shift 5`
- Choose **Record Selected Portion**
- Drag a box around just the app window (not your whole screen — you want it tight)
- Click **Record**, do the thing, click the stop button in the menu bar
- Saves to Desktop as `.mov` — CapCut imports this fine

### B. Screen recording your phone
- **iPhone:** Settings → Control Center → add **Screen Recording**. Swipe down, tap the record button.
- **Android:** swipe down the quick settings panel → **Screen record**.
- AirDrop / transfer to your Mac.
- Phone recordings are already vertical, which fits the top slot nicely.

### C. GIFs
CapCut imports `.gif` directly — just drag it in. If a GIF won't import, convert it to MP4 first (any online converter).

### D. Text panels with highlights
**Make these in Canva, not CapCut.** This is the most important shortcut in the entire plan.

1. Canva → Custom size → **1080 × 900 px**
2. White background
3. Add your text in a serif font (Georgia, EB Garamond)
4. For highlights: draw a rectangle, fill pale yellow `#FFF3B0`, set transparency ~60%, send it **behind** the text
5. For the red pill labels: rounded rectangle, fill `#D62839`, white bold ALL-CAPS text on top
6. **Download as PNG**

Doing this natively in CapCut means stacking a dozen shape layers by hand. Canva takes 15 minutes. Keep the Canva file — for each new video you edit the text and re-export.

---

# PART 3 — Day 3: Build the template (2–3 hours)

Now the real thing. Go slowly, in this exact order.

### Step 1 — Canvas setup (5 min)
1. New project.
2. Player → **Ratio** button → **9:16**.
3. Player menu (☰ top-right of the Player) → Resolution **1080P**, Frame rate **30fps**.

### Step 2 — White base layer (10 min)
The reference has a white background, not black. You need a permanent white bottom layer.

1. Library → **Media → Library** (left sidebar) → search **"white"**
2. Drag a plain white background onto **Track 1** (the bottom track)
3. Drag its right edge out to ~40 seconds. This is your canvas floor.

*Alternative:* make a 1080×1920 solid white PNG in Canva and import it. More reliable.

### Step 3 — Your webcam clip, bottom zone (25 min)
1. Drag your talking-head clip onto **Track 2** (above the white).
2. Select it → Inspector → **Position & Size**:
   - **Scale:** ~55%
   - Drag it in the Player so its **top edge sits at roughly the halfway line** of the frame
3. **Rounded corners:** Inspector → **Mask** → **Rectangle**. In the Player, drag the mask handles to match your clip's edges, then drag the **corner radius handle** inward until corners are softly rounded.
4. Note the exact Scale % and Position numbers somewhere. You'll re-enter them every time you swap footage.

### Step 4 — The top slot (30 min)
This is the piece that makes it a template.

1. Import **any** placeholder — a screenshot, a colored square, anything.
2. Drag it onto **Track 3**.
3. Select it → **Position & Size** → scale and position it to fill the top ~45% of the frame, leaving a small white margin on the left and right.
4. Apply the same **Mask → Rectangle** with rounded corners.
5. **Write down the Scale and Position values.** These are your slot coordinates.

**How you swap content later:** right-click the clip on the timeline → **Replace**. CapCut swaps the media but keeps your position, scale, and mask. This is the single most useful feature for template work — learn it.

If Replace doesn't preserve everything, just delete the clip, drop the new one in the same track, and re-enter your saved Scale/Position numbers.

### Step 5 — The headline text (30 min)
1. **Text → Default text** → onto **Track 4**.
2. Position it on the seam between the two zones.
3. Font: bold sans-serif (Poppins Bold, Montserrat Bold, Anton). Black. Large.
4. Inspector → **Animation → In** → pick **Typewriter** or **Wipe**. Set duration ~1 second.
5. Inspector → click the **bookmark / Save as preset** icon. Now it lives in **Text → My presets** and you can summon this exact style in any project with one click.

*(The fancy word-by-word build — one text layer per word, staggered 0.3s apart — is a Day 4 upgrade. Don't attempt it on your first build.)*

### Step 6 — Captions (20 min)
1. **Text → Auto captions → Generate**.
2. Style: bold sans-serif, white, **black stroke 3px** (essential for legibility over video).
3. Position in the lower third of your webcam zone.
4. Reduce **max characters per line** so captions appear in short 1–3 word chunks — that's the punchy look in the reference.
5. Save this style as a preset too.

### Step 7 — Save it as your template (10 min)
CapCut Desktop has no "Save as template" button. Do this instead:

1. Go back to the CapCut home screen.
2. Find your project → right-click → **Duplicate**.
3. Rename the original to **`TEMPLATE — Split Explainer`**.
4. **Never edit the template directly.** Every new video: duplicate it first, work in the copy.

---

# PART 4 — Your per-video workflow (30–45 min each)

Once the template exists, every video is this:

1. Duplicate the template project, rename it
2. Record your talking head + your screen recording / prepare your top content
3. Open the copy → right-click the webcam clip → **Replace** → your new footage
4. Right-click the top-slot clip → **Replace** → your screen recording / GIF / Canva PNG
5. Retype the headline
6. Delete old captions → **Auto captions → Generate** fresh
7. Trim the silences (split with `⌘B`, delete the gaps)
8. **Export** 1080p / 30fps

---

# PART 5 — Handling different top-slot content

Each content type needs a slightly different treatment:

| Top content | Watch out for | Fix |
|---|---|---|
| **Phone screen recording** | Already vertical — very tall, will overflow the slot | Scale down more; or use **Crop** to show only the relevant part of the screen |
| **Mac app screen recording** | Wide 16:9 — leaves white gaps above/below in the slot | That's fine, it looks intentional. Or crop tighter when recording. |
| **GIF** | Usually low resolution, gets blurry when scaled up | Keep it small in the slot; don't scale above 100% |
| **Canva text PNG** | Should be exactly 1080×900 | Then it drops in at 100% scale with no fiddling |
| **Any video** | Its audio will play over your voice | Select the clip → **Audio** tab → set **Volume to 0** |

**Pro move:** if your screen recording has an important detail, add a **slow zoom** — select it → **Animation → Group animation → Slow zoom in**. Draws the eye to it.

---

# Realistic timeline

| Day | Hours | Outcome |
|---|---|---|
| Day 1 | 2 | You can import, cut, resize, add text, export |
| Day 2 | 1–2 | You have screen recordings and a Canva panel ready |
| Day 3 | 2–3 | Template exists and is saved |
| Day 4+ | 0.5–0.75 per video | Production mode |

**Total to first published reel: 6–8 hours** across three sittings. Don't try to do it in one day — the interface fatigue is real and you'll make worse decisions in hour five.

---

# Beginner mistakes to avoid

- **Editing your template directly.** Always duplicate first.
- **Building the highlight panel inside CapCut.** Use Canva.
- **Forgetting to mute the top-slot clip's audio.** It'll clash with your voice.
- **Skipping the black stroke on captions.** They become unreadable over footage.
- **Not writing down your Scale/Position numbers.** You'll need them every single time.
- **Starting with the word-by-word animation.** It's an upgrade, not a foundation.

---

# When you're stuck

CapCut's own **Templates** tab (top of the Library) has pre-built split-screen formats. Before your Day 3 build, spend 10 minutes browsing — search "split screen talking head" or "podcast clip". If one is close to what you want, you can start from it and save yourself the whole build.