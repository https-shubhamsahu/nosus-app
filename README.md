# nosus-app (deployment target)

![Flutter Web](https://img.shields.io/badge/Flutter-Web_Build-02569B?style=flat-square&logo=flutter&logoColor=white)
![Auto-deployed](https://img.shields.io/badge/Auto--deployed-gh--pages-222?style=flat-square&logo=github)

> **This repository is a build artifact, not source code.** It contains the compiled Flutter web output (`no_sus`, currently `v1.2.0`) for the **NON_SUS** app, auto-published here by CI from [`https-shubhamsahu/NON_SUS`](https://github.com/https-shubhamsahu/NON_SUS).

## What's here

- `index.html`, `main.dart.js`, `flutter_bootstrap.js`, `canvaskit/` — compiled Flutter web renderer output
- `assets/` — app assets bundled into the web build
- `account-deletion.html`, `privacy.html`, `terms.html` — static legal/support pages served alongside the app
- `CNAME` — custom domain configuration (`app.nosus.foo`)
- `version.json` — build metadata (`app_name`, `version`, `build_number`)

## Do not edit directly

Changes to this branch are overwritten on every deploy. To change the app, make changes in the [NON_SUS](https://github.com/https-shubhamsahu/NON_SUS) source repository and let its CI/CD pipeline republish here.

## Live app

Served at the custom domain configured in `CNAME`.
