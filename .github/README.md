<p align="center">
  <img src="assets/nosus-banner.svg" alt="NO SUS" width="640">
</p>

<p align="center"><b>Your files on every screen. Send them so they can't leak.</b></p>

<p align="center">
  <a href="https://github.com/https-shubhamsahu/nosus-app/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/https-shubhamsahu/nosus-app?style=flat-square&color=000000&label=release"></a>
  <a href="https://github.com/https-shubhamsahu/nosus-app/releases"><img alt="APK downloads" src="https://img.shields.io/github/downloads/https-shubhamsahu/nosus-app/total?style=flat-square&color=000000&label=APK%20downloads"></a>
  <a href="https://play.google.com/apps/testing/foo.nosus.app"><img alt="Google Play beta" src="https://img.shields.io/badge/Google%20Play-beta-000000?style=flat-square&logo=googleplay&logoColor=white"></a>
  <img alt="Android 7.0 and up" src="https://img.shields.io/badge/Android-7.0%2B-000000?style=flat-square&logo=android&logoColor=white">
  <a href="https://app.nosus.foo"><img alt="Web app" src="https://img.shields.io/badge/web-app.nosus.foo-000000?style=flat-square"></a>
</p>

## Get it

**Google Play (closed beta).** Join the tester group at [nosus.foo/beta](https://nosus.foo/beta), then opt in here: [play.google.com/apps/testing/foo.nosus.app](https://play.google.com/apps/testing/foo.nosus.app).

**Direct APK.** Download `app-release.apk` from [Releases](https://github.com/https-shubhamsahu/nosus-app/releases/latest). Check it before you install:

```sh
sha256sum app-release.apk
apksigner verify --print-certs app-release.apk
```

| | |
|---|---|
| v1.6.0 APK SHA-256 | `fed694b4afbff020326997ade86fc5e978153d01bd1e05467215e85f33af610e` |
| Signing certificate SHA-256 | `9b4ca036eae243470ec4ff7d6105c2ab73d568360c7d297c679ea9303656f1af` |

The APK hash changes every release (each release page lists it next to the file). The certificate never changes. If it doesn't match, don't install.

**Web.** [app.nosus.foo](https://app.nosus.foo), no install.

## What it does

**NO SUS Chat.** Your own space for files, on your phone and every screen you sign in on, plus chats with your groups. Files open in a protected viewer with your name watermarked on them.

**Send, three ways.**
- **Burn**: the file opens once, then it's gone.
- **Watermarked link**: anyone can open it, no account needed, with their name on every page.
- **Canary**: every copy is traceable, so if it leaks you can see whose copy it was.

**Opens any PDF** *(from 1.7.0)*. Pick NO SUS in Android's "Open with", then share it safely from there.

From 1.7.0 the app is two tabs, **Chat** and **Send**, and sign-in is Google only.

## What it does not do

- **It can't block screenshots in a browser.** The Android app blocks them. A web page can't, and we won't pretend otherwise.
- **The 2-digit code has a cost.** While a short code is live, the key is held on our server too, until the code is used or for up to 20 minutes.
- **Watermarked links aren't end-to-end encrypted.** Treat them like any cloud share. Burn files are the ones encrypted on your device.

## Privacy

No ads. No selling your data. Delete your account from inside the app.

[Privacy policy](https://nosus.foo/privacy.html) · [Delete your account](https://nosus.foo/account-deletion.html)

## Security reports

Found a hole? Email the address in [nosus.foo/.well-known/security.txt](https://nosus.foo/.well-known/security.txt), currently `shubhamsahu9372580326@gmail.com`. Include what you found, the steps to reproduce it, the app version or URL, and what an attacker could do with it. Please don't post it publicly until it's fixed.

---

Source is private. This repository holds build output: the web app served at app.nosus.foo and the signed APKs on Releases. Not open source; all rights reserved.

© 2026 Shubham Sahu (NO SUS) · [nosus.foo](https://nosus.foo)
