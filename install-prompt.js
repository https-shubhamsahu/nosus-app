// Install NO SUS from the browser, on every platform without a store app.
//
// Android has the Play app (index.html's "Open in the app" bar handles it), so
// this prompt never shows there. Elsewhere it picks what the browser can do:
//  - Chrome / Edge / Brave on Windows, Mac, Linux: the browser's own install
//    dialog, from beforeinstallprompt. No event, no prompt.
//  - Safari on iPhone and iPad: steps (Share, then Add to Home Screen). Since
//    iOS 26 a site added this way opens full-screen as a web app.
//  - Safari 17+ on the Mac: steps (File, then Add to Dock).
//  - Firefox, other iPhone browsers and in-app browsers: nothing, since they
//    can't install a site (or we can't name the steps for sure).
// It never shows inside the installed app, on one-open link viewers, or on a
// sign-in callback, and it waits for the first frame, so it can't get in the
// way of opening a link. Dismissed: quiet for 30 days. Any error: no prompt,
// the app boots as normal.
(function (w) {
  'use strict';

  /** Pure: which prompt this browser gets. 'chromium' still needs the event. */
  function installKind(ua, touchPoints) {
    ua = String(ua || '');
    if (/Android/i.test(ua)) return 'none';
    var apple = /\b(iPhone|iPad|iPod)\b/.test(ua) || (/Macintosh/.test(ua) && touchPoints > 1);
    if (apple) {
      // Only Safari itself: other iPhone browsers and in-app web views differ.
      if (/CriOS|FxiOS|EdgiOS|OPiOS|OPT\/|GSA\/|DuckDuckGo|Instagram|FBAN|FBAV|Line\/|Snapchat|Twitter|LinkedInApp/.test(ua)) return 'none';
      return /Version\/\d+.*Safari\//.test(ua) ? 'ios' : 'none';
    }
    if (/Firefox\/|FxiOS/.test(ua)) return 'none';
    if (/Macintosh/.test(ua) && /Version\/(\d+).*Safari\//.test(ua) && !/Chrome\/|Chromium\/|Edg\//.test(ua)) {
      return parseInt(/Version\/(\d+)/.exec(ua)[1], 10) >= 17 ? 'mac-safari' : 'none';
    }
    if (/Chrome\/|Chromium\/|Edg\//.test(ua)) return 'chromium';
    return 'none';
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { installKind: installKind };
    return;
  }

  try {
    var nav = w.navigator;
    var kind = installKind(nav.userAgent, nav.maxTouchPoints || 0);
    if (kind === 'none') return;
    if (w.self !== w.top) return;
    var standalone = nav.standalone === true ||
      (w.matchMedia && w.matchMedia('(display-mode: standalone)').matches) ||
      (w.matchMedia && w.matchMedia('(display-mode: window-controls-overlay)').matches);
    if (standalone) return;
    var l = w.location, h = l.hash || '', s = l.search || '';
    if (/^#\/?(go|burn|burnfile|burnfiles|redeem|v|join)\//.test(h)) return;
    if (/[?&]code=/.test(s) || /(access_token|refresh_token|error_description|type=recovery)/.test(h)) return;

    var KEY = 'nosus_install_dismissed';
    var store = null;
    try { store = w.localStorage; } catch (e) {}
    function quiet() {
      try {
        var at = store && Number(store.getItem(KEY));
        return !!at && Date.now() - at < 30 * 24 * 3600 * 1000;
      } catch (e) { return false; }
    }
    function hush() { try { if (store) store.setItem(KEY, String(Date.now())); } catch (e) {} }
    if (quiet()) return;

    var deferred = null;
    var painted = false;
    var bar = null;

    w.addEventListener('beforeinstallprompt', function (event) {
      event.preventDefault();
      deferred = event;
      maybeShow();
    });
    w.addEventListener('appinstalled', function () { hush(); close(); });
    w.addEventListener('flutter-first-frame', function () {
      w.setTimeout(function () { painted = true; maybeShow(); }, 4000);
    }, { once: true });

    var copy = {
      chromium: { text: 'Install NO SUS on this computer. It opens in its own window.', button: 'Install' },
      ios: { text: 'Add NO SUS to your Home Screen: tap Share <svg aria-hidden="true" width="14" height="17" viewBox="0 0 14 17" style="vertical-align:-3px"><path d="M7 1v10M3.5 4.5 7 1l3.5 3.5M4.5 7H2v9h10V7H9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>, then Add to Home Screen.', button: 'Got it' },
      'mac-safari': { text: 'Add NO SUS to your Dock: in Safari, choose File, then Add to Dock.', button: 'Got it' }
    };

    function close() { if (bar) { bar.remove(); bar = null; } }

    function maybeShow() {
      if (bar || !painted || quiet() || !document.body) return;
      if (kind === 'chromium' && !deferred) return;
      var c = copy[kind];
      bar = document.createElement('div');
      bar.setAttribute('role', 'region');
      bar.setAttribute('aria-label', 'Install NO SUS');
      bar.style.cssText = 'position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));' +
        'margin:0 auto;max-width:520px;z-index:999998;display:flex;align-items:center;gap:8px;' +
        'padding:10px 10px 10px 16px;border-radius:14px;background:#F7F5EE;color:#1F2433;' +
        'font:500 14px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.35)';
      bar.innerHTML = '<span style="flex:1">' + c.text + '</span>' +
        '<button type="button" data-act="go" style="background:#1F2433;color:#F7F5EE;border:0;padding:10px 16px;border-radius:10px;font:600 14px ui-sans-serif,system-ui,-apple-system,sans-serif;min-height:44px;cursor:pointer;white-space:nowrap">' + c.button + '</button>' +
        '<button type="button" data-act="x" aria-label="Dismiss" style="background:none;border:0;font-size:20px;line-height:1;padding:8px;min-width:44px;min-height:44px;color:#1F2433;cursor:pointer">×</button>';
      bar.addEventListener('click', function (e) {
        var act = e.target && e.target.closest && e.target.closest('button');
        if (!act) return;
        if (act.getAttribute('data-act') === 'go' && kind === 'chromium' && deferred) {
          var p = deferred;
          deferred = null;
          close();
          p.prompt();
          p.userChoice.then(function (r) { if (r && r.outcome === 'accepted') hush(); }, function () {});
          return;
        }
        hush();
        close();
      });
      document.body.appendChild(bar);
    }
  } catch (e) {}
})(typeof window !== 'undefined' ? window : this);
