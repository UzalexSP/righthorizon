/* =======================================================
   ТОВАРЫ
   ======================================================= */

const donateProducts = [
    {
        id: "silver",
        name: "Silver",
        img: "assets/donate/silver.png",
        description: "Базовий донат для комфортної гри.",
        plans: [
            { id: "forever", label: "Назавжди", price: 19 },
            { id: "90",      label: "90 днів", price: 13 },
            { id: "30",      label: "30 днів", price: 10 }
        ]
    },
    {
        id: "premium",
        name: "Premium",
        img: "assets/donate/premium.png",
        description: "Вже краще, чим silver.",
        plans: [
            { id: "forever", label: "Назавжди", price: 39 },
            { id: "90",      label: "90 днів", price: 26 },
            { id: "30",      label: "30 днів", price: 20 }
        ]
    },
    {
        id: "light",
        name: "Light",
        img: "assets/donate/light.png",
        description: "Нові можливості.",
        plans: [
            { id: "forever", label: "Назавжди", price: 49 },
            { id: "90",      label: "90 днів", price: 33 },
            { id: "30",      label: "30 днів", price: 25 }
        ]
    },
    {
        id: "shadow",
        name: "Shadow",
        img: "assets/donate/shadow.png",
        description: "Будь темним і захищеним.",
        plans: [
            { id: "forever", label: "Назавжди", price: 59 },
            { id: "90",      label: "90 днів", price: 39 },
            { id: "30",      label: "30 днів", price: 30 }
        ]
    },
    {
        id: "tuner",
        name: "Tuner",
        img: "assets/donate/tuner.png",
        description: "Будь професійним ремонтером предметів.",
        plans: [
            { id: "forever", label: "Назавжди", price: 79 },
            { id: "90",      label: "90 днів", price: 53 },
            { id: "30",      label: "30 днів", price: 40 }
        ]
    },
    {
        id: "bash",
        name: "Bash",
        img: "assets/donate/bash.png",
        description: "О, тепер можна тепатись.",
        plans: [
            { id: "forever", label: "Назавжди", price: 89 },
            { id: "90",      label: "90 днів", price: 59 },
            { id: "30",      label: "30 днів", price: 45 }
        ]
    },
    {
        id: "monster",
        name: "Monster",
        img: "assets/donate/monster.png",
        description: "Ну тут я думаю пояснювати не треба.",
        plans: [
            { id: "forever", label: "Назавжди", price: 109 },
            { id: "90",      label: "90 днів", price: 73 },
            { id: "30",      label: "30 днів", price: 55 }
        ]
    },
    {
        id: "jersie",
        name: "Jersie",
        img: "assets/donate/jersie.png",
        description: "Пиши оголошення, грай на повну катушку!",
        plans: [
            { id: "forever", label: "Назавжди", price: 129 },
            { id: "90",      label: "90 днів", price: 86 },
            { id: "30",      label: "30 днів", price: 65 }
        ]
    },
    {
        id: "divine",
        name: "Divine",
        img: "assets/donate/divine.png",
        description: "Ну тут самий сок.",
        plans: [
            { id: "forever", label: "Назавжди", price: 179 },
            { id: "90",      label: "90 днів", price: 119 },
            { id: "30",      label: "30 днів", price: 90 }
        ]
    },
    {
        id: "horizon",
        name: "Horizon",
        img: "assets/donate/horizon.png",
        description: "Оу єа, головний донат, похвастайся перед власником!",
        plans: [
            { id: "forever", label: "Назавжди", price: 250 },
            { id: "90",      label: "90 днів", price: 166 },
            { id: "30",      label: "30 днів", price: 125 }
        ]
    }
];

const otherProducts = [
    {
        id: "case_basic",
        name: "Звичайний донат кейс",
        img: "assets/donate/case_basic.png",
        description: "Усі донати до 30 днів.",
        plans: [
            { id: "one",  label: "1 кейс",  price: 22 },
            { id: "two",  label: "2 кейса", price: 44 },
            { id: "five", label: "5 кейсів", price: 110 }
        ]
    },
    {
        id: "case_super",
        name: "Супер донат кейс",
        img: "assets/donate/case_super.png",
        description: "А тут вже всі донати до 90 днів!",
        plans: [
            { id: "one",  label: "1 кейс",  price: 59 },
            { id: "two",  label: "2 кейса", price: 118 },
            { id: "five", label: "5 кейсів", price: 295 }
        ]
    },
    {
        id: "case_mega",
        name: "Мега донат кейс",
        img: "assets/donate/case_mega.png",
        description: "А тут вже усі донати НАЗАВЖДИ!",
        plans: [
            { id: "one",  label: "1 кейс",  price: 95 },
            { id: "two",  label: "2 кейса", price: 190 },
            { id: "five", label: "5 кейсів", price: 475 }
        ]
    },
    {
        id: "horiz",
        name: "Хоризки (валюта)",
        img: "assets/donate/horiz.png",
        description: "З їхньою допомогою можна придбати багато крутих речей.",
        plans: [
            { id: "100",  label: "100 хоризок",  price: 10 },
            { id: "500",  label: "500 хоризок",  price: 50 },
            { id: "1000", label: "1000 хоризок", price: 100 }
        ]
    }
];

let cart = [];

/* =======================================================
   РЕНДЕР КАРТОЧКИ
   ======================================================= */

function renderProductHTML(prod) {
    return `
        <div class="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-xl flex flex-col">
            <img src="${prod.img}"
                 alt="${prod.name}"
                 class="w-full h-40 object-contain mb-4 rounded-lg bg-gray-900">

            <h3 class="text-xl font-bold text-blue-300 mb-1">${prod.name}</h3>
            <p class="text-gray-300 text-sm mb-4">${prod.description}</p>

            <div class="relative mb-4">
                <button
                    class="dropdown-btn w-full bg-gray-900 border border-gray-700 text-gray-300 py-2 px-3 rounded-lg flex justify-between items-center hover:bg-gray-700 transition text-sm"
                    data-id="${prod.id}">
                    Виберіть тариф
                    <i class="fa-solid fa-chevron-down ml-2 text-xs"></i>
                </button>

                <div class="dropdown-menu absolute left-0 right-0 bg-gray-900 border border-gray-700 rounded-lg mt-2 hidden z-20">
                    ${prod.plans.map(p => `
                        <button class="dropdown-option w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 transition text-sm"
                                data-id="${prod.id}"
                                data-plan="${p.id}">
                            ${p.label} — ${p.price}₴
                        </button>
                    `).join("")}
                </div>
            </div>

            <button
                class="add-to-cart-btn mt-auto bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold text-sm transition"
                data-id="${prod.id}">
                Додати в кошик
            </button>
        </div>
    `;
}

function renderSection(products) {
    return products.map(renderProductHTML).join("");
}

/* =======================================================
   DROPDOWNS
   ======================================================= */

function setupDropdowns() {
    // открытие/закрытие
    document.querySelectorAll(".dropdown-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const menu = btn.parentElement.querySelector(".dropdown-menu");
            menu.classList.toggle("hidden");
        });
    });

    // выбор тарифа
    document.querySelectorAll(".dropdown-option").forEach(opt => {
        opt.addEventListener("click", () => {
            const id = opt.dataset.id;
            const plan = opt.dataset.plan;
            const label = opt.textContent.trim();

            const btn = document.querySelector(`.dropdown-btn[data-id="${id}"]`);
            if (!btn) return;

            btn.dataset.selectedPlan = plan;
            btn.innerHTML = `${label} <i class="fa-solid fa-chevron-up ml-2 text-xs"></i>`;

            opt.closest(".dropdown-menu").classList.add("hidden");
        });
    });

    // клик вне меню -> закрыть
    document.addEventListener("click", (e) => {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            const btn = menu.parentElement.querySelector(".dropdown-btn");
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.add("hidden");
            }
        });
    });
}

/* =======================================================
   КОРЗИНА
   ======================================================= */

function updateCart() {
    const itemsEl = document.getElementById("cart-items");
    const emptyEl = document.getElementById("cart-empty");
    const totalEl = document.getElementById("cart-total");
    const payBtn = document.getElementById("pay-btn");

    itemsEl.innerHTML = "";

    if (!cart.length) {
        emptyEl.classList.remove("hidden");
        itemsEl.classList.add("hidden");
        totalEl.textContent = "0₴";
        payBtn.disabled = true;
        return;
    }

    emptyEl.classList.add("hidden");
    itemsEl.classList.remove("hidden");
    payBtn.disabled = false;

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.className = "bg-gray-900 border border-gray-700 rounded-lg p-3 flex justify-between items-center";

        li.innerHTML = `
            <div>
                <div class="font-semibold text-sm">${item.name}</div>
                <div class="text-gray-400 text-xs">${item.plan}</div>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-green-400 font-bold text-sm">${item.price}₴</span>
                <button data-remove="${index}" class="text-red-400 hover:text-red-300 text-xs">
                    Видалити
                </button>
            </div>
        `;

        itemsEl.appendChild(li);
    });

    totalEl.textContent = total + "₴";

    // кнопки удаления
    itemsEl.querySelectorAll("[data-remove]").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = Number(btn.dataset.remove);
            cart.splice(idx, 1);
            updateCart();
        });
    });
}

/* =======================================================
   ADD TO CART
   ======================================================= */

function setupAddToCartButtons() {
    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;

            const prod = [...donateProducts, ...otherProducts].find(p => p.id === id);
            if (!prod) return;

            const dropdownBtn = document.querySelector(`.dropdown-btn[data-id="${id}"]`);
            const planID = dropdownBtn?.dataset.selectedPlan;

            if (!planID) {
                alert("Виберіть тариф!");
                return;
            }

            const planObj = prod.plans.find(p => p.id === planID);
            if (!planObj) return;

            cart.push({
                name: prod.name,
                plan: planObj.label,
                price: planObj.price
            });

            updateCart();
        });
    });
}

/* =======================================================
   ОПЛАТА В TELEGRAM
   ======================================================= */

function handlePayClick() {
    if (!cart.length) return;

    // build summary text and total
    let summary = "Заказ товарів на сервері RightHorizon:\n\n";
    cart.forEach(item => {
        summary += `• ${item.name} (${item.plan}) — ${item.price}₴\n`;
    });
    const total = cart.reduce((sum, i) => sum + i.price, 0);
    summary += `\nВсього: ${total}₴\n\n`;

    // ensure only one modal exists
    const existing = document.getElementById("pay-modal");
    if (existing) existing.remove();

    // helper to escape HTML for safe insertion into <pre>
    const escapeHtml = str =>
        str.replaceAll("&", "&amp;")
           .replaceAll("<", "&lt;")
           .replaceAll(">", "&gt;")
           .replaceAll('"', "&quot;")
           .replaceAll("'", "&#039;");

    // prevent background scroll and avoid layout shift (store previous state)
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // modal outer wrapper (covers entire viewport)
    const modal = document.createElement("div");
    modal.id = "pay-modal";
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.zIndex = "9999";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.padding = "20px"; // small viewport padding for mobile

    // inner HTML: overlay + centered dialog (dialog positioned relative to wrapper)
    modal.innerHTML = `
        <div id="pay-overlay" style="position:absolute;inset:0;background:rgba(17,24,39,0.85);backdrop-filter:blur(4px);"></div>
        <div id="pay-dialog" class="relative bg-gray-800 text-gray-100 rounded-lg p-6 w-full max-w-xl shadow-xl"
             style="transform:translateY(0); z-index:10; box-shadow:0 10px 40px rgba(0,0,0,0.6);">
            <h3 class="text-xl font-bold mb-3">Підтвердження замовлення</h3>

            <pre id="pay-summary" class="whitespace-pre-wrap bg-gray-900 text-sm p-3 rounded mb-4" style="max-height:220px;overflow:auto">${escapeHtml(summary)}</pre>

            <label class="text-sm block mb-2">Ваш коментар (необов'язково):
                <textarea id="pay-comment" class="w-full mt-1 p-2 rounded bg-gray-900 text-sm text-gray-100" rows="3" placeholder="Коментар..."></textarea>
            </label>

            <label class="text-sm block mb-4">Нік на сервері:
                <input id="pay-nick" class="w-full mt-1 p-2 rounded bg-gray-900 text-sm text-gray-100" placeholder="Ваш нік...">
            </label>

            <div class="flex justify-end gap-3">
                <button id="pay-cancel" class="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-sm">Скасувати</button>
                <button id="pay-send" class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm">Відправити</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const overlay = document.getElementById("pay-overlay");
    const dialog = document.getElementById("pay-dialog");

    const cleanup = () => {
        document.removeEventListener("keydown", onKeyDown);
        // restore scroll / padding state
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overflow = prevBodyOverflow;
        document.body.style.paddingRight = prevBodyPaddingRight;
        modal.remove();
    };

    const onKeyDown = (e) => {
        if (e.key === "Escape") cleanup();
    };
    document.addEventListener("keydown", onKeyDown);

    // clicking overlay closes modal (clicks inside dialog won't close)
    overlay.addEventListener("click", cleanup);

    const sendBtn = modal.querySelector("#pay-send");
    const cancelBtn = modal.querySelector("#pay-cancel");

    sendBtn.addEventListener("click", () => {
        const commentInput = modal.querySelector("#pay-comment").value.trim();
        const nickInput = modal.querySelector("#pay-nick").value.trim();

        let finalText = summary;
        finalText += "Ваш коментар: " + (commentInput ? commentInput : "-") + "\n\n";
        finalText += "Нік на сервері: " + (nickInput ? nickInput : "-");

        const tgUser = "LastGrossMB";
        window.open(`https://t.me/${tgUser}?text=${encodeURIComponent(finalText)}`, "_blank");

        cleanup();
    });

    cancelBtn.addEventListener("click", cleanup);

    // make sure dialog receives initial focus for accessibility
    dialog.setAttribute("tabindex", "-1");
    dialog.focus();
}

/* =======================================================
   НАВ МЕНЮ
   ======================================================= */

function setupNav() {
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}

/* =======================================================
   INIT
   ======================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // рендер карточек
    const donateContainer = document.getElementById("donate-section");
    const otherContainer  = document.getElementById("other-section");

    donateContainer.innerHTML = renderSection(donateProducts);
    otherContainer.innerHTML  = renderSection(otherProducts);

    setupDropdowns();
    setupAddToCartButtons();
    updateCart();
    setupNav();

    const payBtn = document.getElementById("pay-btn");
    payBtn.addEventListener("click", handlePayClick);
});
