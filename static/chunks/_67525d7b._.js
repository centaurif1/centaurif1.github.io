(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_67525d7b._.js", {

"[project]/styles/navbar.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "navbar-module__bk5_hG__active",
  "activeIndicator": "navbar-module__bk5_hG__activeIndicator",
  "container": "navbar-module__bk5_hG__container",
  "desktopNav": "navbar-module__bk5_hG__desktopNav",
  "logo": "navbar-module__bk5_hG__logo",
  "logoAccent": "navbar-module__bk5_hG__logoAccent",
  "logoText": "navbar-module__bk5_hG__logoText",
  "mobileMenuBtn": "navbar-module__bk5_hG__mobileMenuBtn",
  "mobileNav": "navbar-module__bk5_hG__mobileNav",
  "mobileNavItem": "navbar-module__bk5_hG__mobileNavItem",
  "mobileNavLink": "navbar-module__bk5_hG__mobileNavLink",
  "mobileNavList": "navbar-module__bk5_hG__mobileNavList",
  "navItem": "navbar-module__bk5_hG__navItem",
  "navLink": "navbar-module__bk5_hG__navLink",
  "navList": "navbar-module__bk5_hG__navList",
  "navbar": "navbar-module__bk5_hG__navbar",
  "open": "navbar-module__bk5_hG__open",
  "scrolled": "navbar-module__bk5_hG__scrolled",
  "socialLinks": "navbar-module__bk5_hG__socialLinks",
});
}}),
"[project]/components/navbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)"); // Import the Image component from next/image
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const offset = window.scrollY;
                    if (offset > 50) {
                        setScrolled(true);
                    } else {
                        setScrolled(false);
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            // Close mobile menu when route changes
            setIsOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
        // Prevent body scroll when menu is open
        document.body.style.overflow = !isOpen ? "hidden" : "auto";
    };
    const navbarClasses = `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar} ${scrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled : ""}`;
    const navLinks = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/about",
            label: "About"
        },
        {
            href: "/team",
            label: "Team"
        },
        {
            href: "/blog",
            label: "Blog"
        },
        {
            href: "/contact",
            label: "Contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: navbarClasses,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logonavbar.svg",
                        alt: "Centauri Racing Logo",
                        width: 336,
                        height: 90
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuBtn} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`,
                    onClick: toggleMenu,
                    "aria-label": "Toggle menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/components/navbar.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/components/navbar.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/components/navbar.js",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopNav,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navList,
                        children: navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink} ${pathname === link.href ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                                    children: [
                                        link.label,
                                        pathname === link.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeIndicator,
                                            layoutId: "activeIndicator",
                                            transition: {
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.js",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/navbar.js",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/components/navbar.js",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNav,
                        initial: {
                            opacity: 0,
                            x: "100%"
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: "100%"
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavList,
                                children: navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            x: 50
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.3,
                                            delay: index * 0.1
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavItem,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLink} ${pathname === link.href ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.js",
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/components/navbar.js",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.js",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLinks,
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.3,
                                    delay: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/centauri_racing_india/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fab fa-instagram"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.js",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.js",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "YouTube",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fab fa-youtube"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.js",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.js",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "LinkedIn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fab fa-linkedin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.js",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.js",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navbar.js",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.js",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbar.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navbar.js",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navbar.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Navbar, "ZFHi9PnkuBQ31AggkSyRc0SncyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/custom-cursor.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "clicked": "custom-cursor-module__vumlCW__clicked",
  "cursor": "custom-cursor-module__vumlCW__cursor",
  "cursorDot": "custom-cursor-module__vumlCW__cursorDot",
  "hidden": "custom-cursor-module__vumlCW__hidden",
  "linkHovered": "custom-cursor-module__vumlCW__linkHovered",
});
}}),
"[project]/components/custom-cursor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomCursor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/custom-cursor.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const [cursorPosition, setCursorPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    }) // For the big circle (animated)
    ;
    const [immediatePosition, setImmediatePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    }) // For the little dot (exact)
    ;
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [clicked, setClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkHovered, setLinkHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ref to store the target position for the animation (big circle)
    const targetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Lerp function for smooth interpolation
    const lerp = (start, end, factor)=>start + (end - start) * factor;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Animation loop to update the big circle position gradually
            let animationFrameId;
            const updateCursor = {
                "CustomCursor.useEffect.updateCursor": ()=>{
                    setCursorPosition({
                        "CustomCursor.useEffect.updateCursor": (prev)=>{
                            const newX = lerp(prev.x, targetPosition.current.x, 0.1);
                            const newY = lerp(prev.y, targetPosition.current.y, 0.1);
                            return {
                                x: newX,
                                y: newY
                            };
                        }
                    }["CustomCursor.useEffect.updateCursor"]);
                    animationFrameId = requestAnimationFrame(updateCursor);
                }
            }["CustomCursor.useEffect.updateCursor"];
            updateCursor();
            return ({
                "CustomCursor.useEffect": ()=>cancelAnimationFrame(animationFrameId)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const onMouseMove = {
                "CustomCursor.useEffect.onMouseMove": (e)=>{
                    const { clientX, clientY } = e;
                    // Update target for the animation (big circle)
                    targetPosition.current = {
                        x: clientX,
                        y: clientY
                    };
                    // Update immediate position for the little dot
                    setImmediatePosition({
                        x: clientX,
                        y: clientY
                    });
                }
            }["CustomCursor.useEffect.onMouseMove"];
            const onMouseEnter = {
                "CustomCursor.useEffect.onMouseEnter": ()=>setHidden(false)
            }["CustomCursor.useEffect.onMouseEnter"];
            const onMouseLeave = {
                "CustomCursor.useEffect.onMouseLeave": ()=>setHidden(true)
            }["CustomCursor.useEffect.onMouseLeave"];
            const onMouseDown = {
                "CustomCursor.useEffect.onMouseDown": ()=>setClicked(true)
            }["CustomCursor.useEffect.onMouseDown"];
            const onMouseUp = {
                "CustomCursor.useEffect.onMouseUp": ()=>setClicked(false)
            }["CustomCursor.useEffect.onMouseUp"];
            const addEventListeners = {
                "CustomCursor.useEffect.addEventListeners": ()=>{
                    document.addEventListener("mousemove", onMouseMove);
                    document.addEventListener("mouseenter", onMouseEnter);
                    document.addEventListener("mouseleave", onMouseLeave);
                    document.addEventListener("mousedown", onMouseDown);
                    document.addEventListener("mouseup", onMouseUp);
                }
            }["CustomCursor.useEffect.addEventListeners"];
            const removeEventListeners = {
                "CustomCursor.useEffect.removeEventListeners": ()=>{
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseenter", onMouseEnter);
                    document.removeEventListener("mouseleave", onMouseLeave);
                    document.removeEventListener("mousedown", onMouseDown);
                    document.removeEventListener("mouseup", onMouseUp);
                }
            }["CustomCursor.useEffect.removeEventListeners"];
            addEventListeners();
            // Handle link hover events
            const handleLinkHoverEvents = {
                "CustomCursor.useEffect.handleLinkHoverEvents": ()=>{
                    document.querySelectorAll("a, button").forEach({
                        "CustomCursor.useEffect.handleLinkHoverEvents": (el)=>{
                            el.addEventListener("mouseenter", {
                                "CustomCursor.useEffect.handleLinkHoverEvents": ()=>setLinkHovered(true)
                            }["CustomCursor.useEffect.handleLinkHoverEvents"]);
                            el.addEventListener("mouseleave", {
                                "CustomCursor.useEffect.handleLinkHoverEvents": ()=>setLinkHovered(false)
                            }["CustomCursor.useEffect.handleLinkHoverEvents"]);
                        }
                    }["CustomCursor.useEffect.handleLinkHoverEvents"]);
                }
            }["CustomCursor.useEffect.handleLinkHoverEvents"];
            handleLinkHoverEvents();
            return ({
                "CustomCursor.useEffect": ()=>{
                    removeEventListeners();
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    // Big circle classes (animated)
    const cursorClasses = `
    ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursor} 
    ${hidden ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden : ""} 
    ${clicked ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clicked : ""} 
    ${linkHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkHovered : ""}
  `;
    // Little dot classes (instant)
    const cursorDotClasses = `
    ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursorDot} 
    ${hidden ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden : ""} 
    ${clicked ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clicked : ""} 
    ${linkHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$custom$2d$cursor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkHovered : ""}
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cursorClasses,
                style: {
                    left: `${immediatePosition.x}px`,
                    top: `${immediatePosition.y}px`
                }
            }, void 0, false, {
                fileName: "[project]/components/custom-cursor.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cursorDotClasses,
                style: {
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`
                }
            }, void 0, false, {
                fileName: "[project]/components/custom-cursor.js",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "Rwxsf0APN5lEc32diji1QP6zjf4=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/styles/stars-background.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "starsCanvas": "stars-background-module__HMdJiW__starsCanvas",
});
}}),
"[project]/components/stars-background.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StarsBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$stars$2d$background$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/stars-background.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function StarsBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarsBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let animationFrameId;
            let stars = [];
            let comets = [];
            // Set canvas dimensions
            const setCanvasDimensions = {
                "StarsBackground.useEffect.setCanvasDimensions": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    initStars() // Regenerate stars on resize
                    ;
                }
            }["StarsBackground.useEffect.setCanvasDimensions"];
            // Initialize stars
            const initStars = {
                "StarsBackground.useEffect.initStars": ()=>{
                    stars = [];
                    const starCount = Math.floor(canvas.width * canvas.height / 3000);
                    for(let i = 0; i < starCount; i++){
                        stars.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            radius: Math.random() * 1.5,
                            opacity: Math.random(),
                            speed: Math.random() * 0.05,
                            hue: Math.random() > 0.5 ? 210 : 220
                        });
                    }
                }
            }["StarsBackground.useEffect.initStars"];
            // Function to spawn a comet
            const spawnComet = {
                "StarsBackground.useEffect.spawnComet": ()=>{
                    // Start at a random x along the top (slightly off-screen)
                    const startX = Math.random() * canvas.width;
                    const startY = -20;
                    // Comet moves at a diagonal angle (45°) with a random speed between 6 and 10
                    const speed = 6 + Math.random() * 4;
                    const angle = Math.PI / 4 // 45 degrees
                    ;
                    const dx = Math.cos(angle) * speed;
                    const dy = Math.sin(angle) * speed;
                    comets.push({
                        x: startX,
                        y: startY,
                        dx,
                        dy,
                        length: 80,
                        opacity: 1
                    });
                }
            }["StarsBackground.useEffect.spawnComet"];
            // Animation loop
            const animate = {
                "StarsBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Draw and update stars
                    stars.forEach({
                        "StarsBackground.useEffect.animate": (star)=>{
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                            ctx.fillStyle = `hsla(${star.hue}, 80%, 70%, ${star.opacity})`;
                            ctx.fill();
                            // Twinkle effect
                            star.opacity += Math.random() * 0.01 - 0.005;
                            star.opacity = Math.max(0.1, Math.min(1, star.opacity));
                            // Subtle upward movement
                            star.y -= star.speed;
                            if (star.y < -10) {
                                star.y = canvas.height + 10;
                                star.x = Math.random() * canvas.width;
                            }
                        }
                    }["StarsBackground.useEffect.animate"]);
                    // Randomly spawn a comet (low probability per frame)
                    if (Math.random() < 0.005) {
                        spawnComet();
                    }
                    // Draw and update comets
                    comets.forEach({
                        "StarsBackground.useEffect.animate": (comet, index)=>{
                            // Update comet position
                            comet.x += comet.dx;
                            comet.y += comet.dy;
                            // Calculate tail end based on comet's direction and length
                            const tailX = comet.x - comet.dx * comet.length / Math.hypot(comet.dx, comet.dy);
                            const tailY = comet.y - comet.dy * comet.length / Math.hypot(comet.dx, comet.dy);
                            // Create a gradient for the comet's tail
                            const grad = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
                            grad.addColorStop(0, `hsla(192, 92.10%, 55.10%, ${comet.opacity})`);
                            grad.addColorStop(1, `hsla(192, 92.10%, 55.10%, 0)`);
                            ctx.beginPath();
                            ctx.moveTo(comet.x, comet.y);
                            ctx.lineTo(tailX, tailY);
                            ctx.strokeStyle = grad;
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            // Remove comet if it moves off screen
                            if (comet.x > canvas.width + 50 || comet.y > canvas.height + 50) {
                                comets.splice(index, 1);
                            }
                        }
                    }["StarsBackground.useEffect.animate"]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["StarsBackground.useEffect.animate"];
            // Set up canvas and start animation
            setCanvasDimensions();
            window.addEventListener("resize", setCanvasDimensions);
            animate();
            // Clean up on unmount
            return ({
                "StarsBackground.useEffect": ()=>{
                    window.removeEventListener("resize", setCanvasDimensions);
                    cancelAnimationFrame(animationFrameId);
                }
            })["StarsBackground.useEffect"];
        }
    }["StarsBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$stars$2d$background$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].starsCanvas
    }, void 0, false, {
        fileName: "[project]/components/stars-background.js",
        lineNumber: 130,
        columnNumber: 10
    }, this);
}
_s(StarsBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = StarsBackground;
var _c;
__turbopack_context__.k.register(_c, "StarsBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_67525d7b._.js.map