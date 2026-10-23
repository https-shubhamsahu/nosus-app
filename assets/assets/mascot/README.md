# Mascot assets

**Status (1.1.7):** the Rive runtime is removed. No `.riv` file was ever authored, and the old
`rive` 0.13 package shipped `librive_text.so` with 4 KB alignment, which Google Play flags as
"Does not support 16 KB" and which blocks the production release. `MascotView` now draws Nox in
code, the Duo as `assets/icon/LuxandNox.png`, and solo Lux as the call site's `fallback`.

If real animation art arrives: add a 16 KB-ready runtime (`rive_native` / rive 0.14+), restore the
loader in `lib/core/mascot/mascot_view.dart` (git history before 1.1.7), and check the uploaded
bundle in Play Console → App bundle explorer → "Memory page size" before shipping.

The spec the art should follow (kept for that day):

Drop the authored Rive files here with these exact names — `MascotView` (see
`lib/core/mascot/mascot_view.dart`) looks them up by convention:

- `lux.riv`
- `nox.riv`
- `duo.riv`

Each file must expose a State Machine named `SM` with:

- a `Number` input named `stateIndex` (see `MascotMood` order in
  `lib/core/mascot/mascot_state.dart` for the index mapping)
- a `Boolean` input named `reducedMotion` (when true, the artboard should hold on its
  Idle frame regardless of `stateIndex`)

Until a given file exists, `MascotView` falls back automatically (see its `placeHolder`) —
solo Lux/Nox render nothing, and the duo placeholder renders the static
`assets/icon/LuxandNox.png` mark. No code changes are needed when the real files are added,
just drop them in.

See `MASCOT_GUIDE.md` (repo root) for the full animation spec.
