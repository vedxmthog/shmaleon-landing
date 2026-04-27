/**
 * SHMALEON shared i18n — static keys only, no HTML from user input.
 */
(function () {
  'use strict';

  var SHM_LOCALE_STORAGE_KEY = 'shm_locale';

  var SHM_TRANSLATIONS = {
    en: {
      nav_collection: 'The Collection',
      nav_bespoke: 'Bespoke',
      nav_story: 'The Story',
      hero_title: 'Configure Your Artifact',
      hero_subtitle:
        'A bespoke expression of controlled desire. Shape the elements to your singular intent.',
      step1_title: 'Select Form',
      form_ingot_title: 'The Ingot',
      form_ingot_desc: 'Structured, unyielding presence.',
      form_pulse_title: 'The Pulse',
      form_pulse_desc: 'Fluid, ergonomic resonance.',
      form_heart_title: 'The Heart',
      form_heart_desc: 'Intimate, concentrated core.',
      step2_title: 'Botanical Intensity',
      intensity_subtle_title: 'Subtle',
      intensity_subtle_desc: 'A mere whisper of botanical essence.',
      intensity_elevated_title: 'Elevated',
      intensity_elevated_desc: 'A balanced, distinct immersion.',
      intensity_profound_title: 'Profound',
      intensity_profound_note: '(1,000mg cannabis-infused)',
      intensity_profound_desc: 'Complete surrender to the botanical absolute.',
      step3_title: 'Private Inscription',
      engraving_label: 'Engraving (Optional)',
      engraving_placeholder: 'Silently inscribed on the base.',
      btn_submit: 'INITIATE REQUEST',
      step4_title: 'Concierge Contact',
      contact_channel_label: 'Channel',
      contact_label_telegram: 'Telegram username or link',
      contact_label_instagram: 'Instagram handle',
      contact_label_whatsapp: 'WhatsApp number (with country code)',
      contact_label_email: 'Email address',
      contact_error_invalid: 'Enter a valid value for this channel.',
      footer_copyright: '© 2026 SHMALEON. BY INVITATION ONLY.',
      footer_social_ig: 'Instagram',
      footer_social_tg: 'Telegram',
      footer_social_wa: 'WhatsApp',
      footer_legal: 'Legal',
      footer_privacy: 'Privacy',
      footer_compliance: 'Compliance',
    },
    ru: {
      nav_collection: 'Коллекция',
      nav_bespoke: 'На заказ',
      nav_story: 'История',
      hero_title: 'Настройте свой артефакт',
      hero_subtitle:
        'Индивидуальное выражение контролируемого желания. Сформируйте элементы по своему уникальному замыслу.',
      step1_title: 'Выберите форму',
      form_ingot_title: 'Слиток',
      form_ingot_desc: 'Структурированное, непреклонное присутствие.',
      form_pulse_title: 'Пульс',
      form_pulse_desc: 'Плавный, эргономичный резонанс.',
      form_heart_title: 'Сердце',
      form_heart_desc: 'Интимное, концентрированное ядро.',
      step2_title: 'Ботаническая интенсивность',
      intensity_subtle_title: 'Тонкая',
      intensity_subtle_desc: 'Лишь шепот ботанической сущности.',
      intensity_elevated_title: 'Возвышенная',
      intensity_elevated_desc: 'Сбалансированное, отчетливое погружение.',
      intensity_profound_title: 'Глубокая',
      intensity_profound_note: '(1000 мг каннабиса)',
      intensity_profound_desc: 'Полная капитуляция перед ботаническим абсолютом.',
      step3_title: 'Частная надпись',
      engraving_label: 'Гравировка (опционально)',
      engraving_placeholder: 'Безмолвно выгравировано на основании.',
      btn_submit: 'ИНИЦИИРОВАТЬ ЗАПРОС',
      step4_title: 'Контакт консьержа',
      contact_channel_label: 'Канал',
      contact_label_telegram: 'Имя пользователя или ссылка Telegram',
      contact_label_instagram: 'Имя в Instagram',
      contact_label_whatsapp: 'Номер WhatsApp (с кодом страны)',
      contact_label_email: 'Адрес электронной почты',
      contact_error_invalid: 'Введите корректное значение для этого канала.',
      footer_copyright: '© 2026 SHMALEON. ТОЛЬКО ПО ПРИГЛАШЕНИЮ.',
      footer_social_ig: 'Instagram',
      footer_social_tg: 'Telegram',
      footer_social_wa: 'WhatsApp',
      footer_legal: 'Правовая информация',
      footer_privacy: 'Конфиденциальность',
      footer_compliance: 'Соответствие требованиям',
    },
    th: {
      nav_collection: 'คอลเลกชัน',
      nav_bespoke: 'สั่งทำพิเศษ',
      nav_story: 'เรื่องราว',
      hero_title: 'กำหนดค่าอาร์ติแฟกต์ของคุณ',
      hero_subtitle:
        'การแสดงออกถึงความปรารถนาที่ควบคุมได้ตามสั่ง กำหนดรูปทรงองค์ประกอบตามความตั้งใจเดียวของคุณ',
      step1_title: 'เลือกรูปแบบ',
      form_ingot_title: 'แท่ง',
      form_ingot_desc: 'โครงสร้างที่แข็งแกร่ง ไม่ยอมอ่อนข้อ',
      form_pulse_title: 'ชีพจร',
      form_pulse_desc: 'การสะท้อนที่ลื่นไหลตามหลักสรีรศาสตร์',
      form_heart_title: 'หัวใจ',
      form_heart_desc: 'แก่นแท้ที่ใกล้ชิดและเข้มข้น',
      step2_title: 'ความเข้มข้นของพฤกษชาติ',
      intensity_subtle_title: 'ละเอียดอ่อน',
      intensity_subtle_desc: 'เพียงเสียงกระซิบของพฤกษศาสตร์',
      intensity_elevated_title: 'ยกระดับ',
      intensity_elevated_desc: 'ความดื่มด่ำที่สมดุลและแตกต่าง',
      intensity_profound_title: 'ลึกซึ้ง',
      intensity_profound_note: '(ผสมกัญชา 1,000 มก.)',
      intensity_profound_desc: 'ยอมจำนนต่อความสมบูรณ์แบบทางพฤกษศาสตร์อย่างสมบูรณ์',
      step3_title: 'จารึกส่วนตัว',
      engraving_label: 'การแกะสลัก (ไม่บังคับ)',
      engraving_placeholder: 'จารึกเงียบๆ ที่ฐาน',
      btn_submit: 'เริ่มส่งคำขอ',
      step4_title: 'ติดต่อคอนเซียร์จ',
      contact_channel_label: 'ช่องทาง',
      contact_label_telegram: 'ชื่อผู้ใช้หรือลิงก์ Telegram',
      contact_label_instagram: 'บัญชี Instagram',
      contact_label_whatsapp: 'หมายเลข WhatsApp (รวมรหัสประเทศ)',
      contact_label_email: 'ที่อยู่อีเมล',
      contact_error_invalid: 'กรุณากรอกข้อมูลให้ถูกต้องสำหรับช่องทางนี้',
      footer_copyright: '© 2026 SHMALEON ตามคำเชิญเท่านั้น',
      footer_social_ig: 'Instagram',
      footer_social_tg: 'Telegram',
      footer_social_wa: 'WhatsApp',
      footer_legal: 'กฎหมาย',
      footer_privacy: 'ความเป็นส่วนตัว',
      footer_compliance: 'การปฏิบัติตาม',
    },
  };

  var __shmActiveLocale = 'en';

  function shmNormalizeLang(lang) {
    if (lang === 'en' || lang === 'ru' || lang === 'th') return lang;
    return 'en';
  }

  function shmReadStoredLocale() {
    try {
      if (typeof localStorage === 'undefined') return null;
      var v = localStorage.getItem(SHM_LOCALE_STORAGE_KEY);
      if (v === 'en' || v === 'ru' || v === 'th') return v;
      return null;
    } catch (e) {
      return null;
    }
  }

  function shmPersistLocale(lang) {
    lang = shmNormalizeLang(lang);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(SHM_LOCALE_STORAGE_KEY, lang);
      }
    } catch (e) {
      /* private mode / blocked */
    }
  }

  function shmApplyDocumentLangClass(lang) {
    lang = shmNormalizeLang(lang);
    var el = document.documentElement;
    if (!el) return;
    el.className = String(el.className || '').replace(/\blang-\w+\b/g, '').trim();
    el.classList.add('lang-' + lang);
    el.setAttribute('lang', lang === 'en' ? 'en' : lang === 'ru' ? 'ru' : 'th');
  }

  function shmSyncLangButtons(lang) {
    lang = shmNormalizeLang(lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var target = btn.getAttribute('data-target-lang') || btn.getAttribute('data-lang-btn');
      if (target === lang) {
        btn.classList.add('text-secondary');
        btn.classList.remove('text-neutral-500');
      } else {
        btn.classList.remove('text-secondary');
        btn.classList.add('text-neutral-500');
      }
    });
  }

  function shmApplyLocale(lang) {
    lang = shmNormalizeLang(lang);
    __shmActiveLocale = lang;
    shmApplyDocumentLangClass(lang);

    var table = SHM_TRANSLATIONS[lang] || SHM_TRANSLATIONS.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && table[key] != null) {
        el.textContent = table[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key && table[key] != null) {
        el.setAttribute('placeholder', table[key]);
      }
    });

    shmSyncLangButtons(lang);

    var cur = document.getElementById('current-lang');
    if (cur) cur.textContent = lang.toUpperCase();
    var idxLab = document.getElementById('index-locale-label');
    if (idxLab) idxLab.textContent = lang.toUpperCase();
    var storyLab = document.getElementById('story-locale-label');
    if (storyLab) storyLab.textContent = lang.toUpperCase();

    try {
      if (typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('shm:locale', { detail: { lang: lang } }));
      }
    } catch (e) {
      /* CustomEvent unsupported */
    }
  }

  function shmGetActiveLocale() {
    return __shmActiveLocale;
  }

  /**
   * Sticky user choice (localStorage) wins; else map navigator languages; else 'en'.
   */
  function shmGetInitialLocale() {
    var stored = shmReadStoredLocale();
    if (stored) return stored;
    if (typeof navigator === 'undefined') return 'en';
    var tags = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];
    for (var i = 0; i < tags.length; i++) {
      var tag = String(tags[i] || '').toLowerCase();
      if (tag === 'th' || tag.indexOf('th-') === 0) return 'th';
      if (tag === 'ru' || tag.indexOf('ru-') === 0) return 'ru';
    }
    return 'en';
  }

  window.SHM_LOCALE_STORAGE_KEY = SHM_LOCALE_STORAGE_KEY;
  window.SHM_TRANSLATIONS = SHM_TRANSLATIONS;
  window.shmReadStoredLocale = shmReadStoredLocale;
  window.shmPersistLocale = shmPersistLocale;
  window.shmApplyLocale = shmApplyLocale;
  window.shmGetActiveLocale = shmGetActiveLocale;
  window.shmGetInitialLocale = shmGetInitialLocale;
})();
