<h1 align="center">NO SUS</h1>

<p align="center"><b>Self-destruct note or file by one-time link: burn after reading, then it's gone.</b></p>

<p align="center">
  <a href="https://github.com/https-shubhamsahu/nosus-app/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/https-shubhamsahu/nosus-app?style=flat-square&color=000000&label=release"></a>
  <a href="https://github.com/https-shubhamsahu/nosus-app/releases"><img alt="APK downloads" src="https://img.shields.io/github/downloads/https-shubhamsahu/nosus-app/total?style=flat-square&color=000000&label=APK%20downloads"></a>
  <a href="https://play.google.com/store/apps/details?id=foo.nosus.app"><img alt="Get it on Google Play" src="https://img.shields.io/badge/Google%20Play-free-000000?style=flat-square&logo=googleplay&logoColor=white"></a>
  <img alt="Android 7.0 and up" src="https://img.shields.io/badge/Android-7.0%2B-000000?style=flat-square&logo=android&logoColor=white">
  <a href="https://app.nosus.foo"><img alt="Web app" src="https://img.shields.io/badge/web-app.nosus.foo-000000?style=flat-square"></a>
</p>

## Get it

**Google Play.** Free: [play.google.com/store/apps/details?id=foo.nosus.app](https://play.google.com/store/apps/details?id=foo.nosus.app).

**Direct APK.** Download `app-release.apk` from [Releases](https://github.com/https-shubhamsahu/nosus-app/releases/latest). Check it before you install:

```sh
sha256sum app-release.apk
apksigner verify --print-certs app-release.apk
```

| | |
|---|---|
| v1.1.11 APK SHA-256 | `6de873b17c49c046b9c505895521d530d4a1e66de0bd6a2d06135623af9d15ca` |
| Signing certificate SHA-256 | `9b4ca036eae243470ec4ff7d6105c2ab73d568360c7d297c679ea9303656f1af` |

The APK hash changes every release (each release page lists it next to the file). The certificate never changes. If it doesn't match, don't install.

**Web.** [app.nosus.foo](https://app.nosus.foo), no install.

## What it does

**NO SUS Chat.** Your own chat for files, kept on your phone or in your own Google Drive, and it opens on any screen from your domain. Plus invite-only groups with roles and an activity log.

**Send, three ways.**
- **Burn (one open)**: the note or file opens once, then it's gone. A 6-digit code works too.
- **See when it was opened**: one-open links you sent show Opened or Not opened, never who opened them.
- **Watermarked link**: anyone can open it, no account needed, with their name on every page.
- **Canary**: every copy is traceable, so if it leaks you can see whose copy it was.

**PDF reader.** Pick NO SUS in Android's "Open with" to read PDFs with search and dark reading, then share it from there.

The app has two tabs, **Chat** and **Send**. You can try it without an account. New accounts sign in with Google; older email and GitHub accounts still work.

## What it does not do

- **It can't block screenshots in a browser.** The Android app blocks them. A web page can't, and we won't pretend otherwise.
- **The 6-digit code has a cost.** A code works once, for up to 10 minutes. While it is live, a copy of the key is held on our server, until the code is used or expires.
- **Watermarked links aren't end-to-end encrypted.** Treat them like any cloud share. Burn files are the ones encrypted on your device.

## Privacy

No ads. No selling your data. Delete your account from inside the app.

[Privacy policy](https://nosus.foo/privacy.html) · [Delete your account](https://nosus.foo/account-deletion.html)

## Security reports

Found a hole? Email the address in [nosus.foo/.well-known/security.txt](https://nosus.foo/.well-known/security.txt), currently `shubhamsahu@nosus.foo`. Include what you found, the steps to reproduce it, the app version or URL, and what an attacker could do with it. Please don't post it publicly until it's fixed.

---

Source is private. This repository holds build output: the web app served at app.nosus.foo and the signed APKs on Releases. Not open source; all rights reserved.

© 2026 Shubham Sahu (NO SUS) · [nosus.foo](https://nosus.foo)
