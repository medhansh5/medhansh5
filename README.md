# Medhansh Kabadwal

> *I build software to understand how systems work beneath the surface.*

Student engineer in India focused on microkernel isolation boundaries, deterministic computer vision in C++20, and native desktop tooling.

🌐 **Portfolio:** [medhansh5.github.io/medhansh5](https://medhansh5.github.io/medhansh5/)  
💼 **LinkedIn:** [linkedin.com/in/medhansh80](https://www.linkedin.com/in/medhansh80/)  
📫 **Email:** [medhansh5@proton.me](mailto:medhansh5@proton.me)

---

## Technical Focus

* **Operating Systems & Microkernels:** Capability spaces (`CSpace`), zero ambient authority, synchronous IPC, preemptive IRQ0 timers, and Ring 3 userspace drivers.
* **Low-Level Systems:** Zero-allocation loops, fixed-capacity ring buffers, memory layouts, and safe FFI boundaries in C++20 and Rust.
* **Computer Vision & Edge AI:** On-device 6D head pose estimation (`cv::solvePnP`), facial landmarking, and spatial gaze geometry running locally with zero cloud round-trips.
* **Desktop Architecture:** Window managers, compositors, and OS integrations across Win32, X11, and Wayland.
* **Signal Processing:** Butterworth SOS biquad filters, Kalman state estimation, and spatial clustering for physical sensor data.

---

## Flagship Systems

### [Blindside](https://github.com/medhansh5/Blindside)
**C++20 · OpenCV YuNet · Win32 / X11 · Active Development**  
Local-first privacy daemon that detects shoulder surfers.
* Uses OpenCV YuNet face detection and 6D head-pose estimation (`cv::solvePnP`) to track observer gaze vectors.
* Filters out passersby with ±30° yaw and ±25° pitch bounds and a 1.0s dwell hysteresis.
* Redacts the display via a Win32 click-through overlay, Linux X11 override-redirect mask, or Wayland session lock.
* Air-gapped: Opens zero network sockets and saves no biometric data.

### [Janus](https://github.com/medhansh5/Janus)
**Rust · x86_64 · Microkernel Architecture · Active Development**  
x86_64 microkernel operating system with kernel-enforced capabilities.
* Zero ambient authority: Memory frames, interrupts, and IPC channels require typed capability handles in a process CSpace.
* Preemptive hardware timer scheduler (IRQ0) with an idle task for quiescent runqueues.
* Synchronous IPC for rendezvous message passing between user processes.
* Ring 3 Virtio-Blk driver runs in unprivileged userspace, communicating via restricted IOPort bitmasks and interrupt handles.
* Targets `x86_64-unknown-none` with UEFI boot support under QEMU.

### [Rove](https://github.com/medhansh5/Rove)
**TypeScript · React · Electron · Vite · Public Alpha (v0.1.0-alpha.1)**  
Keyboard-first Windows file manager with Finder-style Miller columns.
* 4 view modes: Cascading Miller columns, scalable Icons grid, sortable List, and media Gallery.
* Spacebar Quick Look previews for images, video, audio, Markdown, JSON, and source code.
* Deletes files safely to the Windows Recycle Bin via PowerShell.
* Filters hidden and system files (`attrib.exe` and `lstat`) with persistent user settings.

---

## Active Experiments

* **[spectre](https://github.com/medhansh5/spectre)** — Borderless X11 HUD in Python and PyQt. `Ctrl+Shift+Space` captures the display with `mss`, queries Gemini 2.0 Flash, and shows answers in a floating panel.
* **[90s-nostalgia](https://github.com/medhansh5/90s-nostalgia)** — Windows 95 desktop in a single dependency-free HTML file. Features Web Audio API chiptune synthesis, draggable windows, and a Winamp visualizer. [Live Demo](https://medhansh5.github.io/90s-nostalgia/).

---

## Archived Research & Prior Work

* **[FusionNet](https://github.com/medhansh5/FusionNet-Multi-Modal-Edge-AI)** — Road hazard detection combining smartphone camera vision (YOLOv8) with 100Hz IMU telemetry and a C++ Butterworth filter to isolate engine vibration (25–41 Hz). Research archive: [DOI: 10.5281/zenodo.20971224](https://doi.org/10.5281/zenodo.20971224).
* **[PotholeNet](https://github.com/medhansh5/PotholeNet)** — Road anomaly classifier using a 4th-order Butterworth filter (12Hz cutoff) and ring buffers (~0.15ms/sample), clustered with BallTree DBSCAN and PostGIS.
* **[ShadowMap](https://github.com/medhansh5/ShadowMap)** — Road mapping interface with suspension displacement tracking, Kalman-filtered GPS coordinates, and GeoJSON export built on Leaflet.js and Flask.
* **[Aegis](https://github.com/medhansh5/Aegis)** — Discord moderation bot on Java 26 and Virtual Threads with permission audits, DNSSEC inspection, Certificate Transparency queries, and anti-raid heuristics.

---

## On the Workbench

* **Janus OS:** Building userspace capability delegation and Virtio request buffers for the Ring 3 storage driver.
* **Blindside:** Testing multi-monitor coordinates and click passthrough across Linux window managers.
* **Rove:** Optimizing background directory scanning and handling long NTFS paths.

---

<p align="center">
  <sub>Built with craft, curiosity, and code · <a href="https://medhansh5.github.io/medhansh5/">medhansh5.github.io/medhansh5</a></sub>
</p>
