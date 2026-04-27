/**
 * Single source of truth for public footer social links (Instagram, Telegram, WhatsApp).
 * Edit this file only — do not duplicate URL maps in page scripts.
 */
(function () {
  'use strict';
  /**
   * Set to `true` when final brand handles are confirmed; set `false` to hide the
   * three-link footer block on all pages (no dead placeholder URLs in the DOM text).
   */
  window.SHM_SOCIAL_ENABLED = false;
  window.SHMALEON_SOCIAL = {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://t.me/',
    whatsapp: 'https://wa.me/',
  };
})();
