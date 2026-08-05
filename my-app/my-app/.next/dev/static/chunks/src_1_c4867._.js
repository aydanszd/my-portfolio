(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Layout/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const links = [
    {
        href: "#top",
        label: "Home"
    },
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#contact",
        label: "Contacts"
    }
];
function Nav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 8)
            }["Nav.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `sticky top-0 z-50 border-b transition-colors ${scrolled ? "border-border bg-bg/90 backdrop-blur" : "border-transparent bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "text-[40px] font-semibold tracking-tight text-text",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].firstName,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Nav.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Nav.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden  items-center gap-8  text-text-muted md:flex text-2xl",
                        children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                className: "transition-colors hover:text-text",
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/src/components/Layout/Nav.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Nav.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: "hidden rounded-full bg-accent px-5 py-2.5 text-2xl font-medium text-[#1a0b06] transition-transform hover:-translate-y-0.5 md:inline-block",
                        children: "Get in touch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Nav.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen((v)=>!v),
                        className: "flex flex-col gap-1.5 md:hidden",
                        "aria-label": "Menyu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Nav.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-text transition-opacity ${open ? "opacity-0" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Nav.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Layout/Nav.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Layout/Nav.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Nav.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-1 border-t border-border bg-bg px-6 py-4 text-sm md:hidden",
                children: [
                    links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: l.href,
                            onClick: ()=>setOpen(false),
                            className: "rounded-md px-2 py-2.5 text-text-muted hover:bg-surface hover:text-text",
                            children: l.label
                        }, l.href, false, {
                            fileName: "[project]/src/components/Layout/Nav.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        onClick: ()=>setOpen(false),
                        className: "mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-[#1a0b06]",
                        children: "Get in touch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Layout/Nav.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Layout/Nav.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Layout/Nav.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Nav, "jPnA7EYNjCLn3fxFn1srHOcQMBA=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/const/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────
// Bütün şəxsi məlumatları bu fayldan idarə et.
// Aşağıdakı sahələri öz məlumatlarınla əvəz et.
// ─────────────────────────────────────────────────────────
__turbopack_context__.s([
    "experience",
    ()=>experience,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const profile = {
    name: "Aydan Abbaszadə",
    firstName: "Aydan",
    role: "Software Developer",
    status: "Open for new projects",
    location: "Bakı, Azərbaycan",
    tagline: "Hi there! I'm a passionate Front-end Developer working with React and Next.js. I love building fast, functional, and user-focused web products. I approach problems creatively and enjoy working closely with teams to bring projects to successful completion.",
    about: "Working with code is more than a technical skill for me — it's a craft of shaping thought into form. In every project, I strive to prioritize simplicity, clarity, and a seamless user experience. Attention to detail, writing clean and readable code, and a user-centered mindset form the foundation of how I work.",
    email: "aydanabbaszade373@gmail.com",
    phone: "+994 55 843 18 60",
    github: "https://github.com/username",
    linkedin: "https://www.linkedin.com/in/username",
    cvUrl: "#"
};
const stats = [
    {
        value: "15",
        suffix: "+",
        label: "Completed projects"
    },
    {
        value: "9",
        suffix: "",
        label: "Technologies learned"
    },
    {
        value: "2",
        suffix: "+",
        label: "Years of experience"
    }
];
const services = [
    {
        title: "Website Development",
        description: "Fast, responsive, and SEO-friendly websites crafted with care.",
        icon: "code"
    },
    {
        title: "App Development",
        description: "Modern, interactive application interfaces built with React.",
        icon: "app"
    },
    {
        title: "Website Hosting",
        description: "Seamless deployment, domain setup, and performance monitoring.",
        icon: "server"
    }
];
const skills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Git",
    "Github"
];
const projects = [
    {
        name: "Booking.com Clone",
        slug: "01",
        description: "A full-stack booking platform with secure authentication, rate limiting, and real-time logging.",
        stack: [
            "Next.js",
            "Express.js",
            "MongoDB",
            "TypeScript",
            "Tailwind"
        ],
        link: "https://booking-app-blush-alpha.vercel.app/en",
        repo: "https://github.com/aydanszd/Booking.com",
        accent: "#ff6b4a",
        image: "/project-01.png"
    },
    {
        name: "Mavon Beauty",
        slug: "02",
        description: "An elegant e-commerce experience for a beauty brand, built for speed and smooth browsing.",
        stack: [
            "Next.js",
            "Express.js",
            "MongoDB",
            "TypeScript",
            "Tailwind"
        ],
        link: "https://mavonbeauty.vercel.app/az",
        repo: "https://github.com/aydanszd/mavonbeauty.git",
        accent: "#6ea8ff",
        image: "/project-02.png"
    },
    {
        name: "Belly Coffee",
        slug: "07",
        description: "A warm, content-driven coffee shop website powered by a headless CMS.",
        stack: [
            "React",
            "Strapi",
            "Tailwind",
            "TanStack Query",
            "TypeScript"
        ],
        link: "https://belly-coffee.vercel.app/",
        repo: "https://github.com/aydanszd/BellyCoffee",
        accent: "#e0a458",
        image: "/project-03.png"
    },
    {
        name: "MedBooking",
        slug: "03",
        description: "A hospital appointment platform designed from Figma to a fully responsive, user-friendly interface. (Demo access code: 1100)",
        stack: [
            "React",
            "Redux",
            "Tailwind",
            "Figma"
        ],
        link: "https://demo.medbooking.az/",
        repo: "https://gitlab.com/NuraneIsali/mit.group.git",
        accent: "#7fe0b0",
        image: "/project-04.png"
    },
    {
        name: "Bizera",
        slug: "04",
        description: "A clean, modern corporate website built with pixel-perfect precision.",
        stack: [
            "React",
            "Tailwind",
            "TypeScript"
        ],
        link: "https://www.bizera.co/",
        repo: "https://github.com/infobizera-cmd/Bizera.git",
        accent: "#c084fc",
        image: "/project-05.png"
    },
    {
        name: "Dr. Beyrek",
        slug: "05",
        description: "A responsive medical landing page focused on clarity and accessibility.",
        stack: [
            "HTML",
            "CSS"
        ],
        link: "https://medixal-template.vercel.app/index.html",
        repo: "https://github.com/aydanszd/dr.Beyrek.A.git",
        accent: "#ffb86b",
        image: "/project-06.png"
    },
    {
        name: "Bina.az",
        slug: "06",
        description: "A real estate listings platform with fast data fetching and a smooth browsing experience.",
        stack: [
            "Next.js",
            "Tailwind",
            "TanStack Query",
            "Prisma"
        ],
        link: "https://bina-az-1osg.vercel.app/announcement",
        repo: "https://github.com/aydanszd/bina.az.git",
        accent: "#4ade80",
        image: "/project-07.png"
    },
    {
        name: "Minimog",
        slug: "08",
        description: "A minimalist e-commerce template built with a strong focus on performance.",
        stack: [
            "Next.js",
            "Prisma",
            "TypeScript",
            "Tailwind"
        ],
        link: "https://minimog-gules.vercel.app/home",
        repo: "https://github.com/aydanszd/minimog.git",
        accent: "#f472b6",
        image: "/project-08.png"
    },
    {
        name: "Evimfix",
        slug: "09",
        description: "A property maintenance platform with a public site and admin dashboard, built for smooth data handling.",
        stack: [
            "React",
            "Next.js",
            "Tailwind",
            "TanStack Query",
            "TypeScript"
        ],
        link: "https://evimfix.az/",
        repo: "https://github.com/elxanxanlarov/evimfix-front",
        accent: "#38bdf8",
        image: "/project-09.png"
    }
];
const experience = [
    {
        period: "06.2026 — 07.2026",
        title: "Frontend Developer",
        company: "MIT Career Center",
        points: [
            "Built a CRM system for a hospital with a focus on user-friendly design.",
            "Delivered pixel-perfect interfaces tailored to real clinical workflows."
        ]
    },
    {
        period: "03.2026 — 05.2026",
        title: "Frontend Developer",
        company: "Evimfiz",
        points: [
            "Developed an admin panel with React and Next.js, ensuring pixel-perfect accuracy.",
            "Handled hosting, SEO optimization, and integration with REST APIs."
        ]
    },
    {
        period: "01.2026 — 03.2026",
        title: "Frontend Developer",
        company: "Bizera",
        points: [
            "Translated Figma designs into pixel-perfect, fully responsive interfaces.",
            "Built interactive UI components with a strong focus on usability and detail."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1_c4867._.js.map