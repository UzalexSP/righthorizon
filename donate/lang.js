// ======================= LANG DATA =======================

const LANG_DATA = {
    ru: {
        nav_donate: "Донат",
        nav_rules: "Правила",
        nav_cases: "Кейсы",
        nav_contacts: "Контакты",

        shop_title: "Магазин доната",
        shop_subtitle: "Выбери привилегию, срок действия, добавь в корзину и оплати через Telegram.",

        section_donates: "Донат",
        section_donates_desc: "Ранги и привилегии сервера.",

        section_other: "Прочее",
        section_other_desc: "Кейсы и внутриигровая валюта.",

        cart_title: "Корзина",
        cart_empty: "Корзина пуста. Добавьте товар.",
        cart_total_label: "Итого:",
        cart_pay_btn: "Оплатить",

        payment: "После оплаты указывайте никнейм и чек оплаты продавцу.",
        commision: "ВНИМАНИЕ! Комиссия при потребе банка/других лежит на покупателе, при недостаче средств Вам не будет выдано и вернуто Ваших денег назад, возможен обмен на другой товар из этого магазина.",

        copyright: "© 2025 RightHorizon. Все права защищены.",
        created_by: "Создателем является - DevBX3D Studio",
        site_alpha_mode: "Сайт пока в альфа режиме и ничего еще нету, ждите обновлений. Версия сайта Alpha-0.1693",
        old_site_versions: "Старые версии моих сайтов -> RH_Alpha-0.0412 - RH_Alpha-0.0018",
    },

    uk: {
        nav_donate: "Донат",
        nav_rules: "Правила",
        nav_cases: "Кейси",
        nav_contacts: "Контакти",

        shop_title: "Магазин донату",
        shop_subtitle: "Обери привілеї, строк дії, додай до кошика та оплати через Telegram.",

        section_donates: "Донат",
        section_donates_desc: "Ранги та привілеї сервера.",

        section_other: "Інше",
        section_other_desc: "Кейси та внутрішньоігрова валюта.",

        cart_title: "Кошик",
        cart_empty: "Кошик порожній. Додайте товар.",
        cart_total_label: "Разом:",
        cart_pay_btn: "Оплатити",

        payment: "Після оплати укажіть нікнейм и квитанцію оплати продавцю.",
        commision: "УВАГА! Комісія при потребі банку/інших лежить на покупцеві, при нестачі коштів Вам не буде видано і повернуто Ваших грошей назад, можливий обмін на інший товар з цього магазину.",

        copyright: "© 2025 RightHorizon. Всі права захищені.",
        created_by: "Створений - DevBX3D Studio",
        site_alpha_mode: "Сайт поки в альфа режимі і нічого ще немає, чекайте оновлень. Версія сайту Alpha-0.1693",
        
        products: {
            light: {
                name: "Light",
                desc: "Maximum possibilities."
            },
            silver: {
                name: "Silver",
                desc: "Basic rank for comfortable gameplay.",
        },
    }
    },

    en: {
        nav_donate: "Donate",
        nav_rules: "Rules",
        nav_cases: "Cases",
        nav_contacts: "Contacts",

        shop_title: "Donate Shop",
        shop_subtitle: "Choose a rank, select duration, add to cart and pay via Telegram.",

        section_donates: "Donate",
        section_donates_desc: "Server ranks and privileges.",

        section_other: "Other",
        section_other_desc: "Cases and in-game currency.",

        cart_title: "Cart",
        cart_empty: "Your cart is empty. Add an item.",
        cart_total_label: "Total:",
        cart_pay_btn: "Pay",

        payment: "After payment, provide your nickname and payment receipt to the seller.",
        commision: "ATTENTION! Any bank/other fees are the responsibility of the buyer. If there are insufficient funds, you will not receive the item nor a refund; exchange for another item from this shop may be possible.",

        copyright: "",
        created_by: "",
        site_alpha_mode: "",
        old_site_versions: "",
    }
};
// ======================= APPLY LANG =======================

let LANG = "uk";

function setLang(code) {
    LANG = code;
    localStorage.setItem("lang", code);
    applyLang();
}

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang");
    if (saved) LANG = saved;
    applyLang();
});


// ======================= СМЕНА ЯЗЫКА =======================

function applyLang() {
    const dict = LANG_DATA[LANG];

    // обычные надписи
    document.querySelectorAll("[data-lang-key]").forEach(el => {
        const key = el.dataset.langKey;
        if (dict[key]) el.textContent = dict[key];
    });

    // товары
    document.querySelectorAll("[data-prod]").forEach(el => {
        const id = el.dataset.prod;
        const type = el.dataset.field;

        if (dict.products[id] && dict.products[id][type]) {
            el.textContent = dict.products[id][type];
        }
    });
}


// ======================= ИНИЦИАЛИЗАЦИЯ =======================

document.addEventListener("DOMContentLoaded", () => {
    loadLang();

    // флаги-кнопки
    document.querySelectorAll(".lang-switch").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.set;
            setLang(lang);
        });
    });
});

