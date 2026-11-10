export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: string;
  role: string;
  language: string;
  problem: string;
  solution: string;
  highlights: string[];
  architecture?: {
    title: string;
    diagram: string[];
  };
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
  maturity: 'Verified' | 'Public Alpha' | 'Stable' | 'Archived';
}

export interface Experiment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ArchivedProject {
  id: string;
  name: string;
  period: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  doi?: string;
  doiUrl?: string;
}

export interface DomainInterest {
  number: string;
  title: string;
  summary: string;
  topics: string[];
  technologies: string[];
}

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: 'blindside',
    name: 'Blindside',
    tagline: 'Local-first privacy daemon that detects shoulder surfers.',
    status: 'Active Development',
    role: 'Creator & Maintainer',
    language: 'C++20',
    maturity: 'Verified',
    problem:
      'Encryption and sandboxes cannot stop shoulder surfing. In coffee shops or trains, people behind you can read sensitive code right off your screen.',
    solution:
      'Blindside runs a local webcam pipeline using OpenCV YuNet face detection and 6D head-pose estimation (cv::solvePnP). If a secondary face looks toward the screen for over a second, Blindside blurs or locks the display immediately.',
    highlights: [
      'Zero-allocation loop: Fixed-capacity ring buffers keep memory predictable.',
      'Gaze filter: ±30° yaw and ±25° pitch with 1.0s dwell hysteresis cut false alarms.',
      'Anti-spoofing: Eye Aspect Ratio blink tracking and head rotation variance reject photos.',
      'Platform redaction: Win32 click-through overlay, Linux X11 override-redirect mask, and Wayland session lock.',
      'Air-gapped: Opens no network sockets and saves no biometric data.'
    ],
    technologies: ['C++20', 'OpenCV 4.10+', 'CMake', 'YuNet', 'Win32 API', 'X11 / Xlib', 'POSIX'],
    repoUrl: 'https://github.com/medhansh5/Blindside'
  },
  {
    id: 'janus',
    name: 'Janus',
    tagline: 'x86_64 microkernel operating system with kernel-enforced capabilities.',
    status: 'Active Development',
    role: 'Creator & Maintainer',
    language: 'Rust',
    maturity: 'Verified',
    problem:
      'Monolithic kernels give drivers and filesystems full supervisor authority. A single driver crash or exploit can compromise the whole operating system.',
    solution:
      'Janus enforces zero ambient authority. Tasks access memory, interrupts, and IPC strictly through typed capability handles in their CSpace. Drivers run in unprivileged Ring 3 userspace.',
    highlights: [
      'Capability memory model: Memory frames are reserved at boot and vended as typed CSpace entries.',
      'Deterministic preemptive IRQ0 scheduler with a dedicated Ring 0 idle task.',
      'Synchronous capability-delegating IPC for rendezvous message passing between user processes.',
      'Ring 3 userspace Virtio-Blk driver communicating via restricted IOPort masks and interrupt handles.',
      'Fault isolation: Invalid capability access terminates the offending process without a kernel panic.',
      'Boot pipeline targets x86_64-unknown-none for the kernel and UEFI for boot under QEMU.'
    ],
    technologies: ['Rust', 'x86_64 Assembly', 'QEMU', 'UEFI Firmware', 'Virtio', 'OSDev', 'Microkernel Architecture'],
    repoUrl: 'https://github.com/medhansh5/Janus'
  },
  {
    id: 'rove',
    name: 'Rove',
    tagline: 'Keyboard-first Windows file manager with Finder-style Miller columns.',
    status: 'Public Alpha (v0.1.0-alpha.1)',
    role: 'Creator & Maintainer',
    language: 'TypeScript',
    maturity: 'Public Alpha',
    problem:
      'Windows Explorer lacks cascading columns, spacebar previews, and quick file tagging, making deep folder navigation slow.',
    solution:
      'Rove brings macOS Finder ergonomics to Windows: Miller columns, Spacebar Quick Look, and color tags, backed by safe PowerShell Recycle Bin deletes and Win32 attribute filtering.',
    highlights: [
      '4 view modes: Cascading Miller columns, scalable Icons grid, sortable List, and media Gallery.',
      'Spacebar Quick Look for images, video, audio, Markdown, JSON, and code.',
      'Safe deletion routing to the Windows Recycle Bin via PowerShell.',
      'Filters hidden and system files (AppData, NTUSER.DAT) via attrib.exe and lstat.',
      'Multi-tab directory browsing with path breadcrumbs and disk capacity gauges.'
    ],
    technologies: ['TypeScript', 'React 19', 'Electron', 'Vite', 'Tailwind CSS', 'PowerShell', 'Win32', 'NSIS'],
    repoUrl: 'https://github.com/medhansh5/Rove'
  }
];

export const ACTIVE_EXPERIMENTS: Experiment[] = [
  {
    id: 'spectre',
    name: 'spectre',
    tagline: 'Privacy-first AI screen assistant for Linux desktops.',
    description:
      'A borderless X11 HUD written in Python and PyQt. Pressing Ctrl+Shift+Space hides the overlay, captures the screen with mss, queries Gemini 2.0 Flash, and displays the response in a floating panel.',
    technologies: ['Python 3.10+', 'PyQt', 'Gemini 2.0 Flash', 'X11 / Xlib', 'mss', 'Linux'],
    repoUrl: 'https://github.com/medhansh5/spectre'
  },
  {
    id: '90s-nostalgia',
    name: '90s-nostalgia',
    tagline: 'Single-file, zero-dependency interactive retro desktop experience.',
    description:
      'A Windows 95 desktop packed into a single HTML file without dependencies. Includes Web Audio API chiptune synthesis, draggable windows, a Winamp visualizer, and dial-up sound effects.',
    technologies: ['HTML5', 'Vanilla JavaScript', 'CSS3', 'Web Audio API', 'Zero Dependencies'],
    repoUrl: 'https://github.com/medhansh5/90s-nostalgia',
    liveUrl: 'https://medhansh5.github.io/90s-nostalgia/'
  }
];

export const ARCHIVED_PROJECTS: ArchivedProject[] = [
  {
    id: 'fusionnet',
    name: 'FusionNet',
    period: '2025 · Research Benchmark',
    description:
      'Edge framework combining camera vision (YOLOv8) and 100Hz IMU telemetry to detect road hazards on motorcycles. Uses a C++ Butterworth filter to remove engine vibration noise (25–41 Hz). Published on Zenodo.',
    technologies: ['Python', 'C++', 'YOLOv8', 'SciPy', 'Android NDK', 'Sensor Fusion'],
    repoUrl: 'https://github.com/medhansh5/FusionNet-Multi-Modal-Edge-AI',
    doi: '10.5281/zenodo.20971224',
    doiUrl: 'https://doi.org/10.5281/zenodo.20971224'
  },
  {
    id: 'potholenet',
    name: 'PotholeNet',
    period: '2025 · Signal & Spatial Core',
    description:
      'Road defect classifier with a 4th-order Butterworth filter (12Hz cutoff) and ring buffers (~0.15ms/sample), grouped using BallTree DBSCAN and PostGIS.',
    technologies: ['C++17', 'Python', 'SciPy', 'scikit-learn', 'PostGIS', 'DBSCAN', 'Flask'],
    repoUrl: 'https://github.com/medhansh5/PotholeNet'
  },
  {
    id: 'shadowmap',
    name: 'ShadowMap',
    period: '2025 · Telemetry Prototype',
    description:
      'Road mapping interface with suspension displacement tracking, Kalman-filtered GPS coordinates, and GeoJSON export built on Leaflet.js and Flask.',
    technologies: ['Python', 'Flask', 'Leaflet.js', 'Web Audio API', 'Kalman Filter', 'GeoJSON'],
    repoUrl: 'https://github.com/medhansh5/ShadowMap'
  },
  {
    id: 'aegis',
    name: 'Aegis',
    period: '2025 · Security Recon & Infrastructure',
    description:
      'Discord moderation bot on Java 26 and Virtual Threads. Features permission audits, DNSSEC inspection, Certificate Transparency lookups, and anti-raid protection.',
    technologies: ['Java 26', 'Virtual Threads', 'JDA', 'PostgreSQL', 'Gemini API', 'Security Recon'],
    repoUrl: 'https://github.com/medhansh5/Aegis'
  }
];

export const DOMAIN_INTERESTS: DomainInterest[] = [
  {
    number: '01',
    title: 'Operating Systems & Microkernels',
    summary:
      'Investigating hardware partitioning without ambient privilege: capability spaces, synchronous IPC, preemptive timers, and Ring 3 drivers.',
    topics: ['Capability-Based Security', 'Zero Ambient Authority', 'x86_64 Interrupts & IRQ Routing', 'Synchronous IPC', 'Virtio Drivers'],
    technologies: ['Rust', 'x86_64 Assembly', 'QEMU', 'UEFI Spec', 'OSDev']
  },
  {
    number: '02',
    title: 'Low-Level & Systems Programming',
    summary:
      'Writing deterministic code close to hardware: zero-allocation loops, ring buffers, memory layouts, and safe FFI boundaries.',
    topics: ['Zero-Allocation Loops', 'Ring Buffers & Memory Layouts', 'RAII & Resource Management', 'C-ABI & FFI Boundaries', 'Concurrency Safety'],
    technologies: ['C++20', 'Rust', 'CMake', 'POSIX APIs', 'Win32 Core']
  },
  {
    number: '03',
    title: 'Computer Vision & Edge AI',
    summary:
      'Running vision models locally without cloud round-trips: 6D head pose estimation, facial landmarking, and real-time gaze detection.',
    topics: ['Lightweight CNN Face Detection', '6D Head Pose Estimation (solvePnP)', 'Spatial Gaze Geometry', 'Micro-Motion Liveness', 'Local-First Inference'],
    technologies: ['OpenCV', 'YuNet', 'PyTorch', 'ONNX Runtime', 'DirectML']
  },
  {
    number: '04',
    title: 'Desktop Architecture & Window Systems',
    summary:
      'Window managers, compositors, and OS integrations across Win32, X11, and Wayland.',
    topics: ['Win32 DWM & Layered Windows', 'X11 Xlib Event Hooks', 'Wayland Security Boundaries', 'Electron IPC Architecture', 'Multi-View File Systems'],
    technologies: ['Electron', 'React', 'TypeScript', 'Win32 API', 'X11']
  },
  {
    number: '05',
    title: 'Signal Processing & Sensor Fusion',
    summary:
      'Real-time sensor filtering: Butterworth SOS biquad filters, Kalman state estimation, and spatial clustering for road data.',
    topics: ['Butterworth SOS Biquad Cascades', 'Harmonic Engine Rejection', 'Kalman State Smoothing', 'DBSCAN Spatial Density', 'IMU + Camera Fusion'],
    technologies: ['SciPy', 'NumPy', 'C++ DSP', 'scikit-learn', 'PostGIS']
  }
];

export const CURRENT_EXPLORATION = [
  {
    area: 'Janus OS',
    focus: 'Building userspace capability delegation and Virtio request buffers for the Ring 3 storage driver.'
  },
  {
    area: 'Blindside',
    focus: 'Testing multi-monitor coordinates and click passthrough across Linux window managers.'
  },
  {
    area: 'Rove',
    focus: 'Optimizing background directory scanning and handling long NTFS paths.'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/medhansh5',
  linkedin: 'https://www.linkedin.com/in/medhansh80/',
  email: 'medhansh5@proton.me',
  location: 'Ghaziabad, India'
};
