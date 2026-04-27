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
      story_hero_title: 'The Origin of Silence',
      error_contact_required: 'Please enter your contact details.',
      error_email_invalid: 'Enter a valid email address.',
      error_whatsapp_format: 'Enter a WhatsApp number with country code (at least 8 digits).',
      error_telegram_required: 'Enter a Telegram username or a valid t.me link.',
      error_telegram_invalid: 'Enter a valid Telegram username (5–32 characters) or https link.',
      error_instagram_invalid: 'Enter a valid Instagram handle.',
      error_channel_required: 'Choose how we should reach you.',
      form_submit_ok: 'Request initiated. Completing handoff in your chosen channel.',
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
      nav_bespoke: 'Bespoke',
      nav_story: 'История',
      hero_title: 'Соберите свой артефакт',
      hero_subtitle:
        'Bespoke-ритуал сдержанного желания. Соедините геометрию, интенсивность и деталь в одном намерении.',
      step1_title: 'Форма',
      form_ingot_title: 'Слиток',
      form_ingot_desc: 'Скульптурный, непоколебимый силуэт.',
      form_pulse_title: 'Пульс',
      form_pulse_desc: 'Плавная, внятная эргономика.',
      form_heart_title: 'Сердце',
      form_heart_desc: 'Собранное, концентрированное ядро.',
      step2_title: 'Интенсивность ботанического слоя',
      intensity_subtle_title: 'Едва слышно',
      intensity_subtle_desc: 'Шёпот трав — без громких заявлений.',
      intensity_elevated_title: 'Выше базы',
      intensity_elevated_desc: 'Сбалансированное, выразительное погружение.',
      intensity_profound_title: 'Полный спектр',
      intensity_profound_note: '(инфузия 1 000 мг, каннабис)',
      intensity_profound_desc: 'Полная отдача ботаническому спектру.',
      step3_title: 'Персональная гравировка',
      engraving_label: 'Гравировка (по желанию)',
      engraving_placeholder: 'Тихий знак на основании.',
      btn_submit: 'ОТПРАВИТЬ ЗАПРОС',
      step4_title: 'Связь с консьержем',
      contact_channel_label: 'Канал',
      contact_label_telegram: 'Имя в Telegram или ссылка',
      contact_label_instagram: 'Ник в Instagram',
      contact_label_whatsapp: 'Номер WhatsApp (с кодом страны)',
      contact_label_email: 'E-mail',
      contact_error_invalid: 'Введите корректные данные для выбранного канала.',
      story_hero_title: 'Происхождение тишины',
      error_contact_required: 'Укажите контакт.',
      error_email_invalid: 'Введите корректный e-mail.',
      error_whatsapp_format: 'Введите номер WhatsApp с кодом страны (не менее 8 цифр).',
      error_telegram_required: 'Введите ник в Telegram или рабочую ссылку t.me.',
      error_telegram_invalid: 'Корректный ник Telegram (5–32 символа) или https-ссылка.',
      error_instagram_invalid: 'Корректный ник в Instagram.',
      error_channel_required: 'Выберите, как с вами связаться.',
      form_submit_ok: 'Запрос принят. Сейчас откроем выбранный канал.',
      footer_copyright: '© 2026 SHMALEON. ТОЛЬКО ПО ПРИГЛАШЕНИЮ.',
      footer_social_ig: 'Instagram',
      footer_social_tg: 'Telegram',
      footer_social_wa: 'WhatsApp',
      footer_legal: 'Правовая информация',
      footer_privacy: 'Конфиденциальность',
      footer_compliance: 'Комплаенс',
    },
    th: {
      nav_collection: 'คอลเลกชัน',
      nav_bespoke: 'Bespoke',
      nav_story: 'เรื่องราว',
      hero_title: 'ออกแบบอาร์ติแฟกต์ของคุณ',
      hero_subtitle:
        'จังหวะแห่งความต้องการที่รู้จักกลั้น จับคู่รูปทรง ระดับสารสกัด และรายละเอียดให้สอดคล้องกับคุณเท่านั้น',
      step1_title: 'เลือกรูปทรง',
      form_ingot_title: 'แท่ง',
      form_ingot_desc: 'สง่า ตรงกราย ทรงพลัง',
      form_pulse_title: 'จังหวะ',
      form_pulse_desc: 'โค้งมน พอดีมือ ลื่นเงียบ',
      form_heart_title: 'แกนกลาง',
      form_heart_desc: 'อบอุ่น ฉาด ลึก',
      step2_title: 'ความเข้มของสารสกัดพืช',
      intensity_subtle_title: 'เอื่อยเบา',
      intensity_subtle_desc: 'กลิ่นอายพืชแผ่วเบา แทบกระซิบ',
      intensity_elevated_title: 'กลางถึงเข้ม',
      intensity_elevated_desc: 'มิติชัด สมดุล ไม่รุก',
      intensity_profound_title: 'เต็มสเปกตรัม',
      intensity_profound_note: '(น้ำมันชง กัญชา 1,000 มก.)',
      intensity_profound_desc: 'มอบทั้งมิติสมุนไพร ไร้กั๊ก',
      step3_title: 'จารึกเฉพาะคุณ',
      engraving_label: 'สลักข้อความ (ถ้าต้องการ)',
      engraving_placeholder: 'อักขระเงียบ ๆ บนฐาน',
      btn_submit: 'ส่งคำขอ',
      step4_title: 'ติดต่อคอนเซียร์จ',
      contact_channel_label: 'ช่องทาง',
      contact_label_telegram: 'ชื่อผู้ใช้หรือลิงก์ Telegram',
      contact_label_instagram: 'บัญชี Instagram',
      contact_label_whatsapp: 'เบอร์ WhatsApp (รวมรหัสประเทศ)',
      contact_label_email: 'อีเมล',
      contact_error_invalid: 'กรุณาใส่ข้อมูลให้ตรงกับช่องทางนี้',
      story_hero_title: 'กำเนิดแห่งความเงียบ',
      error_contact_required: 'กรุณาใส่ข้อมูลติดต่อ',
      error_email_invalid: 'อีเมลไม่ถูกต้อง',
      error_whatsapp_format: 'กรุณาใส่เบอร์พร้อมรหัสประเทศ (อย่างน้อย 8 หลัก)',
      error_telegram_required: 'กรุณาใส่ชื่อ Telegram หรือลิงก์ t.me ที่ใช้ได้',
      error_telegram_invalid: 'ชื่อ Telegram ที่ถูกต้อง (5–32 ตัวอักษร) หรือ https',
      error_instagram_invalid: 'ชื่อ Instagram ไม่ถูกต้อง',
      error_channel_required: 'เลือกวิธีติดต่อ',
      form_submit_ok: 'รับคำขอแล้ว กำลังเปิดช่องทางที่คุณเลือก',
      footer_copyright: '© 2026 SHMALEON สำหรับผู้ได้รับเชิญเท่านั้น',
      footer_social_ig: 'Instagram',
      footer_social_tg: 'Telegram',
      footer_social_wa: 'WhatsApp',
      footer_legal: 'ข้อกฎหมาย',
      footer_privacy: 'ความเป็นส่วนตัว',
      footer_compliance: 'การปฏิบัติตามกฎ',
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

  function shmHydrateImageAlts() {
    document.querySelectorAll('img[data-alt]').forEach(function (img) {
      var d = img.getAttribute('data-alt');
      if (d) img.setAttribute('alt', d);
    });
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
    document.querySelectorAll('[data-shm-locale-label]').forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });
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

    shmHydrateImageAlts();
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
  window.shmHydrateImageAlts = shmHydrateImageAlts;
})();
