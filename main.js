// ════════════════════════════════════════════════════════════════════════════
// NEURAL COSMOS — Cinematic 3D Portfolio Engine
// Medhansh Kabadwal | Three.js r170 + GSAP ScrollTrigger
// ════════════════════════════════════════════════════════════════════════════

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// ── Configuration ───────────────────────────────────────────────────────────
const COLORS = {
    bg:           0x050507,
    primary:      0x00a3ff,
    primaryLight: 0x98cbff,
    primaryDim:   0x004a77,
    secondary:    0xe60000,
    grid:         0x0a1525,
    gridAccent:   0x00a3ff,
};

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const PARTICLE_COUNT = isMobile ? 2500 : 5500;

// ── DOM References ──────────────────────────────────────────────────────────
const canvas        = document.getElementById('webgl');
const loadingScreen = document.getElementById('loading-screen');
const loaderBarFill = document.getElementById('loader-bar-fill');
const loaderPercent = document.getElementById('loader-percent');
const loaderStatus  = document.getElementById('loader-status');

// ── Scene ───────────────────────────────────────────────────────────────────
const scene  = new THREE.Scene();
scene.background = new THREE.Color(COLORS.bg);
scene.fog = new THREE.FogExp2(COLORS.bg, 0.008);

// ── Camera ──────────────────────────────────────────────────────────────────
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    500
);

// ── Renderer ────────────────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

// ── Post-Processing (Desktop Only) ─────────────────────────────────────────
let composer = null;

if (!isMobile) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5),
        0.9,   // strength
        0.4,   // radius
        0.78   // threshold
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());
}

// ════════════════════════════════════════════════════════════════════════════
//  GEOMETRY FACTORY
// ════════════════════════════════════════════════════════════════════════════

// ── Star Field ──────────────────────────────────────────────────────────────
function createStarField() {
    const count = PARTICLE_COUNT;
    const positions = new Float32Array(count * 3);
    const colors    = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Distribute in a large sphere
        const radius = 60 + Math.random() * 180;
        const theta  = Math.random() * Math.PI * 2;
        const phi    = Math.acos(2 * Math.random() - 1);

        positions[i3]     = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);

        // Cool blue-white color variation
        const color = new THREE.Color();
        const hue = 0.55 + Math.random() * 0.12;       // blue range
        const sat = 0.3 + Math.random() * 0.5;
        const lum = 0.5 + Math.random() * 0.5;
        color.setHSL(hue, sat, lum);

        colors[i3]     = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: isMobile ? 1.2 : 1.6,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
    return stars;
}

// ── Hero Torus Knot ─────────────────────────────────────────────────────────
function createHeroKnot() {
    const group = new THREE.Group();
    group.position.set(0, 3, 18);

    // Wireframe mesh
    const geometry = new THREE.TorusKnotGeometry(3, 0.9, 100, 16, 2, 3);
    const material = new THREE.MeshBasicMaterial({
        color: COLORS.primary,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    // Glowing edge lines
    const edges   = new THREE.EdgesGeometry(geometry, 12);
    const lineMat = new THREE.LineBasicMaterial({
        color: COLORS.primaryLight,
        transparent: true,
        opacity: 0.45,
    });
    const lines = new THREE.LineSegments(edges, lineMat);
    group.add(lines);

    scene.add(group);
    return { group, mesh, lines };
}

// ── FusionNet Core (Icosahedron + Orbital Rings) ────────────────────────────
function createFusionCore() {
    const group = new THREE.Group();
    group.position.set(6, 5, -5);

    // Outer icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(2.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
        color: COLORS.primary,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    group.add(outer);

    // Inner icosahedron (counter-rotating, red accent)
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const innerMat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // Orbital ring 1 (blue)
    const ring1Geo = new THREE.TorusGeometry(4.2, 0.025, 8, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
        color: COLORS.primaryLight,
        transparent: true,
        opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI * 0.35;
    group.add(ring1);

    // Orbital ring 2 (red)
    const ring2Geo = new THREE.TorusGeometry(3.8, 0.02, 8, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary,
        transparent: true,
        opacity: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI * 0.2;
    ring2.rotation.y = Math.PI * 0.55;
    group.add(ring2);

    // Small point light at center for subtle illumination
    const pointLight = new THREE.PointLight(COLORS.primary, 2, 15);
    group.add(pointLight);

    scene.add(group);
    return { group, outer, inner, ring1, ring2 };
}

// ── Project Monoliths ───────────────────────────────────────────────────────
function createProjectMonoliths() {
    const monoliths = [];
    const configs = [
        { pos: new THREE.Vector3(-7, 0, -22), color: COLORS.primary },
        { pos: new THREE.Vector3(0, 0, -27),  color: COLORS.secondary },
        { pos: new THREE.Vector3(7, 0, -32),  color: COLORS.primaryLight },
    ];

    configs.forEach(({ pos, color }) => {
        const group = new THREE.Group();
        group.position.copy(pos);

        // Tall rectangular slab
        const boxGeo = new THREE.BoxGeometry(2.2, 7, 0.4);

        // Semi-transparent fill
        const boxMat = new THREE.MeshBasicMaterial({
            color: COLORS.bg,
            transparent: true,
            opacity: 0.5,
        });
        const box = new THREE.Mesh(boxGeo, boxMat);
        box.position.y = 3.5;
        group.add(box);

        // Glowing edge wireframe
        const edgeGeo  = new THREE.EdgesGeometry(boxGeo);
        const edgeMat  = new THREE.LineBasicMaterial({
            color,
            transparent: true,
            opacity: 0.85,
        });
        const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
        edgeLines.position.y = 3.5;
        group.add(edgeLines);

        // Accent bar on top
        const barGeo = new THREE.BoxGeometry(2.4, 0.06, 0.06);
        const barMat = new THREE.MeshBasicMaterial({ color });
        const bar = new THREE.Mesh(barGeo, barMat);
        bar.position.y = 7.15;
        group.add(bar);

        // Small point light at each monolith
        const light = new THREE.PointLight(color, 0.8, 8);
        light.position.y = 4;
        group.add(light);

        scene.add(group);
        monoliths.push({ group, box, edgeLines, bar });
    });

    return monoliths;
}

// ── Grid Plane ──────────────────────────────────────────────────────────────
function createGridPlane() {
    const grid = new THREE.GridHelper(300, 120, COLORS.gridAccent, COLORS.grid);
    grid.position.y = -3;
    grid.material.opacity = 0.12;
    grid.material.transparent = true;
    grid.material.depthWrite = false;
    scene.add(grid);
    return grid;
}

// ── Contact Ring ────────────────────────────────────────────────────────────
function createContactRing() {
    const group = new THREE.Group();
    group.position.set(0, 2, -50);

    // Outer ring
    const outerGeo = new THREE.TorusGeometry(5.5, 0.06, 16, 80);
    const outerMat = new THREE.MeshBasicMaterial({
        color: COLORS.primary,
        transparent: true,
        opacity: 0.8,
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    group.add(outer);

    // Inner ring
    const innerGeo = new THREE.TorusGeometry(3.8, 0.04, 16, 64);
    const innerMat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary,
        transparent: true,
        opacity: 0.35,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // Center point light
    const light = new THREE.PointLight(COLORS.primary, 1.5, 20);
    group.add(light);

    scene.add(group);
    return { group, outer, inner };
}

// ── Ambient Floating Particles ──────────────────────────────────────────────
function createAmbientParticles(center, count, spread, color) {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3]     = center.x + (Math.random() - 0.5) * spread;
        positions[i3 + 1] = center.y + (Math.random() - 0.5) * spread * 0.6;
        positions[i3 + 2] = center.z + (Math.random() - 0.5) * spread;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
        color,
        size: isMobile ? 0.5 : 0.8,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);
    return points;
}

// ════════════════════════════════════════════════════════════════════════════
//  BUILD THE SCENE
// ════════════════════════════════════════════════════════════════════════════

const stars     = createStarField();
const heroKnot  = createHeroKnot();
const fusion    = createFusionCore();
const monoliths = createProjectMonoliths();
const grid      = createGridPlane();
const contact   = createContactRing();

// Ambient particle clusters near each zone
const heroParticles    = createAmbientParticles(new THREE.Vector3(0, 3, 18),  isMobile ? 80 : 180,  16, COLORS.primaryLight);
const fusionParticles  = createAmbientParticles(new THREE.Vector3(6, 5, -5),  isMobile ? 60 : 120,  12, COLORS.primary);
const projectParticles = createAmbientParticles(new THREE.Vector3(0, 3, -27), isMobile ? 80 : 160,  22, COLORS.primaryLight);
const contactParticles = createAmbientParticles(new THREE.Vector3(0, 2, -50), isMobile ? 50 : 100,  14, COLORS.primary);

// Subtle ambient light
scene.add(new THREE.AmbientLight(0xffffff, 0.08));

// ════════════════════════════════════════════════════════════════════════════
//  CAMERA PATH SYSTEM
// ════════════════════════════════════════════════════════════════════════════

const cameraPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0,   6,  40),    // 0 — Far out (hero view)
    new THREE.Vector3(1,   5,  30),    // 1 — Drifting in
    new THREE.Vector3(4,   6,  14),    // 2 — Sweeping toward fusionnet
    new THREE.Vector3(8,   6.5, 2),    // 3 — Arriving at fusionnet
    new THREE.Vector3(5,   5.5,-6),    // 4 — Passing fusionnet
    new THREE.Vector3(-1,  4, -14),    // 5 — Transitioning to projects
    new THREE.Vector3(-4,  3.5,-23),   // 6 — In the projects corridor
    new THREE.Vector3(0,   3, -34),    // 7 — Moving toward contact
    new THREE.Vector3(0,   3, -44),    // 8 — Arriving at contact ring
], false, 'centripetal');

const lookAtPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0,   3,   18),   // 0 — Looking at hero knot
    new THREE.Vector3(0,   3,   15),   // 1
    new THREE.Vector3(5,   5,   -3),   // 2 — Turning toward fusionnet
    new THREE.Vector3(6,   5,   -5),   // 3 — Looking at fusionnet core
    new THREE.Vector3(4,   4,   -8),   // 4
    new THREE.Vector3(0,   2,  -22),   // 5 — Looking at monoliths
    new THREE.Vector3(0,   2,  -27),   // 6 — Center of monoliths
    new THREE.Vector3(0,   2,  -48),   // 7 — Looking at contact ring
    new THREE.Vector3(0,   2,  -52),   // 8
], false, 'centripetal');

// Lerp targets
const currentPos  = new THREE.Vector3();
const currentLook = new THREE.Vector3();
const targetPos   = new THREE.Vector3();
const targetLook  = new THREE.Vector3();

// Initialize camera position
cameraPath.getPointAt(0, currentPos);
lookAtPath.getPointAt(0, currentLook);
camera.position.copy(currentPos);
camera.lookAt(currentLook);

// ════════════════════════════════════════════════════════════════════════════
//  GSAP SCROLL INTEGRATION
// ════════════════════════════════════════════════════════════════════════════

/* global gsap, ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

// ── Camera Scroll Proxy ─────────────────────────────────────────────────────
const scrollProxy = { progress: 0 };

gsap.to(scrollProxy, {
    progress: 1,
    ease: 'none',
    scrollTrigger: {
        trigger: '#scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
    },
});

// ── Hero Overlay (visible by default, fades on scroll) ──────────────────────
const heroOverlay = document.getElementById('hero-overlay');
gsap.set(heroOverlay, { opacity: 1, visibility: 'visible' });

gsap.to(heroOverlay, {
    opacity: 0,
    scrollTrigger: {
        trigger: '#spacer-hero',
        start: '55% top',
        end: '90% top',
        scrub: true,
        onLeave:     () => gsap.set(heroOverlay, { visibility: 'hidden' }),
        onEnterBack: () => gsap.set(heroOverlay, { visibility: 'visible', opacity: 1 }),
    },
});

// ── Section Overlay Trigger Factory ─────────────────────────────────────────
function setupOverlayTrigger(overlayId, spacerId) {
    const overlay  = document.querySelector(overlayId);
    const children = overlay.querySelectorAll('.anim');

    ScrollTrigger.create({
        trigger: spacerId,
        start: 'top 65%',
        end: 'bottom 35%',
        onEnter: () => {
            gsap.set(overlay, { visibility: 'visible' });
            gsap.to(overlay, { opacity: 1, duration: 0.7, ease: 'power2.out' });
            gsap.fromTo(children,
                { opacity: 0, y: 35 },
                { opacity: 1, y: 0, stagger: 0.07, duration: 0.6, ease: 'power2.out' }
            );
        },
        onLeave: () => {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.45,
                onComplete: () => gsap.set(overlay, { visibility: 'hidden' }),
            });
        },
        onEnterBack: () => {
            gsap.set(overlay, { visibility: 'visible' });
            gsap.to(overlay, { opacity: 1, duration: 0.7, ease: 'power2.out' });
            gsap.fromTo(children,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out' }
            );
        },
        onLeaveBack: () => {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.45,
                onComplete: () => gsap.set(overlay, { visibility: 'hidden' }),
            });
        },
    });
}

setupOverlayTrigger('#fusionnet-overlay', '#spacer-fusionnet');
setupOverlayTrigger('#projects-overlay',  '#spacer-projects');
setupOverlayTrigger('#contact-overlay',   '#spacer-contact');

// ── Stat Bar Animations ─────────────────────────────────────────────────────
ScrollTrigger.create({
    trigger: '#spacer-fusionnet',
    start: 'top 65%',
    once: true,
    onEnter: () => {
        // Animate stat bars
        document.querySelectorAll('.stat-bar-fill').forEach(bar => {
            const w = bar.getAttribute('data-width');
            if (w) bar.style.width = w + '%';
        });

        // Animate F1 counter
        const f1El = document.getElementById('stat-f1-value');
        if (f1El) {
            gsap.to({ val: 0 }, {
                val: 0.87,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () { f1El.textContent = this.targets()[0].val.toFixed(2); },
            });
        }

        // Animate FP counter
        const fpEl = document.getElementById('stat-fp-value');
        if (fpEl) {
            gsap.to({ val: 0 }, {
                val: -68.1,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () { fpEl.textContent = this.targets()[0].val.toFixed(1) + '%'; },
            });
        }
    },
});

// ── Explore Button (smooth scroll down) ─────────────────────────────────────
const exploreBtn = document.getElementById('btn-explore');
if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
            scrollTo: { y: window.innerHeight * 1.5 },
            duration: 1.5,
            ease: 'power2.inOut',
        });
        // Fallback if ScrollToPlugin not loaded
        window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    });
}

// ════════════════════════════════════════════════════════════════════════════
//  HERO ENTRY ANIMATION
// ════════════════════════════════════════════════════════════════════════════

function startHeroAnimation() {
    const heroChildren = document.querySelectorAll('#hero-overlay .anim');
    gsap.fromTo(heroChildren,
        { opacity: 0, y: 50, filter: 'blur(8px)' },
        {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            stagger: 0.14,
            duration: 1.0,
            ease: 'power3.out',
            delay: 0.3,
        }
    );
}

// ════════════════════════════════════════════════════════════════════════════
//  LOADING SEQUENCE
// ════════════════════════════════════════════════════════════════════════════

function simulateLoading() {
    let progress = 0;
    const statusMessages = [
        { threshold: 0,  msg: 'INITIALIZING SYSTEMS...' },
        { threshold: 20, msg: 'BUILDING GEOMETRY...' },
        { threshold: 45, msg: 'GENERATING STAR FIELD...' },
        { threshold: 65, msg: 'CALIBRATING CAMERA PATH...' },
        { threshold: 80, msg: 'ACTIVATING BLOOM ENGINE...' },
        { threshold: 95, msg: 'SYSTEMS ONLINE' },
    ];

    const interval = setInterval(() => {
        progress += Math.random() * 12 + 4;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            finishLoading();
        }

        loaderBarFill.style.width = `${progress}%`;
        loaderPercent.textContent = `${Math.round(progress)}%`;

        // Update status text
        for (let i = statusMessages.length - 1; i >= 0; i--) {
            if (progress >= statusMessages[i].threshold) {
                loaderStatus.textContent = statusMessages[i].msg;
                break;
            }
        }
    }, 180);
}

function finishLoading() {
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 1.0,
            ease: 'power2.inOut',
            onComplete: () => {
                loadingScreen.style.display = 'none';
                startHeroAnimation();
            },
        });
    }, 400);
}

// ════════════════════════════════════════════════════════════════════════════
//  RENDER LOOP
// ════════════════════════════════════════════════════════════════════════════

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // ── Camera path interpolation ───────────────────────────────────────────
    const t = Math.max(0, Math.min(1, scrollProxy.progress));
    cameraPath.getPointAt(t, targetPos);
    lookAtPath.getPointAt(t, targetLook);

    // Smooth lerp (lower = more cinematic weight)
    const lerpFactor = isMobile ? 0.06 : 0.04;
    currentPos.lerp(targetPos, lerpFactor);
    currentLook.lerp(targetLook, lerpFactor);

    camera.position.copy(currentPos);
    camera.lookAt(currentLook);

    // ── Animate Hero Knot ───────────────────────────────────────────────────
    heroKnot.group.rotation.x += 0.002;
    heroKnot.group.rotation.y += 0.004;
    // Subtle breathing scale
    const heroBreath = Math.sin(elapsed * 0.8) * 0.05 + 1.0;
    heroKnot.group.scale.setScalar(heroBreath);

    // ── Animate FusionNet Core ──────────────────────────────────────────────
    fusion.outer.rotation.x += 0.003;
    fusion.outer.rotation.y += 0.005;
    fusion.inner.rotation.x -= 0.006;
    fusion.inner.rotation.z += 0.004;
    fusion.ring1.rotation.z += 0.004;
    fusion.ring2.rotation.z -= 0.003;

    // Pulsing scale on outer icosahedron
    const fusionPulse = Math.sin(elapsed * 1.5) * 0.08 + 1.0;
    fusion.outer.scale.setScalar(fusionPulse);

    // ── Animate Project Monoliths ───────────────────────────────────────────
    monoliths.forEach((m, i) => {
        // Floating hover
        m.group.position.y = Math.sin(elapsed * 0.7 + i * 1.8) * 0.4;
        // Subtle rotation
        m.group.rotation.y = Math.sin(elapsed * 0.3 + i * 2.0) * 0.08;
    });

    // ── Animate Contact Ring ────────────────────────────────────────────────
    contact.outer.rotation.z += 0.002;
    contact.inner.rotation.z -= 0.003;
    contact.outer.rotation.x = Math.sin(elapsed * 0.4) * 0.15;
    contact.inner.rotation.y = Math.cos(elapsed * 0.6) * 0.1;

    // ── Animate Star Field ──────────────────────────────────────────────────
    stars.rotation.y += 0.00015;
    stars.rotation.x += 0.00008;

    // ── Animate Ambient Particles ───────────────────────────────────────────
    heroParticles.rotation.y    += 0.0003;
    fusionParticles.rotation.y  -= 0.0004;
    projectParticles.rotation.y += 0.0002;
    contactParticles.rotation.y -= 0.0003;

    // ── Render ──────────────────────────────────────────────────────────────
    if (composer) {
        composer.render();
    } else {
        renderer.render(scene, camera);
    }
}

// ════════════════════════════════════════════════════════════════════════════
//  RESIZE HANDLER
// ════════════════════════════════════════════════════════════════════════════

function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (composer) {
        composer.setSize(w, h);
    }
}

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(onResize, 100);
});

// ════════════════════════════════════════════════════════════════════════════
//  INITIALIZE
// ════════════════════════════════════════════════════════════════════════════

simulateLoading();
animate();
