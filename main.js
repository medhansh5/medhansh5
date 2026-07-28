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

// ── DNA Double Helix ────────────────────────────────────────────────────────
function createDNAHelix() {
    const group = new THREE.Group();
    group.position.set(-12, 0, 5);

    const helixPoints1 = [];
    const helixPoints2 = [];
    const totalPoints = 200;
    const height = 40;
    const radius = 1.8;
    const turns = 5;

    for (let i = 0; i < totalPoints; i++) {
        const t = i / totalPoints;
        const y = t * height - height / 2;
        const angle = t * Math.PI * 2 * turns;

        helixPoints1.push(new THREE.Vector3(
            Math.cos(angle) * radius,
            y,
            Math.sin(angle) * radius
        ));
        helixPoints2.push(new THREE.Vector3(
            Math.cos(angle + Math.PI) * radius,
            y,
            Math.sin(angle + Math.PI) * radius
        ));
    }

    // Strand 1
    const curve1 = new THREE.CatmullRomCurve3(helixPoints1);
    const tube1Geo = new THREE.TubeGeometry(curve1, 200, 0.04, 6, false);
    const tube1Mat = new THREE.MeshBasicMaterial({
        color: COLORS.primary,
        transparent: true,
        opacity: 0.6,
    });
    group.add(new THREE.Mesh(tube1Geo, tube1Mat));

    // Strand 2
    const curve2 = new THREE.CatmullRomCurve3(helixPoints2);
    const tube2Geo = new THREE.TubeGeometry(curve2, 200, 0.04, 6, false);
    const tube2Mat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary,
        transparent: true,
        opacity: 0.4,
    });
    group.add(new THREE.Mesh(tube2Geo, tube2Mat));

    // Cross rungs (base pairs)
    const rungCount = 40;
    for (let i = 0; i < rungCount; i++) {
        const t = i / rungCount;
        const p1 = curve1.getPointAt(t);
        const p2 = curve2.getPointAt(t);

        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        const rungGeo = new THREE.CylinderGeometry(0.015, 0.015, len, 4);
        const rungMat = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? COLORS.primaryLight : COLORS.secondary,
            transparent: true,
            opacity: 0.3,
        });
        const rung = new THREE.Mesh(rungGeo, rungMat);
        rung.position.copy(mid);

        // Orient rung toward the other strand
        rung.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            dir.normalize()
        );

        group.add(rung);
    }

    scene.add(group);
    return group;
}

// ── Asteroid Belt ───────────────────────────────────────────────────────────
function createAsteroidBelt() {
    const group = new THREE.Group();
    group.position.set(0, 2, -50);

    const asteroidCount = isMobile ? 30 : 60;
    const beltRadius = 8;

    for (let i = 0; i < asteroidCount; i++) {
        const angle = (i / asteroidCount) * Math.PI * 2 + Math.random() * 0.3;
        const r = beltRadius + (Math.random() - 0.5) * 3;
        const y = (Math.random() - 0.5) * 1.5;

        const size = 0.05 + Math.random() * 0.15;
        const geo = new THREE.IcosahedronGeometry(size, 0);
        const mat = new THREE.MeshBasicMaterial({
            color: COLORS.primaryLight,
            wireframe: true,
            transparent: true,
            opacity: 0.3 + Math.random() * 0.3,
        });
        const asteroid = new THREE.Mesh(geo, mat);
        asteroid.position.set(
            Math.cos(angle) * r,
            y,
            Math.sin(angle) * r
        );
        asteroid.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        group.add(asteroid);
    }

    scene.add(group);
    return group;
}

// ── Venator-class Republic Star Destroyer ───────────────────────────────────
function createStarDestroyer() {
    const group = new THREE.Group();
    group.position.set(18, 12, 0);
    group.rotation.set(0.1, -0.8, 0.05);

    const redMat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary, transparent: true, opacity: 0.5,
    });
    const redLineMat = new THREE.LineBasicMaterial({
        color: COLORS.secondary, transparent: true, opacity: 0.85,
    });
    const greyLineMat = new THREE.LineBasicMaterial({
        color: COLORS.primaryLight, transparent: true, opacity: 0.6,
    });
    const darkMat = new THREE.MeshBasicMaterial({
        color: COLORS.bg, transparent: true, opacity: 0.4,
    });

    // ── Main hull (elongated narrow wedge — Venator is longer/narrower than ISD)
    const hullGeo = new THREE.ConeGeometry(2.8, 14, 3, 1);
    const hull = new THREE.Mesh(hullGeo, darkMat);
    hull.rotation.x = -Math.PI / 2;
    hull.scale.set(1.0, 1, 0.1);     // Very flat, narrower than ISD
    group.add(hull);

    // Hull edges (grey/blue)
    const hullEdges = new THREE.EdgesGeometry(hullGeo);
    const hullLines = new THREE.LineSegments(hullEdges, greyLineMat);
    hullLines.rotation.copy(hull.rotation);
    hullLines.scale.copy(hull.scale);
    group.add(hullLines);

    // ── Iconic red dorsal racing stripe (runs full length of the hull)
    const stripeGeo = new THREE.BoxGeometry(0.5, 0.03, 12);
    const stripeMat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary, transparent: true, opacity: 0.7,
    });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(0, 0.15, 0.5);
    group.add(stripe);

    // Stripe glow edges
    const stripeEdges = new THREE.EdgesGeometry(stripeGeo);
    const stripeLines = new THREE.LineSegments(stripeEdges, redLineMat);
    stripeLines.position.copy(stripe.position);
    group.add(stripeLines);

    // ── Split bow / hangar gap (two small wedge prongs at the front)
    const prongGeo = new THREE.BoxGeometry(0.4, 0.08, 2.5);
    const prongEdges = new THREE.EdgesGeometry(prongGeo);

    const prongL = new THREE.LineSegments(prongEdges, greyLineMat);
    prongL.position.set(-0.6, 0.04, 6.5);
    group.add(prongL);

    const prongR = new THREE.LineSegments(prongEdges, greyLineMat);
    prongR.position.set(0.6, 0.04, 6.5);
    group.add(prongR);

    // Hangar opening (red glow in the gap between prongs)
    const hangarGeo = new THREE.PlaneGeometry(0.6, 2.0);
    const hangarMat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary, transparent: true, opacity: 0.2, side: THREE.DoubleSide,
    });
    const hangar = new THREE.Mesh(hangarGeo, hangarMat);
    hangar.rotation.x = -Math.PI / 2;
    hangar.position.set(0, 0.03, 6.5);
    group.add(hangar);

    // ── Tall bridge tower (set far back — the Venator signature)
    const towerBaseGeo = new THREE.BoxGeometry(0.7, 1.8, 0.5);
    const towerBase = new THREE.Mesh(towerBaseGeo, darkMat);
    towerBase.position.set(0, 0.9, -4.5);
    group.add(towerBase);

    const towerBaseEdges = new THREE.EdgesGeometry(towerBaseGeo);
    const towerBaseLines = new THREE.LineSegments(towerBaseEdges, redLineMat);
    towerBaseLines.position.copy(towerBase.position);
    group.add(towerBaseLines);

    // Bridge T-top (horizontal crossbar)
    const tTopGeo = new THREE.BoxGeometry(1.4, 0.3, 0.35);
    const tTop = new THREE.Mesh(tTopGeo, darkMat);
    tTop.position.set(0, 1.9, -4.5);
    group.add(tTop);

    const tTopEdges = new THREE.EdgesGeometry(tTopGeo);
    const tTopLines = new THREE.LineSegments(tTopEdges, new THREE.LineBasicMaterial({
        color: COLORS.primary, transparent: true, opacity: 0.9,
    }));
    tTopLines.position.copy(tTop.position);
    group.add(tTopLines);

    // Bridge viewport (small glowing slit)
    const viewportGeo = new THREE.BoxGeometry(0.3, 0.06, 0.02);
    const viewportMat = new THREE.MeshBasicMaterial({
        color: COLORS.primary, transparent: true, opacity: 0.9,
    });
    const viewport = new THREE.Mesh(viewportGeo, viewportMat);
    viewport.position.set(0, 1.95, -4.3);
    group.add(viewport);

    // ── Dorsal turret emplacements (small octahedrons along the hull)
    const turretGeo = new THREE.OctahedronGeometry(0.1, 0);
    const turretMat = new THREE.MeshBasicMaterial({
        color: COLORS.primary, wireframe: true, transparent: true, opacity: 0.6,
    });
    const turretPositions = [
        [0.8, 0.12, 2], [-0.8, 0.12, 2],
        [0.6, 0.12, 0], [-0.6, 0.12, 0],
        [0.4, 0.12, -2], [-0.4, 0.12, -2],
    ];
    turretPositions.forEach(([x, y, z]) => {
        const turret = new THREE.Mesh(turretGeo, turretMat);
        turret.position.set(x, y, z);
        group.add(turret);
    });

    // ── Engine cluster (4 large + 2 small engine glows)
    const engineGeo = new THREE.CircleGeometry(0.22, 8);
    const engineMat = new THREE.MeshBasicMaterial({
        color: COLORS.secondary, transparent: true, opacity: 0.75, side: THREE.DoubleSide,
    });
    [-0.7, -0.25, 0.25, 0.7].forEach(x => {
        const engine = new THREE.Mesh(engineGeo, engineMat);
        engine.position.set(x, 0, -7);
        group.add(engine);
    });

    // Small outer engines
    const smEngineGeo = new THREE.CircleGeometry(0.12, 6);
    [-1.0, 1.0].forEach(x => {
        const eng = new THREE.Mesh(smEngineGeo, engineMat);
        eng.position.set(x, 0, -6.8);
        group.add(eng);
    });

    // Engine exhaust light
    const engineLight = new THREE.PointLight(COLORS.secondary, 2.5, 10);
    engineLight.position.set(0, 0, -7.5);
    group.add(engineLight);

    // ── Secondary red accent stripes (flanking the main stripe)
    const sideStripeGeo = new THREE.BoxGeometry(0.12, 0.025, 6);
    [-0.4, 0.4].forEach(x => {
        const ss = new THREE.Mesh(sideStripeGeo, new THREE.MeshBasicMaterial({
            color: COLORS.secondary, transparent: true, opacity: 0.35,
        }));
        ss.position.set(x, 0.14, -0.5);
        group.add(ss);
    });

    // ── Ventral detail lines (bottom hull plating)
    const ventralGeo = new THREE.BoxGeometry(1.8, 0.015, 0.015);
    [-2, 0, 2, 4].forEach(z => {
        const line = new THREE.Mesh(ventralGeo, new THREE.MeshBasicMaterial({
            color: COLORS.primaryLight, transparent: true, opacity: 0.2,
        }));
        line.position.set(0, -0.08, z);
        line.scale.x = 1 - Math.abs(z) * 0.08;
        group.add(line);
    });

    scene.add(group);
    return group;
}

// ── Red Nebula Cloud ────────────────────────────────────────────────────────
function createRedNebula() {
    const count = isMobile ? 200 : 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const radius = 30 + Math.random() * 100;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3]     = radius * Math.sin(phi) * Math.cos(theta) * 1.5;
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.4;
        positions[i3 + 2] = radius * Math.cos(phi);

        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.06, 0.6 + Math.random() * 0.4, 0.3 + Math.random() * 0.3);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
        size: isMobile ? 2.5 : 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    const cloud = new THREE.Points(geo, mat);
    scene.add(cloud);
    return cloud;
}

// ── Blue Nebula Cloud ───────────────────────────────────────────────────────
function createBlueNebula() {
    const count = isMobile ? 200 : 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const radius = 35 + Math.random() * 90;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i3]     = radius * Math.sin(phi) * Math.cos(theta) * 1.4;
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
        positions[i3 + 2] = radius * Math.cos(phi);

        const color = new THREE.Color();
        color.setHSL(0.52 + Math.random() * 0.1, 0.8 + Math.random() * 0.2, 0.4 + Math.random() * 0.3);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
        size: isMobile ? 2.5 : 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    const cloud = new THREE.Points(geo, mat);
    scene.add(cloud);
    return cloud;
}

// ── 3D Floating Lightsabers (Red Sith & Blue Jedi) ──────────────────────────
function createLightsaber(bladeColorHex, isSith = false) {
    const saberGroup = new THREE.Group();

    // Hilt Assembly
    const hiltGroup = new THREE.Group();

    // Main grip body
    const bodyGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 16);
    const hiltMat = new THREE.MeshStandardMaterial({
        color: isSith ? 0x22222b : 0xa0a5b5,
        metalness: 0.9,
        roughness: 0.2,
    });
    const mainBody = new THREE.Mesh(bodyGeo, hiltMat);
    mainBody.position.y = -0.6;
    hiltGroup.add(mainBody);

    // Dark ridged grips
    const gripGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.45, 16);
    const gripMat = new THREE.MeshBasicMaterial({ color: 0x111116 });
    const grip = new THREE.Mesh(gripGeo, gripMat);
    grip.position.y = -0.65;
    hiltGroup.add(grip);

    // Emitter shroud
    const emitterGeo = new THREE.CylinderGeometry(0.15, 0.12, 0.3, 16);
    const emitterMat = new THREE.MeshBasicMaterial({ color: isSith ? 0x441111 : 0x445577 });
    const emitter = new THREE.Mesh(emitterGeo, emitterMat);
    emitter.position.y = -0.05;
    hiltGroup.add(emitter);

    // Activation switch / button
    const btnGeo = new THREE.BoxGeometry(0.06, 0.12, 0.06);
    const btnMat = new THREE.MeshBasicMaterial({ color: bladeColorHex });
    const btn = new THREE.Mesh(btnGeo, btnMat);
    btn.position.set(0.13, -0.4, 0);
    hiltGroup.add(btn);

    // Pommel cap
    const pommelGeo = new THREE.CylinderGeometry(0.14, 0.1, 0.15, 16);
    const pommel = new THREE.Mesh(pommelGeo, hiltMat);
    pommel.position.y = -1.25;
    hiltGroup.add(pommel);

    saberGroup.add(hiltGroup);

    // Plasma Blade Assembly
    const bladeGroup = new THREE.Group();
    bladeGroup.position.y = 0.1;

    // Core white plasma beam
    const coreGeo = new THREE.CylinderGeometry(0.06, 0.06, 4.2, 16);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 2.1;
    bladeGroup.add(coreMesh);

    // Outer vibrant plasma glow
    const glowGeo = new THREE.CylinderGeometry(0.18, 0.18, 4.3, 16);
    const glowMat = new THREE.MeshBasicMaterial({
        color: bladeColorHex,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.position.y = 2.15;
    bladeGroup.add(glowMesh);

    // Blade tip glow
    const tipGeo = new THREE.SphereGeometry(0.18, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const tipMesh = new THREE.Mesh(tipGeo, glowMat);
    tipMesh.position.y = 4.3;
    bladeGroup.add(tipMesh);

    // Dedicated Point Light illuminating space
    const bladeLight = new THREE.PointLight(bladeColorHex, 4.0, 18);
    bladeLight.position.y = 2.1;
    bladeGroup.add(bladeLight);

    saberGroup.add(bladeGroup);

    scene.add(saberGroup);
    return { group: saberGroup, hilt: hiltGroup, blade: bladeGroup, glowMesh, bladeLight };
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
const dnaHelix  = createDNAHelix();
const asteroidBelt = createAsteroidBelt();
const starDestroyer = createStarDestroyer();
const redNebula = createRedNebula();
const blueNebula = createBlueNebula();

// ── Floating 3D Lightsabers (Sith Red & Jedi Blue) ─────────────────────────
// Saber 1: Sith Red Lightsaber floating near hero camera view
const saberRed = createLightsaber(0xff0033, true);
saberRed.group.position.set(6.5, 4.5, 20);
saberRed.group.rotation.set(0.4, -0.6, 0.8);

// Saber 2: Jedi Blue Lightsaber floating on opposite side
const saberBlue = createLightsaber(0x00f0ff, false);
saberBlue.group.position.set(-7.0, 5.0, 16);
saberBlue.group.rotation.set(-0.3, 0.5, -0.7);

// Saber 3 & 4: Deep space crossed lightsabers near the Venator Ship
const saberRedSpace = createLightsaber(0xff0033, true);
saberRedSpace.group.position.set(13.0, 14.0, -3.0);
saberRedSpace.group.rotation.set(0.2, 0.8, -0.5);
saberRedSpace.group.scale.setScalar(0.75);

const saberBlueSpace = createLightsaber(0x00f0ff, false);
saberBlueSpace.group.position.set(15.0, 10.0, -2.0);
saberBlueSpace.group.rotation.set(-0.5, -0.3, 0.6);
saberBlueSpace.group.scale.setScalar(0.75);

// Ambient particle clusters near each zone
const heroParticles    = createAmbientParticles(new THREE.Vector3(0, 3, 18),  isMobile ? 80 : 180,  16, COLORS.primaryLight);
const fusionParticles  = createAmbientParticles(new THREE.Vector3(6, 5, -5),  isMobile ? 60 : 120,  12, COLORS.primary);
const projectParticles = createAmbientParticles(new THREE.Vector3(0, 3, -27), isMobile ? 80 : 160,  22, COLORS.primaryLight);
const contactParticles = createAmbientParticles(new THREE.Vector3(0, 2, -50), isMobile ? 50 : 100,  14, COLORS.primary);

// Extra red & blue particle clouds
const redParticles1 = createAmbientParticles(new THREE.Vector3(15, 10, 0), isMobile ? 40 : 80, 10, COLORS.secondary);
const redParticles2 = createAmbientParticles(new THREE.Vector3(-8, 4, -15), isMobile ? 40 : 80, 14, COLORS.secondary);
const blueParticles1 = createAmbientParticles(new THREE.Vector3(-12, 8, 5), isMobile ? 40 : 80, 12, 0x00f0ff);

// Red & Blue accent point lights in the scene
const redLight1 = new THREE.PointLight(COLORS.secondary, 1.2, 25);
redLight1.position.set(20, 10, 5);
scene.add(redLight1);
const blueLight1 = new THREE.PointLight(0x00f0ff, 1.5, 25);
blueLight1.position.set(-15, 8, 10);
scene.add(blueLight1);
const redLight2 = new THREE.PointLight(COLORS.secondary, 0.8, 20);
redLight2.position.set(-10, 5, -20);
scene.add(redLight2);

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
            // Trigger typewriter on section title
            overlay.querySelectorAll('.typewriter').forEach(el => {
                setTimeout(() => typewrite(el), 600);
            });
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
        window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'smooth' });
    });
}

// ════════════════════════════════════════════════════════════════════════════
//  SIDE NAVIGATION DOTS
// ════════════════════════════════════════════════════════════════════════════

const navDots = document.querySelectorAll('.nav-dot');
const sections = ['hero', 'fusionnet', 'projects', 'contact'];
const spacerEls = sections.map(s => document.getElementById(`spacer-${s}`));

// Click to navigate
navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const section = dot.getAttribute('data-section');
        const spacer = document.getElementById(`spacer-${section}`);
        if (spacer) {
            const top = section === 'hero' ? 0 : spacer.offsetTop;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Update active dot based on scroll
function updateNavDots() {
    const scrollY = window.scrollY;
    let activeIndex = 0;

    spacerEls.forEach((spacer, i) => {
        if (spacer && scrollY >= spacer.offsetTop - window.innerHeight * 0.4) {
            activeIndex = i;
        }
    });

    navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
    });
}

window.addEventListener('scroll', updateNavDots, { passive: true });

// ════════════════════════════════════════════════════════════════════════════
//  TYPEWRITER EFFECT
// ════════════════════════════════════════════════════════════════════════════

const typewriterEls = document.querySelectorAll('.typewriter');
const typewriterTriggered = new Set();

function typewrite(el) {
    const text = el.getAttribute('data-typewriter');
    if (!text || typewriterTriggered.has(el)) return;
    typewriterTriggered.add(el);

    el.textContent = '';
    // Add cursor
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    el.appendChild(cursor);

    let charIndex = 0;
    const speed = 80;

    function typeNext() {
        if (charIndex < text.length) {
            el.insertBefore(
                document.createTextNode(text[charIndex]),
                cursor
            );
            charIndex++;
            setTimeout(typeNext, speed + Math.random() * 40);
        } else {
            // Remove cursor after a delay
            setTimeout(() => {
                if (cursor.parentNode) cursor.remove();
            }, 2000);
        }
    }
    typeNext();
}

// ════════════════════════════════════════════════════════════════════════════
//  INTERACTIVE MONOLITH HOVER
// ════════════════════════════════════════════════════════════════════════════

const projectCards = [
    document.getElementById('card-shadowmap'),
    document.getElementById('card-bikeguard'),
    document.getElementById('card-potholenet'),
];
const monolithOriginalOpacity = [0.85, 0.85, 0.85];
const cardGlowClasses = ['card-glow', 'card-glow-red', 'card-glow'];

projectCards.forEach((card, i) => {
    if (!card) return;

    card.addEventListener('mouseenter', () => {
        // Brighten corresponding monolith
        if (monoliths[i]) {
            monoliths[i].edgeLines.material.opacity = 1.0;
            monoliths[i].bar.scale.y = 2.5;
        }
        card.classList.add(cardGlowClasses[i]);
    });

    card.addEventListener('mouseleave', () => {
        if (monoliths[i]) {
            monoliths[i].edgeLines.material.opacity = monolithOriginalOpacity[i];
            monoliths[i].bar.scale.y = 1.0;
        }
        card.classList.remove(cardGlowClasses[i]);
    });
});

// ════════════════════════════════════════════════════════════════════════════
//  AMBIENT SOUND (Web Audio API)
// ════════════════════════════════════════════════════════════════════════════

let audioCtx = null;
let ambientGain = null;
let ambientOsc1 = null;
let ambientOsc2 = null;
let ambientLFO = null;
let soundActive = false;

const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');

function initAmbientSound() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Master gain
    ambientGain = audioCtx.createGain();
    ambientGain.gain.value = 0;
    ambientGain.connect(audioCtx.destination);

    // Deep drone oscillator 1
    ambientOsc1 = audioCtx.createOscillator();
    ambientOsc1.type = 'sine';
    ambientOsc1.frequency.value = 55; // Low A
    const osc1Gain = audioCtx.createGain();
    osc1Gain.gain.value = 0.06;
    ambientOsc1.connect(osc1Gain);
    osc1Gain.connect(ambientGain);
    ambientOsc1.start();

    // Higher harmonic
    ambientOsc2 = audioCtx.createOscillator();
    ambientOsc2.type = 'sine';
    ambientOsc2.frequency.value = 110;
    const osc2Gain = audioCtx.createGain();
    osc2Gain.gain.value = 0.03;
    ambientOsc2.connect(osc2Gain);
    osc2Gain.connect(ambientGain);
    ambientOsc2.start();

    // LFO for subtle modulation
    ambientLFO = audioCtx.createOscillator();
    ambientLFO.type = 'sine';
    ambientLFO.frequency.value = 0.15;
    const lfoGain = audioCtx.createGain();
    lfoGain.gain.value = 3;
    ambientLFO.connect(lfoGain);
    lfoGain.connect(ambientOsc1.frequency);
    ambientLFO.start();
}

function toggleSound() {
    if (!audioCtx) initAmbientSound();

    if (soundActive) {
        // Fade out
        ambientGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
        soundActive = false;
        soundIcon.textContent = 'volume_off';
        soundToggle.classList.remove('active');
    } else {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        // Fade in
        ambientGain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.8);
        soundActive = true;
        soundIcon.textContent = 'volume_up';
        soundToggle.classList.add('active');
    }
}

if (soundToggle) {
    soundToggle.addEventListener('click', toggleSound);
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

    // Trigger typewriters on their respective section entries
    typewriterEls.forEach(el => {
        const overlay = el.closest('.overlay');
        if (!overlay) return;

        if (overlay.id === 'hero-overlay') {
            // Hero typewriters fire immediately
            setTimeout(() => typewrite(el), 1200);
        }
    });
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

    // ── Animate DNA Helix ───────────────────────────────────────────────────
    dnaHelix.rotation.y += 0.003;

    // ── Animate Asteroid Belt ───────────────────────────────────────────────
    asteroidBelt.rotation.y += 0.001;
    asteroidBelt.children.forEach((asteroid, i) => {
        asteroid.rotation.x += 0.005 + i * 0.0001;
        asteroid.rotation.z += 0.003;
    });

    // ── Animate Star Destroyer ──────────────────────────────────────────────
    // Slow drift + gentle bobbing
    starDestroyer.position.x = 18 + Math.sin(elapsed * 0.12) * 2;
    starDestroyer.position.y = 12 + Math.sin(elapsed * 0.2) * 0.5;
    starDestroyer.rotation.y = -0.8 + Math.sin(elapsed * 0.08) * 0.05;
    starDestroyer.rotation.z = 0.05 + Math.cos(elapsed * 0.15) * 0.02;

    // ── Animate Red & Blue Nebulas ──────────────────────────────────────────
    redNebula.rotation.y += 0.0001;
    redNebula.rotation.x += 0.00005;
    blueNebula.rotation.y -= 0.00012;
    blueNebula.rotation.z += 0.00004;

    // ── Animate Particle Clouds ─────────────────────────────────────────────
    redParticles1.rotation.y += 0.0002;
    redParticles2.rotation.y -= 0.00025;
    blueParticles1.rotation.y += 0.0003;

    // ── Animate Floating 3D Lightsabers ─────────────────────────────────────
    // Sith Red Lightsaber 1 (floating drift + blade hum pulse)
    saberRed.group.position.y = 4.5 + Math.sin(elapsed * 0.8) * 0.35;
    saberRed.group.rotation.z = 0.8 + Math.cos(elapsed * 0.5) * 0.06;
    saberRed.group.rotation.y += 0.003;
    const redPulse = 0.7 + Math.sin(elapsed * 4.0) * 0.12;
    saberRed.glowMesh.material.opacity = redPulse;
    saberRed.bladeLight.intensity = 3.5 + Math.sin(elapsed * 6.0) * 0.8;

    // Jedi Blue Lightsaber 2 (floating drift + blade hum pulse)
    saberBlue.group.position.y = 5.0 + Math.sin(elapsed * 0.7 + 1.2) * 0.35;
    saberBlue.group.rotation.z = -0.7 + Math.sin(elapsed * 0.6) * 0.06;
    saberBlue.group.rotation.y -= 0.0025;
    const bluePulse = 0.75 + Math.cos(elapsed * 3.5) * 0.1;
    saberBlue.glowMesh.material.opacity = bluePulse;
    saberBlue.bladeLight.intensity = 3.8 + Math.cos(elapsed * 5.5) * 0.7;

    // Space Lightsabers near Star Destroyer
    saberRedSpace.group.position.y = 14.0 + Math.sin(elapsed * 0.4) * 0.5;
    saberRedSpace.group.rotation.y += 0.002;
    saberBlueSpace.group.position.y = 10.0 + Math.cos(elapsed * 0.45) * 0.5;
    saberBlueSpace.group.rotation.y -= 0.002;

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
