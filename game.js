// ==================== DOM ====================
const getEl = (id) => document.getElementById(id);
const mainMenu = getEl('main-menu');
const pauseMenu = getEl('pause-menu');
const btnSolo = getEl('btn-solo');
const btnCampaign = getEl('btn-campaign');
const btnTutorial = getEl('btn-tutorial');
const btnPvp = getEl('btn-pvp');
const btnBaseDefense = getEl('btn-basedefense');
const btnControls = getEl('btn-controls');
const controlsScreen = getEl('controls-screen');
const btnControlsBack = getEl('btn-controls-back');
const btnResume = getEl('btn-resume');
const btnQuit = getEl('btn-quit');
const announceEl = getEl('announce');
const deathScreen = getEl('death-screen');
const deathTitleEl = getEl('death-title');
const deathKills = getEl('death-kills');
const baseLabelEl = getEl('base-label');
const baseHealthEl = getEl('base-health');
const restartBtn = getEl('restart-btn');
const tutorialText = getEl('tutorial-text');
console.log(typeof sinon);

// level.json is the single source of truth for arena geometry and spawn points.
let levelData = null;
let levelLoadError = null;
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
function shieldClangSound() { playTone(180, 0.12, 'square', 0.4); }

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
    { name: 'Пистолет',   damage: 1, fireRate: 0.30, magSize: 12, color: 0x888888, model: 'pistol', crosshair: 'cross-pistol', tracerColor: 0xffffaa, tracerThickness: 0.015, bulletSpeed: 110 },
    { name: 'Дробовик',   damage: 1, fireRate: 0.70, magSize: 6,  color: 0x8B4513, model: 'shotgun', pellets:5, crosshair: 'cross-shotgun', tracerColor: 0xffaa33, tracerThickness: 0.012, bulletSpeed: 95 },
    { name: 'Автомат',    damage: 1, fireRate: 0.10, magSize: 30, color: 0x333333, model: 'rifle', automatic: true, crosshair: 'cross-rifle', tracerColor: 0xffee66, tracerThickness: 0.02, bulletSpeed: 150 },
    { name: 'Пулемёт',    damage: 1, fireRate: 0.07, magSize: 100,color: 0x555555, model: 'lmg', automatic: true, crosshair: 'cross-lmg', tracerColor: 0xffcc00, tracerThickness: 0.025, bulletSpeed: 150 },
    { name: 'Снайперская',damage: 5, fireRate: 1.20, magSize: 5,  color: 0x004400, model: 'sniper', crosshair: 'cross-sniper', tracerColor: 0x77ff77, tracerThickness: 0.03, bulletSpeed: 260 },
    { name: 'Плазма',     damage: 2, fireRate: 0.15, magSize: 20, color: 0x00ffff, model: 'plasma', automatic: true, crosshair: 'cross-plasma', tracerColor: 0x00ffff, tracerThickness: 0.05, bulletSpeed: 45 },
    { name: 'Ракетница',  damage: 10,fireRate: 1.50, magSize: 3,  color: 0xff4400, model: 'rocket', explosive:true, crosshair: 'cross-rocket', tracerColor: 0xff5500, tracerThickness: 0.07, bulletSpeed: 24 },
    { name: 'Целеуказатель', damage:0, fireRate:2.0, magSize:1, color:0xff0000, model:'designator', crosshair:'cross-designator', isDesignator:true, tracerColor: 0xff2222, tracerThickness: 0.01, bulletSpeed: 200 }
];
const powerWeapons = [
    { name: 'Огнемёт',    damage:1, fireRate:0.05, magSize:999, color:0xff6600, model:'flamethrower', automatic: true, duration:10, crosshair:'cross-pistol', tracerColor: 0xff8800, tracerThickness: 0.06, bulletSpeed: 60 },
    { name: 'Плазмаган',  damage:3, fireRate:0.08, magSize:999, color:0xaa00ff, model:'plasma', automatic: true, duration:10, crosshair:'cross-plasma', tracerColor: 0xcc55ff, tracerThickness: 0.05, bulletSpeed: 45 },
    { name: 'Миниган',    damage:1, fireRate:0.04, magSize:999, color:0xcccccc, model:'lmg', automatic: true, duration:10, crosshair:'cross-lmg', tracerColor: 0xffdd44, tracerThickness: 0.025, bulletSpeed: 150 },
    { name: 'Рельсотрон', damage:15,fireRate:1.5, magSize:999, color:0x0088ff, model:'sniper', duration:10, crosshair:'cross-sniper', tracerColor: 0x55aaff, tracerThickness: 0.035, bulletSpeed: 260 }
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
    shoot() {
        return shoot(this);
    }
    updateHUD() {
        if (!this.hud.health) return;
        this.hud.health.textContent = Math.ceil(this.health);
        const wp = weapons[this.weaponIndex];
        if (!wp) return;
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
        const spawn = getPlayerSpawn(this.isSecond);
        this.camera.position.set(spawn.x, this.height, spawn.z);
        this.velocity.set(0,0,0); this.yaw = spawn.rotation || 0; this.pitch = 0;
        if (this.model) {
            this.model.position.copy(this.camera.position);
            this.model.visible = true;
        }
    }

    damage(amount) {
        if (!this.alive) return;        // ⬅️ больше не наносим урон мёртвому
        this.health -= amount;
        if (this.health <= 0) {
            this.health = 0;             // ⬅️ не даём здоровью уйти в минус
            this.alive = false;
            this.updateHUD();            // обновляем HUD уже с зажатым до 0 значением
            this.camera.position.set(0,-999,0);
            if (this.model) this.model.visible = false;
            if (gameMode !== 'pvp' && this === player1) {
                // ⬅️ раньше проверялось только gameMode === 'solo', из-за чего
                // в "Кампании" и "Обучении" здоровье могло дойти до 0, но
                // игрок формально не "умирал" (экран смерти не появлялся,
                // gameState оставался 'playing'). В PvP смерть обрабатывается
                // отдельно через handleKill(), поэтому здесь она не нужна.
                onPlayerDeath();
            }
        } else {
            this.updateHUD();
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
const enemies = []; const enemyBullets = []; const thrownGrenades = [];
const _shieldLookHelper = new THREE.Object3D(); // вспомогательный объект для плавного поворота Щитоносца
const MAX_ENEMY_BULLETS = 30; // <-- ГЛОБАЛЬНОЕ ОГРАНИЧЕНИЕ
let waveActive = false, waveTimer = 0, enemiesToSpawn = 0;
let waveSpawnInterval = null; // ссылка на активный setInterval спавна волны (Solo/Защита базы), чтобы можно было его гарантированно остановить
const WAVE_DELAY = 5;

// ==================== Режим "Защита базы" ====================
const BASE_POSITION = new THREE.Vector3(0, 0, 0);
let baseObject = null;
let baseHealth = 100, baseMaxHealth = 100;

function createBaseObject() {
    const group = new THREE.Group();
    // Фундамент бункера
    const foundationMat = new THREE.MeshStandardMaterial({ color: 0x445566, roughness: 0.55, metalness: 0.35 });
    const foundation = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.8, 1.2, 16), foundationMat);
    foundation.position.y = 0.6;
    foundation.castShadow = foundation.receiveShadow = true;
    group.add(foundation);
    // Башня
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x667788, roughness: 0.45, metalness: 0.5 });
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 2.1, 4.5, 12), towerMat);
    tower.position.y = 1.2 + 2.25;
    tower.castShadow = tower.receiveShadow = true;
    group.add(tower);
    // Смотровая площадка
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x556677, roughness: 0.5, metalness: 0.4 });
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.4, 12), deckMat);
    deck.position.y = 1.2 + 4.5 + 0.2;
    deck.castShadow = deck.receiveShadow = true;
    group.add(deck);
    // Энергетическое ядро — визуальный индикатор здоровья базы
    const coreMat = new THREE.MeshStandardMaterial({ color: 0x00ffcc, emissive: new THREE.Color(0x00ffcc), emissiveIntensity: 1.3, roughness: 0.2, metalness: 0.7 });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16), coreMat);
    core.position.y = 1.2 + 4.5 + 0.4 + 0.9;
    group.add(core);
    // Антенны по периметру
    const antMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5, metalness: 0.7 });
    for (const ang of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
        const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.6, 6), antMat);
        ant.position.set(Math.cos(ang) * 1.8, 1.2 + 4.5, Math.sin(ang) * 1.8);
        group.add(ant);
    }
    group.position.copy(BASE_POSITION);
    group.userData = { core, coreMat };
    scene.add(group);
    return group;
}

function updateBaseHUD() {
    if (baseHealthEl) baseHealthEl.textContent = Math.max(0, Math.ceil(baseHealth));
    if (baseObject && baseObject.userData.coreMat) {
        const ratio = baseHealth / baseMaxHealth;
        const color = ratio > 0.5 ? 0x00ffcc : (ratio > 0.25 ? 0xffaa00 : 0xff3333);
        baseObject.userData.coreMat.color.set(color);
        baseObject.userData.coreMat.emissive.set(color);
    }
}

function damageBase(amount) {
    if (gameMode !== 'basedefense' || gameState !== 'playing' || baseHealth <= 0) return;
    baseHealth -= amount;
    if (baseHealth <= 0) {
        baseHealth = 0;
        updateBaseHUD();
        onBaseDestroyed();
    } else {
        updateBaseHUD();
    }
}

function onBaseDestroyed() {
    gameState = 'menu';
    document.exitPointerLock();
    if (waveSpawnInterval) { clearInterval(waveSpawnInterval); waveSpawnInterval = null; }
    waveActive = false;
    if (deathScreen) {
        deathScreen.style.display = 'flex';
        if (deathTitleEl) deathTitleEl.textContent = 'БАЗА УНИЧТОЖЕНА';
        if (deathKills) deathKills.textContent = `Убийств: ${player1.kills}`;
    }
}

// Полный сброс арены при переключении в любой режим — останавливает таймеры/интервалы
// предыдущего режима (в частности волну Solo) и чистит все временные объекты сцены,
// чтобы старые враги/тела не "утекали" в новый режим.
function resetArenaForModeSwitch() {
    walls.forEach(w => { scene.remove(w); w.geometry.dispose(); w.material.dispose(); }); walls.length = 0;
    enemies.forEach(e => scene.remove(e)); enemies.length = 0;
    enemyBullets.forEach(b => scene.remove(b)); enemyBullets.length = 0;
    tracers.forEach(t => { scene.remove(t); t.geometry.dispose(); t.material.dispose(); }); tracers.length = 0;
    droppedItems.forEach(it => { scene.remove(it); it.geometry.dispose(); it.material.dispose(); }); droppedItems.length = 0;
    supplyCrates.forEach(c => scene.remove(c)); supplyCrates.length = 0;
    particles.forEach(p => { scene.remove(p); p.geometry.dispose(); p.material.dispose(); }); particles.length = 0;
    explosionEffects.forEach(e => { scene.remove(e); e.geometry.dispose(); e.material.dispose(); }); explosionEffects.length = 0;
    // Убираем базу из предыдущей сессии "Защиты базы" и прячем её HUD-индикатор
    if (baseObject) {
        baseObject.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
        scene.remove(baseObject);
        baseObject = null;
    }
    baseHealth = baseMaxHealth;
    if (baseLabelEl) baseLabelEl.style.display = 'none';
    if (baseHealthEl) baseHealthEl.style.display = 'none';
    // Останавливаем волну Solo, если она была активна — иначе её setInterval
    // продолжит спавнить врагов уже в новом режиме.
    waveActive = false; waveTimer = 0; enemiesToSpawn = 0;
    if (waveSpawnInterval) { clearInterval(waveSpawnInterval); waveSpawnInterval = null; }
}

function getPlayerSpawn(isSecond = false) {
    const spawn = levelData && levelData.playerSpawn;
    if (!spawn) return { x: 0, z: 0, rotation: 0 };
    // In local PvP keep the second player close, but do not place both cameras
    // at exactly the same coordinates.
    if (isSecond) return { x: spawn.x + 2, z: spawn.z, rotation: spawn.rotation || 0 };
    return spawn;
}

function createLevelWall(definition) {
    const width = Math.max(0.25, Number(definition.width));
    const height = Math.max(0.25, Number(definition.height));
    const depth = Math.max(0.25, Number(definition.depth));
    const wall = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.55, metalness: 0.15 })
    );
    wall.position.set(Number(definition.x), height / 2, Number(definition.z));
    wall.rotation.y = Number(definition.rotation) || 0;
    wall.castShadow = wall.receiveShadow = true;
    wall.userData = { health: 3, maxHealth: 3, levelWall: true };
    scene.add(wall);
    walls.push(wall);
}

function applyLevelWalls() {
    if (!levelData) return;
    levelData.walls.forEach(createLevelWall);
}

function chooseEnemySpawn() {
    const points = levelData && levelData.enemySpawns;
    if (!points || points.length === 0) return null;
    const playerPosition = (gameMode === 'basedefense' && baseObject) ? baseObject.position : player1.camera.position;
    const distant = points.filter(point => Math.hypot(point.x - playerPosition.x, point.z - playerPosition.z) > 8);
    const pool = distant.length ? distant : points;
    const point = pool[Math.floor(Math.random() * pool.length)];
    return new THREE.Vector3(point.x, 0, point.z);
}

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
    const pairs = new Map([
        [portals[0], portals[1]], // (-20,-20) -> (20,-20)
        [portals[1], portals[0]], // (20,-20) -> (-20,-20)
        [portals[2], portals[3]], // (0,20) -> (-20,20)
        [portals[3], portals[2]], // (-20,20) -> (0,20)
        [portals[4], portals[0]]  // (20,20) -> (-20,-20)
    ]);

    const target = pairs.get(portal);
    if (!target) return;

    player.camera.position.set(
        target.position.x,
        player.height,
        target.position.z
    );

    player.lastPortalTime = performance.now() / 1000;
    spawnParticles(target.position, 0x00aaff, 20);
}

// Детектор врагов
function activateDetector(player) {
    player.detectorActive = true;
    player.detectorTimer = 10.0;
    player.updateHUD();
}

// ==================== FBX-модели врагов ====================
// Модели лежат рядом с game.js и загружаются один раз через FBXLoader
// (подключается как ES-модуль в game.html и кладётся в window.FBXLoader,
// поэтому здесь просто ждём, пока он появится).
const enemyModelTemplates = {}; // { key: { obj, animClips } }

function loadEnemyModel(key, fileName, targetHeight) {
    function tryLoad() {
        if (window.FBXLoader) {
            const loader = new window.FBXLoader();
            loader.load(
                fileName,
                (obj) => {
                    obj.traverse(child => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });
                    const box = new THREE.Box3().setFromObject(obj);
                    const size = new THREE.Vector3();
                    box.getSize(size);
                    obj.userData.baseScale = size.y > 0.001 ? (targetHeight / size.y) : 1;
                    enemyModelTemplates[key] = { obj, animClips: obj.animations || [] };
                },
                undefined,
                (err) => {
                    console.warn(`Не удалось загрузить ${fileName}, используется стандартная модель врага:`, err);
                }
            );
        } else {
            setTimeout(tryLoad, 50);
        }
    }
    tryLoad();
}
loadEnemyModel('alien', 'Alien.fbx', 2.2);       // обычный враг и босс
loadEnemyModel('explosion', 'Взрыв.fbx', 1.3);   // камикадзе

// Создаёт клон FBX-модели врага по ключу ('alien' или 'explosion').
// sizeMultiplier — во сколько раз больше/меньше базового роста.
// tintHex — если задан, перекрашивает материалы модели в этот цвет.
function createEnemyModel(key, sizeMultiplier = 1, tintHex = null) {
    const template = enemyModelTemplates[key];
    if (!template) return null;
    const templateObj = template.obj;
    const clone = (window.SkeletonUtils && window.SkeletonUtils.clone)
        ? window.SkeletonUtils.clone(templateObj)
        : templateObj.clone(true);

    const scale = (templateObj.userData.baseScale || 1) * sizeMultiplier;
    clone.scale.setScalar(scale);

    const bodyMaterials = [];
    clone.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (Array.isArray(child.material)) {
                child.material = child.material.map(m => m.clone());
                child.material.forEach(m => {
                    if (tintHex !== null && m.color) m.color.set(tintHex);
                    bodyMaterials.push(m);
                });
            } else if (child.material) {
                child.material = child.material.clone();
                if (tintHex !== null && child.material.color) child.material.color.set(tintHex);
                bodyMaterials.push(child.material);
            }
        }
    });

    let mixer = null;
    if (template.animClips.length > 0) {
        mixer = new THREE.AnimationMixer(clone);
        mixer.clipAction(template.animClips[0]).play();
    }

    // Считаем, насколько нужно поднять модель, чтобы ступни стояли на "земле" (local y = 0)
    const scaledBox = new THREE.Box3().setFromObject(clone);
    const feetOffset = -scaledBox.min.y;

    return { model: clone, bodyMaterials, mixer, feetOffset };
}

// Оставлено для совместимости — модель обычного врага/босса
function createAlienEnemyModel(sizeMultiplier = 1, tintHex = null) {
    return createEnemyModel('alien', sizeMultiplier, tintHex);
}

// Подкрашивает врага (учитывает как старые примитивные модели, так и FBX-модели)
function tintEnemy(enemy, h, s, l) {
    if (enemy.userData.bodyMaterials) {
        enemy.userData.bodyMaterials.forEach(m => { if (m.color) m.color.setHSL(h, s, l); });
    } else if (enemy.material && enemy.material.color) {
        enemy.material.color.setHSL(h, s, l);
    }
}

// ===== Невидимка: прозрачность =====
const INVISIBLE_BASE_OPACITY = 0.1;    // едва заметен в обычных условиях
const INVISIBLE_HIT_OPACITY = 0.75;    // видимость сразу после попадания
const INVISIBLE_HIT_REVEAL_TIME = 1.5; // сколько секунд остаётся частично видимым после попадания

// Проставляет прозрачность всем мешам врага (работает и с FBX-группами, и с примитивами)
function setEnemyOpacity(enemy, opacity) {
    enemy.traverse(child => {
        if (child.isMesh && child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(m => { m.transparent = true; m.opacity = opacity; });
        }
    });
}

// Вызывается при попадании по врагу (пуля, дробь, взрыв, удар) — временно раскрывает Невидимку
function revealInvisible(enemy) {
    if (enemy.userData && enemy.userData.isInvisible) {
        enemy.userData.hitRevealTimer = INVISIBLE_HIT_REVEAL_TIME;
    }
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
    const groupOriginY = 0.7;
    const explosionModel = createEnemyModel('explosion', 1, null);
    let enemy;
    if (explosionModel) {
        enemy = new THREE.Group();
        explosionModel.model.position.y = explosionModel.feetOffset - groupOriginY;
        enemy.add(explosionModel.model);
        enemy.position.set(pos.x, groupOriginY, pos.z);
        enemy.userData = {
            health: 2, maxHealth: 2, speed: 5.0, lastShot: 0, shootCooldown: Infinity, // НИКОГДА не стреляет
            targetDir: new THREE.Vector3(), isKamikaze: true, exploded: false,
            bodyMaterials: explosionModel.bodyMaterials, mixer: explosionModel.mixer
        };
    } else {
        const geo = new THREE.SphereGeometry(0.5, 8, 8);
        const mat = new THREE.MeshStandardMaterial({ color: 0xff8800, emissive: new THREE.Color(0x331100), roughness: 0.3 });
        enemy = new THREE.Mesh(geo, mat);
        enemy.position.set(pos.x, groupOriginY, pos.z);
        enemy.userData = {
            health: 2, maxHealth: 2, speed: 5.0, lastShot: 0, shootCooldown: Infinity, // НИКОГДА не стреляет
            targetDir: new THREE.Vector3(), isKamikaze: true,
            exploded: false
        };
    }
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

function spawnInvisible(pos) {
    const alien = createAlienEnemyModel(1, 0x334466);
    let enemy;
    if (alien) {
        enemy = new THREE.Group();
        alien.model.position.y = alien.feetOffset - 1.1;
        enemy.add(alien.model);
        enemy.position.set(pos.x, 1.1, pos.z);
        enemy.userData = {
            health: 6, maxHealth: 6, speed: 3.0, lastShot: 0, shootCooldown: 3.0,
            targetDir: new THREE.Vector3(), isInvisible: true, hitRevealTimer: 0,
            bodyMaterials: alien.bodyMaterials, mixer: alien.mixer
        };
    } else {
        const geo = new THREE.CylinderGeometry(0.5, 0.5, 2.2, 8);
        const mat = new THREE.MeshStandardMaterial({
            color: 0x6677aa, roughness: 0.4, metalness: 0.6,
            transparent: true, opacity: INVISIBLE_BASE_OPACITY
        });
        enemy = new THREE.Mesh(geo, mat);
        enemy.position.set(pos.x, 1.1, pos.z);
        const eyeGeo = new THREE.SphereGeometry(0.15, 4, 4);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: INVISIBLE_BASE_OPACITY });
        const le = new THREE.Mesh(eyeGeo, eyeMat); le.position.set(-0.2, 0.7, 0.45); enemy.add(le);
        const re = new THREE.Mesh(eyeGeo, eyeMat.clone()); re.position.set(0.2, 0.7, 0.45); enemy.add(re);
        enemy.userData = {
            health: 6, maxHealth: 6, speed: 3.0, lastShot: 0, shootCooldown: 3.0,
            targetDir: new THREE.Vector3(), isInvisible: true, hitRevealTimer: 0
        };
    }
    setEnemyOpacity(enemy, INVISIBLE_BASE_OPACITY);
    enemy.castShadow = true; enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

// ==================== Щитоносец ====================
// Враг с неразрушимым щитом спереди: попадания в щит урона не наносят,
// урон проходит только если стрелять/бить со спины (щит не закрывает заднюю полусферу).
// Поворачивается к игроку медленно, поэтому его можно обойти сбоку/сзади.
function createShieldMesh() {
    const shieldGroup = new THREE.Group();
    const plateGeo = new THREE.BoxGeometry(0.9, 1.5, 0.12);
    // Без карты окружения (envMap) высокая metalness делает поверхность почти чёрной,
    // из-за чего щитоносец выглядел "невидимым" на тёмном фоне арены.
    // Снижаем metalness и повышаем emissive, чтобы щит было хорошо видно при любом освещении.
    const plateMat = new THREE.MeshStandardMaterial({
        color: 0x4477cc, roughness: 0.4, metalness: 0.25,
        emissive: new THREE.Color(0x3366cc), emissiveIntensity: 0.9
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.castShadow = true; plate.receiveShadow = true;
    shieldGroup.add(plate);

    // Окантовка щита для читаемости силуэта
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x99ddff, roughness: 0.35, metalness: 0.25, emissive: new THREE.Color(0x66aaff), emissiveIntensity: 0.9 });
    const rimGeo = new THREE.BoxGeometry(0.98, 0.08, 0.16);
    const rimTop = new THREE.Mesh(rimGeo, rimMat); rimTop.position.y = 0.75; shieldGroup.add(rimTop);
    const rimBottom = new THREE.Mesh(rimGeo, rimMat); rimBottom.position.y = -0.75; shieldGroup.add(rimBottom);

    // ВАЖНО: enemy.lookAt(...) / _shieldLookHelper.lookAt(...) ориентируют модель
    // так, что её "перед" (сторона, обращённая к игроку) — это локальная ось -Z.
    // Раньше щит стоял на +Z, то есть у Щитоносца ЗА спиной, а не спереди — из-за
    // этого выстрелы в лицо проходили мимо щита прямо в тело, и он умирал от
    // фронтального огня, хотя должен был быть неуязвим спереди.
    shieldGroup.position.set(0, 0, -0.55);
    // Помечаем каждый меш щита как неразрушимую деталь, блокирующую урон
    shieldGroup.traverse(child => {
        if (child.isMesh) child.userData.isShield = true;
    });
    shieldGroup.userData.isShield = true;
    return shieldGroup;
}

function spawnShieldBearer(pos) {
    const alien = createAlienEnemyModel(1.1, 0x445577);
    let enemy;
    if (alien) {
        enemy = new THREE.Group();
        alien.model.position.y = alien.feetOffset - 1.1;
        enemy.add(alien.model);
        enemy.position.set(pos.x, 1.1, pos.z);
        enemy.userData = {
            health: 12, maxHealth: 12, speed: 1.6, lastShot: 0, shootCooldown: 2.8,
            targetDir: new THREE.Vector3(), isShielded: true, turnSpeed: 1.4,
            bodyMaterials: alien.bodyMaterials, mixer: alien.mixer
        };
    } else {
        const geo = new THREE.CylinderGeometry(0.55, 0.55, 2.2, 8);
        const mat = new THREE.MeshStandardMaterial({ color: 0x5577aa, roughness: 0.4, metalness: 0.25, emissive: new THREE.Color(0x223355), emissiveIntensity: 0.7 });
        enemy = new THREE.Mesh(geo, mat);
        enemy.position.set(pos.x, 1.1, pos.z);
        const eyeGeo = new THREE.SphereGeometry(0.15, 4, 4);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0x88ccff });
        const le = new THREE.Mesh(eyeGeo, eyeMat); le.position.set(-0.2, 0.7, 0.45); enemy.add(le);
        const re = new THREE.Mesh(eyeGeo, eyeMat.clone()); re.position.set(0.2, 0.7, 0.45); enemy.add(re);
        enemy.userData = {
            health: 12, maxHealth: 12, speed: 1.6, lastShot: 0, shootCooldown: 2.8,
            targetDir: new THREE.Vector3(), isShielded: true, turnSpeed: 1.4
        };
    }
    const shield = createShieldMesh();
    enemy.add(shield);
    enemy.userData.shieldMesh = shield;
    enemy.castShadow = true; enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

// ==================== Функция спавна врагов (исправленная) ====================
function spawnEnemy(isBoss = false, specialType = null) {
    const ppos = (gameMode === 'basedefense' && baseObject) ? baseObject.position : player1.camera.position;
    let pos = chooseEnemySpawn() || new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        0,
        (Math.random() - 0.5) * 80
    );
    for (let i = 0; !levelData && i < 20; i++) {
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
    if (specialType === 'invisible') { spawnInvisible(pos); return; }
    if (specialType === 'shield') { spawnShieldBearer(pos); return; }

    // --- БОСС ---
    if (isBoss) {
        let enemy;
        const alienBoss = createAlienEnemyModel(1.6, 0x663366);
        if (alienBoss) {
            enemy = new THREE.Group();
            alienBoss.model.position.y = alienBoss.feetOffset - 1.75;
            enemy.add(alienBoss.model);
            enemy.position.set(pos.x, 1.75, pos.z);
            enemy.userData = {
                health: 40,
                maxHealth: 40,
                speed: 2.0,
                lastShot: 0,
                shootCooldown: 1.2,
                targetDir: new THREE.Vector3(),
                isBoss: true,
                bodyMaterials: alienBoss.bodyMaterials,
                mixer: alienBoss.mixer
            };
        } else {
            const geo = new THREE.CylinderGeometry(0.9, 0.9, 3.5, 8);
            const mat = new THREE.MeshStandardMaterial({
                color: 0xcc44cc,
                roughness: 0.2,
                metalness: 0.8,
                emissive: new THREE.Color(0x440044),
                emissiveIntensity: 0.5
            });
            enemy = new THREE.Mesh(geo, mat);
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
        }
        enemy.castShadow = true;
        enemy.receiveShadow = true;
        scene.add(enemy);
        enemies.push(enemy);
        return;
    }

    // --- ОБЫЧНЫЙ ВРАГ ---
    const alien = createAlienEnemyModel(1, null);
    if (alien) {
        const enemy = new THREE.Group();
        alien.model.position.y = alien.feetOffset - 1.1;
        enemy.add(alien.model);
        enemy.position.set(pos.x, 1.1, pos.z);
        enemy.userData = {
            health: 5,
            maxHealth: 5,
            speed: 2.5 + Math.random() * 2,
            lastShot: 0,
            shootCooldown: 2.5 + Math.random() * 2.5,
            targetDir: new THREE.Vector3(),
            isBoss: false,
            bodyMaterials: alien.bodyMaterials,
            mixer: alien.mixer
        };
        enemy.castShadow = true;
        enemy.receiveShadow = true;
        scene.add(enemy);
        enemies.push(enemy);
        return;
    }

    // --- ОБЫЧНЫЙ ВРАГ (запасная примитивная модель, если Alien.fbx ещё не загрузился) ---
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
    // Защита от повторного вызова: explode() у камикадзе ниже может рекурсивно
    // вызвать killEnemy() для этого же врага ещё раз (он попадает в радиус
    // собственного взрыва раньше, чем успевает быть удалён из enemies).
    // Без этой проверки функция выполнялась дважды: второй, "внешний" вызов
    // доходил до enemies.splice(enemies.indexOf(enemy),1) уже ПОСЛЕ того,
    // как враг был удалён — indexOf возвращал -1, и splice(-1,1) удалял из
    // массива enemies СЛУЧАЙНОГО последнего врага в списке (не убирая его со
    // сцены). Такой враг переставал получать обновления ИИ/урона, но его
    // модель оставалась висеть в мире — то самое "мёртвое тело".
    if (!enemies.includes(enemy)) return;

    spawnParticles(enemy.position, enemy.userData.isBoss ? 0xff0000 : 0xff4444, enemy.userData.isBoss ? 35 : 20);

    // Убираем врага из мира и из списка СРАЗУ, до любых побочных эффектов —
    // именно так исключается повторная обработка через вложенный explode().
    scene.remove(enemy);
    enemies.splice(enemies.indexOf(enemy), 1);

    if (enemy.userData.isKamikaze && !enemy.userData.exploded) {
        enemy.userData.exploded = true;
        explode(enemy.position, 10, 3);
    }
    dropAmmo(enemy.position.clone());
    if (enemy.userData.isBoss || Math.random()<0.2) dropGrenade(enemy.position.clone());
    if (Math.random()<0.25) dropHealth(enemy.position.clone());
    if (Math.random()<0.1) dropDetector(enemy.position.clone());
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
    const mat = new THREE.MeshStandardMaterial({
        color: 0x22cc22,
        emissive: new THREE.Color(0x004400),
        roughness: 0.3
    });

    const box = new THREE.Mesh(geo, mat);
    box.position.set(pos.x, 0, pos.z);

    box.userData = { type:'ammo', life:15, age:0 };
    scene.add(box);
    droppedItems.push(box);
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
// ===== Видимые пули игроков: настоящие летящие снаряды, а не мгновенная черта =====
const tracers = []; // содержит как летящие пули (isBullet), так и искры попадания
const _tracerUp = new THREE.Vector3(0, 1, 0);

function spawnTracer(start, end, color = 0xffffaa, thickness = 0.02, speed = 120) {
    const delta = new THREE.Vector3().subVectors(end, start);
    const totalDist = delta.length();
    if (totalDist < 0.05) return;
    const dir = delta.clone().normalize();

    // Более "тяжёлые"/энергетические снаряды (плазма, ракета) выглядят как светящийся шар,
    // обычные пули — как вытянутая светящаяся чёрточка вдоль направления полёта.
    const isOrb = thickness >= 0.04;
    const bulletLen = isOrb ? thickness * 3 : Math.min(totalDist, 0.4 + thickness * 8);
    const geo = isOrb
        ? new THREE.SphereGeometry(thickness * 1.6, 8, 8)
        : new THREE.CylinderGeometry(thickness, thickness * 1.4, bulletLen, 6, 1, true);
    const mat = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending
    });
    const bullet = new THREE.Mesh(geo, mat);
    bullet.position.copy(start);
    if (!isOrb) bullet.quaternion.setFromUnitVectors(_tracerUp, dir);

    bullet.userData = {
        isBullet: true, start: start.clone(), end: end.clone(),
        velocity: dir.clone().multiplyScalar(speed), totalDist,
        color, thickness, isOrb, trailTimer: 0, age: 0
    };
    scene.add(bullet);
    tracers.push(bullet);
}

// Небольшая яркая вспышка-искра в точке попадания/взрыва снаряда
function spawnImpactSpark(pos, color, thickness) {
    const tipMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    const tip = new THREE.Mesh(new THREE.SphereGeometry(Math.max(0.05, thickness * 2.2), 6, 6), tipMat);
    tip.position.copy(pos);
    tip.userData = { life: 0.12, age: 0 };
    scene.add(tip);
    tracers.push(tip);
}

// Определяет конечную точку выстрела (для полёта пули), используя тот же луч,
// что уже применялся для расчёта урона — попадание в стену/врага/игрока, либо точка вдоль
// направления взгляда на максимальной дальности, если ничего не задето.
function computeTracerEnd(player, raycaster, maxDistance = 80) {
    let targets;
    if (gameMode === 'pvp') {
        targets = [...walls];
        if (player === player1 && player2.alive && player2.model) targets.push(player2.model);
        if (player === player2 && player1.alive && player1.model) targets.push(player1.model);
    } else {
        targets = [...walls, ...enemies];
    }
    const hits = raycaster.intersectObjects(targets, true);
    if (hits.length) return hits[0].point;
    return raycaster.ray.origin.clone().addScaledVector(raycaster.ray.direction, maxDistance);
}


const explosionEffects = [];
// Вместо function spawnExplosionEffect(...) { ... }
window.spawnExplosionEffect = function(pos, col, maxRadius) {
    if (!pos || !(pos instanceof THREE.Vector3)) pos = new THREE.Vector3(0, 0, 0);
    if (col === undefined || col === null) col = 0xff6600;
    if (maxRadius === undefined || maxRadius === null || maxRadius < 0.1) maxRadius = 1;

    const geo = new THREE.SphereGeometry(0.2, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
        color: col,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    const sphere = new THREE.Mesh(geo, mat);
    sphere.position.copy(pos);
    sphere.userData = {
        maxScale: maxRadius,
        life: 0.6,
        age: 0
    };
    scene.add(sphere);
    explosionEffects.push(sphere);
};
function explode(position, damage, radius) {
    explosionSound();
    window.spawnExplosionEffect(position, 0xff6600, radius);
    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'basedefense') {
        // Перебираем СНИМОК массива enemies, а не сам массив: killEnemy() внутри
        // цикла делает enemies.splice(...), и обычный for...of по живому массиву
        // из-за сдвига индексов пропускает следующего врага — из-за этого при
        // взрыве по группе один враг иногда "выживал" целым, хотя должен был погибнуть.
        for (const enemy of [...enemies]) {
            if (!enemies.includes(enemy)) continue; // уже убит в этом же цикле (например, другим взрывом)
            if (position.distanceTo(enemy.position) < radius) {
                enemy.userData.health -= damage;
                tintEnemy(enemy, 0,1,0.3+enemy.userData.health*0.15);
                spawnParticles(enemy.position, 0xff4400, 10);
                revealInvisible(enemy);
                if (enemy.userData.health <= 0) killEnemy(enemy);
            }
        }
        if (gameMode === 'basedefense' && baseObject && position.distanceTo(baseObject.position) < radius) {
            damageBase(damage);
        }
    } else if (gameMode === 'pvp') {
        if (player1.alive && player1.model && position.distanceTo(player1.model.position) < radius) player1.damage(damage);
        if (player2.alive && player2.model && position.distanceTo(player2.model.position) < radius) player2.damage(damage);
    }
    spawnParticles(position, 0xff8800, 20);
}

// ==================== Режимы ====================
let gameMode = null;

// ===== Уровни сложности =====
// speedMult влияет на скорость пуль врагов, damageMult — на урон от них игроку/базе
const DIFFICULTY_SETTINGS = {
    easy:   { speedMult: 0.55, damageMult: 0.4 },  // медленные пули, маленький урон
    medium: { speedMult: 0.8,  damageMult: 0.7 },  // средняя скорость, средний урон
    hard:   { speedMult: 1.15, damageMult: 1.0 }   // быстрые пули, нормальный урон
};
let difficulty = 'medium';

const diffButtons = document.querySelectorAll('.diff-btn');
diffButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        difficulty = btn.dataset.difficulty;
        diffButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
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
let mouseHeld1 = false;
document.addEventListener('mousedown', (e) => {
    if (e.button === 0 && isPointerLocked && gameState === 'playing' && player1.alive) {
        mouseHeld1 = true;
        shoot(player1);
    }
    if (e.button === 1 && isPointerLocked && gameState === 'playing') meleeAttack(player1);
});
document.addEventListener('mouseup', (e) => {
    if (e.button === 0) mouseHeld1 = false;
});
window.addEventListener('blur', () => { mouseHeld1 = false; });
document.addEventListener('pointerlockchange', () => {
    if (!document.pointerLockElement) mouseHeld1 = false;
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
    player = player || this;
    if (!player) return;
    if (!player.alive || player.reloading) return;

    const now = performance.now() / 1000;
    const wp = weapons[player.weaponIndex];

    if (!wp) return;

    const lastShot = player.lastShot || 0;
    if (now - lastShot < wp.fireRate) return;

    if (wp.isDesignator) {
        useDesignator(player);
        player.lastShot = now;
        return;
    }

    if (player.mag <= 0) {
        player.reload();
        return;
    }

    player.lastShot = now;
    player.mag--;

    setTimeout(() => { player.gunGroup.position.z -= 0.03; }, 60);
    const flash = player.gunGroup.children.find(c=>c.isMesh && c.material.opacity!==undefined && c.material.color.getHex()===0xffaa00);
    if (flash) flash.material.opacity = 1;
    const plane = player.gunGroup.children.find(c=>c.isMesh && c.material.color.getHex()===0xffff88);
    if (plane) plane.material.opacity = 1;
    setTimeout(() => { if (flash) flash.material.opacity = 0; if (plane) plane.material.opacity = 0; }, 50);

    // Мировая позиция дула оружия — трассеры летят отсюда, а не из глаз игрока
    const muzzleWorld = player.gunGroup.localToWorld(new THREE.Vector3(0, 0.05, -0.65));
    const tracerColor = wp.tracerColor !== undefined ? wp.tracerColor : 0xffffaa;
    const tracerThickness = wp.tracerThickness || 0.02;
    const tracerSpeed = wp.bulletSpeed || 120;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0,0), player.camera);
    if (wp.pellets) {
        for (let i=0;i<wp.pellets;i++) {
            raycaster.setFromCamera(new THREE.Vector2((Math.random()-0.5)*0.05, (Math.random()-0.5)*0.05), player.camera);
            processShot(player, raycaster, wp.damage);
            const end = computeTracerEnd(player, raycaster, 60);
            spawnTracer(muzzleWorld, end, tracerColor, tracerThickness, tracerSpeed);
        }
    } else if (wp.explosive) {
        const hits = raycaster.intersectObjects([...walls, floor], false);
        const end = hits.length ? hits[0].point : raycaster.ray.origin.clone().addScaledVector(raycaster.ray.direction, 80);
        spawnTracer(muzzleWorld, end, tracerColor, tracerThickness, tracerSpeed);
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
        const end = computeTracerEnd(player, raycaster, 100);
        spawnTracer(muzzleWorld, end, tracerColor, tracerThickness, tracerSpeed);
    }
}

function processShot(shooter, raycaster, damage) {
    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial' || gameMode === 'basedefense') {
        const intersects = raycaster.intersectObjects([...walls, ...enemies], true);
        if (intersects.length) {
            const hit = intersects[0];
            let obj = hit.object;
            if (obj.userData && obj.userData.isShield) {
                // Неразрушимый щит спереди — урон не проходит, только искры и звук удара
                spawnParticles(hit.point, 0x88ccff, 6);
                shieldClangSound();
                return;
            }
            const enemy = findEnemy(obj);
            if (enemy) {
                enemy.userData.health -= damage;
                tintEnemy(enemy, 0,1,0.3+enemy.userData.health*0.15);
                spawnParticles(hit.point, 0xff0000, 5);
                revealInvisible(enemy);
                if (enemy.userData.isMimic && !enemy.userData.revealed) {
                    enemy.userData.revealed = true;
                    enemy.material.color.set(0xcc3333);
                }
                if (enemy.userData.health <= 0) killEnemy(enemy);
            } else if (walls.includes(obj)) {
                // Стены неразрушимы — только визуальный эффект попадания
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
                // Стены неразрушимы
                spawnParticles(hit.point, 0xff6600, 5);
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
    if (waveSpawnInterval) { clearInterval(waveSpawnInterval); waveSpawnInterval = null; }
    waveActive = false;
    if (deathScreen) {
        deathScreen.style.display = 'flex';
        if (deathTitleEl) deathTitleEl.textContent = 'ВЫ ПОГИБЛИ';
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
    nade.userData = { velocity: dir.clone().multiplyScalar(14), life:3, age:0, exploded:false };
    scene.add(nade);
    thrownGrenades.push(nade);
}

function meleeAttack(player) {
    if (!player || !player.alive || player.reloading) return;

    const now = performance.now() / 1000;
    if (now - player.meleeCooldown < player.meleeDuration) return;
    player.meleeCooldown = now;

    const pos =
        (player.model && player.model.position)
            ? player.model.position
            : player.camera.position;

    // Снимок массива по той же причине, что и в explode(): killEnemy() мутирует
    // enemies через splice, и живой for...of пропускает следующего врага.
    for (const enemy of [...enemies]) {
        if (!enemies.includes(enemy)) continue; // уже убит в этом же ударе
        const dist = enemy.position.distanceTo(pos);

        if (dist <= 1.8) {
            if (enemy.userData.isShielded) {
                // Щит закрывает переднюю полусферу — рукопашный удар тоже проходит только со спины.
                // "Перед" совпадает с -Z (тем же направлением, куда enemy.lookAt() поворачивает модель
                // и где теперь физически стоит сам щит), поэтому направление берём именно как -Z.
                const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(enemy.quaternion);
                const toAttacker = pos.clone().sub(enemy.position).setY(0).normalize();
                if (forward.dot(toAttacker) > -0.3) {
                    spawnParticles(enemy.position.clone().add(new THREE.Vector3(0,0.9,0)), 0x88ccff, 4);
                    shieldClangSound();
                    continue;
                }
            }
            enemy.userData.health -= 3;
            revealInvisible(enemy);

            if (enemy.userData.health <= 0) {
                killEnemy(enemy);
            }
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
    const dx = pos.x - item.position.x;
    const dz = pos.z - item.position.z;
    const distance = Math.hypot(dx, dz);

        if (distance <= 4.0) {
            if (item.userData.type === 'ammo') {
            player.reserve += 15;
            }
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

// ==================== Enemy combat AI ====================
function initializeEnemyAI(enemy) {
    const data = enemy.userData;
    if (data.aiInitialized) return data;

    let preferredRange = 9 + Math.random() * 3;
    let minimumRange = 5;
    let maximumRange = 15;
    if (data.isSniper) {
        preferredRange = 23; minimumRange = 16; maximumRange = 29;
    } else if (data.isKamikaze) {
        preferredRange = 0; minimumRange = 0; maximumRange = 2;
    } else if (data.isShielded) {
        preferredRange = 4; minimumRange = 2.2; maximumRange = 7;
    } else if (data.isInvisible) {
        preferredRange = 7; minimumRange = 4; maximumRange = 11;
    } else if (data.isBoss) {
        preferredRange = 10; minimumRange = 6; maximumRange = 14;
    }

    data.aiInitialized = true;
    data.preferredRange = preferredRange;
    data.minimumRange = minimumRange;
    data.maximumRange = maximumRange;
    data.strafeSide = Math.random() < 0.5 ? -1 : 1;
    data.nextTacticChange = 0;
    data.stuckTime = 0;
    data.lastPosition = enemy.position.clone();
    if (!data.targetDir) data.targetDir = new THREE.Vector3();
    return data;
}

function enemyHasLineOfSight(enemy, target, distance, wallBoxes) {
    const origin = enemy.position.clone().add(new THREE.Vector3(0, 0.9, 0));
    const direction = target.clone().sub(origin).setY(0).normalize();
    const ray = new THREE.Ray(origin, direction);
    for (const box of wallBoxes) {
        const hit = ray.intersectBox(box, new THREE.Vector3());
        if (hit && hit.distanceTo(origin) < distance) return false;
    }
    return true;
}

function movementIsBlocked(enemy, direction, distance, wallBoxes) {
    if (direction.lengthSq() < 0.0001) return false;
    const move = direction.clone().multiplyScalar(distance);
    const nextX = enemy.position.x + move.x;
    const nextZ = enemy.position.z + move.z;
    if (nextX < -52 || nextX > 52 || nextZ < -52 || nextZ > 52) return true;
    const radius = enemy.userData.isBoss ? 1.05 : (enemy.userData.isShielded ? 0.75 : 0.6);
    const box = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(nextX, enemy.position.y, nextZ),
        new THREE.Vector3(radius * 2, enemy.userData.isBoss ? 3.6 : 2.4, radius * 2)
    );
    return wallBoxes.some(wallBox => box.intersectsBox(wallBox));
}

function rotateFlatDirection(direction, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new THREE.Vector3(
        direction.x * cos - direction.z * sin,
        0,
        direction.x * sin + direction.z * cos
    ).normalize();
}

function chooseEnemyMovement(enemy, target, distance, currentTime, delta, wallBoxes) {
    const data = initializeEnemyAI(enemy);
    if (data.isMimic && !data.revealed) return new THREE.Vector3();

    if (currentTime >= data.nextTacticChange) {
        data.nextTacticChange = currentTime + 1.2 + Math.random() * 2.2;
        if (Math.random() < 0.55) data.strafeSide *= -1;
    }

    const toward = target.clone().sub(enemy.position).setY(0);
    if (toward.lengthSq() < 0.0001) return new THREE.Vector3();
    toward.normalize();
    const sideways = new THREE.Vector3(-toward.z, 0, toward.x).multiplyScalar(data.strafeSide);
    const desired = new THREE.Vector3();

    if (data.isKamikaze) {
        desired.copy(toward);
    } else if (distance < data.minimumRange) {
        desired.copy(toward).multiplyScalar(-1).addScaledVector(sideways, 0.65);
    } else if (distance > data.maximumRange) {
        const flankStrength = data.isInvisible ? 0.9 : (data.isSniper ? 0.25 : 0.45);
        desired.copy(toward).addScaledVector(sideways, flankStrength);
    } else {
        const rangeError = (distance - data.preferredRange) / Math.max(1, data.preferredRange);
        desired.copy(sideways).addScaledVector(toward, THREE.MathUtils.clamp(rangeError, -0.55, 0.55));
    }

    const separation = new THREE.Vector3();
    for (const other of enemies) {
        if (other === enemy) continue;
        const offset = enemy.position.clone().sub(other.position).setY(0);
        const gap = offset.length();
        if (gap > 0.001 && gap < 2.4) {
            separation.addScaledVector(offset.normalize(), (2.4 - gap) / 2.4);
        }
    }
    desired.addScaledVector(separation, data.isKamikaze ? 0.45 : 1.15);
    if (desired.lengthSq() < 0.0001) desired.copy(sideways);
    desired.normalize();

    const probeDistance = Math.max(0.7, data.speed * delta * 3);
    const turn = data.strafeSide;
    const candidates = [
        desired,
        rotateFlatDirection(desired, turn * Math.PI / 5),
        rotateFlatDirection(desired, -turn * Math.PI / 5),
        rotateFlatDirection(desired, turn * Math.PI / 2),
        rotateFlatDirection(desired, -turn * Math.PI / 2)
    ];
    return candidates.find(candidate => !movementIsBlocked(enemy, candidate, probeDistance, wallBoxes)) || new THREE.Vector3();
}

function fireEnemyBullet(enemy, target, distance, isSniper) {
    const playerWeapon = weapons[player1.weaponIndex];
    const baseSpeed = (playerWeapon && playerWeapon.bulletSpeed) || 120;
    const speed = baseSpeed * (DIFFICULTY_SETTINGS[difficulty] ? DIFFICULTY_SETTINGS[difficulty].speedMult : 1);
    const origin = enemy.position.clone().add(new THREE.Vector3(0, isSniper ? 1.2 : 1, 0));
    const predictedTarget = target.clone();
    if (gameMode !== 'basedefense' && player1.velocity) {
        const leadTime = Math.min(0.65, distance / speed);
        predictedTarget.x += player1.velocity.x * leadTime;
        predictedTarget.z += player1.velocity.z * leadTime;
    }

    const direction = predictedTarget.sub(origin).setY(0).normalize();
    const spread = isSniper ? 0.012 : 0.035;
    const aimedDirection = rotateFlatDirection(direction, (Math.random() - 0.5) * spread * 2);
    const bullet = new THREE.Mesh(
        new THREE.SphereGeometry(isSniper ? 0.1 : 0.08, 4, 4),
        new THREE.MeshBasicMaterial({ color: isSniper ? 0xff0000 : 0xff4444 })
    );
    bullet.position.copy(origin);
    bullet.userData = {
        velocity: aimedDirection.multiplyScalar(speed),
        life: isSniper ? 2 : 3,
        age: 0
    };
    scene.add(bullet);
    enemyBullets.push(bullet);
}

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

    if (gameMode === 'solo' || gameMode === 'basedefense') {
        if (!waveActive && enemies.length === 0 && waveTimer > 0) {
            waveTimer -= delta;
            if (waveTimer <= 0) startWave();
            else { if (announceEl) { announceEl.style.display='block'; announceEl.textContent = `Следующая волна через ${Math.ceil(waveTimer)}...`; } }
        } else if (waveActive) { if (announceEl) announceEl.style.display='none'; }

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
        if (currentTime - lastWallSpawn > 15) { lastWallSpawn = currentTime; spawnWall(); }
    } else if (gameMode === 'pvp') {
        if (currentTime - lastHealthSpawn > 10) { lastHealthSpawn = currentTime; }
        if (currentTime - lastCrateSpawn > 30) { lastCrateSpawn = currentTime; spawnSupplyCrate(); }
        if (currentTime - lastWallSpawn > 15) { lastWallSpawn = currentTime; spawnWall(); }
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

    if (mouseHeld1 && isPointerLocked && player1.alive) {
        const currentWp = weapons[player1.weaponIndex];
        if (currentWp && currentWp.automatic) shoot(player1);
    }

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
    if ((gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial' || gameMode === 'basedefense') && player1.alive) {
        const target = (gameMode === 'basedefense' && baseObject) ? baseObject.position : player1.camera.position;
        const wallBoxes = walls.map(wall => new THREE.Box3().setFromObject(wall));
        for (const enemy of [...enemies]) {
            if (!enemies.includes(enemy)) continue;
            const data = initializeEnemyAI(enemy);
            const dx = target.x - enemy.position.x;
            const dz = target.z - enemy.position.z;
            const dist = Math.hypot(dx, dz);
            const dormantMimic = data.isMimic && !data.revealed;
            const canSee = !dormantMimic && enemyHasLineOfSight(enemy, target, dist, wallBoxes);

            if (data.isSniper && data.laser) {
                data.laser.visible = canSee;
                data.laser.scale.y = dist / 20;
                data.laser.position.z = dist / 2;
            }

            const shootingRange = data.isSniper ? 35 : 22;
            if (!data.isKamikaze && canSee && dist < shootingRange &&
                enemyBullets.length < MAX_ENEMY_BULLETS &&
                currentTime - data.lastShot > data.shootCooldown) {
                data.lastShot = currentTime;
                fireEnemyBullet(enemy, target, dist, data.isSniper);
            }

            const desiredDirection = chooseEnemyMovement(enemy, target, dist, currentTime, delta, wallBoxes);
            if (desiredDirection.lengthSq() > 0.0001) {
                const turnResponse = data.isKamikaze ? 7 : 3.5;
                data.targetDir.lerp(desiredDirection, Math.min(1, turnResponse * delta)).normalize();
                if (!movementIsBlocked(enemy, data.targetDir, data.speed * delta, wallBoxes)) {
                    enemy.position.addScaledVector(data.targetDir, data.speed * delta);
                }
            }

            const movedDistance = enemy.position.distanceTo(data.lastPosition);
            data.stuckTime = movedDistance < 0.01 && desiredDirection.lengthSq() > 0 ? data.stuckTime + delta : 0;
            if (data.stuckTime > 0.8) {
                data.strafeSide *= -1;
                data.nextTacticChange = currentTime + 0.7;
                data.stuckTime = 0;
            }
            data.lastPosition.copy(enemy.position);

            if (data.isShielded) {
                // Щитоносец поворачивается медленно — это позволяет игроку обойти его и зайти со спины
                _shieldLookHelper.position.copy(enemy.position);
                _shieldLookHelper.lookAt(new THREE.Vector3(target.x, enemy.position.y, target.z));
                const turnSpeed = data.turnSpeed || 1.4;
                enemy.quaternion.slerp(_shieldLookHelper.quaternion, Math.min(1, turnSpeed * delta));
            } else if (!dormantMimic) {
                enemy.lookAt(new THREE.Vector3(target.x, enemy.position.y, target.z));
            }
            // В "Защите базы" враги игнорируют игрока и наносят урон базе вплотную к ней
            if (gameMode === 'basedefense' && baseObject) {
                const distToBase = enemy.position.distanceTo(baseObject.position);
                if (distToBase < 2.6) {
                    damageBase((enemy.userData.isBoss ? 25 : 8) * delta);
                }
            }
        }
        // Удаление старых пуль
        for (let i=enemyBullets.length-1;i>=0;i--) {
            const b = enemyBullets[i];
            b.userData.age += delta;
            if (b.userData.age > b.userData.life) { scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); continue; }
            const previousPosition = b.position.clone();
            b.position.x += b.userData.velocity.x*delta; b.position.y += b.userData.velocity.y*delta; b.position.z += b.userData.velocity.z*delta;
            const bulletPath = new THREE.Line3(previousPosition, b.position);
            if (gameMode === 'basedefense') {
                // Игрока пули врагов не задевают — они летят только в базу
                if (baseObject && bulletPath.closestPointToPoint(baseObject.position, true, new THREE.Vector3()).distanceTo(baseObject.position) < 2.8) {
                    const dmgMult = DIFFICULTY_SETTINGS[difficulty] ? DIFFICULTY_SETTINGS[difficulty].damageMult : 1;
                    damageBase(6 * dmgMult); scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); continue;
                }
            } else if (bulletPath.closestPointToPoint(player1.camera.position, true, new THREE.Vector3()).distanceTo(player1.camera.position) < 1.8) {
                const dmgMult = DIFFICULTY_SETTINGS[difficulty] ? DIFFICULTY_SETTINGS[difficulty].damageMult : 1;
                player1.damage(Math.round(10 * dmgMult)); scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); continue;
            }
            const travelledDistance = previousPosition.distanceTo(b.position);
            if (new THREE.Raycaster(previousPosition, b.userData.velocity.clone().normalize(), 0, travelledDistance).intersectObjects(walls,false).length) {
                scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1);
            }
        }
    }

    enemies.forEach(e => {
        if (e.userData.mixer) e.userData.mixer.update(delta);
        if (player1.detectorActive) {
            e.traverse(child => { if (child.isMesh) child.material.emissive = new THREE.Color(0xff8800); });
        } else {
            e.traverse(child => { if (child.isMesh && child.material.emissive) child.material.emissive = new THREE.Color(0x000000); });
        }
        // Невидимка: прозрачность зависит от детектора и недавних попаданий
        if (e.userData.isInvisible) {
            if (player1.detectorActive) {
                setEnemyOpacity(e, 1); // детектор полностью раскрывает Невидимку
            } else {
                if (e.userData.hitRevealTimer > 0) {
                    e.userData.hitRevealTimer -= delta;
                    const t = Math.max(0, e.userData.hitRevealTimer) / INVISIBLE_HIT_REVEAL_TIME;
                    // плавно гаснет от видимой опасности до базовой прозрачности
                    const opacity = INVISIBLE_BASE_OPACITY + (INVISIBLE_HIT_OPACITY - INVISIBLE_BASE_OPACITY) * t;
                    setEnemyOpacity(e, opacity);
                } else {
                    setEnemyOpacity(e, INVISIBLE_BASE_OPACITY);
                }
            }
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

    for (let i=thrownGrenades.length-1;i>=0;i--) {
        const nade = thrownGrenades[i];
        nade.userData.age += delta;

        // Гравитация и полёт
        nade.userData.velocity.y -= 18 * delta;
        nade.position.x += nade.userData.velocity.x * delta;
        nade.position.y += nade.userData.velocity.y * delta;
        nade.position.z += nade.userData.velocity.z * delta;

        // Столкновение со стенами — простое гашение горизонтальной скорости при попадании
        const hitWall = new THREE.Raycaster(nade.position, nade.userData.velocity.clone().setY(0).normalize(), 0, 0.2)
            .intersectObjects(walls, false).length > 0;
        if (hitWall) {
            nade.userData.velocity.x *= -0.3;
            nade.userData.velocity.z *= -0.3;
        }

        // Приземление на пол — гасим и подпрыгиваем один раз, затем останавливаемся
        if (nade.position.y <= 0.15) {
            nade.position.y = 0.15;
            if (Math.abs(nade.userData.velocity.y) > 1) {
                nade.userData.velocity.y *= -0.4; // небольшой отскок
            } else {
                nade.userData.velocity.set(0, 0, 0);
            }
        }

        const shouldExplode = nade.userData.age > nade.userData.life;
        if (shouldExplode && !nade.userData.exploded) {
            nade.userData.exploded = true;
            scene.remove(nade); nade.geometry.dispose(); nade.material.dispose();
            thrownGrenades.splice(i,1);
            explode(nade.position, 8, 5);
        }
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
    for (let i=tracers.length-1;i>=0;i--) {
        const t = tracers[i];
        if (t.userData.isBullet) {
            const ud = t.userData;
            ud.age += delta;
            t.position.addScaledVector(ud.velocity, delta);
            const traveled = t.position.distanceTo(ud.start);

            // Лёгкий светящийся след для крупных снарядов (плазма, ракета)
            if (ud.isOrb) {
                ud.trailTimer -= delta;
                if (ud.trailTimer <= 0) {
                    ud.trailTimer = 0.02;
                    spawnParticles(t.position, ud.color, 1);
                }
            }

            if (traveled >= ud.totalDist || ud.age > 2.5) {
                spawnImpactSpark(ud.end, ud.color, ud.thickness);
                scene.remove(t); t.geometry.dispose(); t.material.dispose(); tracers.splice(i,1);
            }
            continue;
        }
        t.userData.age += delta;
        if (t.userData.age >= t.userData.life) { scene.remove(t); t.geometry.dispose(); t.material.dispose(); tracers.splice(i,1); continue; }
        t.material.opacity = 0.9 * (1 - t.userData.age / t.userData.life);
    }

    if (gameMode === 'solo' || gameMode === 'campaign' || gameMode === 'tutorial' || gameMode === 'basedefense') {
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
    const pBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(newPos.x, newPos.y - h / 2, newPos.z),
        new THREE.Vector3(player.radius * 2, h, player.radius * 2)
    );
    for (const wall of walls) { if (pBox.intersectsBox(new THREE.Box3().setFromObject(wall))) { collided = true; break; } }
    if (!collided) player.camera.position.copy(newPos);
    else { player.camera.position.x -= player.velocity.x*delta; player.camera.position.z -= player.velocity.z*delta; player.velocity.x=0; player.velocity.z=0; }
    if (player.camera.position.y <= player.height) { player.camera.position.y = player.height; player.velocity.y = 0; player.onGround = true; }
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
    resetArenaForModeSwitch();
    player1.respawn(); player1.kills = 0;
    player1.wave = 1; if (wave1) wave1.textContent = 1;
    updateEnemyCount();
    applyLevelWalls();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    startWave();
    renderer.domElement.requestPointerLock();
}
function startWave() {
    player1.wave++; if (wave1) wave1.textContent = player1.wave;
    enemiesToSpawn = 2 + player1.wave * 1.5;
    waveActive = true; waveTimer = 0;
    if (waveSpawnInterval) clearInterval(waveSpawnInterval); // на всякий случай останавливаем предыдущий, если он ещё жив
    waveSpawnInterval = setInterval(() => {
        if (!waveActive || enemiesToSpawn <= 0) { clearInterval(waveSpawnInterval); waveSpawnInterval = null; return; }
        const r = Math.random();
        if (r < 0.1) spawnEnemy(false, 'sniper');
        else if (r < 0.2) spawnEnemy(false, 'kamikaze');
        else if (r < 0.25) spawnEnemy(false, 'mimic');
        else if (r < 0.35) spawnEnemy(false, 'invisible');
        else if (r < 0.45) spawnEnemy(false, 'shield');
        else spawnEnemy(false);
        enemiesToSpawn--;
        updateEnemyCount();
    }, 800); // медленнее спавн
    if (player1.wave % 5 === 0) setTimeout(() => { if (waveActive) spawnEnemy(true); }, 2000);
}
btnSolo.addEventListener('click', startSolo);

function startBaseDefense() {
    initAudio();
    gameMode = 'basedefense';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    resetArenaForModeSwitch();
    baseHealth = baseMaxHealth;
    baseObject = createBaseObject();
    updateBaseHUD();
    if (baseLabelEl) baseLabelEl.style.display = 'block';
    if (baseHealthEl) baseHealthEl.style.display = 'block';
    player1.respawn();
    // Игрок стартует рядом с базой, лицом к ней, и волен свободно перемещаться по арене
    player1.camera.position.set(BASE_POSITION.x, player1.height, BASE_POSITION.z + 15);
    player1.velocity.set(0,0,0);
    player1.yaw = Math.PI; player1.pitch = 0;
    if (player1.model) player1.model.position.copy(player1.camera.position);
    player1.kills = 0;
    player1.wave = 1; if (wave1) wave1.textContent = 1;
    updateEnemyCount();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    startWave();
    renderer.domElement.requestPointerLock();
}
btnBaseDefense.addEventListener('click', startBaseDefense);
// Показать/скрыть экран управления
btnControls.addEventListener('click', () => {
    controlsScreen.style.display = 'flex';
});
btnControlsBack.addEventListener('click', () => {
    controlsScreen.style.display = 'none';
});
btnCampaign.addEventListener('click', async () => {
    try {
        await loadLevelData();
    } catch (error) {
        showCampaignLevelError(error);
        return;
    }
    initAudio();
    gameMode = 'campaign';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    resetArenaForModeSwitch();
    player1.respawn(); player1.kills = 0;
    campaignMission = 0;
    announceEl.style.display='block'; announceEl.textContent = campaignMissions[0].name;
    setTimeout(() => { announceEl.style.display='none'; }, 2000);
    applyLevelWalls();
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
    resetArenaForModeSwitch();
    player1.respawn();
    player1.tutorialStep = 0;
    tutorialHealth = null;
    applyLevelWalls();
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
    resetArenaForModeSwitch();
    player1.respawn(); player2.respawn();
    player1.kills = 0; player2.kills = 0;
    player1.updateHUD(); player2.updateHUD();
    applyLevelWalls();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    renderer.domElement.requestPointerLock();
});

restartBtn.addEventListener('click', () => {
    deathScreen.style.display = 'none';
    if (gameMode === 'solo') startSolo();
    else if (gameMode === 'campaign') btnCampaign.click();
    else if (gameMode === 'tutorial') btnTutorial.click();
    else if (gameMode === 'pvp') btnPvp.click();
    else if (gameMode === 'basedefense') startBaseDefense();
});

function validateLevel(data) {
    if (!data || typeof data !== 'object') throw new Error('корень JSON должен быть объектом');
    if (!data.playerSpawn || !Number.isFinite(data.playerSpawn.x) || !Number.isFinite(data.playerSpawn.z)) {
        throw new Error('не задана точка playerSpawn');
    }
    if (!Array.isArray(data.enemySpawns) || data.enemySpawns.length === 0) {
        throw new Error('нужна хотя бы одна точка enemySpawns');
    }
    if (!Array.isArray(data.walls)) throw new Error('поле walls должно быть массивом');
    const validPoint = point => point && Number.isFinite(point.x) && Number.isFinite(point.z);
    if (!data.enemySpawns.every(validPoint)) throw new Error('координаты enemySpawns должны быть числами');
    if (!data.walls.every(wall => validPoint(wall) && Number.isFinite(wall.width) && Number.isFinite(wall.depth) && Number.isFinite(wall.height))) {
        throw new Error('у каждой стены нужны числовые x, z, width, depth и height');
    }
    return data;
}

// Загружает level.json по требованию. Используется ТОЛЬКО режимом "Кампания" —
// у него заранее спроектированные стены и точки спавна, поэтому без файла
// кампания невозможна. Остальные режимы (одиночная игра, PvP, обучение) не
// нуждаются в этом файле: они и так умеют генерировать арену процедурно
// (см. applyLevelWalls()/spawnEnemy(), которые просто пропускают шаг, если
// levelData ещё не загружен).
async function loadLevelData() {
    if (levelData) return levelData;
    const response = await fetch('level.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}: файл не найден`);
    levelData = validateLevel(await response.json());
    levelLoadError = null;
    return levelData;
}

// Ненавязчивое сообщение об ошибке прямо в игре (вместо блокировки всего приложения) —
// показывается только при попытке зайти в "Кампанию" без доступного level.json.
function showCampaignLevelError(error) {
    levelLoadError = error;
    console.error('Не удалось загрузить level.json (нужен только для режима "Кампания"):', error);
    if (announceEl) {
        announceEl.style.display = 'block';
        announceEl.textContent = 'Кампания недоступна: файл level.json отсутствует или повреждён';
        setTimeout(() => { announceEl.style.display = 'none'; }, 3000);
    }
}

async function bootGame() {
    // Пробуем подгрузить level.json заранее, но его отсутствие не должно мешать
    // запуску игры целиком — оно скажется только на кнопке "Кампания".
    try {
        await loadLevelData();
    } catch (error) {
        levelLoadError = error;
        console.warn('level.json недоступен — режим "Кампания" будет недоступен, остальные режимы работают без него:', error);
    }
    showMenu();
    requestAnimationFrame(animate);
}

bootGame();
window.addEventListener('contextmenu', e=>e.preventDefault());
window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));
