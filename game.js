// ==================== DOM ====================
const getEl = (id) => document.getElementById(id);
const mainMenu = getEl('main-menu');
const pauseMenu = getEl('pause-menu');
const btnSolo = getEl('btn-solo');
const btnCampaign = getEl('btn-campaign');
const btnTutorial = getEl('btn-tutorial');
const btnPvp = getEl('btn-pvp');
const btnControls = getEl('btn-controls');
const controlsScreen = getEl('controls-screen');
const btnControlsBack = getEl('btn-controls-back');
const btnResume = getEl('btn-resume');
const btnQuit = getEl('btn-quit');
const announceEl = getEl('announce');
const deathScreen = getEl('death-screen');
const deathKills = getEl('death-kills');
const restartBtn = getEl('restart-btn');
const tutorialText = getEl('tutorial-text');

// HUD 1
const health1 = getEl('health1');
const wave1 = getEl('wave1');
const enemyCountEl = getEl('enemy-count');
const weapon1 = getEl('weapon1');
const ammo1 = getEl('ammo1');
const grenades1 = getEl('grenades1');
const strikes1 = getEl('strikes1');
const kills1 = getEl('kills1');
const detector1 = getEl('detector1');
const crosshair1 = getEl('crosshair1');
const pickupHint1 = getEl('pickup-hint1');
const reloadBar1 = getEl('reload-bar1');
const reloadFill1 = getEl('reload-fill1');

// HUD 2
const hud2 = getEl('hud2');
const health2 = getEl('health2');
const weapon2 = getEl('weapon2');
const ammo2 = getEl('ammo2');
const grenades2 = getEl('grenades2');
const strikes2 = getEl('strikes2');
const kills2 = getEl('kills2');
const detector2 = getEl('detector2');
const crosshair2 = getEl('crosshair2');
const pickupHint2 = getEl('pickup-hint2');
const reloadBar2 = getEl('reload-bar2');
const reloadFill2 = getEl('reload-fill2');

// ==================== Звук ====================
let audioCtx = null;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
function playTone(freq, dur, type='square', vol=0.3) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + dur);
}
function crateAlarm() { playTone(800, 0.3, 'sawtooth', 0.5); }
function explosionSound() { playTone(100, 0.5, 'triangle', 0.8); }

// ==================== Сцена ====================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);
scene.fog = new THREE.Fog(0x1a1a2e, 30, 120);

const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 200);
camera1.position.set(0, 1.7, 5);
const camera2 = new THREE.PerspectiveCamera(75, 1, 0.1, 200);
camera2.position.set(2, 1.7, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Освещение
scene.add(new THREE.AmbientLight(0x404060, 0.6));
const sun = new THREE.DirectionalLight(0xfff5e8, 1.8);
sun.position.set(30, 40, 20);
sun.castShadow = true;
sun.shadow.mapSize.width = 2048; sun.shadow.mapSize.height = 2048;
sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 150;
sun.shadow.camera.left = -50; sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50; sun.shadow.camera.bottom = -50;
sun.shadow.bias = -0.0003;
scene.add(sun);
scene.add(new THREE.HemisphereLight(0x87ceeb, 0x3d2b1f, 0.4));

// Пол
const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshStandardMaterial({ color: 0x3a3a4a, roughness: 0.7, metalness: 0.2 }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);
scene.add(new THREE.PolarGridHelper(58, 64, 48, 256, 0x444455, 0x444455));

// Границы
function createBoundary(x, z, w, d, h = 8) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: 0x556677, roughness: 0.6, metalness: 0.3 }));
    wall.position.set(x, h / 2, z);
    wall.castShadow = true; wall.receiveShadow = true;
    scene.add(wall);
}
createBoundary(0, -55, 110, 2);
createBoundary(0, 55, 110, 2);
createBoundary(-55, 0, 2, 110);
createBoundary(55, 0, 2, 110);

// ==================== Текстуры ====================
function createHealthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0,0,128,128);
    ctx.fillStyle = '#ff0000'; ctx.fillRect(44,16,40,96); ctx.fillRect(16,44,96,40);
    return new THREE.CanvasTexture(canvas);
}
function createCrateTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#2d5a1e'; ctx.fillRect(0,0,128,128);
    ctx.fillStyle = '#4c8c2a'; ctx.fillRect(10,10,108,108);
    ctx.fillStyle = '#fff'; ctx.font = 'bold 24px monospace'; ctx.fillText('SUP', 24, 75);
    return new THREE.CanvasTexture(canvas);
}
function createDetectorTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0000ff'; ctx.fillRect(0,0,128,128);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 20px monospace'; ctx.fillText('DET', 20, 75);
    return new THREE.CanvasTexture(canvas);
}
const healthTexture = createHealthTexture();
const crateTexture = createCrateTexture();
const detectorTexture = createDetectorTexture();

// ==================== Оружие ====================
const weapons = [
    { name: 'Пистолет',   damage: 1, fireRate: 0.30, magSize: 12, color: 0x888888, model: 'pistol', crosshair: 'cross-pistol' },
    { name: 'Дробовик',   damage: 1, fireRate: 0.70, magSize: 6,  color: 0x8B4513, model: 'shotgun', pellets:5, crosshair: 'cross-shotgun' },
    { name: 'Автомат',    damage: 1, fireRate: 0.10, magSize: 30, color: 0x333333, model: 'rifle', crosshair: 'cross-rifle' },
    { name: 'Пулемёт',    damage: 1, fireRate: 0.07, magSize: 100,color: 0x555555, model: 'lmg', crosshair: 'cross-lmg' },
    { name: 'Снайперская',damage: 5, fireRate: 1.20, magSize: 5,  color: 0x004400, model: 'sniper', crosshair: 'cross-sniper' },
    { name: 'Плазма',     damage: 2, fireRate: 0.15, magSize: 20, color: 0x00ffff, model: 'plasma', crosshair: 'cross-plasma' },
    { name: 'Ракетница',  damage: 10,fireRate: 1.50, magSize: 3,  color: 0xff4400, model: 'rocket', explosive:true, crosshair: 'cross-rocket' },
    { name: 'Целеуказатель', damage:0, fireRate:2.0, magSize:1, color:0xff0000, model:'designator', crosshair:'cross-designator', isDesignator:true }
];
const powerWeapons = [
    { name: 'Огнемёт',    damage:1, fireRate:0.05, magSize:999, color:0xff6600, model:'flamethrower', duration:30, crosshair:'cross-pistol' },
    { name: 'Плазмаган',  damage:3, fireRate:0.08, magSize:999, color:0xaa00ff, model:'plasma', duration:30, crosshair:'cross-plasma' },
    { name: 'Миниган',    damage:1, fireRate:0.04, magSize:999, color:0xcccccc, model:'lmg', duration:30, crosshair:'cross-lmg' },
    { name: 'Рельсотрон', damage:15,fireRate:1.5, magSize:999, color:0x0088ff, model:'sniper', duration:30, crosshair:'cross-sniper' }
];

// ==================== Класс игрока ====================
class Player {
    constructor(camera, gunGroup, hud, isSecond = false) {
        this.camera = camera;
        this.gunGroup = gunGroup;
        this.hud = hud;
        this.health = 100; this.maxHealth = 100; this.alive = true;
        this.weaponIndex = 0; this.mag = weapons[0].magSize; this.reserve = 200;
        this.grenades = 3; this.designatorCharges = 1; this.kills = 0;
        this.reloading = false; this.reloadStart = 0; this.lastShot = 0; this.recoil = 0;
        this.yaw = 0; this.pitch = 0; this.velocity = new THREE.Vector3();
        this.speed = 8.0; this.jumpPower = 10; this.gravity = 18;
        this.onGround = true; this.height = 1.7; this.radius = 0.4;
        this.meleeCooldown = 0; this.meleeDuration = 0.6;
        this.powerWeaponIndex = -1; this.powerWeaponTimer = 0;
        this.prevWeaponIndex = 0; this.prevMag = 12; this.prevReserve = 200;
        this.lastPortalTime = 0;
        this.isSecond = isSecond;
        this.model = null;
        this.detectorActive = false;
        this.detectorTimer = 0;
        this.tutorialStep = 0;
    }

    updateHUD() {
        if (!this.hud.health) return;
        this.hud.health.textContent = Math.ceil(this.health);
        const wp = (this.powerWeaponIndex >= 0) ? powerWeapons[this.powerWeaponIndex] : weapons[this.weaponIndex];
        if (this.hud.weapon) this.hud.weapon.textContent = wp.name;
        if (this.hud.ammo) {
            if (wp.isDesignator) this.hud.ammo.textContent = `Заряды: ${this.designatorCharges}`;
            else this.hud.ammo.textContent = `${this.mag} / ${this.reserve}`;
        }
        if (this.hud.grenades) this.hud.grenades.textContent = this.grenades;
        if (this.hud.strikes) this.hud.strikes.textContent = this.designatorCharges;
        if (this.hud.kills) this.hud.kills.textContent = this.kills;
        if (this.hud.crosshair) this.hud.crosshair.className = wp.crosshair || 'cross-default';
        if (this.hud.detector) this.hud.detector.textContent = this.detectorActive ? 'Активен' : '0';
    }

    switchWeapon(index) {
        if (this.powerWeaponIndex >= 0) return;
        if (index === this.weaponIndex || index < 0 || index >= weapons.length) return;
        this.weaponIndex = index;
        this.mag = weapons[index].magSize;
        this.buildGunModel(weapons[index]);
        this.reloading = false;
        if (this.hud.reloadBar) this.hud.reloadBar.style.opacity = 0;
        this.updateHUD();
    }

    buildGunModel(weapon) {
        while(this.gunGroup.children.length > 0) this.gunGroup.remove(this.gunGroup.children[0]);
        const col = weapon.color;
        const mainMat = new THREE.MeshStandardMaterial({ color: col, roughness:0.5, metalness:0.8 });
        const darkMat = new THREE.MeshStandardMaterial({ color:0x1a1a1a, roughness:0.5, metalness:0.8 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.07,0.12,0.35), mainMat);
        body.position.set(0,-0.02,-0.05); this.gunGroup.add(body);
        const grip = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.15,0.07), darkMat);
        grip.position.set(0,-0.14,0.05); grip.rotation.x=0.25; this.gunGroup.add(grip);
        if (weapon.model === 'designator') {
            const ant = new THREE.Mesh(new THREE.ConeGeometry(0.04,0.15,8), mainMat);
            ant.position.set(0,0.1,-0.3); ant.rotation.x=Math.PI; this.gunGroup.add(ant);
        } else {
            const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.035,0.6,12), mainMat);
            barrel.rotation.x=Math.PI/2; barrel.position.set(0,0.05,-0.3); this.gunGroup.add(barrel);
        }
        const sight = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.03,0.06), new THREE.MeshStandardMaterial({ color:0x555555, roughness:0.3, metalness:0.95 }));
        sight.position.set(0,0.08,-0.2); this.gunGroup.add(sight);
        const flashMat = new THREE.MeshBasicMaterial({ color:0xffaa00, transparent:true, opacity:0 });
        const flash = new THREE.Mesh(new THREE.SphereGeometry(0.06,8,8), flashMat);
        flash.position.set(0,0.05,-0.65); this.gunGroup.add(flash);
        const flashPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.12,0.12), new THREE.MeshBasicMaterial({ color:0xffff88, transparent:true, opacity:0, side:THREE.DoubleSide }));
        flashPlane.position.set(0,0.05,-0.67); this.gunGroup.add(flashPlane);
    }

    reload() {
        if (this.reloading || !this.alive) return;
        const wp = weapons[this.weaponIndex];
        if (wp.isDesignator || this.mag === wp.magSize || this.reserve <= 0) return;
        this.reloading = true;
        this.reloadStart = performance.now()/1000;
        if (this.hud.reloadBar) this.hud.reloadBar.style.opacity = 1;
    }

    finishReload() {
        const wp = weapons[this.weaponIndex];
        const needed = wp.magSize - this.mag;
        const add = Math.min(needed, this.reserve);
        this.mag += add; this.reserve -= add;
        this.reloading = false;
        if (this.hud.reloadBar) this.hud.reloadBar.style.opacity = 0;
        this.updateHUD();
    }

    respawn() {
        this.health = this.maxHealth; this.alive = true;
        this.weaponIndex = 0; this.mag = weapons[0].magSize; this.reserve = 200;
        this.grenades = 3; this.designatorCharges = 1;
        this.powerWeaponIndex = -1; this.powerWeaponTimer = 0;
        this.buildGunModel(weapons[0]); this.updateHUD();
        const angle = Math.random()*Math.PI*2, dist = 8+Math.random()*15;
        this.camera.position.set(Math.cos(angle)*dist, this.height, Math.sin(angle)*dist);
        this.velocity.set(0,0,0); this.yaw = 0; this.pitch = 0;
        if (this.model) {
            this.model.position.copy(this.camera.position);
            this.model.visible = true;
        }
    }

    damage(amount) {
        if (!this.alive) return;        // ⬅️ больше не наносим урон мёртвому
        this.health -= amount;
        this.updateHUD();
        if (this.health <= 0) {
            this.health = 0;
            this.alive = false;
            this.camera.position.set(0,-999,0);
            if (this.model) this.model.visible = false;
            if (gameMode === 'solo' && this === player1) {
                onPlayerDeath();
            }
        }
    }
    heal(amount) { this.health = Math.min(this.health+amount, this.maxHealth); this.updateHUD(); }
}

// ==================== Группы оружия ====================
const gunGroup1 = new THREE.Group(); camera1.add(gunGroup1); gunGroup1.position.set(0.35,-0.28,-0.55);
const gunGroup2 = new THREE.Group(); camera2.add(gunGroup2); gunGroup2.position.set(0.35,-0.28,-0.55);

const player1 = new Player(camera1, gunGroup1, {
    health: health1, weapon: weapon1, ammo: ammo1, grenades: grenades1,
    strikes: strikes1, kills: kills1, detector: detector1, crosshair: crosshair1,
    pickupHint: pickupHint1, reloadBar: reloadBar1, reloadFill: reloadFill1
});
const player2 = new Player(camera2, gunGroup2, {
    health: health2, weapon: weapon2, ammo: ammo2, grenades: grenades2,
    strikes: strikes2, kills: kills2, detector: detector2, crosshair: crosshair2,
    pickupHint: pickupHint2, reloadBar: reloadBar2, reloadFill: reloadFill2
}, true);

player1.buildGunModel(weapons[0]); player1.updateHUD();
player2.buildGunModel(weapons[0]); player2.updateHUD();

// ... (остальной код без камикадзе, с высотой пуль 1.2)

function createPlayerModel(color) {
    const geo = new THREE.CylinderGeometry(0.35, 0.35, 1.8, 8);
    const mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.5 });
    const model = new THREE.Mesh(geo, mat);
    model.castShadow = true;
    model.receiveShadow = true;
    return model;
}

function setupPvPModels() {
    if (!player1.model) {
        player1.model = createPlayerModel(0x00ff00);
        scene.add(player1.model);
    }
    if (!player2.model) {
        player2.model = createPlayerModel(0x0000ff);
        scene.add(player2.model);
    }
    player1.model.position.copy(player1.camera.position);
    player2.model.position.copy(player2.camera.position);
    crosshair1.style.left = '25%';
    crosshair2.style.left = '75%';
    crosshair2.style.display = 'block';
    hud2.style.display = 'block';
    pickupHint2.style.display = 'block';
    reloadBar2.style.display = 'block';
}

function removePvPModels() {
    if (player1.model) { scene.remove(player1.model); player1.model = null; }
    if (player2.model) { scene.remove(player2.model); player2.model = null; }
    crosshair1.style.left = '50%';
    crosshair2.style.display = 'none';
    hud2.style.display = 'none';
    pickupHint2.style.display = 'none';
    reloadBar2.style.display = 'none';
}

function updatePlayerModels() {
    if (player1.model && player1.alive) {
        player1.model.position.copy(player1.camera.position);
        player1.model.position.y -= 0.9;
        const dir = new THREE.Vector3(-Math.sin(player1.yaw), 0, -Math.cos(player1.yaw));
        player1.model.lookAt(player1.model.position.clone().add(dir));
    }
    if (player2.model && player2.alive) {
        player2.model.position.copy(player2.camera.position);
        player2.model.position.y -= 0.9;
        const dir = new THREE.Vector3(-Math.sin(player2.yaw), 0, -Math.cos(player2.yaw));
        player2.model.lookAt(player2.model.position.clone().add(dir));
    }
}

// ==================== Общие объекты ====================
const walls = [];
const enemies = []; const enemyBullets = [];
const MAX_ENEMY_BULLETS = 30; // <-- ГЛОБАЛЬНОЕ ОГРАНИЧЕНИЕ
let waveActive = false, waveTimer = 0, enemiesToSpawn = 0;
const WAVE_DELAY = 5;

// Телепорты
const portals = [];
function createPortal(x,z) {
    const group = new THREE.Group();
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 0.1), new THREE.MeshStandardMaterial({ color: 0x00aaff, emissive: new THREE.Color(0x004466) }));
    panel.position.set(0, 0.6, 0);
    group.add(panel);
    const torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.1, 16, 32), new THREE.MeshStandardMaterial({ color:0x00aaff, emissive:new THREE.Color(0x004466), roughness:0.3, metalness:0.7 }));
    torus.rotation.x = Math.PI/2;
    torus.position.y = 0.6;
    group.add(torus);
    group.position.set(x, 0, z);
    group.userData = { isPortal: true };
    scene.add(group);
    portals.push(group);
}
createPortal(-20,-20); createPortal(20,-20); createPortal(0,20); createPortal(-20,20); createPortal(20,20);

function activatePortal(portal, player) {
    const others = portals.filter(p => p !== portal);
    if (others.length === 0) return;
    const target = others[Math.floor(Math.random() * others.length)];
    player.camera.position.set(target.position.x, player.height, target.position.z);
    player.lastPortalTime = performance.now()/1000;
    spawnParticles(target.position, 0x00aaff, 20);
}

// Детектор врагов
function activateDetector(player) {
    player.detectorActive = true;
    player.detectorTimer = 10.0;
    player.updateHUD();
}

// Новые типы врагов (исправленные)
function spawnSniper(pos) {
    const geo = new THREE.CylinderGeometry(0.4, 0.4, 2.2, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0x2222cc, roughness: 0.4, metalness: 0.6 });
    const enemy = new THREE.Mesh(geo, mat);
    enemy.position.set(pos.x, 1.1, pos.z);
    const eyeGeo = new THREE.SphereGeometry(0.1, 4, 4);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(0, 0.8, 0.45);
    enemy.add(eye);
    const laserGeo = new THREE.CylinderGeometry(0.02, 0.02, 20, 4);
    const laserMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.4 });
    const laser = new THREE.Mesh(laserGeo, laserMat);
    laser.position.set(0, 0.8, 10);
    laser.rotation.x = Math.PI / 2;
    enemy.add(laser);
    enemy.userData = {
        health: 8, maxHealth: 8, speed: 1.5, lastShot: 0, shootCooldown: 4.0,
        targetDir: new THREE.Vector3(), isSniper: true, laser: laser
    };
    enemy.castShadow = true; enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

function spawnKamikaze(pos) {
    const geo = new THREE.SphereGeometry(0.5, 8, 8);
    const mat = new THREE.MeshStandardMaterial({ color: 0xff8800, emissive: new THREE.Color(0x331100), roughness: 0.3 });
    const enemy = new THREE.Mesh(geo, mat);
    enemy.position.set(pos.x, 0.7, pos.z);
    enemy.userData = {
        health: 2, maxHealth: 2, speed: 5.0, lastShot: 0, shootCooldown: Infinity, // НИКОГДА не стреляет
        targetDir: new THREE.Vector3(), isKamikaze: true,
        exploded: false
    };
    enemy.castShadow = true; enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

function spawnMimic(pos, fakeType) {
    let geo, mat;
    if (fakeType === 'health') {
        geo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        mat = new THREE.MeshStandardMaterial({ map: healthTexture, roughness: 0.4 });
    } else {
        geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        mat = new THREE.MeshStandardMaterial({ map: crateTexture, roughness: 0.6 });
    }
    const enemy = new THREE.Mesh(geo, mat);
    enemy.position.set(pos.x, fakeType === 'health' ? 0.2 : 0.4, pos.z);
    enemy.userData = {
        health: 6, maxHealth: 6, speed: 2.0, lastShot: 0, shootCooldown: 3.0,
        targetDir: new THREE.Vector3(), isMimic: true, fakeType: fakeType,
        revealed: false
    };
    enemy.castShadow = true; enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

// ==================== Функция спавна врагов (исправленная) ====================
function spawnEnemy(isBoss = false, specialType = null) {
    const ppos = player1.camera.position;
    let pos = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        0,
        (Math.random() - 0.5) * 80
    );
    for (let i = 0; i < 20; i++) {
        const ang = Math.random() * Math.PI * 2,
            dist = 12 + Math.random() * 20;
        const x = Math.max(-48, Math.min(48, ppos.x + Math.cos(ang) * dist));
        const z = Math.max(-48, Math.min(48, ppos.z + Math.sin(ang) * dist));
        pos.set(x, 0, z);
        if (pos.distanceTo(ppos) > 10) break;
    }

    // Специальные типы
    if (specialType === 'sniper') { spawnSniper(pos); return; }
    if (specialType === 'kamikaze') { spawnKamikaze(pos); return; }
    if (specialType === 'mimic') {
        const fakeType = Math.random() < 0.5 ? 'health' : 'crate';
        spawnMimic(pos, fakeType);
        return;
    }

    // --- БОСС ---
    if (isBoss) {
        const geo = new THREE.CylinderGeometry(0.9, 0.9, 3.5, 8);
        const mat = new THREE.MeshStandardMaterial({
            color: 0xcc44cc,
            roughness: 0.2,
            metalness: 0.8,
            emissive: new THREE.Color(0x440044),
            emissiveIntensity: 0.5
        });
        const enemy = new THREE.Mesh(geo, mat);
        enemy.position.set(pos.x, 1.75, pos.z);

        // Глаза
        const eyeGeo = new THREE.SphereGeometry(0.25, 6, 6);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const le = new THREE.Mesh(eyeGeo, eyeMat);
        le.position.set(-0.35, 0.9, 0.6);
        enemy.add(le);
        const re = new THREE.Mesh(eyeGeo, eyeMat);
        re.position.set(0.35, 0.9, 0.6);
        enemy.add(re);

        // Рога
        const hornMat = new THREE.MeshStandardMaterial({ color: 0x886622, roughness: 0.4 });
        const hornGeo = new THREE.ConeGeometry(0.2, 0.8, 6);
        const horn1 = new THREE.Mesh(hornGeo, hornMat);
        horn1.position.set(-0.3, 1.6, 0.2);
        horn1.rotation.z = -0.3;
        enemy.add(horn1);
        const horn2 = new THREE.Mesh(hornGeo, hornMat);
        horn2.position.set(0.3, 1.6, 0.2);
        horn2.rotation.z = 0.3;
        enemy.add(horn2);

        enemy.userData = {
            health: 40,
            maxHealth: 40,
            speed: 2.0,
            lastShot: 0,
            shootCooldown: 1.2,
            targetDir: new THREE.Vector3(),
            isBoss: true
        };
        enemy.castShadow = true;
        enemy.receiveShadow = true;
        scene.add(enemy);
        enemies.push(enemy);
        return;
    }

    // --- ОБЫЧНЫЙ ВРАГ ---
    const geo = new THREE.CylinderGeometry(0.5, 0.5, 2.2, 8);
    const mat = new THREE.MeshStandardMaterial({
        color: 0xcc3333,
        roughness: 0.4,
        metalness: 0.6,
        emissive: new THREE.Color(0x330000)
    });
    const enemy = new THREE.Mesh(geo, mat);
    enemy.position.set(pos.x, 1.1, pos.z);
    const eyeGeo = new THREE.SphereGeometry(0.15, 4, 4);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const le = new THREE.Mesh(eyeGeo, eyeMat);
    le.position.set(-0.2, 0.7, 0.45);
    enemy.add(le);
    const re = new THREE.Mesh(eyeGeo, eyeMat);
    re.position.set(0.2, 0.7, 0.45);
    enemy.add(re);
    enemy.userData = {
        health: 5,
        maxHealth: 5,
        speed: 2.5 + Math.random() * 2,
        lastShot: 0,
        shootCooldown: 2.5 + Math.random() * 2.5,
        targetDir: new THREE.Vector3(),
        isBoss: false
    };
    enemy.castShadow = true;
    enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

function findEnemy(obj) {
    while (obj) {
        if (enemies.includes(obj)) return obj;
        obj = obj.parent;
    }
    return null;
}

function killEnemy(enemy) {
    spawnParticles(enemy.position, enemy.userData.isBoss ? 0xff0000 : 0xff4444, enemy.userData.isBoss ? 35 : 20);
    if (enemy.userData.isKamikaze & !enemy.userData.exploded) {
        enemy.userData.exploded = true;
        explode(enemy.position, 10, 3);
    }
    dropAmmo(enemy.position.clone());
    if (enemy.userData.isBoss || Math.random()<0.2) dropGrenade(enemy.position.clone());
    if (Math.random()<0.25) dropHealth(enemy.position.clone());
    if (Math.random()<0.1) dropDetector(enemy.position.clone());
    scene.remove(enemy); enemies.splice(enemies.indexOf(enemy),1);
    player1.kills++; player1.updateHUD();
    if (enemyCountEl) enemyCountEl.textContent = enemies.length;
    if (enemies.length === 0 && waveActive) {
        waveActive = false; waveTimer = WAVE_DELAY;
        if (announceEl) { announceEl.style.display='block'; announceEl.textContent = `Волна ${player1.wave} пройдена!`; }
        setTimeout(()=> { if (announceEl) announceEl.style.display='none'; }, 2000);
    }
}
function updateEnemyCount() { if (enemyCountEl) enemyCountEl.textContent = enemies.length; }

const droppedItems = [];
function dropAmmo(pos) {
    const geo = new THREE.CylinderGeometry(0.15,0.15,0.2,8);
    const mat = new THREE.MeshStandardMaterial({ color:0x22cc22, emissive:new THREE.Color(0x004400), roughness:0.3 });
    const box = new THREE.Mesh(geo, mat); box.position.set(pos.x,0.2,pos.z);
    box.userData = { type:'ammo', life:15, age:0 };
    scene.add(box); droppedItems.push(box);
}
function dropGrenade(pos) {
    const geo = new THREE.SphereGeometry(0.2,8,8);
    const mat = new THREE.MeshStandardMaterial({ color:0xaa6600, emissive:new THREE.Color(0x331100), roughness:0.3 });
    const nade = new THREE.Mesh(geo, mat); nade.position.set(pos.x,0.2,pos.z);
    nade.userData = { type:'grenade', life:15, age:0 };
    scene.add(nade); droppedItems.push(nade);
}
function dropHealth(pos) {
    const geo = new THREE.BoxGeometry(0.4,0.4,0.4);
    const mat = new THREE.MeshStandardMaterial({ map: healthTexture, roughness:0.4 });
    const kit = new THREE.Mesh(geo, mat); kit.position.set(pos.x,0.2,pos.z);
    kit.userData = { type:'health', life:15, age:0 };
    scene.add(kit); droppedItems.push(kit);
}
function dropDetector(pos) {
    const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const mat = new THREE.MeshStandardMaterial({ map: detectorTexture, roughness:0.4 });
    const det = new THREE.Mesh(geo, mat); det.position.set(pos.x,0.2,pos.z);
    det.userData = { type:'detector', life:15, age:0 };
    scene.add(det); droppedItems.push(det);
}

const supplyCrates = [];
function spawnSupplyCrate() {
    const ppos = player1.camera.position;
    let pos = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        0,
        (Math.random() - 0.5) * 80
    );
    for (let i=0;i<20;i++) {
        const ang = Math.random()*Math.PI*2, dist = 10+Math.random()*20;
        const x = Math.max(-48,Math.min(48, ppos.x+Math.cos(ang)*dist));
        const z = Math.max(-48,Math.min(48, ppos.z+Math.sin(ang)*dist));
        pos.set(x, 0, z);
        if (pos.distanceTo(ppos) > 8) break;
    }
    const geo = new THREE.BoxGeometry(0.8,0.8,0.8);
    const mat = new THREE.MeshStandardMaterial({ map: crateTexture, roughness:0.6 });
    const crate = new THREE.Mesh(geo, mat); crate.position.set(pos.x,0.4,pos.z);
    crate.userData = { life:60, age:0 };
    scene.add(crate); supplyCrates.push(crate);
}

function spawnWall() {
    if (walls.length >= 25) return;
    const ppos = player1.camera.position;
    let pos = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        0,
        (Math.random() - 0.5) * 80
    );
    for (let i=0;i<20;i++) {
        const ang = Math.random()*Math.PI*2, dist = 8+Math.random()*35;
        const x = Math.max(-50,Math.min(50, ppos.x+Math.cos(ang)*dist));
        const z = Math.max(-50,Math.min(50, ppos.z+Math.sin(ang)*dist));
        pos.set(x, 0, z);
        if (pos.distanceTo(ppos) > 6) break;
    }
    const w=1.5+Math.random()*3, h=2+Math.random()*3.5, d=0.2+Math.random()*0.6;
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), new THREE.MeshStandardMaterial({ color: 0x888888, roughness:0.55, metalness:0.15 }));
    wall.position.set(pos.x, h/2, pos.z); wall.rotation.y = Math.random()*Math.PI*2;
    wall.castShadow = wall.receiveShadow = true;
    wall.userData = { health:3, maxHealth:3 };
    scene.add(wall); walls.push(wall);
}
function destroyWall(wall) {
    spawnParticles(wall.position, 0xff6600, 25);
    scene.remove(wall); walls.splice(walls.indexOf(wall),1);
    wall.geometry.dispose(); wall.material.dispose();
}

// Частицы и взрывы
const particles = [];
function spawnParticles(pos, col, count=12) {
    for (let i=0;i<count;i++) {
        const mat = new THREE.MeshStandardMaterial({ color:col, roughness:0.5, emissive:col, emissiveIntensity:0.6 });
        const p = new THREE.Mesh(new THREE.BoxGeometry(0.04,0.04,0.04), mat);
        p.position.copy(pos);
        p.userData = { velocity: new THREE.Vector3((Math.random()-0.5)*2, Math.random()*1.5, (Math.random()-0.5)*2).normalize().multiplyScalar(3+Math.random()*5), life:0.5+Math.random()*0.8, age:0 };
        scene.add(p); particles.push(p);
    }
}
const explosionEffects = [];
function spawnExplosionEffect(pos, col, maxRadius) {
    const geo = new THREE.SphereGeometry(0.2,32,32);
    const mat = new THREE.MeshBasicMaterial({ color:col, transparent:true, opacity:0.8, blending:THREE.AdditiveBlending });
    const sphere = new THREE.Mesh(geo, mat); sphere.position.copy(pos);
    sphere.userData = { maxScale:maxRadius, life:0.6, age:0 };
    scene.add(sphere); explosionEffects.push(sphere);
}
function explode(position, damage, radius) {
    explosionSound();
    spawnExplosionEffect(position, 0xff6600, radius);
    if (gameMode === 'solo' || gameMode === 'campaign') {
        for (const enemy of enemies) {
            if (position.distanceTo(enemy.position) < radius) {
                enemy.userData.health -= damage;
                enemy.material.color.setHSL(0,1,0.3+enemy.userData.health*0.15);
                spawnParticles(enemy.position, 0xff4400, 10);
                if (enemy.userData.health <= 0) killEnemy(enemy);
            }
        }
    } else if (gameMode === 'pvp') {
        if (player1.alive && player1.model && position.distanceTo(player1.model.position) < radius) player1.damage(damage);
        if (player2.alive && player2.model && position.distanceTo(player2.model.position) < radius) player2.damage(damage);
    }
    spawnParticles(position, 0xff8800, 20);
}

// ==================== Режимы ====================
let gameMode = null;
let gameState = 'menu';
let isPointerLocked = false;
const RELOAD_DURATION = 1.8;
let campaignMission = 0;
let tutorialHealth = null;
const campaignMissions = [
    { name: 'Миссия 1: Зачистка', description: 'Убей 10 врагов', target: 'kill', count: 10 },
    { name: 'Миссия 2: Выживание', description: 'Продержись 60 секунд', target: 'survive', time: 60 },
    { name: 'Миссия 3: Снайперы', description: 'Уничтожь 3 снайперов', target: 'kill_sniper', count: 3 },
    { name: 'Миссия 4: Босс', description: 'Убей босса', target: 'boss' },
    { name: 'Миссия 5: Финал', description: 'Уничтожь 20 врагов', target: 'kill', count: 20 }
];

const keyState1 = {}, keyState2 = {};

window.addEventListener('keydown', (e) => {
    if (gameState !== 'playing') return;
    if (['KeyW','KeyA','KeyS','KeyD','KeyR','KeyF','KeyE','KeyG','KeyX','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Space','ShiftLeft'].includes(e.code)) {
        keyState1[e.code] = true;
        if (e.code === 'KeyR') player1.reload();
        if (e.code === 'KeyF') meleeAttack(player1);
        if (e.code === 'KeyE') pickupItems(player1);
        if (e.code === 'KeyG') throwGrenade(player1);
        if (e.code === 'KeyX') useDesignator(player1);
        if (e.code.startsWith('Digit')) { const idx = parseInt(e.code.charAt(5))-1; player1.switchWeapon(idx); }
        e.preventDefault();
    }
    if (gameMode === 'pvp' && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Numpad0','Numpad1','Numpad2','Numpad3','Numpad4','Numpad5','Numpad6','Numpad7','Numpad8','NumpadDecimal','NumpadEnter','NumpadAdd','NumpadSubtract','NumpadMultiply','NumpadDivide'].includes(e.code)) {
        keyState2[e.code] = true;
        if (e.code === 'NumpadEnter') player2.reload();
        if (e.code === 'NumpadMultiply') meleeAttack(player2);
        if (e.code === 'NumpadSubtract') pickupItems(player2);
        if (e.code === 'NumpadAdd') throwGrenade(player2);
        if (e.code === 'NumpadDivide') useDesignator(player2);
        if (e.code >= 'Numpad1' && e.code <= 'Numpad7') { const idx = parseInt(e.code.charAt(6))-1; player2.switchWeapon(idx); }
        e.preventDefault();
    }
    if (e.code === 'Escape') togglePause();
});
window.addEventListener('keyup', (e) => { keyState1[e.code] = false; keyState2[e.code] = false; });

document.addEventListener('mousemove', (e) => {
    if (!isPointerLocked || gameState !== 'playing' || !player1.alive) return;
    player1.yaw -= e.movementX * 0.002;
    player1.pitch -= e.movementY * 0.002;
    player1.pitch = Math.max(-Math.PI/2.2, Math.min(Math.PI/2.2, player1.pitch));
});
document.addEventListener('mousedown', (e) => {
    if (e.button === 0 && isPointerLocked && gameState === 'playing' && player1.alive) shoot(player1);
    if (e.button === 1 && isPointerLocked && gameState === 'playing') meleeAttack(player1);
});
document.addEventListener('click', () => {
    if (gameState === 'playing' && !isPointerLocked) renderer.domElement.requestPointerLock();
});
document.addEventListener('pointerlockchange', () => {
    isPointerLocked = document.pointerLockElement === renderer.domElement;
});

function updatePlayer2Rotation(delta) {
    const rotSpeed = 2.5;
    if (keyState2['Numpad4']) player2.yaw += rotSpeed * delta;
    if (keyState2['Numpad6']) player2.yaw -= rotSpeed * delta;
    if (keyState2['Numpad8']) player2.pitch += rotSpeed * delta;
    if (keyState2['Numpad5']) player2.pitch -= rotSpeed * delta;
    player2.pitch = Math.max(-Math.PI/2.2, Math.min(Math.PI/2.2, player2.pitch));
    if (keyState2['Numpad0'] && player2.alive) shoot(player2);
}

function shoot(player) {
    if (!player.alive || player.reloading) return;
    const now = performance.now()/1000;
    const wp = (player.powerWeaponIndex >= 0) ? powerWeapons[player.powerWeaponIndex] : weapons[player.weaponIndex];
    if (now - player.lastShot < wp.fireRate) return;
    if (wp.isDesignator) { useDesignator(player); player.lastShot = now; return; }
    if (player.mag <= 0) { player.reload(); return; }
    player.lastShot = now; player.mag--; player.updateHUD();
    player.recoil = 0.04; player.gunGroup.position.z += 0.03;
    setTimeout(() => { player.gunGroup.position.z -= 0.03; }, 60);
    const flash = player.gunGroup.children.find(c=>c.isMesh && c.material.opacity!==undefined && c.material.color.getHex()===0xffaa00);
    if (flash) flash.material.opacity = 1;
    const plane = player.gunGroup.children.find(c=>c.isMesh && c.material.color.getHex()===0xffff88);
    if (plane) plane.material.opacity = 1;
    setTimeout(() => { if (flash) flash.material.opacity = 0; if (plane) plane.material.opacity = 0; }, 50);

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0,0), player.camera);
    if (wp.pellets) {
        for (let i=0;i<wp.pellets;i++) {
            raycaster.setFromCamera(new THREE.Vector2((Math.random()-0.5)*0.05, (Math.random()-0.5)*0.05), player.camera);
            processShot(player, raycaster, wp.damage);
        }
    } else if (wp.explosive) {
        const hits = raycaster.intersectObjects([...walls, floor], false);
        if (hits.length) explode(hits[0].point, wp.damage, 4);
    } else {
        const portalHits = raycaster.intersectObjects(portals, true);
        if (portalHits.length > 0) {
            const portalObj = portalHits[0].object;
            const portal = portals.find(p => p === portalObj || p.children.includes(portalObj));
            if (portal) {
                activatePortal(portal, player);
                return;
            }
        }
        processShot(player, raycaster, wp.damage);
    }
}

function processShot(shooter, raycaster, damage) {
    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial') {
        const intersects = raycaster.intersectObjects([...walls, ...enemies], true);
        if (intersects.length) {
            const hit = intersects[0];
            let obj = hit.object;
            const enemy = findEnemy(obj);
            if (enemy) {
                enemy.userData.health -= damage;
                enemy.material.color.setHSL(0,1,0.3+enemy.userData.health*0.15);
                spawnParticles(hit.point, 0xff0000, 5);
                if (enemy.userData.isMimic && !enemy.userData.revealed) {
                    enemy.userData.revealed = true;
                    enemy.material.color.set(0xcc3333);
                }
                if (enemy.userData.health <= 0) killEnemy(enemy);
            } else if (walls.includes(obj)) {
                obj.userData.health -= damage;
                if (obj.userData.health <= 0) destroyWall(obj);
                spawnParticles(hit.point, 0xff6600, 5);
            }
        }
    } else if (gameMode === 'pvp') {
        const targets = [...walls];
        if (shooter === player1 && player2.alive && player2.model) targets.push(player2.model);
        if (shooter === player2 && player1.alive && player1.model) targets.push(player1.model);
        const intersects = raycaster.intersectObjects(targets, false);
        if (intersects.length) {
            const hit = intersects[0]; const obj = hit.object;
            if (obj === player2.model) { player2.damage(damage); if (!player2.alive) handleKill(player1, player2); }
            else if (obj === player1.model) { player1.damage(damage); if (!player1.alive) handleKill(player2, player1); }
            else if (walls.includes(obj)) {
                obj.userData.health -= damage;
                if (obj.userData.health <= 0) destroyWall(obj);
            }
        }
    }
}

function handleKill(killer, victim) {
    killer.kills++; killer.updateHUD();
    if (announceEl) { announceEl.style.display='block'; announceEl.textContent = `Игрок ${killer===player1?'1':'2'} убил Игрока ${victim===player1?'1':'2'}!`; }
    setTimeout(()=> { if (announceEl) announceEl.style.display='none'; }, 2000);
    if (killer.kills >= 10) {
        gameState = 'menu'; if (announceEl) { announceEl.style.display='block'; announceEl.textContent = `Победил Игрок ${killer===player1?'1':'2'}!`; }
        setTimeout(()=> { if (announceEl) announceEl.style.display='none'; showMenu(); }, 3000);
        document.exitPointerLock();
    }
    setTimeout(() => { if (gameState==='playing') victim.respawn(); }, 1500);
}

function onPlayerDeath() {
    gameState = 'menu';
    document.exitPointerLock();
    if (deathScreen) {
        deathScreen.style.display = 'flex';
        if (deathKills) deathKills.textContent = `Убийств: ${player1.kills}`;
    }
}

function useDesignator(player) {
    if (!player.alive || player.designatorCharges <= 0) return;
    player.designatorCharges--; player.updateHUD();
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0,0), player.camera);
    const hits = raycaster.intersectObjects([floor], false);
    if (hits.length) {
        const point = hits[0].point;
        const marker = new THREE.Mesh(new THREE.RingGeometry(0.5,0.7,32), new THREE.MeshBasicMaterial({ color:0xff0000, side:THREE.DoubleSide, transparent:true, opacity:0.8 }));
        marker.rotation.x = -Math.PI/2; marker.position.set(point.x,0.1,point.z); scene.add(marker);
        setTimeout(() => { scene.remove(marker); explode(point, 20, 6); }, 3000);
        spawnParticles(point, 0xff0000, 10);
    }
}

function throwGrenade(player) {
    if (!player.alive || player.grenades <= 0) return;
    player.grenades--; player.updateHUD();
    const nade = new THREE.Mesh(new THREE.SphereGeometry(0.15,8,8), new THREE.MeshStandardMaterial({ color:0xaa6600, emissive:new THREE.Color(0x331100) }));
    nade.position.copy(player.camera.position.clone().add(new THREE.Vector3(0,0.5,0)));
    const dir = new THREE.Vector3(-Math.sin(player.yaw), 0.25, -Math.cos(player.yaw)).normalize();
    nade.userData = { velocity: dir.clone().multiplyScalar(10), life:2, age:0 };
    scene.add(nade);
    setTimeout(() => { if (scene.children.includes(nade)) { scene.remove(nade); explode(nade.position, 8, 5); } }, 2000);
}

function meleeAttack(player) {
    if (!player.alive || player.reloading) return;
    const now = performance.now()/1000;
    if (now - player.meleeCooldown < player.meleeDuration) return;
    player.meleeCooldown = now;
    player.gunGroup.rotation.z = 0.6; setTimeout(() => { player.gunGroup.rotation.z = 0; }, 300);
    const pos = player.camera.position;
    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial') {
        for (const enemy of enemies) {
            if (pos.distanceTo(enemy.position) < 1.8) {
                enemy.userData.health -= 3;
                enemy.material.color.setHSL(0,1,0.3+enemy.userData.health*0.15);
                enemy.position.add(enemy.position.clone().sub(pos).normalize().multiplyScalar(2));
                spawnParticles(enemy.position, 0xffff00, 5);
                if (enemy.userData.health <= 0) killEnemy(enemy);
            }
        }
    } else if (gameMode === 'pvp') {
        if (player === player1 && player2.alive && player2.model && pos.distanceTo(player2.model.position) < 1.8) {
            player2.damage(3); if (!player2.alive) handleKill(player1, player2);
        }
        if (player === player2 && player1.alive && player1.model && pos.distanceTo(player1.model.position) < 1.8) {
            player1.damage(3); if (!player1.alive) handleKill(player2, player1);
        }
    }
}

function pickupItems(player) {
    if (!player.alive) return;
    const pos = player.camera.position;
    let picked = false;
    for (let i=supplyCrates.length-1;i>=0;i--) {
        const crate = supplyCrates[i];
        if (pos.distanceTo(crate.position) < 1.8) {
            const mimic = enemies.find(e => e.userData.isMimic && e.userData.fakeType === 'crate' && e.position.distanceTo(crate.position) < 0.5);
            if (mimic && !mimic.userData.revealed) {
                player.damage(10);
                mimic.userData.revealed = true;
                mimic.material.color.set(0xcc3333);
                spawnParticles(mimic.position, 0xff0000, 10);
            } else {
                crateAlarm(); scene.remove(crate); supplyCrates.splice(i,1);
                const pwp = powerWeapons[Math.floor(Math.random()*powerWeapons.length)];
                player.prevWeaponIndex = player.weaponIndex; player.prevMag = player.mag; player.prevReserve = player.reserve;
                player.powerWeaponIndex = pwp.duration; player.powerWeaponTimer = pwp.duration;
                const tempWeapon = { ...pwp, magSize:999, color:pwp.color, model:pwp.model, crosshair:pwp.crosshair };
                weapons.push(tempWeapon); player.weaponIndex = weapons.length-1; player.mag = 999;
                player.buildGunModel(tempWeapon); player.updateHUD();
            }
            picked = true; break;
        }
    }
    for (let i=droppedItems.length-1; i>=0; i--) {
        const item = droppedItems[i];
        if (pos.distanceTo(item.position) < 1.8) {
            if (item.userData.type === 'ammo') { player.reserve = Math.min(player.reserve+15, 200); }
            else if (item.userData.type === 'grenade') { player.grenades++; }
            else if (item.userData.type === 'health') {
                const mimic = enemies.find(e => e.userData.isMimic && e.userData.fakeType === 'health' && e.position.distanceTo(item.position) < 0.5);
                if (mimic && !mimic.userData.revealed) {
                    player.damage(10);
                    mimic.userData.revealed = true;
                    mimic.material.color.set(0xcc3333);
                    spawnParticles(mimic.position, 0xff0000, 10);
                } else {
                    player.heal(25);
                    if (gameMode === 'tutorial' && item === tutorialHealth) {
                        player.tutorialStep = 3;
                        tutorialHealth = null;
                    }
                }
            }
            else if (item.userData.type === 'detector') { activateDetector(player); }
            spawnParticles(item.position, 0x00ff00, 8);
            scene.remove(item); item.geometry.dispose(); item.material.dispose();
            droppedItems.splice(i,1); picked = true;
        }
    }
    if (picked) { player.updateHUD(); if (player.hud.pickupHint) player.hud.pickupHint.style.display='none'; }
    else { if (player.hud.pickupHint) { player.hud.pickupHint.style.display='block'; setTimeout(()=>{ if (player.hud.pickupHint) player.hud.pickupHint.style.display='none'; }, 1500); } }
}

// ==================== Игровой цикл ====================
let lastTime = performance.now()/1000;
let lastWallSpawn = 0, lastHealthSpawn = 0, lastCrateSpawn = 0;

function animate(timestamp) {
    requestAnimationFrame(animate);
    if (gameState !== 'playing' && gameState !== 'paused') {
        renderer.render(scene, camera1);
        return;
    }
    const currentTime = timestamp/1000;
    const delta = Math.min(currentTime - lastTime, 0.15);
    lastTime = currentTime;

    if (gameState === 'paused') { renderer.render(scene, camera1); return; }

    if (player1.detectorActive) {
        player1.detectorTimer -= delta;
        if (player1.detectorTimer <= 0) {
            player1.detectorActive = false;
            player1.detectorTimer = 0;
            player1.updateHUD();
        }
    }

    [player1, player2].forEach(p => {
        if (p.powerWeaponIndex >= 0) {
            p.powerWeaponTimer -= delta;
            if (p.powerWeaponTimer <= 0) {
                weapons.pop(); p.weaponIndex = p.prevWeaponIndex; p.mag = p.prevMag; p.reserve = p.prevReserve;
                p.buildGunModel(weapons[p.weaponIndex]); p.updateHUD(); p.powerWeaponIndex = -1;
            }
        }
    });

    if (gameMode === 'campaign') {
        const mission = campaignMissions[campaignMission];
        if (mission.target === 'kill' && player1.kills >= mission.count) {
            campaignMission++;
            if (campaignMission >= campaignMissions.length) {
                announceEl.style.display='block'; announceEl.textContent = 'Кампания пройдена!';
                setTimeout(() => { announceEl.style.display='none'; showMenu(); }, 3000);
                gameState = 'menu';
                document.exitPointerLock();
            } else {
                announceEl.style.display='block'; announceEl.textContent = `Миссия ${campaignMission+1}: ${campaignMissions[campaignMission].name}`;
                setTimeout(() => { announceEl.style.display='none'; }, 2000);
                player1.kills = 0;
                enemies.forEach(e => scene.remove(e)); enemies.length = 0;
                spawnEnemiesForMission();
            }
        } else if (mission.target === 'survive') {
            mission.time -= delta;
            if (mission.time <= 0) {
                campaignMission++;
                announceEl.style.display='block'; announceEl.textContent = 'Выживание завершено!';
                setTimeout(() => { announceEl.style.display='none'; }, 2000);
                enemies.forEach(e => scene.remove(e)); enemies.length = 0;
                spawnEnemiesForMission();
            }
        }
    }

    if (gameMode === 'tutorial') {
        if (player1.tutorialStep === 0) {
            tutorialText.style.display = 'block';
            tutorialText.textContent = 'Двигайтесь с помощью WASD. Посмотрите вокруг мышью.';
            if (Math.abs(player1.velocity.x) > 0.1 || Math.abs(player1.velocity.z) > 0.1) {
                player1.tutorialStep = 1;
            }
        } else if (player1.tutorialStep === 1) {
            tutorialText.textContent = 'Нажмите ЛКМ, чтобы выстрелить из пистолета.';
            if (player1.mag < 12) {
                player1.tutorialStep = 2;
            }
        } else if (player1.tutorialStep === 2) {
            tutorialText.textContent = 'Нажмите E, чтобы подобрать аптечку (она перед вами).';
            if (!tutorialHealth) {
                const forward = new THREE.Vector3(-Math.sin(player1.yaw), 0, -Math.cos(player1.yaw));
                const pos = player1.camera.position.clone().add(forward.multiplyScalar(3));
                const kit = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.4,0.4), new THREE.MeshStandardMaterial({ map: healthTexture, roughness:0.4 }));
                kit.position.set(pos.x, 0.2, pos.z);
                kit.userData = { type:'health', life:999, age:0 };
                scene.add(kit);
                droppedItems.push(kit);
                tutorialHealth = kit;
            }
        } else if (player1.tutorialStep === 3) {
            tutorialText.textContent = 'Отлично! Теперь вы готовы к бою. Нажмите Esc, чтобы выйти в меню.';
        }
    }

    if (gameMode === 'solo') {
        if (!waveActive && enemies.length === 0 && waveTimer > 0) {
            waveTimer -= delta;
            if (waveTimer <= 0) startWave();
            else { if (announceEl) { announceEl.style.display='block'; announceEl.textContent = `Следующая волна через ${Math.ceil(waveTimer)}...`; } }
        } else if (waveActive) { if (announceEl) announceEl.style.display='none'; }

        if (currentTime - lastWallSpawn > 2.5 && walls.length < 25) { lastWallSpawn = currentTime; spawnWall(); }
        if (currentTime - lastHealthSpawn > 10) {
            lastHealthSpawn = currentTime;
            const ppos = player1.camera.position; let pos;
            for (let i=0;i<20;i++) {
                const ang = Math.random()*Math.PI*2, dist = 8+Math.random()*25;
                const x = Math.max(-50,Math.min(50, ppos.x+Math.cos(ang)*dist));
                const z = Math.max(-50,Math.min(50, ppos.z+Math.sin(ang)*dist));
                pos = new THREE.Vector3(x,0,z);
                if (pos.distanceTo(ppos) > 7) break;
            }
            dropHealth(pos);
        }
        if (currentTime - lastCrateSpawn > 30) { lastCrateSpawn = currentTime; spawnSupplyCrate(); }
    } else if (gameMode === 'pvp') {
        if (currentTime - lastWallSpawn > 2.5 && walls.length < 25) { lastWallSpawn = currentTime; spawnWall(); }
        if (currentTime - lastHealthSpawn > 10) { lastHealthSpawn = currentTime; }
        if (currentTime - lastCrateSpawn > 30) { lastCrateSpawn = currentTime; spawnSupplyCrate(); }
    }

    [player1, player2].forEach(p => {
        if (p.reloading) {
            const progress = Math.min((currentTime - p.reloadStart)/RELOAD_DURATION, 1);
            if (p.hud.reloadFill) p.hud.reloadFill.style.width = `${progress*100}%`;
            if (progress >= 1) p.finishReload();
        }
    });

    updatePlayerMovement(player1, keyState1, delta);
    if (gameMode === 'pvp') { updatePlayerMovement(player2, keyState2, delta); updatePlayer2Rotation(delta); }

    player1.camera.rotation.order = 'YXZ'; player1.camera.rotation.y = player1.yaw; player1.camera.rotation.x = player1.pitch;
    player2.camera.rotation.order = 'YXZ'; player2.camera.rotation.y = player2.yaw; player2.camera.rotation.x = player2.pitch;

    [player1, player2].forEach(p => {
        if (p.recoil > 0) { p.recoil *= Math.exp(-delta*18); if (p.recoil < 0.001) p.recoil = 0; p.gunGroup.rotation.x = -p.recoil; }
        else p.gunGroup.rotation.x += (0 - p.gunGroup.rotation.x) * delta * 15;
    });

    if (gameMode === 'pvp') updatePlayerModels();

    if (player1.alive) {
        for (const portal of portals) {
            if (portal.position.distanceTo(player1.camera.position) < 1.5) {
                activatePortal(portal, player1);
                break;
            }
        }
    }

    // Вражеская стрельба с ограничением
    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial') {
        for (const enemy of enemies) {
            const target = player1.camera.position;
            const toPlayer = new THREE.Vector3().subVectors(target, enemy.position);
            const dist = toPlayer.length(); toPlayer.y = 0; const dir = toPlayer.clone().normalize();
            if (enemy.userData.isKamikaze) {
                if (dist < 2.5) {
                    enemy.userData.health = 0;
                    killEnemy(enemy);
                    continue;
                }
            }
            // Стрельба только если не превышен лимит
            if (enemyBullets.length < MAX_ENEMY_BULLETS) {
                if (enemy.userData.isSniper) {
                    if (enemy.userData.laser) {
                        enemy.userData.laser.scale.y = dist / 20;
                        enemy.userData.laser.position.z = dist / 2;
                    }
                    if (dist < 30 && currentTime - enemy.userData.lastShot > enemy.userData.shootCooldown) {
                        enemy.userData.lastShot = currentTime;
                        const bullet = new THREE.Mesh(new THREE.SphereGeometry(0.1, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
                        bullet.position.copy(enemy.position.clone().add(new THREE.Vector3(0, 1.2, 0)));
                        bullet.userData = { velocity: dir.clone().multiplyScalar(20), life: 2, age: 0 };
                        scene.add(bullet); enemyBullets.push(bullet);
                    }
                } else {
                    const vision = new THREE.Raycaster(enemy.position.clone().add(new THREE.Vector3(0,1,0)), dir);
                    const see = vision.intersectObjects(walls, false);
                    const canSee = see.length === 0 || see[0].distance > dist;
                    if (canSee && currentTime - enemy.userData.lastShot > enemy.userData.shootCooldown) {
                        enemy.userData.lastShot = currentTime;
                        const bullet = new THREE.Mesh(new THREE.SphereGeometry(0.08,4,4), new THREE.MeshBasicMaterial({ color:0xff4444 }));
                        bullet.position.copy(enemy.position.clone().add(new THREE.Vector3(0,1,0)));
                        bullet.userData = { velocity: dir.clone().multiplyScalar(12), life:3, age:0 };
                        scene.add(bullet); enemyBullets.push(bullet);
                    }
                }
            }
            enemy.userData.targetDir.lerp(dir, 0.05).normalize();
            const move = enemy.userData.targetDir.clone().multiplyScalar(enemy.userData.speed*delta);
            const testBox = new THREE.Box3().setFromObject(enemy).clone().translate(move);
            let blocked = false;
            for (const w of walls) if (testBox.intersectsBox(new THREE.Box3().setFromObject(w))) { blocked=true; break; }
            if (!blocked) enemy.position.copy(enemy.position.clone().add(move));
            enemy.lookAt(new THREE.Vector3(target.x, enemy.position.y, target.z));
        }
        // Удаление старых пуль
        for (let i=enemyBullets.length-1;i>=0;i--) {
            const b = enemyBullets[i];
            b.userData.age += delta;
            if (b.userData.age > b.userData.life) { scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); continue; }
            b.position.x += b.userData.velocity.x*delta; b.position.y += b.userData.velocity.y*delta; b.position.z += b.userData.velocity.z*delta;
            if (b.position.distanceTo(player1.camera.position) < 1.8) { player1.damage(10); scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); }
            else if (new THREE.Raycaster(b.position, b.userData.velocity.clone().normalize(), 0.3).intersectObjects(walls,false).length) {
                scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1);
            }
        }
    }

    enemies.forEach(e => {
        if (player1.detectorActive) {
            e.traverse(child => { if (child.isMesh) child.material.emissive = new THREE.Color(0xff8800); });
        } else {
            e.traverse(child => { if (child.isMesh && child.material.emissive) child.material.emissive = new THREE.Color(0x000000); });
        }
    });

    for (let i=droppedItems.length-1;i>=0;i--) {
        const item = droppedItems[i];
        item.userData.age += delta; item.rotation.y += 2*delta;
        if (item.userData.age > item.userData.life) { scene.remove(item); item.geometry.dispose(); item.material.dispose(); droppedItems.splice(i,1); }
    }
    for (let i=supplyCrates.length-1;i>=0;i--) {
        const crate = supplyCrates[i];
        crate.userData.age += delta; crate.rotation.y += 1*delta;
        if (crate.userData.age > crate.userData.life) { scene.remove(crate); supplyCrates.splice(i,1); }
    }

    for (let i=explosionEffects.length-1;i>=0;i--) {
        const e = explosionEffects[i]; e.userData.age += delta;
        const progress = e.userData.age / e.userData.life;
        if (progress >= 1.0) { scene.remove(e); e.geometry.dispose(); e.material.dispose(); explosionEffects.splice(i,1); continue; }
        e.scale.setScalar(0.2 + (e.userData.maxScale-0.2)*progress);
        e.material.opacity = 0.8 * (1 - progress);
    }
    for (let i=particles.length-1;i>=0;i--) {
        const p = particles[i]; p.userData.age += delta;
        if (p.userData.age >= p.userData.life) { scene.remove(p); p.geometry.dispose(); p.material.dispose(); particles.splice(i,1); continue; }
        p.position.x += p.userData.velocity.x*delta; p.position.y += p.userData.velocity.y*delta; p.position.z += p.userData.velocity.z*delta;
        p.userData.velocity.y -= 9.8*delta;
        const r = 1 - p.userData.age/p.userData.life; p.scale.setScalar(r); p.material.opacity = r; p.material.transparent = true;
    }

    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial') {
        renderer.setViewport(0,0,window.innerWidth,window.innerHeight);
        renderer.setScissor(0,0,window.innerWidth,window.innerHeight);
        renderer.setScissorTest(false);
        camera1.aspect = window.innerWidth / window.innerHeight;
        camera1.updateProjectionMatrix();
        renderer.render(scene, camera1);
    } else if (gameMode === 'pvp') {
        renderer.setScissorTest(true);
        const w = window.innerWidth, h = window.innerHeight;
        renderer.setViewport(0,0,w/2,h); renderer.setScissor(0,0,w/2,h);
        camera1.aspect = (w/2)/h; camera1.updateProjectionMatrix();
        renderer.render(scene, camera1);

        renderer.setViewport(w/2,0,w/2,h); renderer.setScissor(w/2,0,w/2,h);
        camera2.aspect = (w/2)/h; camera2.updateProjectionMatrix();
        renderer.render(scene, camera2);
        renderer.setScissorTest(false);
    }
}

function updatePlayerMovement(player, keys, delta) {
    const forward = new THREE.Vector3(-Math.sin(player.yaw), 0, -Math.cos(player.yaw)).normalize();
    const right = new THREE.Vector3(Math.cos(player.yaw), 0, -Math.sin(player.yaw)).normalize();
    let mx = 0, mz = 0;
    if (keys['KeyW'] || keys['ArrowUp']) { mx += forward.x; mz += forward.z; }
    if (keys['KeyS'] || keys['ArrowDown']) { mx -= forward.x; mz -= forward.z; }
    if (keys['KeyA'] || keys['ArrowLeft']) { mx -= right.x; mz -= right.z; }
    if (keys['KeyD'] || keys['ArrowRight']) { mx += right.x; mz += right.z; }
    const len = Math.sqrt(mx*mx+mz*mz);
    if (len > 1) { mx /= len; mz /= len; }
    const speed = player.speed * ((keys['ShiftLeft']||keys['ShiftRight']) ? 1.6 : 1);
    player.velocity.x = mx * speed; player.velocity.z = mz * speed;
    if ((keys['Space'] || keys['NumpadDecimal']) && player.onGround) { player.velocity.y = player.jumpPower; player.onGround = false; }
    player.velocity.y -= player.gravity * delta;

    const newPos = player.camera.position.clone();
    newPos.x += player.velocity.x * delta; newPos.z += player.velocity.z * delta; newPos.y += player.velocity.y * delta;
    let collided = false;
    const h = player.height;
    const pBox = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(newPos.x,newPos.y,newPos.z), new THREE.Vector3(player.radius*2, h, player.radius*2));
    for (const wall of walls) { if (pBox.intersectsBox(new THREE.Box3().setFromObject(wall))) { collided = true; break; } }
    if (!collided) player.camera.position.copy(newPos);
    else { player.camera.position.x -= player.velocity.x*delta; player.camera.position.z -= player.velocity.z*delta; player.velocity.x=0; player.velocity.z=0; }
    if (player.camera.position.y <= player.height/2) { player.camera.position.y = player.height/2; player.velocity.y = 0; player.onGround = true; }
    else player.onGround = false;
    player.camera.position.x = Math.max(-53,Math.min(53,player.camera.position.x));
    player.camera.position.z = Math.max(-53,Math.min(53,player.camera.position.z));
    player.camera.position.y = Math.min(30, player.camera.position.y);
}

// ==================== Меню и запуск ====================
function showMenu() {
    gameState = 'menu';
    mainMenu.classList.remove('menu-hidden');
    pauseMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    document.exitPointerLock();
}
function togglePause() {
    if (gameState === 'playing') { gameState = 'paused'; pauseMenu.classList.remove('menu-hidden'); document.exitPointerLock(); }
    else if (gameState === 'paused') { gameState = 'playing'; pauseMenu.classList.add('menu-hidden'); renderer.domElement.requestPointerLock(); }
}
btnResume.addEventListener('click', togglePause);
btnQuit.addEventListener('click', showMenu);

function startSolo() {
    initAudio();
    gameMode = 'solo';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    walls.forEach(w => { scene.remove(w); w.geometry.dispose(); w.material.dispose(); }); walls.length = 0;
    enemies.forEach(e => scene.remove(e)); enemies.length = 0;
    enemyBullets.forEach(b => scene.remove(b)); enemyBullets.length = 0;
    droppedItems.forEach(it => { scene.remove(it); it.geometry.dispose(); it.material.dispose(); }); droppedItems.length = 0;
    supplyCrates.forEach(c => scene.remove(c)); supplyCrates.length = 0;
    particles.forEach(p => { scene.remove(p); p.geometry.dispose(); p.material.dispose(); }); particles.length = 0;
    explosionEffects.forEach(e => { scene.remove(e); e.geometry.dispose(); e.material.dispose(); }); explosionEffects.length = 0;
    player1.respawn(); player1.kills = 0;
    player1.wave = 1; if (wave1) wave1.textContent = 1;
    waveActive = false; waveTimer = 0; enemiesToSpawn = 0;
    updateEnemyCount();
    for (let i=0;i<8;i++) spawnWall();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    startWave();
    renderer.domElement.requestPointerLock();
}
function startWave() {
    player1.wave++; if (wave1) wave1.textContent = player1.wave;
    enemiesToSpawn = 2 + player1.wave * 1.5;
    waveActive = true; waveTimer = 0;
    const interval = setInterval(() => {
        if (!waveActive || enemiesToSpawn <= 0) { clearInterval(interval); return; }
        const r = Math.random();
        if (r < 0.1) spawnEnemy(false, 'sniper');
        else if (r < 0.2) spawnEnemy(false, 'kamikaze');
        else if (r < 0.25) spawnEnemy(false, 'mimic');
        else spawnEnemy(false);
        enemiesToSpawn--;
        updateEnemyCount();
    }, 800); // медленнее спавн
    if (player1.wave % 5 === 0) setTimeout(() => { if (waveActive) spawnEnemy(true); }, 2000);
}
btnSolo.addEventListener('click', startSolo);
// Показать/скрыть экран управления
btnControls.addEventListener('click', () => {
    controlsScreen.style.display = 'flex';
});
btnControlsBack.addEventListener('click', () => {
    controlsScreen.style.display = 'none';
});
btnCampaign.addEventListener('click', () => {
    initAudio();
    gameMode = 'campaign';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    walls.forEach(w => { scene.remove(w); w.geometry.dispose(); w.material.dispose(); }); walls.length = 0;
    enemies.forEach(e => scene.remove(e)); enemies.length = 0;
    enemyBullets.forEach(b => scene.remove(b)); enemyBullets.length = 0;
    droppedItems.forEach(it => { scene.remove(it); it.geometry.dispose(); it.material.dispose(); }); droppedItems.length = 0;
    supplyCrates.forEach(c => scene.remove(c)); supplyCrates.length = 0;
    particles.forEach(p => { scene.remove(p); p.geometry.dispose(); p.material.dispose(); }); particles.length = 0;
    explosionEffects.forEach(e => { scene.remove(e); e.geometry.dispose(); e.material.dispose(); }); explosionEffects.length = 0;
    player1.respawn(); player1.kills = 0;
    campaignMission = 0;
    announceEl.style.display='block'; announceEl.textContent = campaignMissions[0].name;
    setTimeout(() => { announceEl.style.display='none'; }, 2000);
    for (let i=0;i<8;i++) spawnWall();
    spawnEnemiesForMission();
    lastWallSpawn = performance.now()/1000;
    renderer.domElement.requestPointerLock();
});

function spawnEnemiesForMission() {
    const mission = campaignMissions[campaignMission];
    if (mission.target === 'kill') {
        for (let i=0;i<mission.count;i++) spawnEnemy(false);
    } else if (mission.target === 'survive') {
        for (let i=0;i<8;i++) spawnEnemy(false);
    } else if (mission.target === 'kill_sniper') {
        for (let i=0;i<mission.count;i++) spawnEnemy(false, 'sniper');
    } else if (mission.target === 'boss') {
        spawnEnemy(true);
    }
}

btnTutorial.addEventListener('click', () => {
    initAudio();
    gameMode = 'tutorial';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'block';
    tutorialText.textContent = 'Добро пожаловать в обучение!';
    removePvPModels();
    walls.forEach(w => { scene.remove(w); w.geometry.dispose(); w.material.dispose(); }); walls.length = 0;
    enemies.forEach(e => scene.remove(e)); enemies.length = 0;
    enemyBullets.forEach(b => scene.remove(b)); enemyBullets.length = 0;
    droppedItems.forEach(it => { scene.remove(it); it.geometry.dispose(); it.material.dispose(); }); droppedItems.length = 0;
    supplyCrates.forEach(c => scene.remove(c)); supplyCrates.length = 0;
    particles.forEach(p => { scene.remove(p); p.geometry.dispose(); p.material.dispose(); }); particles.length = 0;
    explosionEffects.forEach(e => { scene.remove(e); e.geometry.dispose(); e.material.dispose(); }); explosionEffects.length = 0;
    player1.respawn();
    player1.tutorialStep = 0;
    tutorialHealth = null;
    for (let i=0;i<4;i++) spawnWall();
    renderer.domElement.requestPointerLock();
});

btnPvp.addEventListener('click', () => {
    initAudio();
    gameMode = 'pvp';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    setupPvPModels();
    walls.forEach(w => { scene.remove(w); w.geometry.dispose(); w.material.dispose(); }); walls.length = 0;
    enemies.forEach(e => scene.remove(e)); enemies.length = 0;
    enemyBullets.forEach(b => scene.remove(b)); enemyBullets.length = 0;
    droppedItems.forEach(it => { scene.remove(it); it.geometry.dispose(); it.material.dispose(); }); droppedItems.length = 0;
    supplyCrates.forEach(c => scene.remove(c)); supplyCrates.length = 0;
    particles.forEach(p => { scene.remove(p); p.geometry.dispose(); p.material.dispose(); }); particles.length = 0;
    explosionEffects.forEach(e => { scene.remove(e); e.geometry.dispose(); e.material.dispose(); }); explosionEffects.length = 0;
    player1.respawn(); player2.respawn();
    player1.kills = 0; player2.kills = 0;
    player1.updateHUD(); player2.updateHUD();
    for (let i=0;i<8;i++) spawnWall();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    renderer.domElement.requestPointerLock();
});

restartBtn.addEventListener('click', () => {
    deathScreen.style.display = 'none';
    if (gameMode === 'solo') startSolo();
    else if (gameMode === 'campaign') btnCampaign.click();
    else if (gameMode === 'tutorial') btnTutorial.click();
    else if (gameMode === 'pvp') btnPvp.click();
});

showMenu();
requestAnimationFrame(animate);
window.addEventListener('contextmenu', e=>e.preventDefault());
window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));