let products = [];

const categories = ["Todos", "Hombre", "Mujer", "Unisex", "Fresco", "Noche", "Día", "Verano", "Invierno"];

        const navItems = [
            { id: "Inicio", icon: "home", label: "Inicio" },
            { id: "Descubrir", icon: "compass", label: "Descubrir" },
            { id: "Carrito", icon: "bag", label: "Bolsa" },
            { id: "Wishlist", icon: "shopping-bag-heart", label: "Tu lista" }
        ];

        const brands = [
            { name: "Afnan", hasSubmenu: false },
            { name: "Al Haramain", hasSubmenu: false },
            { name: "Armaf", hasSubmenu: true, submenu: ["Odyssey", "Club de Nuit", "Craze", "Le Parfait", "Milestone", "Sillage", "Tres Nuit"] },
            { name: "Armani", hasSubmenu: false },
            { name: "Bvlgari", hasSubmenu: false },
            { name: "Burberry", hasSubmenu: false },
            { name: "Calvin Klein", hasSubmenu: false },
            { name: "Carolina Herrera", hasSubmenu: false },
            { name: "Chanel", hasSubmenu: false },
            { name: "Dior", hasSubmenu: false },
            { name: "Givenchy", hasSubmenu: false },
            { name: "Jean Paul Gaultier", hasSubmenu: false },
            { name: "Lattafa", hasSubmenu: false },
            { name: "Louis Vuitton", hasSubmenu: false },
            { name: "Maison Alhambra", hasSubmenu: false },
            { name: "Paco Rabanne", hasSubmenu: false },
            { name: "Perfumes de Marly", hasSubmenu: false },
            { name: "Prada", hasSubmenu: false },
            { name: "Rasasi", hasSubmenu: false },
            { name: "Swiss Arabian", hasSubmenu: false },
            { name: "Tom Ford", hasSubmenu: false },
            { name: "Valentino", hasSubmenu: false },
            { name: "Xerjoff", hasSubmenu: false },
            { name: "Yves Saint Laurent", hasSubmenu: false }
        ];

        brands.sort((a, b) => a.name.localeCompare(b.name));

        const kitSuggestions = [
            {
                name: "Notas Frescas",
                description: "Fragancias con notas cítricas y acuáticas",
                filter: (product) => product.notes.some(note => 
                    ["Limón", "Naranja", "Bergamota", "Pomelo", "Mandarina", "Menta", "Notas marinas", "Acuático"].includes(note)
                )
            },
            {
                name: "Aromas Dulces",
                description: "Fragancias con notas gourmand y dulces",
                filter: (product) => product.notes.some(note => 
                    ["Vainilla", "Caramelo", "Chocolate", "Toffee", "Malvavisco", "Azúcar", "Miel", "Coco"].includes(note)
                )
            },
            {
                name: "Amaderados",
                description: "Fragancias con notas de maderas",
                filter: (product) => product.notes.some(note => 
                    ["Cedro", "Sándalo", "Vetiver", "Maderas", "Oud", "Pachulí"].includes(note)
                )
            },
            {
                name: "Para el Día",
                description: "Fragancias ideales para uso diurno",
                filter: (product) => product.usage.toLowerCase().includes("día") || 
                    product.season.toLowerCase().includes("verano") || 
                    product.season.toLowerCase().includes("primavera")
            },
            {
                name: "Para la Noche",
                description: "Fragancias para ocasiones nocturnas",
                filter: (product) => product.usage.toLowerCase().includes("noche") || 
                    product.season.toLowerCase().includes("invierno") || 
                    product.season.toLowerCase().includes("otoño")
            },
            {
                name: "Para el Diario",
                description: "Fragancias versátiles para uso diario",
                filter: (product) => product.usage.toLowerCase().includes("oficina") || 
                    product.usage.toLowerCase().includes("versátil") ||
                    product.season.toLowerCase().includes("todo el año")
            },
            {
                name: "Con Lavanda",
                description: "Fragancias que contienen lavanda",
                filter: (product) => product.notes.some(note => note.includes("Lavanda"))
            },
            {
                name: "Con Oud",
                description: "Fragancias con notas de oud",
                filter: (product) => product.notes.some(note => note.includes("Oud"))
            },
            {
                name: "Cítrico",
                description: "Fragancias con notas cítricas destacadas",
                filter: (product) => product.notes.some(note => 
                    ["Limón", "Naranja", "Bergamota", "Pomelo", "Mandarina", "Jengibre"].includes(note)
                )
            },
            {
                name: "Con Iris",
                description: "Fragancias con notas de iris",
                filter: (product) => product.notes.some(note => note.includes("Iris"))
            },
            {
                name: "Especiadas",
                description: "Fragancias con notas especiadas",
                filter: (product) => product.notes.some(note => 
                    ["Azafrán", "Cardamomo", "Pimienta", "Jengibre", "Especias"].includes(note)
                )
            },
            {
                name: "Florales",
                description: "Fragancias con notas florales",
                filter: (product) => product.notes.some(note => 
                    ["Jazmín", "Azahar", "Hojas de violeta", "Rosa", "Floral"].includes(note)
                )
            },
            {
                name: "Gourmand",
                description: "Fragancias con notas comestibles",
                filter: (product) => product.profile.toLowerCase().includes("gourmand") ||
                    product.notes.some(note => 
                        ["Vainilla", "Caramelo", "Chocolate", "Toffee", "Café", "Leche"].includes(note)
                    )
            },
            {
                name: "Acuáticos",
                description: "Fragancias frescas y marinas",
                filter: (product) => product.profile.toLowerCase().includes("acuático") ||
                    product.notes.some(note => 
                        ["Notas marinas", "Acuático", "Ozónicas"].includes(note)
                    )
            }
        ];

        const discoverSections = [
            {
                title: "Tendencias",
                subtitle: "Los productos más valorados por nuestros clientes",
                filter: (product) => product.rating >= 4.5,
                id: "trending",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                </svg>`
            },
            {
            title: "Novedades",
            subtitle: "Los últimos lanzamientos en nuestra tienda",
            filter: (product) => product.id >= 24,  // Asumiendo que los nuevos tienen id >= 24
            id: "new",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
            </svg>`
        },
            {
                title: "Recomendados para el Verano",
                subtitle: "Fragancias ideales para los días cálidos",
                filter: (product) => product.season.toLowerCase().includes("verano"),
                id: "summer",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-temperature-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" /><path d="M4 9h4" /><path d="M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124" /><path d="M13 3v1" /><path d="M21 12h1" /><path d="M13 20v1" /><path d="M19.4 5.6l-.7 .7" /><path d="M18.7 17.7l.7 .7" /></svg>`
            },
            {
                title: "Aromas con Estilo",
                subtitle: "Fragancias con carácter y personalidad",
                filter: (product) => ["BA HA MAS", "Dubai Chocolat", "Marshmallow", "Spectra", "Mega Man", "Uomo Born in Roma Intense", "Born in Roma Coral Fantasy", "Gentleman Eau de Parfum"].includes(product.name),
                id: "stylish",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moneybag-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" /><path d="M11.5 21h-3.5a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.376 -4.833" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.24 2.24 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.24 2.24 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" /></svg>`
            },
            {
                title: "Edición Especial",
                subtitle: "Productos exclusivos y ediciones limitadas",
                filter: (product) => product.name.toLowerCase().includes("edition") || product.name === "Mandarin Sky Elixir" ||
                product.name === "Gentleman Reserve Privée EDP" ||
                product.name === "Born in Roma Coral Fantasy",  
                id: "special",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sparkles-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 7a9.3 9.3 0 0 0 1.516 -.546c.911 -.438 1.494 -1.015 1.937 -1.932c.207 -.428 .382 -.928 .547 -1.522c.165 .595 .34 1.095 .547 1.521c.443 .918 1.026 1.495 1.937 1.933c.426 .205 .925 .38 1.516 .546a9.3 9.3 0 0 0 -1.516 .547c-.911 .438 -1.494 1.015 -1.937 1.932a9 9 0 0 0 -.547 1.521c-.165 -.594 -.34 -1.095 -.547 -1.521c-.443 -.918 -1.026 -1.494 -1.937 -1.932a9 9 0 0 0 -1.516 -.547" /><path d="M3 14a21 21 0 0 0 1.652 -.532c2.542 -.953 3.853 -2.238 4.816 -4.806a20 20 0 0 0 .532 -1.662a20 20 0 0 0 .532 1.662c.963 2.567 2.275 3.853 4.816 4.806q .75 .28 1.652 .532a21 21 0 0 0 -1.652 .532c-2.542 .953 -3.854 2.238 -4.816 4.806a20 20 0 0 0 -.532 1.662a20 20 0 0 0 -.532 -1.662c-.963 -2.568 -2.275 -3.853 -4.816 -4.806a21 21 0 0 0 -1.652 -.532" /></svg>`
            },
            {
                title: "Aromas Destacados",
                subtitle: "Fragancias únicas que no pasan desapercibidas",
                filter: (product) => ["Artisto", "Black Forest", "Eau de Montagne", "Toffee Coffee", "Revolution", "Mandarin Sky", "Gentleman Reserve Privée EDP", "Uomo Born in Roma Intense", "Born in Roma Coral Fantasy", "Valentino Uomo Intense"].includes(product.name),
                id: "featured",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>`
            },
            {
                title: "Fragancias Frutales",
                subtitle: "Aromas refrescantes con toques frutales",
                filter: (product) => ["Go Mango", "Limoni Fresh", "Aqua Edition","Mandarin Sky Vintage", "Artisto", "Tyrant Special Edition", "Born in Roma Coral Fantasy"].includes(product.name),
                id: "fruity",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cherry"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" /><path d="M14 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M9 13c.366 -2 1.866 -3.873 4.5 -5.6" /><path d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" /><path d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" /></svg>`
            },
            {
                title: "Notas de Caramelo",
                subtitle: "Fragancias dulces y acarameladas",
                filter: (product) => ["Mandarin Sky", "Mandarin Sky Elixir", "Mandarin Sky Vintage", "Dubai Chocolat", "Candee", "Aoud", "Marshmallow", "Toffee Coffee", "Gentleman Eau de Parfum", "Valentino Uomo Intense"].includes(product.name),
                id: "caramel",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-lollipop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 10a3.5 3.5 0 0 0 -7 0" /><path d="M14 10a3.5 3.5 0 0 1 -7 0" /><path d="M14 17a3.5 3.5 0 0 0 0 -7" /><path d="M14 3a3.5 3.5 0 0 0 0 7" /><path d="M3 21l6 -6" /></svg>`
            },
            {
                title: "Fragancias Unisex",
                subtitle: "Fragancias diseñadas para todos los géneros",
                filter: (product) => product.gender === "Unisex",
                id: "unisex",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#134e67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-gender-bigender"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M19 3l-5 5" /><path d="M15 3h4v4" /><path d="M11 16v6" /><path d="M8 19h6" /></svg>`
            }
        ];

        let state = {
            activeCategory: "Todos",
            favorites: new Set(products.filter(p => p.isFavorite).map(p => p.id)),
            activeTab: "Inicio",
            cart: [],
            searchTerm: "",
            currentView: "home",
            currentModalProduct: null,
            carouselStates: {},
            carouselDragStates: {},
            autoScrollIntervals: {},
            autoScrollPaused: {},
            activeDiscoverSection: null,
            currentSlideshowIndex: 0,
            slideshowAutoScroll: null,
            slideshowPaused: false,
            lightboxCurrentIndex: 0
        };

        let bounceInterval = null;
        let isSearchActive = false;
        let lastScrollTop = 0;
        let ticking = false;
        let isFixedHeaderVisible = false;

        // Configura aquí tu número de WhatsApp con código de país, sin + ni espacios.
        // Ejemplo: 584121234567
        const SHIPPING_COST = 5.99;
        const DISCOUNT_AMOUNT = 0;

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        const SWIPE_THRESHOLD = 50;
        const EDGE_THRESHOLD = 30;

        let modalTouchStartX = 0;
        let modalTouchEndX = 0;

        const icons = {
            home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>`,
            compass: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>`,
            bag: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>`,
            "shopping-bag-heart": `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828" /><path d="M9 11v-5a3 3 0 0 1 6 0v5" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" /></svg>`,
            heart: (filled) => `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" 
                fill="${filled ? 'currentColor' : 'none'}" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>`,
            star: (filled) => `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" 
                fill="${filled ? 'currentColor' : 'none'}" 
                stroke="currentColor" 
                stroke-width="${filled ? '0' : '1.5'}" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>`,
            plus: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
            </svg>`,
            check: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
            </svg>`,
            arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>`,
            arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>`
        };

        function renderStars(rating) {
            let starsHtml = '<div class="rating-container">';
            const fullStars = Math.floor(rating);
            const decimalPart = rating - fullStars;
            
            for (let i = 0; i < fullStars; i++) {
                starsHtml += `<span class="rating-star">${icons.star(true)}</span>`;
            }
            
            if (decimalPart > 0) {
                const percent = decimalPart * 100;
                starsHtml += `
                    <span class="star-container">
                        <span class="star-background">${icons.star(false)}</span>
                        <span class="star-foreground" style="width: ${percent}%">${icons.star(true)}</span>
                    </span>
                `;
            }
            
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                starsHtml += `<span class="rating-star empty">${icons.star(false)}</span>`;
            }
            
            starsHtml += `<span class="rating-text">${rating.toFixed(1)}</span>`;
            starsHtml += '</div>';
            return starsHtml;
        }

        function renderProductCard(product) {
            const isFav = state.favorites.has(product.id);
            const inCart = state.cart.some(item => item.id === product.id);
            
            return `
                <div class="product-card-mobile" data-product-id="${product.id}" onclick="openProductModal(${product.id})">
                    <button onclick="event.stopPropagation(); toggleFavorite(${product.id}, event)" 
                            class="favorite-btn ${isFav ? 'active' : ''}">
                        ${icons.heart(isFav)}
                    </button>
                    
                    <div class="product-image-mobile" onclick="event.stopPropagation(); openProductModal(${product.id})">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22white%22 width=%22100%22 height=%22100%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%2264748b%22 font-size=%2210%22 font-family=%22system-ui%22>${product.brand}</text></svg>'">
                    </div>
                    
                    <div class="product-content-mobile">
                        <div>
                            <h3 class="font-bold text-gray-800 truncate text-sm mb-1">${product.name}</h3>
                            <p class="text-xs text-gray-500 mb-2">${product.brand}</p>
                            
                            <div class="gender-badge ${product.gender.toLowerCase()}">${product.gender}</div>
                            
                            <div class="price-container">
                                <span class="current-price">$${product.price.toFixed(2)}</span>
                                <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-1">
                                ${renderStars(product.rating)}
                            </div>
                            <button onclick="event.stopPropagation(); toggleCart(${product.id}, this)" 
                                    class="cart-btn ${inCart ? 'in-cart' : ''}">
                                ${inCart ? icons.check : icons.plus}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        function updateProductCardInDiscover(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const newCardHTML = renderProductCard(product);
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newCardHTML.trim();
            const newCardElement = tempDiv.firstChild;
            
            const discoverContainer = document.getElementById('discoverSectionsContainer');
            if (!discoverContainer) return;
            
            const existingCards = discoverContainer.querySelectorAll(`.product-card-mobile[data-product-id="${productId}"]`);
            
            existingCards.forEach(existingCard => {
                existingCard.parentNode.replaceChild(newCardElement.cloneNode(true), existingCard);
            });
        }

        function playWishlistAnimation(productImage, startX, startY) {
            const animationElement = document.createElement('div');
            animationElement.className = 'product-to-wishlist-animation';
            animationElement.style.left = startX + 'px';
            animationElement.style.top = startY + 'px';
            
            const img = document.createElement('img');
            img.src = productImage;
            animationElement.appendChild(img);
            
            document.body.appendChild(animationElement);
            
            const wishlistNavBtn = document.querySelector('[data-tab="Wishlist"]');
            let targetX, targetY;
            
            if (wishlistNavBtn) {
                const rect = wishlistNavBtn.getBoundingClientRect();
                targetX = rect.left + rect.width / 2;
                targetY = rect.top + rect.height / 2;
            } else {
                targetX = window.innerWidth - 50;
                targetY = window.innerHeight - 50;
            }
            
            setTimeout(() => {
                animationElement.style.left = targetX + 'px';
                animationElement.style.top = targetY + 'px';
                animationElement.style.transform = 'scale(0.5)';
                animationElement.style.opacity = '0.5';
            }, 10);
            
            setTimeout(() => {
                if (animationElement.parentNode) {
                    animationElement.parentNode.removeChild(animationElement);
                }
            }, 800);
        }

        function renderModalSlideshow(product) {
            const slideshowTrack = document.getElementById('modalSlideshowTrack');
            const slideshowIndicators = document.getElementById('modalSlideshowIndicators');
            const slideshowThumbnails = document.getElementById('modalSlideshowThumbnails');
            
            if (!slideshowTrack || !slideshowIndicators || !slideshowThumbnails) return;
            
            // Limitar a máximo 4 imágenes
            const imagesToShow = product.images.slice(0, 4);
            
            // Renderizar slides
            slideshowTrack.innerHTML = '';
            imagesToShow.forEach((image, index) => {
                slideshowTrack.innerHTML += `
                    <div class="slideshow-slide" data-index="${index}">
                        <img src="${image}" alt="${product.name} - Imagen ${index + 1}" 
                             onclick="openImageLightbox(${product.id}, ${index})">
                    </div>
                `;
            });
            
            // Renderizar indicadores
            slideshowIndicators.innerHTML = '';
            imagesToShow.forEach((_, index) => {
                slideshowIndicators.innerHTML += `
                    <button class="slideshow-indicator ${index === state.currentSlideshowIndex ? 'active' : ''}" 
                            onclick="goToSlide(${index})"></button>
                `;
            });
            
            // Renderizar miniaturas
            slideshowThumbnails.innerHTML = '';
            imagesToShow.forEach((image, index) => {
                slideshowThumbnails.innerHTML += `
                    <div class="slideshow-thumbnail ${index === state.currentSlideshowIndex ? 'active' : ''}" 
                         onclick="goToSlide(${index})">
                        <img src="${image}" alt="${product.name} - Miniatura ${index + 1}">
                    </div>
                `;
            });
            
            // Actualizar posición del slideshow
            updateSlideshowPosition();
            
            // Iniciar desplazamiento automático si no está pausado
            if (!state.slideshowPaused) {
                startSlideshowAutoScroll();
            }
        }

        function updateSlideshowPosition() {
            const slideshowTrack = document.getElementById('modalSlideshowTrack');
            if (!slideshowTrack) return;
            
            const translateX = -state.currentSlideshowIndex * 100;
            slideshowTrack.style.transform = `translateX(${translateX}%)`;
            
            // Actualizar indicadores activos
            const indicators = document.querySelectorAll('.slideshow-indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === state.currentSlideshowIndex);
            });
            
            // Actualizar miniaturas activas
            const thumbnails = document.querySelectorAll('.slideshow-thumbnail');
            thumbnails.forEach((thumbnail, index) => {
                thumbnail.classList.toggle('active', index === state.currentSlideshowIndex);
            });
        }

        function goToSlide(index) {
            // Detener desplazamiento automático temporalmente
            pauseSlideshowAutoScroll();
            
            const product = state.currentModalProduct;
            if (!product) return;
            
            // Limitar el índice al rango válido (0-3)
            const maxIndex = Math.min(product.images.length, 4) - 1;
            state.currentSlideshowIndex = Math.max(0, Math.min(index, maxIndex));
            
            updateSlideshowPosition();
            
            // Reanudar desplazamiento automático después de 5 segundos
            setTimeout(() => {
                if (!state.slideshowPaused) {
                    startSlideshowAutoScroll();
                }
            }, 5000);
        }

        function changeModalSlide(direction) {
            // Detener desplazamiento automático temporalmente
            pauseSlideshowAutoScroll();
            
            const product = state.currentModalProduct;
            if (!product) return;
            
            const maxIndex = Math.min(product.images.length, 4) - 1;
            let newIndex = state.currentSlideshowIndex + direction;
            
            if (newIndex < 0) {
                newIndex = maxIndex;
            } else if (newIndex > maxIndex) {
                newIndex = 0;
            }
            
            state.currentSlideshowIndex = newIndex;
            updateSlideshowPosition();
            
            // Reanudar desplazamiento automático después de 5 segundos
            setTimeout(() => {
                if (!state.slideshowPaused) {
                    startSlideshowAutoScroll();
                }
            }, 5000);
        }

        function startSlideshowAutoScroll() {
            // Limpiar intervalo anterior si existe
            if (state.slideshowAutoScroll) {
                clearInterval(state.slideshowAutoScroll);
            }
            
            state.slideshowAutoScroll = setInterval(() => {
                if (!state.slideshowPaused && state.currentModalProduct) {
                    const product = state.currentModalProduct;
                    const maxIndex = Math.min(product.images.length, 4) - 1;
                    
                    let newIndex = state.currentSlideshowIndex + 1;
                    if (newIndex > maxIndex) {
                        newIndex = 0;
                    }
                    
                    state.currentSlideshowIndex = newIndex;
                    updateSlideshowPosition();
                }
            }, 4000); // Cambiar cada 4 segundos
        }

        function pauseSlideshowAutoScroll() {
            if (state.slideshowAutoScroll) {
                clearInterval(state.slideshowAutoScroll);
                state.slideshowAutoScroll = null;
            }
            
            state.slideshowPaused = true;
            
            // Reanudar después de 5 segundos si no hay interacción
            setTimeout(() => {
                state.slideshowPaused = false;
                if (state.currentModalProduct) {
                    startSlideshowAutoScroll();
                }
            }, 5000);
        }

        function handleModalSlideshowSwipe(startX, endX) {
            const diffX = endX - startX;
            
            if (Math.abs(diffX) > 50) {
                pauseSlideshowAutoScroll();
                
                if (diffX > 0) {
                    changeModalSlide(-1); // Swipe derecho -> ir a la izquierda
                } else {
                    changeModalSlide(1); // Swipe izquierdo -> ir a la derecha
                }
            }
        }

        function openImageLightbox(productId, imageIndex = 0) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            state.lightboxCurrentIndex = imageIndex;
            
            const lightbox = document.getElementById('imageLightbox');
            const lightboxMainImage = document.getElementById('lightboxMainImage');
            const lightboxThumbnailsContainer = document.getElementById('lightboxThumbnailsContainer');
            const lightboxImageCounter = document.getElementById('lightboxImageCounter');
            
            if (!lightbox || !lightboxMainImage || !lightboxThumbnailsContainer || !lightboxImageCounter) return;
            
            // Limitar a máximo 4 imágenes
            const imagesToShow = product.images.slice(0, 4);
            
            // Establecer imagen principal
            lightboxMainImage.src = imagesToShow[state.lightboxCurrentIndex];
            lightboxMainImage.alt = `${product.name} - Imagen ${state.lightboxCurrentIndex + 1}`;
            
            // Actualizar contador
            lightboxImageCounter.textContent = `${state.lightboxCurrentIndex + 1} / ${imagesToShow.length}`;
            
            // Renderizar miniaturas
            lightboxThumbnailsContainer.innerHTML = '';
            imagesToShow.forEach((image, index) => {
                lightboxThumbnailsContainer.innerHTML += `
                    <div class="lightbox-thumbnail ${index === state.lightboxCurrentIndex ? 'active' : ''}" 
                         onclick="goToLightboxImage(${index})">
                        <img src="${image}" alt="${product.name} - Miniatura ${index + 1}">
                    </div>
                `;
            });
            
            // Mostrar lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Agregar event listeners para navegación con teclado
            document.addEventListener('keydown', handleLightboxKeydown);
        }

        function closeImageLightbox() {
            const lightbox = document.getElementById('imageLightbox');
            if (!lightbox) return;
            
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Remover event listeners
            document.removeEventListener('keydown', handleLightboxKeydown);
        }

        function changeLightboxImage(direction) {
            const product = state.currentModalProduct;
            if (!product) return;
            
            const imagesToShow = product.images.slice(0, 4);
            const maxIndex = imagesToShow.length - 1;
            
            let newIndex = state.lightboxCurrentIndex + direction;
            
            if (newIndex < 0) {
                newIndex = maxIndex;
            } else if (newIndex > maxIndex) {
                newIndex = 0;
            }
            
            state.lightboxCurrentIndex = newIndex;
            
            const lightboxMainImage = document.getElementById('lightboxMainImage');
            const lightboxImageCounter = document.getElementById('lightboxImageCounter');
            const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
            
            if (lightboxMainImage) {
                lightboxMainImage.src = imagesToShow[state.lightboxCurrentIndex];
                lightboxMainImage.alt = `${product.name} - Imagen ${state.lightboxCurrentIndex + 1}`;
            }
            
            if (lightboxImageCounter) {
                lightboxImageCounter.textContent = `${state.lightboxCurrentIndex + 1} / ${imagesToShow.length}`;
            }
            
            // Actualizar miniaturas activas
            lightboxThumbnails.forEach((thumbnail, index) => {
                thumbnail.classList.toggle('active', index === state.lightboxCurrentIndex);
            });
        }

        function goToLightboxImage(index) {
            const product = state.currentModalProduct;
            if (!product) return;
            
            const imagesToShow = product.images.slice(0, 4);
            if (index >= 0 && index < imagesToShow.length) {
                state.lightboxCurrentIndex = index;
                
                const lightboxMainImage = document.getElementById('lightboxMainImage');
                const lightboxImageCounter = document.getElementById('lightboxImageCounter');
                const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail');
                
                if (lightboxMainImage) {
                    lightboxMainImage.src = imagesToShow[state.lightboxCurrentIndex];
                    lightboxMainImage.alt = `${product.name} - Imagen ${state.lightboxCurrentIndex + 1}`;
                }
                
                if (lightboxImageCounter) {
                    lightboxImageCounter.textContent = `${state.lightboxCurrentIndex + 1} / ${imagesToShow.length}`;
                }
                
                // Actualizar miniaturas activas
                lightboxThumbnails.forEach((thumbnail, i) => {
                    thumbnail.classList.toggle('active', i === state.lightboxCurrentIndex);
                });
            }
        }

        function handleLightboxKeydown(e) {
            if (e.key === 'Escape') {
                closeImageLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeLightboxImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeLightboxImage(1);
            }
        }

        function openProductModal(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            state.currentModalProduct = product;
            state.currentSlideshowIndex = 0;
            state.slideshowPaused = false;
            
            const modal = document.getElementById('productModal');
            const modalName = document.getElementById('modalProductName');
            const modalBrand = document.getElementById('modalProductBrand');
            const modalGender = document.getElementById('modalProductGender');
            const modalCurrentPrice = document.getElementById('modalProductCurrentPrice');
            const modalOldPrice = document.getElementById('modalProductOldPrice');
            const modalRating = document.getElementById('modalProductRating');
            const modalReviews = document.getElementById('modalProductReviews');
            const modalProfile = document.getElementById('modalProductProfile');
            const modalNotes = document.getElementById('modalProductNotes');
            const modalLongevity = document.getElementById('modalProductLongevity');
            const modalUsage = document.getElementById('modalProductUsage');
            const modalSeason = document.getElementById('modalProductSeason');
            const modalConcentration = document.getElementById('modalProductConcentration');
            const modalSize = document.getElementById('modalProductSize');
            const modalCategory = document.getElementById('modalProductCategory');
            const modalToggleFavorite = document.getElementById('modalToggleFavorite');
            const modalFavoriteText = document.getElementById('modalFavoriteText');
            const modalToggleCart = document.getElementById('modalToggleCart');
            const modalCartText = document.getElementById('modalCartText');
            
            // Renderizar slideshow
            renderModalSlideshow(product);
            
            modalName.textContent = product.name;
            modalBrand.textContent = product.brand;
            
            if (product.gender === "Unisex") {
                modalGender.innerHTML = `
                    <span class="gender-badge-modal gender-masculino">Masculino</span>
                    <span class="gender-badge-modal gender-femenino">Femenino</span>
                `;
            } else {
                modalGender.innerHTML = `<span class="gender-badge-modal gender-${product.gender.toLowerCase()}">${product.gender}</span>`;
            }
            
            modalCurrentPrice.textContent = `$${product.price.toFixed(2)}`;
            modalOldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
            
            modalRating.innerHTML = renderStars(product.rating);
            modalReviews.textContent = `(${product.reviews} reseñas)`;
            
            modalProfile.textContent = product.profile;
            
            modalNotes.innerHTML = product.notes.map(note => 
                `<span class="modal-note-tag">${note}</span>`
            ).join('');
            
            modalLongevity.textContent = product.longevity.split('.')[0];
            modalUsage.textContent = product.usage;
            modalSeason.textContent = product.season;
            modalConcentration.textContent = product.concentration;
            modalSize.textContent = product.size;
            modalCategory.textContent = product.category;
            
            const isFav = state.favorites.has(product.id);
            const inCart = state.cart.some(item => item.id === product.id);
            
            modalFavoriteText.textContent = isFav ? 'Remover de Favoritos' : 'Añadir a Favoritos';
            modalToggleFavorite.classList.toggle('active', isFav);
            
            modalCartText.textContent = inCart ? 'Remover de la Bolsa' : 'Añadir a la Bolsa';
            modalToggleCart.classList.toggle('in-cart', inCart);
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Configurar eventos de swipe para el slideshow
            const slideshowTrack = document.getElementById('modalSlideshowTrack');
            if (slideshowTrack) {
                slideshowTrack.addEventListener('touchstart', (e) => {
                    modalTouchStartX = e.touches[0].clientX;
                }, { passive: true });
                
                slideshowTrack.addEventListener('touchend', (e) => {
                    modalTouchEndX = e.changedTouches[0].clientX;
                    handleModalSlideshowSwipe(modalTouchStartX, modalTouchEndX);
                }, { passive: true });
            }
            
            document.addEventListener('keydown', handleEscKey);
        }

        function closeProductModal() {
            const modal = document.getElementById('productModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Detener desplazamiento automático
            if (state.slideshowAutoScroll) {
                clearInterval(state.slideshowAutoScroll);
                state.slideshowAutoScroll = null;
            }
            
            state.currentModalProduct = null;
            state.currentSlideshowIndex = 0;
            state.slideshowPaused = false;
            
            document.removeEventListener('keydown', handleEscKey);
            
            // Cerrar lightbox si está abierto
            closeImageLightbox();
        }

        function handleEscKey(e) {
            if (e.key === 'Escape') {
                closeProductModal();
            }
        }

        function toggleFavoriteFromModal() {
            if (state.currentModalProduct) {
                const button = document.querySelector(`[onclick*="toggleFavorite(${state.currentModalProduct.id}"]`);
                if (button) {
                    toggleFavorite(state.currentModalProduct.id, { target: button });
                    
                    const modalToggleFavorite = document.getElementById('modalToggleFavorite');
                    const modalFavoriteText = document.getElementById('modalFavoriteText');
                    const isFav = state.favorites.has(state.currentModalProduct.id);
                    
                    modalFavoriteText.textContent = isFav ? 'Remover de Favoritos' : 'Añadir a Favoritos';
                    modalToggleFavorite.classList.toggle('active', isFav);
                }
            }
        }

        function toggleCartFromModal() {
            if (state.currentModalProduct) {
                const button = document.querySelector(`[onclick*="toggleCart(${state.currentModalProduct.id}"]`);
                if (button) {
                    toggleCart(state.currentModalProduct.id, button);
                    
                    const modalToggleCart = document.getElementById('modalToggleCart');
                    const modalCartText = document.getElementById('modalCartText');
                    const inCart = state.cart.some(item => item.id === state.currentModalProduct.id);
                    
                    modalCartText.textContent = inCart ? 'Remover de la Bolsa' : 'Añadir a la Bolsa';
                    modalToggleCart.classList.toggle('in-cart', inCart);
                }
            }
        }

        function handleTouchStart(event) {
            touchStartX = event.touches[0].clientX;
            touchStartY = event.touches[0].clientY;
        }

        function handleTouchMove(event) {
            const currentX = event.touches[0].clientX;
            if (touchStartX < EDGE_THRESHOLD || touchStartX > window.innerWidth - EDGE_THRESHOLD) {
                event.preventDefault();
            }
        }

        function handleTouchEnd(event) {
            touchEndX = event.changedTouches[0].clientX;
            touchEndY = event.changedTouches[0].clientY;
            handleSwipe();
        }

        function handleSwipe() {
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;
            
            if (Math.abs(diffX) < Math.abs(diffY)) {
                return;
            }
            
            if (diffX > SWIPE_THRESHOLD && touchStartX < EDGE_THRESHOLD) {
                openMenu();
                return;
            }
            
            if (diffX < -SWIPE_THRESHOLD && touchStartX > window.innerWidth - EDGE_THRESHOLD) {
                openCart();
                return;
            }
        }

        function handleScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const fixedHeader = document.getElementById('fixedHeader');
                    const headerHeight = document.getElementById('mainHeader').offsetHeight;
                    
                    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
                    
                    if (scrollDirection === 'down') {
                        if (scrollTop > headerHeight && !isFixedHeaderVisible) {
                            fixedHeader.classList.add('visible');
                            isFixedHeaderVisible = true;
                        }
                    } else {
                        if (scrollTop < headerHeight / 2 && isFixedHeaderVisible) {
                            fixedHeader.classList.remove('visible');
                            isFixedHeaderVisible = false;
                        }
                    }
                    
                    const scrollToTopBtn = document.getElementById('scrollToTop');
                    const scrollThreshold = 300;
                    
                    if (scrollTop > scrollThreshold) {
                        scrollToTopBtn.classList.add('visible');
                    } else {
                        scrollToTopBtn.classList.remove('visible');
                    }
                    
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                    ticking = false;
                });
                
                ticking = true;
            }
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function focusSearch() {
            const searchInput = document.getElementById('searchInput');
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                const fixedHeader = document.getElementById('fixedHeader');
                if (isFixedHeaderVisible) {
                    fixedHeader.classList.remove('visible');
                    isFixedHeaderVisible = false;
                }
                
                searchInput.focus();
                openSearch();
            }, 300);
        }

        function updateCartBadge() {
            const cartBadge = document.getElementById('cartBadge');
            const fixedCartBadge = document.getElementById('fixedCartBadge');
            const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
            
            if (cartCount > 0) {
                cartBadge.textContent = cartCount;
                cartBadge.classList.remove('hidden');
                fixedCartBadge.textContent = cartCount;
                fixedCartBadge.classList.remove('hidden');
                
                if (!bounceInterval) {
                    startBounceEffect(cartBadge);
                }
            } else {
                cartBadge.classList.add('hidden');
                fixedCartBadge.classList.add('hidden');
                if (bounceInterval) {
                    clearInterval(bounceInterval);
                    bounceInterval = null;
                    cartBadge.classList.remove('bounce-animation');
                }
            }
        }

        function startBounceEffect(badgeElement) {
            if (bounceInterval) {
                clearInterval(bounceInterval);
            }
            
            const triggerBounce = () => {
                badgeElement.classList.add('bounce-animation');
                
                setTimeout(() => {
                    badgeElement.classList.remove('bounce-animation');
                }, 1000);
            };
            
            triggerBounce();
            bounceInterval = setInterval(triggerBounce, 3000);
        }

        function updateWishlistBadge() {
            const wishlistBadge = document.getElementById('wishlistBadge');
            const fixedWishlistBadge = document.getElementById('fixedWishlistBadge');
            const wishlistCount = state.favorites.size;
            
            if (wishlistCount > 0) {
                wishlistBadge.textContent = wishlistCount;
                wishlistBadge.classList.remove('hidden');
                fixedWishlistBadge.textContent = wishlistCount;
                fixedWishlistBadge.classList.remove('hidden');
            } else {
                wishlistBadge.classList.add('hidden');
                fixedWishlistBadge.classList.add('hidden');
            }
            
            updateWishlistNavBadge();
        }
        
        function updateWishlistNavBadge() {
            const wishlistCount = state.favorites.size;
            const wishlistNavBtn = document.querySelector('[data-tab="Wishlist"]');
            
            if (wishlistNavBtn) {
                const badge = wishlistNavBtn.querySelector('.wishlist-nav-badge');
                if (wishlistCount > 0) {
                    if (!badge) {
                        const newBadge = document.createElement('span');
                        newBadge.className = 'wishlist-nav-badge absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]';
                        newBadge.textContent = wishlistCount;
                        wishlistNavBtn.querySelector('span').appendChild(newBadge);
                    } else {
                        badge.textContent = wishlistCount;
                        badge.classList.remove('hidden');
                    }
                } else {
                    if (badge) {
                        badge.classList.add('hidden');
                    }
                }
            }
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');
            toastMessage.textContent = message;
            toast.classList.remove('opacity-0', 'pointer-events-none');
            toast.classList.add('opacity-100');
            
            setTimeout(() => {
                toast.classList.add('opacity-0', 'pointer-events-none');
                toast.classList.remove('opacity-100');
            }, 2500);
        }

        function renderProducts() {
            const grid = document.getElementById('productGrid');
            const noResults = document.getElementById('noResults');
            
            let filteredProducts = products;
            
            if (state.activeCategory !== "Todos") {
                if (state.activeCategory === "Fresco") {
                    filteredProducts = filteredProducts.filter(p => 
                        p.usage.toLowerCase().includes("día") ||
                        p.season.toLowerCase().includes("verano") ||
                        p.season.toLowerCase().includes("primavera")
                    );
                } else if (state.activeCategory === "Noche") {
                    filteredProducts = filteredProducts.filter(p => 
                        p.usage.toLowerCase().includes("noche")
                    );
                } else if (state.activeCategory === "Día") {
                    filteredProducts = filteredProducts.filter(p => 
                        p.usage.toLowerCase().includes("día")
                    );
                } else if (state.activeCategory === "Verano") {
                    filteredProducts = filteredProducts.filter(p => 
                        p.season.toLowerCase().includes("verano")
                    );
                } else if (state.activeCategory === "Invierno") {
                    filteredProducts = filteredProducts.filter(p => 
                        p.season.toLowerCase().includes("invierno")
                    );
                } else {
                    filteredProducts = filteredProducts.filter(p => 
                        p.category === state.activeCategory
                    );
                }
            }
            
            if (state.searchTerm) {
                const term = state.searchTerm.toLowerCase();
                filteredProducts = filteredProducts.filter(p => 
                    p.name.toLowerCase().includes(term) ||
                    p.brand.toLowerCase().includes(term)
                );
            }
            
            if (filteredProducts.length === 0) {
                grid.classList.add('hidden');
                noResults.classList.remove('hidden');
            } else {
                grid.classList.remove('hidden');
                noResults.classList.add('hidden');
                grid.innerHTML = filteredProducts.map(renderProductCard).join('');
            }
        }

        function renderCategories() {
            const container = document.getElementById('categoryFilter');
            container.innerHTML = categories.map(category => {
                const isActive = state.activeCategory === category;
                return `
                    <button 
                        data-category="${category}" 
                        class="category-tab ${isActive ? 'active' : ''}">
                        ${category}
                    </button>
                `;
            }).join('');
        }

        function renderNavigation() {
            const container = document.getElementById('bottomNav');
            container.innerHTML = navItems.map(item => {
                const isActive = state.activeTab === item.id;
                const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
                const wishlistCount = state.favorites.size;
                
                let badge = '';
                if (item.id === 'Carrito' && cartCount > 0) {
                    badge = `<span class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">${cartCount}</span>`;
                } else if (item.id === 'Wishlist' && wishlistCount > 0) {
                    badge = `<span class="wishlist-nav-badge absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">${wishlistCount}</span>`;
                }
                
                return `
                    <button 
                        data-tab="${item.id}" 
                        class="nav-item-mobile flex flex-col items-center gap-1 relative ${isActive ? 'active' : ''}">
                        <span class="relative">
                            ${icons[item.icon]}
                            ${badge}
                        </span>
                        <span class="text-xs font-medium">${item.label}</span>
                    </button>
                `;
            }).join('');
            
            updateCartBadge();
            updateWishlistBadge();
        }

        function toggleFavorite(productId, event) {
            const product = products.find(p => p.id === productId);
            const wasFavorite = state.favorites.has(productId);
            
            if (state.favorites.has(productId)) {
                state.favorites.delete(productId);
                showToast(`${product.name} removido de tu lista`);
            } else {
                state.favorites.add(productId);
                showToast(`${product.name} añadido a tu lista ❤️`);
                
                if (!wasFavorite && event) {
                    const button = event.target.closest('button');
                    if (button) {
                        const rect = button.getBoundingClientRect();
                        const startX = rect.left + rect.width / 2;
                        const startY = rect.top + rect.height / 2;
                        
                        playWishlistAnimation(product.image, startX, startY);
                    }
                }
            }
            
            renderProducts();
            
            if (state.currentView === 'discover') {
                updateProductCardInDiscover(productId);
            }
            
            updateWishlistBadge();
            
            if (state.currentView === 'wishlistPage') {
                renderWishlistPage();
            }
            
            if (document.getElementById('wishlistSidebar')?.classList.contains('active')) {
                renderWishlistItems();
            }
        }

        function toggleCart(productId, buttonElement) {
            const product = products.find(p => p.id === productId);
            const existingIndex = state.cart.findIndex(item => item.id === productId);
            
            buttonElement.classList.add('rotate-fast');
            
            if (existingIndex > -1) {
                state.cart.splice(existingIndex, 1);
                showToast(`${product.name} removido de la bolsa`);
            } else {
                state.cart.push({ ...product, quantity: 1 });
                showToast(`${product.name} añadido a la bolsa 🛒`);
            }
            
            setTimeout(() => {
                buttonElement.classList.remove('rotate-fast');
                renderProducts();
                
                if (state.currentView === 'discover') {
                    updateProductCardInDiscover(productId);
                }
                
                renderNavigation();
                renderCartItems();
                
                if (state.currentView === 'cartPage') {
                    renderCartPage();
                }
            }, 500);
        }

        function toggleCartInWishlistPage(productId, buttonElement) {
            const product = products.find(p => p.id === productId);
            const existingIndex = state.cart.findIndex(item => item.id === productId);
            
            if (existingIndex > -1) {
                state.cart.splice(existingIndex, 1);
                showToast(`${product.name} removido de la bolsa`);
                buttonElement.textContent = 'Añadir a la Bolsa';
                buttonElement.classList.remove('in-cart');
            } else {
                state.cart.push({ ...product, quantity: 1 });
                showToast(`${product.name} añadido a la bolsa 🛒`);
                buttonElement.textContent = 'Remover de la Bolsa';
                buttonElement.classList.add('in-cart');
            }
            
            renderProducts();
            
            if (state.currentView === 'discover') {
                updateProductCardInDiscover(productId);
            }
            
            renderNavigation();
            renderCartItems();
            
            if (state.currentView === 'cartPage') {
                renderCartPage();
            }
        }

        function updateCartItemQuantity(productId, change) {
            const existingIndex = state.cart.findIndex(item => item.id === productId);
            
            if (existingIndex > -1) {
                const newQuantity = state.cart[existingIndex].quantity + change;
                
                if (newQuantity < 1) {
                    state.cart.splice(existingIndex, 1);
                    showToast(`Producto eliminado de la bolsa`);
                } else {
                    state.cart[existingIndex].quantity = newQuantity;
                }
                
                renderNavigation();
                renderCartItems();
                updateCartBadge();
                
                if (state.currentView === 'cartPage') {
                    renderCartPage();
                }
            }
        }

        function emptyCart() {
            if (state.cart.length === 0) {
                showToast('La bolsa ya está vacía');
                return;
            }
            
            state.cart = [];
            showToast('Bolsa vaciada');
            updateCartBadge();
            renderCartItems();
            
            if (state.currentView === 'cartPage') {
                renderCartPage();
            }
            
            renderProducts();
            renderNavigation();
        }

        function removeItemFromCartPage(productId) {
            const index = state.cart.findIndex(item => item.id === productId);
            if (index > -1) {
                const product = state.cart[index];
                state.cart.splice(index, 1);
                showToast(`${product.name} eliminado de la bolsa`);
                
                renderCartPage();
                
                renderCartItems();
                
                updateCartBadge();
                
                renderProducts();
                if (state.currentView === 'discover') {
                    updateProductCardInDiscover(productId);
                }
                
                renderNavigation();
            }
        }

        function setActiveCategory(category) {
            state.activeCategory = category;
            renderCategories();
            renderProducts();
        }

        function setActiveTab(tab) {
            state.activeTab = tab;
            renderNavigation();
            
            const activeBtn = document.querySelector(`[data-tab="${tab}"]`);
            if (activeBtn) {
                activeBtn.classList.add('fun-click-animation');
                setTimeout(() => {
                    activeBtn.classList.remove('fun-click-animation');
                }, 300);
            }
            
            if (tab === 'Carrito') {
                goToCartPage();
            } else if (tab === 'Inicio') {
                goToHome();
            } else if (tab === 'Descubrir') {
                goToDiscover();
            } else if (tab === 'Wishlist') {
                goToWishlistPage();
            } else {
                showToast(`Sección "${tab}" - En desarrollo`);
            }
        }

        function goToCartPage() {
            state.currentView = 'cartPage';
            document.getElementById('homeView').classList.add('hidden');
            document.getElementById('discoverView').classList.add('hidden');
            document.getElementById('wishlistPageView').classList.add('hidden');
            document.getElementById('cartPageView').classList.remove('hidden');
            renderCartPage();
        }

        function goToHome() {
            state.currentView = 'home';
            state.activeTab = 'Inicio';
            document.getElementById('cartPageView').classList.add('hidden');
            document.getElementById('discoverView').classList.add('hidden');
            document.getElementById('wishlistPageView').classList.add('hidden');
            document.getElementById('homeView').classList.remove('hidden');
            renderNavigation();
        }

        function goToDiscover(sectionId = null) {
            state.currentView = 'discover';
            state.activeTab = 'Descubrir';
            state.activeDiscoverSection = sectionId;
            document.getElementById('homeView').classList.add('hidden');
            document.getElementById('cartPageView').classList.add('hidden');
            document.getElementById('wishlistPageView').classList.add('hidden');
            document.getElementById('discoverView').classList.remove('hidden');
            renderNavigation();
            renderDiscoverSections();
        }

        function goToWishlistPage() {
            state.currentView = 'wishlistPage';
            state.activeTab = 'Wishlist';
            document.getElementById('homeView').classList.add('hidden');
            document.getElementById('cartPageView').classList.add('hidden');
            document.getElementById('discoverView').classList.add('hidden');
            document.getElementById('wishlistPageView').classList.remove('hidden');
            renderWishlistPage();
        }

        function renderWishlistPage() {
            const container = document.getElementById('wishlistPageItemsContainer');
            const emptyPage = document.getElementById('emptyWishlistPage');
            const subtitle = document.getElementById('wishlistPageSubtitle');
            
            const wishlistProducts = products.filter(p => state.favorites.has(p.id));
            const totalItems = wishlistProducts.length;
            
            subtitle.textContent = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en tu lista`;
            
            if (wishlistProducts.length === 0) {
                container.innerHTML = '';
                emptyPage.classList.remove('hidden');
                return;
            }
            
            emptyPage.classList.add('hidden');
            
            container.innerHTML = wishlistProducts.map(product => {
                const inCart = state.cart.some(item => item.id === product.id);
                const notesHtml = product.notes.map(note => 
                    `<span class="note-tag">${note}</span>`
                ).join('');
                
                return `
                    <div class="wishlist-page-item">
                        <div class="wishlist-page-item-header">
                            <div class="wishlist-page-item-image" onclick="openProductModal(${product.id})">
                                <img src="${product.image}" alt="${product.name}" loading="lazy">
                            </div>
                            <div class="wishlist-page-item-info">
                                <h3 class="wishlist-page-item-name">${product.name}</h3>
                                <p class="wishlist-page-item-brand">${product.brand}</p>
                                <div class="wishlist-page-item-price">$${product.price.toFixed(2)}</div>
                            </div>
                        </div>
                        
                        <div class="cart-page-item-details">
                            <div class="detail-row">
                                <span class="detail-label">Género:</span>
                                <span class="detail-value">${product.gender}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Perfil:</span>
                                <span class="detail-value">${product.profile}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Longevidad:</span>
                                <span class="detail-value">${product.longevity.split('.')[0]}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Uso:</span>
                                <span class="detail-value">${product.usage}</span>
                            </div>
                            
                            <div class="notes-container">
                                <div class="notes-title">Notas Olfativas</div>
                                <div class="notes-tags">
                                    ${notesHtml}
                                </div>
                            </div>
                            
                            <div class="wishlist-page-item-actions">
                                <button class="wishlist-page-remove-btn" onclick="toggleFavorite(${product.id})">
                                    Eliminar de la Lista
                                </button>
                                <button class="wishlist-page-add-to-cart-btn ${inCart ? 'in-cart' : ''}" 
                                        onclick="toggleCartInWishlistPage(${product.id}, this)">
                                    ${inCart ? 'Remover de la Bolsa' : 'Añadir a la Bolsa'}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function renderDiscoverSections() {
        const container = document.getElementById('discoverSectionsContainer');
        
        let sectionsHTML = '';
        
        discoverSections.forEach(section => {
            const filteredProducts = products.filter(section.filter);
            if (filteredProducts.length > 0) {
                sectionsHTML += renderProductCarousel(filteredProducts, section.title, section.subtitle, section.id, section.icon);
            }
        });
        
        container.innerHTML = sectionsHTML;
        
        setTimeout(() => {
            initCarousels();
            
            if (state.currentView === 'discover') {
                // Iniciar auto‑scroll para las mismas secciones
                const autoScrollSections = ['trending', 'new'];
                autoScrollSections.forEach(id => {
                    startAutoScroll(id);
                });
            }
            
            if (state.activeDiscoverSection) {
                setTimeout(() => {
                    const sectionElement = document.getElementById(`carousel-${state.activeDiscoverSection}`);
                    if (sectionElement) {
                        const sectionRect = sectionElement.getBoundingClientRect();
                        const scrollPosition = sectionRect.top + window.pageYOffset - (window.innerHeight / 2) + (sectionRect.height / 2);
                        const adjustedScrollPosition = scrollPosition - 60;
                        window.scrollTo({
                            top: adjustedScrollPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            }
        }, 100);
    }

        function renderProductCarousel(products, title, subtitle, sectionId, icon) {
            const isMobile = window.innerWidth < 768;
            const useCarousel = isMobile ? products.length > 2 : true;
            const gridViewClass = !useCarousel ? 'grid-view' : '';
            
            let productsHTML = '';
            products.forEach(product => {
                productsHTML += `
                    <div class="carousel-item">
                        ${renderProductCard(product)}
                    </div>
                `;
            });
            
            return `
                <div class="discover-section">
                    <div class="discover-section-header">
                        <h2 class="discover-section-title">
                            <span class="section-icon">${icon}</span>
                            ${title}
                        </h2>
                    </div>
                    <p class="discover-section-subtitle">${subtitle}</p>
                    <div class="carousel-container ${gridViewClass}" id="carousel-${sectionId}">
                        <div class="carousel-track">
                            ${productsHTML}
                        </div>
                        ${useCarousel ? `
                            <button class="carousel-btn carousel-btn-prev" onclick="scrollCarousel('${sectionId}', -1)">
                                ${icons.arrowLeft}
                            </button>
                            <button class="carousel-btn carousel-btn-next" onclick="scrollCarousel('${sectionId}', 1)">
                                ${icons.arrowRight}
                            </button>
                            <div class="carousel-progress-bar" id="progress-bar-${sectionId}">
                                <div class="carousel-progress-bar-fill"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        function updateCarouselProgressBar(sectionId, carouselState, progressBar) {
            if (!progressBar) return;
            
            const track = document.querySelector(`#carousel-${sectionId} .carousel-track`);
            const items = track.querySelectorAll('.carousel-item');
            
            if (items.length === 0) return;
            
            const itemWidth = items[0].offsetWidth + 12;
            const totalWidth = items.length * itemWidth;
            const visibleWidth = carouselState.itemsPerView * itemWidth;
            
            if (totalWidth <= visibleWidth) {
                progressBar.style.opacity = '0';
                return;
            }
            
            progressBar.style.opacity = '1';
            
            const maxIndex = Math.max(0, items.length - carouselState.itemsPerView);
            const progressPercentage = maxIndex > 0 ? (carouselState.currentIndex / maxIndex) * 100 : 0;
            
            const progressFill = progressBar.querySelector('.carousel-progress-bar-fill');
            if (progressFill) {
                progressFill.style.width = `${progressPercentage}%`;
                
                if (progressPercentage >= 100) {
                    progressFill.classList.add('animating');
                    setTimeout(() => {
                        progressFill.classList.remove('animating');
                    }, 500);
                }
            }
        }

        function updateProgressBarDuringDrag(sectionId, currentTranslate, maxTranslate, progressBar) {
            if (!progressBar) return;
            
            const carouselState = state.carouselStates[sectionId];
            const track = document.querySelector(`#carousel-${sectionId} .carousel-track`);
            const items = track.querySelectorAll('.carousel-item');
            
            if (items.length === 0) return;
            
            const itemWidth = items[0].offsetWidth + 12;
            const totalWidth = items.length * itemWidth;
            const visibleWidth = carouselState.itemsPerView * itemWidth;
            
            if (totalWidth <= visibleWidth) return;
            
            const progressPercentage = maxTranslate !== 0 ? (1 - (-currentTranslate / -maxTranslate)) * 100 : 0;
            
            const progressFill = progressBar.querySelector('.carousel-progress-bar-fill');
            if (progressFill) {
                progressFill.style.width = `${progressPercentage}%`;
                
                if (progressPercentage >= 100) {
                    progressFill.classList.add('animating');
                    setTimeout(() => {
                        progressFill.classList.remove('animating');
                    }, 500);
                }
            }
        }

        function initCarousels() {
    // Secciones que tendrán auto‑scroll
    const autoScrollSections = ['trending', 'new']; // Asegúrate de que el id de tu sección Novedades sea "new"

    discoverSections.forEach(section => {
        const carouselId = `carousel-${section.id}`;
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;
        
        const track = carousel.querySelector('.carousel-track');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-btn-prev');
        const nextBtn = carousel.querySelector('.carousel-btn-next');
        const progressBar = document.getElementById(`progress-bar-${section.id}`);
        
        if (items.length === 0) return;
        
        if (!state.carouselStates[section.id]) {
            state.carouselStates[section.id] = {
                currentIndex: 0,
                totalItems: items.length,
                itemsPerView: window.innerWidth < 768 ? 2 : 4,
                isDragging: false,
                startPos: 0,
                currentTranslate: 0,
                prevTranslate: 0,
                progressBarTimeout: null
            };
        }
        
        const carouselState = state.carouselStates[section.id];
        const itemWidth = items[0].offsetWidth + 12;
        
        updateCarouselButtons(section.id, carouselState, prevBtn, nextBtn);
        updateCarouselProgressBar(section.id, carouselState, progressBar);
        setupCarouselDrag(carousel, section.id, itemWidth, progressBar);
        
        // Solo las secciones en la lista tendrán auto‑scroll
        if (autoScrollSections.includes(section.id)) {
            setupCarouselInteractionsForAutoScroll(carousel, section.id);
        }
    });
}

        function setupCarouselInteractionsForAutoScroll(carousel, sectionId) {
            const track = carousel.querySelector('.carousel-track');
            const prevBtn = carousel.querySelector('.carousel-btn-prev');
            const nextBtn = carousel.querySelector('.carousel-btn-next');
            
            if (!track) return;
            
            track.addEventListener('mousedown', () => pauseAutoScroll(sectionId));
            track.addEventListener('touchstart', () => pauseAutoScroll(sectionId));
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => pauseAutoScroll(sectionId));
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', () => pauseAutoScroll(sectionId));
            }
        }

        function setupCarouselDrag(carousel, sectionId, itemWidth, progressBar) {
            const track = carousel.querySelector('.carousel-track');
            const items = carousel.querySelectorAll('.carousel-item');
            
            if (!track || items.length === 0) return;
            
            let isDragging = false;
            let startX = 0;
            let currentTranslate = 0;
            let prevTranslate = 0;
            let animationId = null;
            
            track.addEventListener('touchstart', (e) => {
                isDragging = true;
                startX = e.touches[0].clientX;
                track.style.transition = 'none';
                cancelAnimationFrame(animationId);
                
                if (sectionId === 'trending') {
                    pauseAutoScroll(sectionId);
                }
            });
            
            track.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const currentX = e.touches[0].clientX;
                const diff = currentX - startX;
                currentTranslate = prevTranslate + diff;
                
                const carouselState = state.carouselStates[sectionId];
                const maxTranslate = -((items.length - carouselState.itemsPerView) * itemWidth);
                currentTranslate = Math.min(Math.max(currentTranslate, maxTranslate), 0);
                
                track.style.transform = `translateX(${currentTranslate}px)`;
                
                updateProgressBarDuringDrag(sectionId, currentTranslate, maxTranslate, progressBar);
            });
            
            track.addEventListener('touchend', () => {
                if (!isDragging) return;
                isDragging = false;
                
                const carouselState = state.carouselStates[sectionId];
                const snappedIndex = Math.round(-currentTranslate / itemWidth);
                const newIndex = Math.max(0, Math.min(snappedIndex, items.length - carouselState.itemsPerView));
                
                carouselState.currentIndex = newIndex;
                prevTranslate = -newIndex * itemWidth;
                
                track.style.transition = 'transform 0.3s ease';
                track.style.transform = `translateX(${prevTranslate}px)`;
                
                const prevBtn = carousel.querySelector('.carousel-btn-prev');
                const nextBtn = carousel.querySelector('.carousel-btn-next');
                updateCarouselButtons(sectionId, carouselState, prevBtn, nextBtn);
                updateCarouselProgressBar(sectionId, carouselState, progressBar);
                
                setTimeout(() => {
                    track.style.transition = '';
                }, 300);
            });
            
            track.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
                track.style.transition = 'none';
                track.style.cursor = 'grabbing';
                cancelAnimationFrame(animationId);
                e.preventDefault();
                
                if (sectionId === 'trending') {
                    pauseAutoScroll(sectionId);
                }
            });
            
            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const currentX = e.clientX;
                const diff = currentX - startX;
                currentTranslate = prevTranslate + diff;
                
                const carouselState = state.carouselStates[sectionId];
                const maxTranslate = -((items.length - carouselState.itemsPerView) * itemWidth);
                currentTranslate = Math.min(Math.max(currentTranslate, maxTranslate), 0);
                
                track.style.transform = `translateX(${currentTranslate}px)`;
                
                updateProgressBarDuringDrag(sectionId, currentTranslate, maxTranslate, progressBar);
            });
            
            window.addEventListener('mouseup', () => {
                if (!isDragging) return;
                isDragging = false;
                track.style.cursor = 'grab';
                
                const carouselState = state.carouselStates[sectionId];
                const snappedIndex = Math.round(-currentTranslate / itemWidth);
                const newIndex = Math.max(0, Math.min(snappedIndex, items.length - carouselState.itemsPerView));
                
                carouselState.currentIndex = newIndex;
                prevTranslate = -newIndex * itemWidth;
                
                track.style.transition = 'transform 0.3s ease';
                track.style.transform = `translateX(${prevTranslate}px)`;
                
                const prevBtn = carousel.querySelector('.carousel-btn-prev');
                const nextBtn = carousel.querySelector('.carousel-btn-next');
                updateCarouselButtons(sectionId, carouselState, prevBtn, nextBtn);
                updateCarouselProgressBar(sectionId, carouselState, progressBar);
                
                setTimeout(() => {
                    track.style.transition = '';
                }, 300);
            });
            
            track.addEventListener('mouseenter', () => {
                track.style.cursor = 'grab';
            });
        }

        function updateCarouselButtons(sectionId, carouselState, prevBtn, nextBtn) {
            if (prevBtn) {
                prevBtn.disabled = carouselState.currentIndex === 0;
            }
            if (nextBtn) {
                const maxIndex = Math.max(0, carouselState.totalItems - carouselState.itemsPerView);
                nextBtn.disabled = carouselState.currentIndex >= maxIndex;
            }
        }

        function scrollCarousel(sectionId, direction) {
            const carousel = document.getElementById(`carousel-${sectionId}`);
            if (!carousel) return;
            
            const track = carousel.querySelector('.carousel-track');
            const items = carousel.querySelectorAll('.carousel-item');
            const prevBtn = carousel.querySelector('.carousel-btn-prev');
            const nextBtn = carousel.querySelector('.carousel-btn-next');
            const progressBar = document.getElementById(`progress-bar-${sectionId}`);
            
            if (items.length === 0) return;
            
            if (!state.carouselStates[sectionId]) {
                state.carouselStates[sectionId] = {
                    currentIndex: 0,
                    totalItems: items.length,
                    itemsPerView: window.innerWidth < 768 ? 2 : 4
                };
            }
            
            const carouselState = state.carouselStates[sectionId];
            const itemWidth = items[0].offsetWidth + 12;
            
            let newIndex = carouselState.currentIndex + direction;
            
            newIndex = Math.max(0, newIndex);
            const maxIndex = Math.max(0, items.length - carouselState.itemsPerView);
            newIndex = Math.min(newIndex, maxIndex);
            
            carouselState.currentIndex = newIndex;
            
            const translateX = -newIndex * itemWidth;
            track.style.transition = 'transform 0.3s ease';
            track.style.transform = `translateX(${translateX}px)`;
            
            updateCarouselButtons(sectionId, carouselState, prevBtn, nextBtn);
            
            updateCarouselProgressBar(sectionId, carouselState, progressBar);
            
            setTimeout(() => {
                track.style.transition = '';
            }, 300);
            
            if (sectionId === 'trending') {
                pauseAutoScroll(sectionId);
            }
        }

        function startAutoScroll(sectionId) {
            if (state.autoScrollIntervals[sectionId]) {
                clearInterval(state.autoScrollIntervals[sectionId]);
            }
            
            state.autoScrollPaused[sectionId] = false;
            
            state.autoScrollIntervals[sectionId] = setInterval(() => {
                if (!state.autoScrollPaused[sectionId]) {
                    autoScrollNext(sectionId);
                }
            }, 3000);
        }

        function autoScrollNext(sectionId) {
            const carousel = document.getElementById(`carousel-${sectionId}`);
            if (!carousel) return;
            
            const track = carousel.querySelector('.carousel-track');
            const items = carousel.querySelectorAll('.carousel-item');
            const prevBtn = carousel.querySelector('.carousel-btn-prev');
            const nextBtn = carousel.querySelector('.carousel-btn-next');
            const progressBar = document.getElementById(`progress-bar-${sectionId}`);
            
            if (items.length === 0) return;
            
            if (!state.carouselStates[sectionId]) {
                state.carouselStates[sectionId] = {
                    currentIndex: 0,
                    totalItems: items.length,
                    itemsPerView: window.innerWidth < 768 ? 2 : 4
                };
            }
            
            const carouselState = state.carouselStates[sectionId];
            const itemWidth = items[0].offsetWidth + 12;
            
            let newIndex = carouselState.currentIndex + 1;
            const maxIndex = Math.max(0, items.length - carouselState.itemsPerView);
            
            if (newIndex > maxIndex) {
                newIndex = 0;
                track.style.transition = 'transform 0.5s ease';
                track.style.transform = `translateX(0px)`;
                
                carouselState.currentIndex = 0;
                updateCarouselButtons(sectionId, carouselState, prevBtn, nextBtn);
                updateCarouselProgressBar(sectionId, carouselState, progressBar);
                
                setTimeout(() => {
                    track.style.transition = '';
                }, 500);
            } else {
                carouselState.currentIndex = newIndex;
                const translateX = -newIndex * itemWidth;
                track.style.transition = 'transform 0.3s ease';
                track.style.transform = `translateX(${translateX}px)`;
                
                updateCarouselButtons(sectionId, carouselState, prevBtn, nextBtn);
                updateCarouselProgressBar(sectionId, carouselState, progressBar);
                
                setTimeout(() => {
                    track.style.transition = '';
                }, 300);
            }
        }

        function pauseAutoScroll(sectionId) {
            state.autoScrollPaused[sectionId] = true;
            
            if (state.autoScrollIntervals[sectionId]) {
                clearInterval(state.autoScrollIntervals[sectionId]);
                state.autoScrollIntervals[sectionId] = null;
            }
            
            setTimeout(() => {
                if (state.autoScrollPaused[sectionId] && state.currentView === 'discover') {
                    state.autoScrollPaused[sectionId] = false;
                    startAutoScroll(sectionId);
                }
            }, 5000);
        }

        function renderCartPage() {
            const container = document.getElementById('cartPageItemsContainer');
            const emptyCartPage = document.getElementById('emptyCartPage');
            const cartPageSummary = document.getElementById('cartPageSummary');
            const cartPageActions = document.getElementById('cartPageActions');
            const cartPageSubtitle = document.getElementById('cartPageSubtitle');
            const cartPageSubtotal = document.getElementById('cartPageSubtotal');
            const cartPageTotal = document.getElementById('cartPageTotal');
            
            const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
            const subtotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const shipping = SHIPPING_COST;
            const discount = DISCOUNT_AMOUNT;
            const total = subtotal + shipping - discount;
            
            cartPageSubtitle.textContent = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en tu bolsa`;
            
            if (state.cart.length === 0) {
                container.innerHTML = '';
                emptyCartPage.classList.remove('hidden');
                cartPageSummary.classList.add('hidden');
                cartPageActions.classList.add('hidden');
                return;
            }
            
            emptyCartPage.classList.add('hidden');
            cartPageSummary.classList.remove('hidden');
            cartPageActions.classList.remove('hidden');
            
            container.innerHTML = state.cart.map(item => {
                const notesHtml = item.notes.map(note => 
                    `<span class="note-tag">${note}</span>`
                ).join('');
                
                return `
                    <div class="cart-page-item">
                        <div class="cart-page-item-header">
                            <div class="cart-page-item-image" onclick="openProductModal(${item.id})">
                                <img src="${item.image}" alt="${item.name}" loading="lazy">
                            </div>
                            <div class="cart-page-item-info">
                                <h3 class="cart-page-item-name">${item.name}</h3>
                                <p class="cart-page-item-brand">${item.brand}</p>
                                <div class="cart-page-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        </div>
                        
                        <div class="cart-page-item-details">
                            <div class="detail-row">
                                <span class="detail-label">Género:</span>
                                <span class="detail-value">${item.gender}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Perfil:</span>
                                <span class="detail-value">${item.profile}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Longevidad:</span>
                                <span class="detail-value">${item.longevity.split('.')[0]}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Uso:</span>
                                <span class="detail-value">${item.usage}</span>
                            </div>
                            
                            <div class="notes-container">
                                <div class="notes-title">Notas Olfativas</div>
                                <div class="notes-tags">
                                    ${notesHtml}
                                </div>
                            </div>
                            
                            <div class="quantity-controls">
                                <span class="quantity-label">Cantidad:</span>
                                <div class="quantity-buttons">
                                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                                    <span class="quantity-value">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                                </div>
                            </div>
                            
                            <div class="remove-item-container">
                                <button class="remove-item-btn" onclick="removeItemFromCartPage(${item.id})">
                                    Eliminar Producto
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            cartPageSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            cartPageTotal.textContent = `$${total.toFixed(2)}`;
        }

        function buildWhatsAppCheckoutMessage() {
    const subtotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = SHIPPING_COST;
    const discount = DISCOUNT_AMOUNT;
    const total = subtotal + shipping - discount;
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    const itemLines = state.cart.map((item) => {

        const lineSubtotal = item.price * item.quantity;

        const productSlug = item.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        const productUrl =
            `https://everyessencehouse.com.ve/producto/${productSlug}`;

        return [
            `📦 *Producto:* ${item.name}`,
            `🏷️ *Marca:* ${item.brand}`,
            `💲 *Precio Unitario:* $${item.price.toFixed(2)}`,
            `🔢 *Cantidad:* ${item.quantity}`,
            `💰 *Subtotal:* $${lineSubtotal.toFixed(2)}`,
            `👤 *Género:* ${item.gender || 'N/A'}`,
            `🌿 *Perfil:* ${item.profile || 'N/A'}`,
            `⏳ *Longevidad:* ${item.longevity || 'N/A'}`,
            `🎯 *Uso:* ${item.usage || 'N/A'}`,
            `🔗 *Ver producto:*`,
            `${productUrl}`
        ].join('\n');

    }).join('\n\n━━━━━━━━━━━━━━\n\n');

    return [
        '🛍️ *NUEVA SOLICITUD DE COMPRA*',
        '',
        '👋 Hola, deseo realizar la siguiente compra:',
        '',
        '━━━━━━━━━━━━━━',
        '',
        itemLines,
        '',
        '━━━━━━━━━━━━━━',
        '',
        '🧾 *RESUMEN DEL PEDIDO*',
        `📦 Total de artículos: ${totalItems}`,
        `💵 Subtotal: $${subtotal.toFixed(2)}`,
        `🚚 Envío: $${shipping.toFixed(2)}`,
        `🎁 Descuento: -$${discount.toFixed(2)}`,
        `💰 TOTAL: $${total.toFixed(2)}`,
        '',
        '✅ Quisiera finalizar esta compra.',
        '📲 Quedo atento a la información para completar el pedido.'
    ].join('\n');
}

        function openWhatsAppCheckout() {
            if (!state.cart.length) {
                showToast('Tu bolsa está vacía');
                return;
            }

            // Generar el detalle completo del pedido y codificarlo para usarlo
            // como mensaje prellenado en WhatsApp.
            const message = encodeURIComponent(buildWhatsAppCheckoutMessage());

            // Al no especificar un número de teléfono, WhatsApp muestra
            // la selección de contactos para que el usuario elija
            // personalmente a quién desea enviar el pedido.
            const url = `https://wa.me/?text=${message}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        }

        function checkoutFromPage() {
            openWhatsAppCheckout();
        }

        function toggleDiscoverySubmenu(element) {
            element.classList.toggle('active');
            const submenu = document.getElementById('discoverySubmenu');
            if (submenu) {
                submenu.classList.toggle('active');
            }
        }

        function renderDiscoverySubmenu() {
            const submenuContainer = document.getElementById('discoverySubmenu');
            
            if (!submenuContainer) return;
            
            submenuContainer.innerHTML = discoverSections.map(section => {
                return `<div class="submenu-item" onclick="goToDiscoverFromMenu('${section.id}')">${section.title}</div>`;
            }).join('');
        }

        function goToDiscoverFromMenu(sectionId) {
            goToDiscover(sectionId);
            closeMenu();
            showToast(`Navegando a: ${discoverSections.find(s => s.id === sectionId)?.title || 'Descubrir'}`);
        }

        function handleMenuItemClick(event, itemName) {
            event.preventDefault();
            const menuItem = event.currentTarget;
            
            menuItem.classList.add('active-click', 'fun-click-animation');
            
            if (itemName === "Sets de Descubrimiento") {
            } else {
                showToast(`Navegando a: ${itemName}`);
            }
            
            setTimeout(() => {
                menuItem.classList.remove('active-click', 'fun-click-animation');
                if (itemName !== "Sets de Descubrimiento") {
                    closeMenu();
                }
            }, 300);
        }

        function openMenu() {
            const overlay = document.getElementById('menuOverlay');
            const sidebar = document.getElementById('menuSidebar');
            
            overlay.classList.add('active');
            sidebar.classList.add('active');
            
            document.body.style.overflow = 'hidden';
            
            renderBrandsSubmenu();
            renderBuildKitSubmenu();
            renderDiscoverySubmenu();
        }

        function closeMenu() {
            const overlay = document.getElementById('menuOverlay');
            const sidebar = document.getElementById('menuSidebar');
            
            overlay.classList.remove('active');
            sidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function toggleBrandsSubmenu(element) {
            element.classList.toggle('active');
            const submenu = document.getElementById('brandsSubmenu');
            if (submenu) {
                submenu.classList.toggle('active');
            }
        }

        function toggleBrandSubmenu(element, event) {
            event.stopPropagation();
            element.classList.toggle('active');
            const subsubmenu = element.querySelector('.subsubmenu');
            if (subsubmenu) {
                subsubmenu.classList.toggle('active');
            }
        }

        function selectBrand(brandName, line = null) {
            const message = line ? `Marca: ${brandName}, Línea: ${line}` : `Marca: ${brandName}`;
            showToast(message);
            closeMenu();
        }

        function renderBrandsSubmenu() {
            const submenuContainer = document.getElementById('brandsSubmenu');
            
            if (!submenuContainer) return;
            
            submenuContainer.innerHTML = brands.map(brand => {
                if (brand.hasSubmenu) {
                    return `
                        <div class="submenu-item has-submenu" onclick="toggleBrandSubmenu(this, event)">
                            <span>${brand.name}</span>
                            <svg class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            <div class="subsubmenu">
                                ${brand.submenu.map(item => 
                                    `<div class="submenu-item" onclick="selectBrand('${brand.name}', '${item}')">${item}</div>`
                                ).join('')}
                            </div>
                        </div>
                    `;
                } else {
                    return `<div class="submenu-item" onclick="selectBrand('${brand.name}')">${brand.name}</div>`;
                }
            }).join('');
        }

        function toggleBuildKitSubmenu(element) {
            element.classList.toggle('active');
            const submenu = document.getElementById('buildKitSubmenu');
            if (submenu) {
                submenu.classList.toggle('active');
            }
        }

        function toggleKitSuggestion(element, event) {
            event.stopPropagation();
            element.classList.toggle('active');
            const productsSubmenu = element.querySelector('.kit-products-submenu');
            if (productsSubmenu) {
                productsSubmenu.classList.toggle('active');
            }
        }

        function renderBuildKitSubmenu() {
            const submenuContainer = document.getElementById('buildKitSubmenu');
            
            if (!submenuContainer) return;
            
            submenuContainer.innerHTML = kitSuggestions.map((suggestion, index) => {
                const filteredProducts = products.filter(suggestion.filter);
                
                return `
                    <div class="kit-suggestion-item has-submenu" onclick="toggleKitSuggestion(this, event)">
                        <div>
                            <div class="font-medium">${suggestion.name}</div>
                            <div class="text-xs text-gray-500">${suggestion.description}</div>
                            <div class="text-xs text-gray-400 mt-1">${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''}</div>
                        </div>
                        <svg class="submenu-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        <div class="kit-products-submenu">
                            ${filteredProducts.map(product => 
                                `<div class="kit-product-item" onclick="openProductModal(${product.id}); closeMenu();">
                                    ${product.name} - ${product.brand}
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function openCart() {
            const overlay = document.getElementById('cartOverlay');
            const sidebar = document.getElementById('cartSidebar');
            
            overlay.classList.add('active');
            sidebar.classList.add('active');
            
            document.body.style.overflow = 'hidden';
            renderCartItems();
        }

        function closeCart() {
            const overlay = document.getElementById('cartOverlay');
            const sidebar = document.getElementById('cartSidebar');
            
            overlay.classList.remove('active');
            sidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function renderCartItems() {
            const container = document.getElementById('cartItemsContainer');
            const emptyMessage = document.getElementById('emptyCartMessage');
            const totalPriceElement = document.getElementById('cartTotalPrice');
            
            if (state.cart.length === 0) {
                container.innerHTML = '';
                emptyMessage.classList.remove('hidden');
                totalPriceElement.textContent = '$0.00';
                return;
            }
            
            emptyMessage.classList.add('hidden');
            
            let total = 0;
            container.innerHTML = state.cart.map(item => {
                total += item.price * item.quantity;
                return `
                    <div class="cart-item">
                        <div class="cart-item-image" onclick="openProductModal(${item.id})">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-brand">${item.brand}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            Eliminar
                        </button>
                    </div>
                `;
            }).join('');
            
            totalPriceElement.textContent = `$${total.toFixed(2)}`;
        }

        function removeFromCart(productId) {
            const index = state.cart.findIndex(item => item.id === productId);
            if (index > -1) {
                const product = state.cart[index];
                state.cart.splice(index, 1);
                showToast(`${product.name} eliminado de la bolsa`);
                renderCartItems();
                updateCartBadge();
                renderProducts();
                renderNavigation();
                
                if (state.currentView === 'cartPage') {
                    renderCartPage();
                }
            }
        }

        function checkout() {
            if (state.cart.length === 0) {
                showToast('Tu bolsa está vacía');
                return;
            }
            
            closeCart();
            goToCartPage();
            showToast('Revisa el detalle de tu compra y presiona nuevamente Proceder al Pago');
        }

        function openWishlist() {
            const overlay = document.getElementById('wishlistOverlay');
            const sidebar = document.getElementById('wishlistSidebar');
            
            overlay.classList.add('active');
            sidebar.classList.add('active');
            
            document.body.style.overflow = 'hidden';
            renderWishlistItems();
        }

        function closeWishlist() {
            const overlay = document.getElementById('wishlistOverlay');
            const sidebar = document.getElementById('wishlistSidebar');
            
            overlay.classList.remove('active');
            sidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function renderWishlistItems() {
            const container = document.getElementById('wishlistItemsContainer');
            const emptyMessage = document.getElementById('emptyWishlistMessage');
            
            const wishlistProducts = products.filter(p => state.favorites.has(p.id));
            
            if (wishlistProducts.length === 0) {
                container.innerHTML = '';
                emptyMessage.classList.remove('hidden');
                return;
            }
            
            emptyMessage.classList.add('hidden');
            
            container.innerHTML = wishlistProducts.map(product => {
                return `
                    <div class="wishlist-item">
                        <div class="wishlist-item-image" onclick="openProductModal(${product.id})">
                            <img src="${product.image}" alt="${product.name}" loading="lazy">
                        </div>
                        <div class="wishlist-item-details">
                            <div class="wishlist-item-name">${product.name}</div>
                            <div class="wishlist-item-brand">${product.brand}</div>
                            <div class="wishlist-item-price">$${product.price.toFixed(2)}</div>
                        </div>
                        <button class="wishlist-item-remove" onclick="removeFromWishlist(${product.id})">
                            Eliminar
                        </button>
                    </div>
                `;
            }).join('');
        }

        function removeFromWishlist(productId) {
            if (state.favorites.has(productId)) {
                state.favorites.delete(productId);
                showToast('Producto removido de la lista de deseos');
                renderWishlistItems();
                updateWishlistBadge();
                renderProducts();
                
                if (state.currentView === 'wishlistPage') {
                    renderWishlistPage();
                }
            }
        }

        function openSearch() {
            const searchBar = document.getElementById('searchBar');
            const searchFiltersPanel = document.getElementById('searchFiltersPanel');
            const searchInput = document.getElementById('searchInput');
            
            isSearchActive = true;
            searchBar.classList.add('active');
            searchFiltersPanel.classList.add('active');
            
            const searchContainer = document.querySelector('.search-container');
            searchContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }

        function closeSearch() {
            const searchBar = document.getElementById('searchBar');
            const searchFiltersPanel = document.getElementById('searchFiltersPanel');
            const searchInput = document.getElementById('searchInput');
            
            isSearchActive = false;
            searchBar.classList.remove('active');
            searchFiltersPanel.classList.remove('active');
            
            searchInput.blur();
        }

        function setupSearchBar() {
            const searchInput = document.getElementById('searchInput');
            const searchBar = document.getElementById('searchBar');
            const searchFiltersPanel = document.getElementById('searchFiltersPanel');
            
            searchBar.addEventListener('click', (e) => {
                if (e.target !== searchInput && !isSearchActive) {
                    openSearch();
                }
            });
            
            searchInput.addEventListener('focus', openSearch);
            
            document.querySelectorAll('.filter-option').forEach(option => {
                option.addEventListener('click', () => {
                    setTimeout(() => {
                        closeSearch();
                    }, 300);
                });
            });
            
            document.addEventListener('click', (e) => {
                if (isSearchActive) {
                    const searchContainer = document.querySelector('.search-container');
                    const isClickInsideSearch = searchContainer.contains(e.target);
                    if (!isClickInsideSearch) {
                        closeSearch();
                    }
                }
            });
            
            searchFiltersPanel.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        function init() {
            renderCategories();
            
            document.getElementById('categoryFilter').addEventListener('click', (e) => {
                const btn = e.target.closest('.category-tab');
                if (btn) {
                    setActiveCategory(btn.dataset.category);
                }
            });
            
            renderProducts();
            renderNavigation();
            setupSearchBar();
            renderBrandsSubmenu();
            renderBuildKitSubmenu();
            renderDiscoverySubmenu();
            
            updateCartBadge();
            updateWishlistBadge();
            renderCartItems();
            
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            document.addEventListener('touchstart', handleTouchStart, { passive: true });
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd, { passive: true });
            
            const fixedHeader = document.getElementById('fixedHeader');
            fixedHeader.classList.remove('visible');
            isFixedHeaderVisible = false;
            
            handleScroll();
            
            document.getElementById('bottomNav').addEventListener('click', (e) => {
                const btn = e.target.closest('.nav-item-mobile');
                if (btn) {
                    setActiveTab(btn.dataset.tab);
                }
            });
            
            document.getElementById('searchInput').addEventListener('input', (e) => {
                state.searchTerm = e.target.value;
                renderProducts();
            });
            
            window.addEventListener('resize', () => {
                if (state.currentView === 'discover') {
                    renderDiscoverSections();
                }
                
                initCarousels();
                
                if (state.currentView === 'discover' && state.autoScrollIntervals['trending']) {
                    clearInterval(state.autoScrollIntervals['trending']);
                    startAutoScroll('trending');
                }
            });
            
            const scrollToTopBtn = document.getElementById('scrollToTop');
            scrollToTopBtn.classList.remove('visible');
        }

        async function loadProducts() {
            try {
                const response = await fetch('./data/products.json');
                if (!response.ok) {
                    throw new Error(`No se pudo cargar products.json (${response.status})`);
                }

                products = await response.json();
                init();
            } catch (error) {
                console.error('Error cargando el catálogo de productos:', error);
                const container = document.getElementById('productGrid');
                if (container) {
                    container.innerHTML = `
                        <div class="col-span-2 rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
                            No se pudo cargar el catálogo. Abre el proyecto mediante un servidor local para permitir la carga de <strong>data/products.json</strong>.
                        </div>
                    `;
                }
            }
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadProducts);
        } else {
            loadProducts();
        }