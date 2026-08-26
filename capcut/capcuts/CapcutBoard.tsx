"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/features/theme/theme.hooks";
import { useLocale } from "@/features/i18n/i18n.hooks";
import Image from "next/image";

const CONTENT = {
  en: {
    headerTitle: "CapCut From Zero → Reel Template",
    title1: "Build your",
    titleHighlight: "Reel Template.",
    subtitle: "A complete beginner's plan (no prior editing experience assumed). We are going to build a \"top slot\" template — a fixed, correctly-sized empty box in the top half that you drop anything into.",
    topSlotBadge: 'The "Top Slot" Format',
    keyShortcutTitle: "Key Shortcut:",
    keyShortcutDesc: "splits a clip at the playhead. That's 90% of editing.",
    
    parts: {
      p0: {
        number: "0",
        title: "Understand the screen",
        time: "20 minutes",
        cards: [
          { title: "1. The Library (top-left)", text: "Where you get stuff to put in your video. Your imported files live under Media → Yours." },
          { title: "2. The Player (top-right)", text: "The preview of your video. The Ratio button is at the bottom-right — that's how you set vertical/horizontal." },
          { title: "3. The Inspector (far right)", text: "Changes depending on what you have selected. Empty until you select something on the timeline." },
          { title: "4. The Timeline (bottom half)", text: "Your video laid out left-to-right. Stacked in layers. Higher tracks appear in front." }
        ]
      },
      p1: {
        number: "1",
        title: "Day 1: Learn by making something disposable",
        time: "2 hours",
        note: "Do not start the template yet. Make one throwaway video first.",
        drills: [
          { number: "1", title: "Import and trim", time: "20 min", items: ["Record 30s of yourself on your phone or webcam. Count to twenty.", "CapCut → Media → Import → select the file.", "Drag it from the library down onto the timeline.", "Move the playhead to the 10-second mark.", "Press ⌘B. The clip splits in two. Click the second half, press Delete."] },
          { number: "2", title: "Resize and move", time: "20 min", items: ["Select your clip on the timeline.", "Inspector → Video → Basic → Position & Size.", "Drag the Scale slider down to ~50%. Watch it shrink.", "In the Player, drag the clip around. Notice the snapping guides."] },
          { number: "3", title: "Add text", time: "20 min", items: ["Library → Text → Default text → drag above your clip.", "Double-click in the Player and type.", "Inspector → change font, size, color. Drag its ends on the timeline."] },
          { number: "4", title: "Auto-captions", time: "20 min", items: ["Say something out loud in your test clip.", "Library → Text → Auto captions → Generate."] },
          { number: "5", title: "Export", time: "20 min", items: ["Top-right → Export. Set 1080p, 30fps, MP4.", "Export it and confirm it works."] }
        ]
      },
      p2: {
        number: "2",
        title: "Day 2: Get your top-slot content ready",
        time: "1–2 hours",
        methods: [
          { title: "A. Screen recording an app on your Mac", text: "Press ⌘ Shift 5 → Choose Record Selected Portion → Drag a box around just the app window → Record. Saves to Desktop as .mov." },
          { title: "B. Screen recording your phone", text: "iPhone: Control Center → Screen Recording. Android: Quick settings → Screen record. Phone recordings are already vertical!" },
          { title: "C. GIFs", text: "CapCut imports .gif directly. If it fails, convert to MP4 online first." },
          { title: "D. Text panels with highlights (Canva)", text: "Make these in Canva. 1080×900 px. White background. Add text in a serif font. Add pale yellow rectangles (#FFF3B0) behind text for highlights. Add red pill labels (#D62839). Download as PNG.", highlight: true }
        ]
      },
      p3: {
        number: "3",
        title: "Day 3: Build the template",
        time: "2–3 hours",
        steps: [
          { number: "1", title: "Canvas setup", time: "5 min", text: "New project → Ratio button (9:16) → Resolution (1080P) → Frame rate (30fps)." },
          { number: "2", title: "White base layer", time: "10 min", text: "Search \"white\" in Library → Media. Drag to Track 1. Stretch to ~40s." },
          { number: "3", title: "Your webcam clip, bottom zone", time: "25 min", text: "Drag talking-head to Track 2. Set Scale ~55%. Position top edge at halfway line. Add a Rounded Rectangle mask. Note exact Scale & Position numbers." },
          { number: "4", title: "The top slot", time: "30 min", text: "Import placeholder to Track 3. Scale & position to fill top 45%. Apply mask with rounded corners. Note Scale/Position.\n\nHow to swap: Right-click timeline clip → Replace. CapCut preserves position & mask!", highlight: true },
          { number: "5", title: "The headline text", time: "30 min", text: "Text to Track 4, on the seam. Bold sans-serif. Animation → In → Typewriter (1s). Save as preset." },
          { number: "6", title: "Captions", time: "20 min", text: "Auto captions → Generate. Bold sans-serif, white, black stroke 3px. Reduce max chars per line. Save preset." },
          { number: "7", title: "Save it as your template", time: "10 min", text: "Go to Home screen. Right-click project → Duplicate. Name it TEMPLATE — Split Explainer. Never edit this directly!" }
        ]
      },
      p4: {
        number: "4",
        title: "Your per-video workflow",
        time: "30–45 min each",
        workflow: [
          "Duplicate the template project, rename it",
          "Prepare your top content & record talking head",
          "Right-click webcam clip → Replace → new footage",
          "Right-click top-slot clip → Replace → new top content",
          "Retype the headline",
          "Delete old captions → Generate fresh",
          "Trim the silences (split with ⌘B, delete gaps)",
          "Export 1080p / 30fps"
        ]
      },
      p5: {
        title: "Handling different top-slot content",
        headers: ["Top content", "Watch out for", "Fix"],
        rows: [
          ["Phone recording", "Already vertical — will overflow", "Scale down more, or use Crop tool"],
          ["Mac recording", "Wide 16:9 — leaves white gaps", "Looks intentional. Or crop tighter."],
          ["GIF", "Blurry when scaled up", "Keep it small, don't scale above 100%"],
          ["Canva PNG", "Should be 1080×900", "Drops in at 100% scale flawlessly"],
          ["Any video", "Audio plays over your voice", "Select clip → Audio → Volume 0"]
        ]
      }
    },
    timelineTitle: "Realistic timeline",
    timeline: [
      { day: "Day 1 (2h)", desc: "Import, cut, text" },
      { day: "Day 2 (1-2h)", desc: "Content prep" },
      { day: "Day 3 (2-3h)", desc: "Template built" },
      { day: "Day 4+ (30m)", desc: "Production mode", highlight: true }
    ],
    mistakesTitle: "Beginner mistakes",
    mistakes: [
      "Editing template directly",
      "Building highlight panels in CapCut (Use Canva)",
      "Forgetting to mute top-slot audio",
      "Skipping black stroke on captions",
      "Not writing down Scale/Position numbers"
    ]
  },
  ar: {
    headerTitle: "CapCut من الصفر ← قالب الريلز الخاص بك",
    title1: "صمّم",
    titleHighlight: "قالب الريلز الخاص بك.",
    subtitle: "خطة كاملة للمبتدئين (بدون أي خبرة سابقة في المونتاج). سنقوم ببناء \"قالب الخانة العلوية\" (Top Slot) — صندوق فارغ ثابت بحجم محدد في النصف العلوي تضع فيه أي شيء.",
    topSlotBadge: 'صيغة "الخانة العلوية"',
    keyShortcutTitle: "اختصار أساسي:",
    keyShortcutDesc: "يقوم بقص وتجزئة الفيديو عند مؤشر القراءة. هذا يمثل 90% من عملية المونتاج.",
    
    parts: {
      p0: {
        number: "0",
        title: "فهم الشاشة والواجهة",
        time: "20 دقيقة",
        cards: [
          { title: "1. المكتبة (Library - أعلى اليسار)", text: "المكان الذي تجلب منه الملفات والمؤثرات. ملفاتك المستوردة تجدها في Media → Yours." },
          { title: "2. المشغل (Player - أعلى اليمين)", text: "معاينة الفيديو الخاص بك. زر النسبة (Ratio) أسفل اليمين لتحديد مقاس الفيديو رأسياً أو أفقياً." },
          { title: "3. المفتش (Inspector - أقصى اليمين)", text: "يتغير حسب العنصر المحدد. يكون فارغاً حتى تضغط على عنصر في الخط الزمني." },
          { title: "4. الخط الزمني (Timeline - النصف السفلي)", text: "الفيديو الخاص بك مرتب زمنياً من اليسار لليمين، ومطبوخ في طبقات فوق بعضها." }
        ]
      },
      p1: {
        number: "1",
        title: "اليوم الأول: التعلم عبر عمل فيديو تجريبي",
        time: "ساعتان",
        note: "لا تبدأ القالب الآن! اصنع فيديو تجريبي أولاً لتتعلم الأساسيات.",
        drills: [
          { number: "1", title: "الاستيراد والقص (Import & Trim)", time: "20 دقيقة", items: ["سجل 30 ثانية لنفسك بالهاتف أو الكاميرا. عد حتى العشرين.", "CapCut ← Media ← Import ← اختر الملف.", "اسحبه من المكتبة إلى الخط الزمني أسفل.", "حرك مؤشر القراءة للثانية 10 واضغط ⌘B لقص الفيديو.", "حدد الجزء الثاني واضغط Delete لحذفه."] },
          { number: "2", title: "تغيير الحجم والتحريك (Resize & Move)", time: "20 دقيقة", items: ["حدد مقطعك في الخط الزمني.", "Inspector ← Video ← Basic ← Position & Size.", "قلل الحجم Scale إلى ~50%. وحرك المقطع في شاشة المعاينة.", "لاحظ خطوط المحاذاة الزرقاء التلقائية."] },
          { number: "3", title: "إضافة نص (Add Text)", time: "20 دقيقة", items: ["Library ← Text ← Default text ← اسحبه فوق مقطع الفيديو.", "اضغط مرتين واكتب النص الذي تريده.", "Inspector ← غير الخط والحجم واللون. مد أطراف النص في الخط الزمني."] },
          { number: "4", title: "التفريغ النصي التلقائي (Auto Captions)", time: "20 دقيقة", items: ["تحدث في المقطع التجريبي بصوت واضح.", "Library ← Text ← Auto captions ← Generate."] },
          { number: "5", title: "التصدير (Export)", time: "20 دقيقة", items: ["أعلى اليمين ← Export. حدد 1080p, 30fps, MP4.", "اضغط تصدير وتأكد من عمل الفيديو."] }
        ]
      },
      p2: {
        number: "2",
        title: "اليوم الثاني: تجهيز محتوى الخانة العلوية",
        time: "1–2 ساعة",
        methods: [
          { title: "أ. تسجيل شاشة تطبيق على الماك", text: "اضغط ⌘ Shift 5 ← اختر تسجيل جزء محدد ← حدد نافذة التطبيق بالكامل ثم اضغط تسجيل. يحفظ على سطح المكتب بصيغة .mov." },
          { title: "ب. تسجيل شاشة الهاتف", text: "آيفون: Control Center ← Screen Recording. أندرويد: لوحة الإعدادات السريعة ← Screen record. تسجيلات الهاتف تأتي رأسية ومناسبة مباشرة!" },
          { title: "ج. الصور المتحركة GIFs", text: "CapCut يدعم استيراد صور GIF مباشرة. إذا فشل استيرادها، حولها إلى MP4 أونلاين أولاً." },
          { title: "د. لوحات النصوص مع التظليل (Canva)", text: "صمم هذه اللوحات في Canva وليس CapCut! بمقاس 1080×900px، خلفية بيضاء، خط سيريف، مستطيل أصفر فاتح (#FFF3B0) خلف النص للتظليل، وشارات حمراء (#D62839). حملها بصيغة PNG.", highlight: true }
        ]
      },
      p3: {
        number: "3",
        title: "اليوم الثالث: بناء القالب الأساسي",
        time: "2–3 ساعات",
        steps: [
          { number: "1", title: "إعداد مساحة العمل", time: "5 دقائق", text: "مشروع جديد ← زر Ratio (9:16) ← الدقة 1080P ← معدل الإطارات 30fps." },
          { number: "2", title: "طبقة الخلفية البيضاء", time: "10 دقائق", text: "ابحث عن \"white\" في Library ← Media. اسحب خلفية بيضاء للطبقة Track 1 ومدها لـ 40 ثانية." },
          { number: "3", title: "مقطع الكاميرا في المنطقة السفلية", time: "25 دقيقة", text: "اسحب مقطعك للطبقة Track 2. اضبط Scale ~55%. حرك الحافة العلوية لمنتصف الشاشة. أضف قناع مستطيل بزوايا منحنية (Mask → Rectangle). سجل أرقام Scale و Position بالضبط." },
          { number: "4", title: "الخانة العلوية (Top Slot)", time: "30 دقيقة", text: "استورد عنصر مؤقت للطبقة Track 3. اضبط الحجم لملء أعلى 45%. أضف نفس القناع. سجل الأرقام.\n\nكيفية الاستبدال لاحقاً: اضغط كليك يمين على المقطع ← Replace وسيقوم CapCut باستبداله مع الحفاظ على الحجم والقناع!", highlight: true },
          { number: "5", title: "نص العنوان الرئيسي (Headline)", time: "30 دقيقة", text: "أضف نص للطبقة Track 4 على الفاصل بين المنطقتين. خط عريض. أنيميشن In ← Typewriter (ثانية واحدة). احفظ النمط كـ Preset." },
          { number: "6", title: "النصوص التلقائية (Captions)", time: "20 دقيقة", text: "Auto captions ← Generate. خط عريض، لون أبيض، مع إطار أسود (Black stroke 3px). قلل عدد الحروف في السطر لتظهر كلمات قصيرة ومؤثرة." },
          { number: "7", title: "حفظ المشروع كـ قالب", time: "10 دقائق", text: "اخرج للشاشة الرئيسية، اضغط كليك يمين على المشروع ← Duplicate وسمّه TEMPLATE — Split Explainer. لا تعدل على هذا القالب الأصلي أبداً!" }
        ]
      },
      p4: {
        number: "4",
        title: "خطوات العمل لكل فيديو جديد",
        time: "30–45 دقيقة لكل فيديو",
        workflow: [
          "كرر (Duplicate) مشروع القالب واعد تسميته",
          "جهز محتوى الخانة العلوية وسجل مقطع الكاميرا الخاص بك",
          "كليك يمين على مقطع الكاميرا ← Replace ← اختر الفيديو الجديد",
          "كليك يمين على الخانة العلوية ← Replace ← اختر المحتوى الجديد",
          "اعد كتابة العنوان الرئيسي",
          "احذف النص التلقائي القديم وعمل Generate لـ Auto Captions جديد",
          "قص الصمت والفراغات (باستخدام ⌘B)",
          "صدّر الفيديو بدقة 1080p / 30fps"
        ]
      },
      p5: {
        title: "التعامل مع أنواع المحتوى المختلفة",
        headers: ["نوع المحتوى العلوي", "انتبه لـ", "الحل"],
        rows: [
          ["تسجيل الهاتف", "عمودي جداً وسيفيض عن الخانة", "صغّر الحجم أكثر، أو استخدم أداة القص Crop"],
          ["تسجيل الماك", "عريض 16:9 ويترك فراغات بيضاء", "يظهر بشكل طبيعي ومقصود، أو قص الحواف"],
          ["صور GIF", "قد تصبح ضبابية عند تكبيرها", "ابقها بحجم صغير، لا تكبر عن 100%"],
          ["صور Canva PNG", "يجب أن تكون بمقاس 1080×900", "تنزل في الخانة بمقاس 100% بشكل مثالي"],
          ["أي فيديو", "صوته سيتداخل مع صوتك", "حدد المقطع ← Audio ← ارفع الصوت إلى 0 (Mute)"]
        ]
      }
    },
    timelineTitle: "الجدول الزمني التقديري",
    timeline: [
      { day: "اليوم 1 (ساعتان)", desc: "الاستيراد، القص والنصوص" },
      { day: "اليوم 2 (1-2 ساعة)", desc: "تجهيز المحتوى" },
      { day: "اليوم 3 (2-3 ساعات)", desc: "بناء وتجهيز القالب" },
      { day: "اليوم 4+ (30 دقيقة)", desc: "نمط الإنتاج السريع", highlight: true }
    ],
    mistakesTitle: "أخطاء المبتدئين الشائعة",
    mistakes: [
      "التعديل على ملف القالب الأصلي مباشرة",
      "تصميم لوحات التظليل داخل CapCut (استخدم Canva!)",
      "نسيان كتم صوت فيديو الخانة العلوية",
      "نسيان الإطار الأسود (Stroke) للنصوص التلقائية",
      "عدم تدوين أرقام الحجم والمكان (Scale & Position)"
    ]
  }
};

export default function CapcutBoard() {
  const { theme, toggleTheme } = useTheme("store-theme");
  const { locale, setLocale, dir } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);

  const c = CONTENT[locale] || CONTENT.en;

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-[#0a0a0b] text-white" : "bg-[#f8f9fa] text-[#111318]";
  const headerClass = isDark ? "bg-[#0a0a0b]/80 border-white/10" : "bg-[#f8f9fa]/80 border-black/10";
  const cardClass = isDark ? "bg-white/[0.02] border-white/[0.04]" : "bg-white shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-transparent";
  const mutedText = isDark ? "text-white/70" : "text-black/70";
  const subtleBorder = isDark ? "border-white/10" : "border-black/10";

  return (
    <div ref={containerRef} className={`min-h-screen font-sans pb-32 transition-colors duration-500 selection:bg-brand-500 selection:text-white ${bgClass}`} dir={dir}>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b transition-colors ${headerClass}`}>
         <div className="font-bold text-lg tracking-tight">{c.headerTitle}</div>
         <div className="flex items-center gap-3">
            <button 
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")} 
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-brand-500/10 text-brand-500 hover:bg-brand-500/20 transition-colors"
            >
               {locale === "ar" ? "EN" : "عربي"}
            </button>
            <button onClick={toggleTheme} className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
               {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
         </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 relative">
        
        {/* Left Column - Sticky Visual */}
        <div className="relative">
           <div className="sticky top-32 flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] border-[8px] overflow-hidden ${isDark ? 'border-[#1a1a1c] shadow-[0_20px_50px_rgba(255,255,255,0.03)]' : 'border-[#ffffff] shadow-[0_20px_60px_rgba(0,0,0,0.15)]'}`}
              >
                 <Image 
                    src="/images/capcut-mockup.png" 
                    alt="Split Explainer Mockup"
                    fill
                    className="object-cover"
                 />
              </motion.div>
              <div className="mt-8 text-center opacity-40 text-xs font-black uppercase tracking-[0.25em]">
                 {c.topSlotBadge}
              </div>
           </div>
        </div>

        {/* Right Column - The Content */}
        <div className="flex flex-col gap-16 lg:gap-24 mt-8 lg:mt-0 pb-20">
            
            <section>
               <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6 text-balance"
               >
                  {c.title1} <br/><span className="text-brand-500">{c.titleHighlight}</span>
               </motion.h1>
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-xl ${mutedText} leading-relaxed max-w-2xl font-medium mb-12`}
               >
                  {c.subtitle}
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`p-6 md:p-8 rounded-[2rem] border ${cardClass} font-mono text-[13px] md:text-sm leading-loose overflow-x-auto`}
               >
                  <pre className="m-0">
{`┌─────────────────────┐
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
└─────────────────────┘`}
                  </pre>
               </motion.div>
            </section>

            <section>
               <SectionHeader part={c.parts.p0.number} title={c.parts.p0.title} time={c.parts.p0.time} isDark={isDark} />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {c.parts.p0.cards.map((card, i) => (
                    <InfoCard key={i} title={card.title} text={card.text} cardClass={cardClass} />
                  ))}
               </div>
               <div className={`mt-6 p-5 rounded-xl border ${cardClass} font-medium`}>
                  <strong className="text-brand-500">{c.keyShortcutTitle}</strong> <kbd className={`px-2 py-1 rounded text-sm ${isDark ? 'bg-white/10' : 'bg-black/5 border border-black/10'}`}>⌘B</kbd> {c.keyShortcutDesc}
               </div>
            </section>

            <section>
               <SectionHeader part={c.parts.p1.number} title={c.parts.p1.title} time={c.parts.p1.time} isDark={isDark} />
               <div className="space-y-10">
                  <p className={`text-lg ${mutedText} font-medium -mt-4`}>{c.parts.p1.note}</p>
                  
                  {c.parts.p1.drills.map((drill, i) => (
                     <Drill key={i} number={drill.number} title={drill.title} time={drill.time} isDark={isDark}>
                        <ol className="list-decimal pl-5 rtl:pr-5 space-y-2">
                           {drill.items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                           ))}
                        </ol>
                     </Drill>
                  ))}
               </div>
            </section>

            <section>
               <SectionHeader part={c.parts.p2.number} title={c.parts.p2.title} time={c.parts.p2.time} isDark={isDark} />
               <div className="grid gap-6">
                  {c.parts.p2.methods.map((method, i) => (
                     <MethodCard key={i} title={method.title} cardClass={cardClass} highlight={method.highlight}>
                        {method.text}
                     </MethodCard>
                  ))}
               </div>
            </section>

            <section>
               <SectionHeader part={c.parts.p3.number} title={c.parts.p3.title} time={c.parts.p3.time} isDark={isDark} />
               <div className="space-y-12 mt-8">
                  {c.parts.p3.steps.map((step, i) => (
                     <Step key={i} number={step.number} title={step.title} time={step.time} highlight={step.highlight} subtleBorder={subtleBorder} isDark={isDark}>
                        {step.text}
                     </Step>
                  ))}
               </div>
            </section>

            <section>
               <SectionHeader part={c.parts.p4.number} title={c.parts.p4.title} time={c.parts.p4.time} isDark={isDark} />
               <div className={`p-8 md:p-12 rounded-[2rem] border ${cardClass} text-lg`}>
                  <ol className="list-decimal pl-6 rtl:pr-6 space-y-4 font-medium">
                     {c.parts.p4.workflow.map((item, i) => (
                        <li key={i} className={i === c.parts.p4.workflow.length - 1 ? "text-brand-500 font-bold" : ""}>{item}</li>
                     ))}
                  </ol>
               </div>
            </section>

            <section>
               <SectionHeader part="5" title={c.parts.p5.title} isDark={isDark} />
               <div className="overflow-x-auto">
                  <table className={`w-full text-start border-collapse ${isDark ? 'text-white/80' : 'text-black/80'} text-[1.05rem]`}>
                     <thead>
                        <tr className={`border-b ${subtleBorder}`}>
                           {c.parts.p5.headers.map((h, i) => (
                              <th key={i} className={`p-4 ${i === 0 ? 'pl-0 rtl:pr-0' : i === c.parts.p5.headers.length - 1 ? 'pr-0 rtl:pl-0' : ''} font-bold`}>{h}</th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className={`divide-y ${subtleBorder}`}>
                        {c.parts.p5.rows.map((row, i) => (
                           <tr key={i}>
                              <td className="p-4 pl-0 rtl:pr-0 font-bold">{row[0]}</td>
                              <td className="p-4">{row[1]}</td>
                              <td className="p-4 pr-0 rtl:pl-0">{row[2]}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
               <div>
                  <h3 className="text-2xl font-black mb-6">{c.timelineTitle}</h3>
                  <div className={`p-6 rounded-3xl border ${cardClass} font-medium`}>
                     <ul className="space-y-4">
                        {c.timeline.map((item, i) => (
                           <li key={i} className={`flex justify-between border-b ${subtleBorder} pb-3 ${item.highlight ? 'font-bold text-brand-500 border-none pb-0 pt-1' : ''}`}>
                              <span>{item.day}</span> <span className={item.highlight ? "" : mutedText}>{item.desc}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div>
                  <h3 className="text-2xl font-black mb-6 text-red-500">{c.mistakesTitle}</h3>
                  <ul className={`space-y-3 font-medium ${mutedText} text-[1.05rem] bg-red-500/5 p-6 rounded-3xl border border-red-500/10`}>
                     {c.mistakes.map((mistake, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <span className="text-red-500 font-bold">✗</span> {mistake}
                        </li>
                     ))}
                  </ul>
               </div>
            </section>

        </div>
      </main>
    </div>
  );
}

// Helpers

function SectionHeader({ part, title, time, isDark }: { part: string, title: string, time?: string, isDark: boolean }) {
   return (
      <div className={`border-b pb-4 mt-8 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
         <div className="text-sm font-bold tracking-[0.2em] text-brand-500 uppercase mb-2">Part {part} {time && `• ${time}`}</div>
         <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      </div>
   )
}

function InfoCard({ title, text, cardClass }: { title: string, text: string, cardClass: string }) {
   return (
      <div className={`p-6 rounded-[1.5rem] border ${cardClass}`}>
         <h4 className="font-bold text-lg mb-2">{title}</h4>
         <p className="opacity-70 text-sm leading-relaxed font-medium">{text}</p>
      </div>
   )
}

function Drill({ number, title, time, isDark, children }: { number: string, title: string, time: string, isDark: boolean, children: React.ReactNode }) {
   return (
      <div>
         <div className="flex items-center gap-4 mb-4">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isDark ? 'bg-white/10' : 'bg-black/5 border border-black/10'}`}>{number}</span>
            <h4 className="font-bold text-2xl">{title} <span className="opacity-40 text-sm font-semibold tracking-wider ml-2 rtl:mr-2 uppercase">{time}</span></h4>
         </div>
         <div className="pl-12 rtl:pr-12 rtl:pl-0 opacity-80 text-[1.05rem] leading-relaxed font-medium">
            {children}
         </div>
      </div>
   )
}

function MethodCard({ title, children, cardClass, highlight }: { title: string, children: React.ReactNode, cardClass: string, highlight?: boolean }) {
   return (
      <div className={`p-6 md:p-8 rounded-[1.5rem] border ${cardClass} ${highlight ? 'ring-2 ring-brand-500/50 bg-brand-500/5' : ''}`}>
         <h4 className="font-bold text-xl mb-3">{title}</h4>
         <p className="opacity-80 leading-relaxed font-medium">{children}</p>
      </div>
   )
}

function Step({ number, title, time, subtleBorder, isDark, highlight, children }: { number: string, title: string, time: string, subtleBorder: string, isDark: boolean, highlight?: boolean, children: React.ReactNode }) {
   return (
      <div className={`relative pl-8 rtl:pr-8 rtl:pl-0 md:pl-12 md:rtl:pr-12 md:rtl:pl-0 border-l-2 rtl:border-l-0 rtl:border-r-2 ${subtleBorder}`}>
         <div className={`absolute left-[-17px] rtl:right-[-17px] rtl:left-auto top-0 w-8 h-8 rounded-full border-[3px] flex items-center justify-center font-bold text-sm ${isDark ? 'bg-[#0a0a0b] border-brand-500 text-brand-500' : 'bg-white border-brand-500 text-brand-500'}`}>
            {number}
         </div>
         <h4 className="font-bold text-2xl mb-4">{title} <span className="opacity-40 text-sm font-semibold tracking-wider ml-2 rtl:mr-2 uppercase">{time}</span></h4>
         <div className={`opacity-80 text-[1.05rem] leading-relaxed font-medium ${highlight ? 'text-brand-500 opacity-100' : ''}`}>
            {children}
         </div>
      </div>
   )
}
