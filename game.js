// ==================== DOM ====================
const overlay = document.getElementById('overlay');
const ammoCountEl = document.getElementById('ammo-count');
const enemyCountEl = document.getElementById('enemy-count');
const killsCountEl = document.getElementById('kills-count');
const healthValueEl = document.getElementById('health-value');
const waveNumberEl = document.getElementById('wave-number');
const weaponNameEl = document.getElementById('weapon-name');
const grenadeCountEl = document.getElementById('grenade-count');
const reloadBar = document.getElementById('reload-bar');
const reloadFill = document.getElementById('reload-fill');
const deathScreen = document.getElementById('death-screen');
const restartBtn = document.getElementById('restart-btn');
const waveAnnounce = document.getElementById('wave-announce');
const pickupHint = document.getElementById('pickup-hint');

// ==================== Сцена ====================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);
scene.fog = new THREE.Fog(0x1a1a2e, 30, 120);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 1.7, 5);

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
sun.shadow.mapSize.width = 2048;
sun.shadow.mapSize.height = 2048;
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far = 150;
sun.shadow.camera.left = -50;
sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50;
sun.shadow.camera.bottom = -50;
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

// ==================== Текстура аптечки ====================
const healthTexCanvas = document.createElement('canvas');
healthTexCanvas.width = 128; healthTexCanvas.height = 128;
const hctx = healthTexCanvas.getContext('2d');
hctx.fillStyle = '#ffffff';
hctx.fillRect(0, 0, 128, 128);
hctx.fillStyle = '#ff0000';
hctx.fillRect(44, 16, 40, 96);
hctx.fillRect(16, 44, 96, 40);
const healthTexture = new THREE.CanvasTexture(healthTexCanvas);

// ==================== Оружие ====================
const weapons = [
    { name: 'Пистолет',   damage: 1, fireRate: 0.30, magSize: 12, color: 0x888888, model: 'pistol' },
    { name: 'Дробовик',   damage: 1, fireRate: 0.70, magSize: 6,  color: 0x8B4513, model: 'shotgun', pellets: 5 },
    { name: 'Автомат',    damage: 1, fireRate: 0.10, magSize: 30, color: 0x333333, model: 'rifle' },
    { name: 'Пулемёт',    damage: 1, fireRate: 0.07, magSize: 100,color: 0x555555, model: 'lmg' },
    { name: 'Снайперская',damage: 5, fireRate: 1.20, magSize: 5,  color: 0x004400, model: 'sniper' },
    { name: 'Плазма',     damage: 2, fireRate: 0.15, magSize: 20, color: 0x00ffff, model: 'plasma' },
    { name: 'Ракетница',  damage: 10,fireRate: 1.50, magSize: 3,  color: 0xff4400, model: 'rocket', explosive: true }
];
let currentWeaponIndex = 0;
let currentMag = weapons[0].magSize;
let ammoReserve = 200;
const MAX_RESERVE = 200;
let grenades = 3;

// Группа оружия на камере
const gunGroup = new THREE.Group();
camera.add(gunGroup);
gunGroup.position.set(0.35, -0.28, -0.55);

function clearGunGroup() {
    while(gunGroup.children.length > 0) gunGroup.remove(gunGroup.children[0]);
}
function buildGunModel(weapon) {
    clearGunGroup();
    const col = weapon.color;
    const mainMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5, metalness: 0.8 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5, metalness: 0.8 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.35), mainMat);
    body.position.set(0, -0.02, -0.05);
    gunGroup.add(body);
    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.15, 0.07), darkMat);
    grip.position.set(0, -0.14, 0.05);
    grip.rotation.x = 0.25;
    gunGroup.add(grip);
    if (weapon.model === 'shotgun') {
        const barrel1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.6, 8), mainMat);
        barrel1.rotation.x = Math.PI/2; barrel1.position.set(0, 0.05, -0.35); gunGroup.add(barrel1);
        const barrel2 = barrel1.clone(); barrel2.position.set(0.06, 0.05, -0.35); gunGroup.add(barrel2);
        const barrel3 = barrel1.clone(); barrel3.position.set(-0.06, 0.05, -0.35); gunGroup.add(barrel3);
    } else if (weapon.model === 'sniper') {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.8, 12), mainMat);
        barrel.rotation.x = Math.PI/2; barrel.position.set(0, 0.05, -0.45); gunGroup.add(barrel);
        const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.15, 8), darkMat);
        scope.position.set(0, 0.11, -0.2); gunGroup.add(scope);
    } else if (weapon.model === 'rocket') {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.7, 12), mainMat);
        barrel.rotation.x = Math.PI/2; barrel.position.set(0, 0.05, -0.4); gunGroup.add(barrel);
    } else {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.6, 12), mainMat);
        barrel.rotation.x = Math.PI/2; barrel.position.set(0, 0.05, -0.3); gunGroup.add(barrel);
    }
    const sight = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.03, 0.06), new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.3, metalness: 0.95 }));
    sight.position.set(0, 0.08, -0.2);
    gunGroup.add(sight);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0 });
    const muzzleFlash = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), flashMat);
    muzzleFlash.position.set(0, 0.05, -0.65); gunGroup.add(muzzleFlash);
    const flashPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.12), new THREE.MeshBasicMaterial({ color: 0xffff88, transparent: true, opacity: 0, side: THREE.DoubleSide }));
    flashPlane.position.set(0, 0.05, -0.67); gunGroup.add(flashPlane);
}
buildGunModel(weapons[0]);

// ==================== Игрок ====================
const player = {
    velocity: new THREE.Vector3(),
    speed: 8.0, jumpPower: 10, gravity: 18,
    onGround: true, height: 1.7, radius: 0.4,
    health: 100, maxHealth: 100, kills: 0, alive: true,
    wave: 1, lastPortalTime: 0, portalCooldown: 1.0,
    meleeCooldown: 0, meleeDuration: 0.6
};

let isReloading = false, reloadStartTime = 0;
const RELOAD_DURATION = 1.8;
let lastShotTime = 0, gunRecoil = 0;

const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'KeyR') reload();
    if (e.code === 'KeyF') meleeAttack();
    if (e.code === 'KeyE') pickupItems();
    if (e.code === 'KeyG') throwGrenade();
    if (e.code >= 'Digit1' && e.code <= 'Digit7') {
        const idx = parseInt(e.code.charAt(5)) - 1;
        switchWeapon(idx);
    }
});
window.addEventListener('keyup', (e) => keys[e.code] = false);
window.addEventListener('mousedown', (e) => {
    if (e.button === 1) meleeAttack();
    if (e.button === 0 && isPointerLocked) shoot();
});

let yaw = 0, pitch = 0, sensitivity = 0.002, isPointerLocked = false;
document.addEventListener('click', () => { if (!isPointerLocked && player.alive) renderer.domElement.requestPointerLock(); });
document.addEventListener('pointerlockchange', () => {
    isPointerLocked = document.pointerLockElement === renderer.domElement;
    overlay.classList.toggle('hidden', isPointerLocked);
});
document.addEventListener('mousemove', (e) => {
    if (!isPointerLocked || !player.alive) return;
    yaw -= e.movementX * sensitivity;
    pitch -= e.movementY * sensitivity;
    pitch = Math.max(-Math.PI/2.2, Math.min(Math.PI/2.2, pitch));
});

// ==================== Частицы ====================
const particles = [];
function spawnParticles(position, color, count = 12) {
    for (let i=0; i<count; i++) {
        const mat = new THREE.MeshStandardMaterial({ color, roughness:0.5, emissive:color, emissiveIntensity:0.6 });
        const p = new THREE.Mesh(new THREE.BoxGeometry(0.04,0.04,0.04), mat);
        p.position.copy(position);
        p.userData = {
            velocity: new THREE.Vector3((Math.random()-0.5)*2, Math.random()*1.5, (Math.random()-0.5)*2).normalize().multiplyScalar(3+Math.random()*5),
            life: 0.5+Math.random()*0.8, age:0
        };
        scene.add(p); particles.push(p);
    }
}

// ==================== Стены ====================
const walls = [];
const MAX_WALLS = 25;
let lastWallSpawn = 0;
const wallColors = [0x8b5e3c,0x9b7653,0x7c8a7c,0x6b7b6b,0x8a7a6a,0x998877,0x5c6b7a,0x7a6b5c,0x8899aa,0x776655];

function spawnWall() {
    if (walls.length >= MAX_WALLS) return;
    let pos, ppos = camera.position;
    for (let i=0; i<20; i++) {
        const ang = Math.random()*Math.PI*2, dist = 8+Math.random()*35;
        const x = Math.max(-50,Math.min(50, ppos.x+Math.cos(ang)*dist));
        const z = Math.max(-50,Math.min(50, ppos.z+Math.sin(ang)*dist));
        pos = new THREE.Vector3(x,0,z);
        if (pos.distanceTo(ppos) > 6) break;
    }
    const w=1.5+Math.random()*3, h=2+Math.random()*3.5, d=0.2+Math.random()*0.6;
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), new THREE.MeshStandardMaterial({ color: wallColors[Math.floor(Math.random()*wallColors.length)], roughness:0.55, metalness:0.15 }));
    wall.position.set(pos.x, h/2, pos.z);
    wall.rotation.y = Math.random()*Math.PI*2;
    wall.castShadow = wall.receiveShadow = true;
    wall.userData = { health:3, maxHealth:3 };
    scene.add(wall); walls.push(wall);
}
function destroyWall(wall) {
    spawnParticles(wall.position, wall.material.color, 25);
    scene.remove(wall); walls.splice(walls.indexOf(wall),1);
    wall.geometry.dispose(); wall.material.dispose();
}

// ==================== Враги, волны, боссы ====================
const enemies = [];
const enemyBullets = [];
let waveActive = false, waveTimer = 0, enemiesToSpawn = 0;
const WAVE_DELAY = 5;

function spawnEnemy(isBoss = false) {
    let pos, ppos = camera.position;
    for (let i=0; i<20; i++) {
        const ang = Math.random()*Math.PI*2, dist = isBoss ? 15 : 12+Math.random()*20;
        const x = Math.max(-48,Math.min(48, ppos.x+Math.cos(ang)*dist));
        const z = Math.max(-48,Math.min(48, ppos.z+Math.sin(ang)*dist));
        pos = new THREE.Vector3(x,0,z);
        if (pos.distanceTo(ppos) > 10) break;
    }
    let enemy;
    if (isBoss) {
        const geo = new THREE.BoxGeometry(2,2,2);
        const mat = new THREE.MeshStandardMaterial({ color: 0x440000, roughness:0.3, metalness:0.7, emissive:new THREE.Color(0x220000) });
        enemy = new THREE.Mesh(geo, mat);
        enemy.position.set(pos.x, 1.0, pos.z);
        for (let j=0; j<12; j++) {
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 6), mat);
            spike.position.set((Math.random()-0.5)*1.8, (Math.random()-0.5)*1.8, (Math.random()-0.5)*1.8);
            enemy.add(spike);
        }
        enemy.userData = { health:30, maxHealth:30, speed:1.8, lastShot:0, shootCooldown:0.8, targetDir:new THREE.Vector3(), isBoss:true };
    } else {
        const geo = new THREE.CylinderGeometry(0.5,0.5,2.2,8);
        const mat = new THREE.MeshStandardMaterial({ color:0xcc3333, roughness:0.4, metalness:0.6, emissive:new THREE.Color(0x330000) });
        enemy = new THREE.Mesh(geo, mat);
        enemy.position.set(pos.x, 1.1, pos.z);
        const eyeGeo = new THREE.SphereGeometry(0.15,4,4);
        const eyeMat = new THREE.MeshBasicMaterial({ color:0xffff00 });
        const le = new THREE.Mesh(eyeGeo, eyeMat); le.position.set(-0.2,0.7,0.45); enemy.add(le);
        const re = new THREE.Mesh(eyeGeo, eyeMat); re.position.set(0.2,0.7,0.45); enemy.add(re);
        enemy.userData = { health:5, maxHealth:5, speed:2.5+Math.random()*2, lastShot:0, shootCooldown:1.5+Math.random()*1.5, targetDir:new THREE.Vector3(), isBoss:false };
    }
    enemy.castShadow = enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

function killEnemy(enemy) {
    spawnParticles(enemy.position, enemy.userData.isBoss ? 0xff0000 : 0xff4444, enemy.userData.isBoss ? 35 : 20);
    // Дроп: патроны всегда, граната и аптечка с шансом
    dropAmmo(enemy.position.clone());
    if (enemy.userData.isBoss || Math.random() < 0.2) dropGrenade(enemy.position.clone());
    if (Math.random() < 0.25) dropHealth(enemy.position.clone());
    scene.remove(enemy);
    enemies.splice(enemies.indexOf(enemy),1);
    player.kills++;
    killsCountEl.textContent = player.kills;
    updateEnemyCount();
    if (enemies.length === 0 && waveActive) {
        waveActive = false;
        waveTimer = WAVE_DELAY;
        waveAnnounce.style.display = 'block';
        waveAnnounce.textContent = `Волна ${player.wave} пройдена!`;
        setTimeout(() => waveAnnounce.style.display = 'none', 2000);
    }
}

function updateEnemyCount() { enemyCountEl.textContent = enemies.length; }

// ==================== Дроп: патроны, гранаты, аптечки ====================
const droppedItems = [];
function dropAmmo(pos) {
    const geo = new THREE.CylinderGeometry(0.15,0.15,0.2,8);
    const mat = new THREE.MeshStandardMaterial({ color:0x22cc22, emissive:new THREE.Color(0x004400), roughness:0.3 });
    const box = new THREE.Mesh(geo, mat);
    box.position.set(pos.x, 0.2, pos.z);
    box.userData = { type:'ammo', life:15, age:0 };
    scene.add(box); droppedItems.push(box);
}
function dropGrenade(pos) {
    const geo = new THREE.SphereGeometry(0.2,8,8);
    const mat = new THREE.MeshStandardMaterial({ color:0xaa6600, emissive:new THREE.Color(0x331100), roughness:0.3 });
    const nade = new THREE.Mesh(geo, mat);
    nade.position.set(pos.x, 0.2, pos.z);
    nade.userData = { type:'grenade', life:15, age:0 };
    scene.add(nade); droppedItems.push(nade);
}
function dropHealth(pos) {
    const geo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const mat = new THREE.MeshStandardMaterial({ map: healthTexture, roughness: 0.4 });
    const kit = new THREE.Mesh(geo, mat);
    kit.position.set(pos.x, 0.2, pos.z);
    kit.userData = { type:'health', life:15, age:0 };
    scene.add(kit); droppedItems.push(kit);
}

// Спавн аптечки по таймеру
let lastHealthSpawn = 0;
function spawnHealthPack() {
    if (!player.alive) return;
    let pos;
    const ppos = camera.position;
    for (let i=0; i<20; i++) {
        const ang = Math.random()*Math.PI*2, dist = 8+Math.random()*25;
        const x = Math.max(-50,Math.min(50, ppos.x+Math.cos(ang)*dist));
        const z = Math.max(-50,Math.min(50, ppos.z+Math.sin(ang)*dist));
        pos = new THREE.Vector3(x, 0, z);
        if (pos.distanceTo(ppos) > 7) break;
    }
    dropHealth(pos);
}

// ==================== Портал ====================
const portals = [];
function createPortal(x,z) {
    const group = new THREE.Group();
    const torus = new THREE.Mesh(new THREE.TorusGeometry(0.8,0.1,16,32), new THREE.MeshStandardMaterial({ color:0x00aaff, emissive:new THREE.Color(0x004466), roughness:0.3, metalness:0.7 }));
    torus.rotation.x = Math.PI/2; group.add(torus);
    const pts = []; for(let i=0;i<60;i++){ const a=i/60*Math.PI*2; pts.push(Math.cos(a)*0.9, Math.sin(a)*0.9, 0); }
    const ptsGeo = new THREE.BufferGeometry(); ptsGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts,3));
    const ptsMat = new THREE.PointsMaterial({ color:0x88ccff, size:0.08 });
    group.add(new THREE.Points(ptsGeo, ptsMat));
    group.position.set(x,1.0,z);
    scene.add(group); portals.push(group);
}
createPortal(-20,-20); createPortal(20,-20); createPortal(0,20); createPortal(-20,20); createPortal(20,20);

function teleportPlayer() {
    const now = performance.now()/1000;
    if (now - player.lastPortalTime < player.portalCooldown) return;
    const ppos = camera.position;
    for (const portal of portals) {
        if (portal.position.distanceTo(ppos) < 1.8) {
            const others = portals.filter(p=>p!==portal);
            if (!others.length) return;
            const target = others[Math.floor(Math.random()*others.length)];
            camera.position.set(target.position.x, player.height, target.position.z);
            player.lastPortalTime = now;
            spawnParticles(target.position, 0x00aaff, 20);
            break;
        }
    }
}

// ==================== Переключение оружия ====================
function switchWeapon(index) {
    if (index === currentWeaponIndex || index < 0 || index >= weapons.length) return;
    currentWeaponIndex = index;
    const wp = weapons[index];
    currentMag = wp.magSize;
    buildGunModel(wp);
    weaponNameEl.textContent = wp.name;
    updateAmmoDisplay();
    isReloading = false;
    reloadBar.classList.remove('active');
}

function updateAmmoDisplay() {
    ammoCountEl.textContent = `${currentMag} / ${ammoReserve}`;
}

// ==================== Гранаты ====================
const liveGrenades = [];
function throwGrenade() {
    if (!player.alive || grenades <= 0) return;
    grenades--;
    grenadeCountEl.textContent = grenades;
    const nade = new THREE.Mesh(new THREE.SphereGeometry(0.15,8,8), new THREE.MeshStandardMaterial({ color:0xaa6600, emissive:new THREE.Color(0x331100) }));
    nade.position.copy(camera.position.clone().add(new THREE.Vector3(0,0.5,0)));
    const dir = new THREE.Vector3(-Math.sin(yaw), 0.25, -Math.cos(yaw)).normalize();
    nade.userData = { velocity: dir.clone().multiplyScalar(10), life:2, age:0 };
    scene.add(nade);
    liveGrenades.push(nade);
}

// ==================== Рукопашный бой ====================
function meleeAttack() {
    if (!player.alive || isReloading) return;
    const now = performance.now()/1000;
    if (now - player.meleeCooldown < player.meleeDuration) return;
    player.meleeCooldown = now;
    gunGroup.rotation.z = 0.6; gunGroup.position.x += 0.1;
    setTimeout(() => { gunGroup.rotation.z = -0.6; gunGroup.position.x -= 0.1; }, 150);
    setTimeout(() => { gunGroup.rotation.z = 0; gunGroup.position.x = 0.35; }, 300);
    const pos = camera.position.clone();
    for (const enemy of enemies) {
        if (pos.distanceTo(enemy.position) < 1.8) {
            enemy.userData.health -= 3;
            enemy.material.color.setHSL(0,1,0.3+enemy.userData.health*0.15);
            enemy.position.add(enemy.position.clone().sub(pos).normalize().multiplyScalar(2));
            spawnParticles(enemy.position, 0xffff00, 5);
            if (enemy.userData.health <= 0) killEnemy(enemy);
        }
    }
}

// ==================== Подбор предметов ====================
function pickupItems() {
    if (!player.alive) return;
    const pos = camera.position;
    let picked = false;
    for (let i=droppedItems.length-1; i>=0; i--) {
        const item = droppedItems[i];
        if (pos.distanceTo(item.position) < 1.8) {
            if (item.userData.type === 'ammo') {
                ammoReserve = Math.min(ammoReserve + 15, MAX_RESERVE);
                spawnParticles(item.position, 0x00ff00, 8);
            } else if (item.userData.type === 'grenade') {
                grenades++;
                grenadeCountEl.textContent = grenades;
                spawnParticles(item.position, 0xff8800, 8);
            } else if (item.userData.type === 'health') {
                player.health = Math.min(player.health + 25, player.maxHealth);
                healthValueEl.textContent = player.health;
                spawnParticles(item.position, 0xff0000, 10);
            }
            scene.remove(item);
            item.geometry.dispose();
            item.material.dispose();
            droppedItems.splice(i,1);
            picked = true;
        }
    }
    if (picked) {
        updateAmmoDisplay();
        pickupHint.style.display = 'none';
    } else {
        pickupHint.style.display = 'block';
        pickupHint.textContent = 'Нет предметов поблизости';
        setTimeout(() => { if (pickupHint.textContent === 'Нет предметов поблизости') pickupHint.style.display = 'none'; }, 1500);
    }
}

// ==================== Стрельба ====================
const raycaster = new THREE.Raycaster();
function shoot() {
    if (!player.alive || isReloading) return;
    const now = performance.now()/1000;
    const wp = weapons[currentWeaponIndex];
    if (now - lastShotTime < wp.fireRate) return;
    if (currentMag <= 0) { reload(); return; }
    lastShotTime = now;
    currentMag--;
    updateAmmoDisplay();

    gunRecoil = 0.04;
    gunGroup.position.z += 0.03;
    setTimeout(() => { gunGroup.position.z -= 0.03; }, 60);
    const flash = gunGroup.children.find(c=>c.isMesh && c.material.opacity!==undefined && c.material.color.getHex()===0xffaa00);
    if (flash) flash.material.opacity = 1;
    const plane = gunGroup.children.find(c=>c.isMesh && c.material.color.getHex()===0xffff88);
    if (plane) plane.material.opacity = 1;
    setTimeout(() => {
        if (flash) flash.material.opacity = 0;
        if (plane) plane.material.opacity = 0;
    }, 50);

    if (wp.pellets) {
        for (let i=0; i<wp.pellets; i++) {
            const spread = new THREE.Vector2((Math.random()-0.5)*0.05, (Math.random()-0.5)*0.05);
            raycaster.setFromCamera(spread, camera);
            processShot(raycaster, wp.damage);
        }
    } else if (wp.explosive) {
        raycaster.setFromCamera(new THREE.Vector2(0,0), camera);
        const hits = raycaster.intersectObjects([...walls, ...enemies], false);
        if (hits.length) explode(hits[0].point, wp.damage, 4);
    } else {
        raycaster.setFromCamera(new THREE.Vector2(0,0), camera);
        processShot(raycaster, wp.damage);
    }
}

function processShot(ray, damage) {
    const intersects = ray.intersectObjects([...walls, ...enemies], false);
    if (intersects.length) {
        const hit = intersects[0];
        const obj = hit.object;
        if (enemies.includes(obj)) {
            obj.userData.health -= damage;
            obj.material.color.setHSL(0,1,0.3+obj.userData.health*0.15);
            spawnParticles(hit.point, 0xff0000, 5);
            if (obj.userData.health <= 0) killEnemy(obj);
        } else if (walls.includes(obj)) {
            obj.userData.health -= damage;
            if (obj.userData.health <= 0) destroyWall(obj);
            spawnParticles(hit.point, 0xff6600, 5);
        }
    }
}

function explode(position, damage, radius) {
    for (const enemy of enemies) {
        if (position.distanceTo(enemy.position) < radius) {
            enemy.userData.health -= damage;
            enemy.material.color.setHSL(0,1,0.3+enemy.userData.health*0.15);
            spawnParticles(enemy.position, 0xff4400, 10);
            if (enemy.userData.health <= 0) killEnemy(enemy);
        }
    }
    spawnParticles(position, 0xff8800, 20);
}

function reload() {
    if (isReloading || !player.alive) return;
    const wp = weapons[currentWeaponIndex];
    if (currentMag === wp.magSize || ammoReserve <= 0) return;
    isReloading = true;
    reloadStartTime = performance.now()/1000;
    reloadBar.classList.add('active');
    gunGroup.rotation.z = -0.4;
    gunGroup.position.y -= 0.1;
}
function finishReload() {
    const wp = weapons[currentWeaponIndex];
    const needed = wp.magSize - currentMag;
    const add = Math.min(needed, ammoReserve);
    currentMag += add;
    ammoReserve -= add;
    updateAmmoDisplay();
    isReloading = false;
    reloadBar.classList.remove('active');
    reloadFill.style.width = '0%';
    gunGroup.rotation.z = 0;
    gunGroup.position.y += 0.1;
}

function damagePlayer(amount) {
    if (!player.alive) return;
    player.health -= amount;
    healthValueEl.textContent = Math.ceil(player.health);
    if (player.health <= 0) {
        player.health = 0;
        player.alive = false;
        deathScreen.style.display = 'flex';
        document.exitPointerLock();
    }
}

// ==================== Рестарт ====================
function restartGame() {
    player.health = player.maxHealth; player.kills = 0; player.wave = 1; player.alive = true;
    player.lastPortalTime = 0; player.meleeCooldown = 0;
    ammoReserve = MAX_RESERVE; grenades = 3;
    currentWeaponIndex = 0; currentMag = weapons[0].magSize;
    buildGunModel(weapons[0]); weaponNameEl.textContent = weapons[0].name;
    updateAmmoDisplay(); grenadeCountEl.textContent = grenades;
    healthValueEl.textContent = player.health; killsCountEl.textContent = 0;
    waveNumberEl.textContent = 1; enemyCountEl.textContent = 0;
    isReloading = false; waveActive = false; waveTimer = 0; enemiesToSpawn = 0;
    lastHealthSpawn = 0;
    [...walls].forEach(w=>{scene.remove(w); w.geometry.dispose(); w.material.dispose();}); walls.length=0;
    [...enemies].forEach(e=>scene.remove(e)); enemies.length=0;
    [...enemyBullets].forEach(b=>scene.remove(b)); enemyBullets.length=0;
    [...droppedItems].forEach(it=>{scene.remove(it); it.geometry.dispose(); it.material.dispose();}); droppedItems.length=0;
    [...liveGrenades].forEach(g=>{scene.remove(g);}); liveGrenades.length=0;
    [...particles].forEach(p=>{scene.remove(p); p.geometry.dispose(); p.material.dispose();}); particles.length=0;
    deathScreen.style.display = 'none'; pickupHint.style.display = 'none';
    camera.position.set(0,1.7,5); yaw = pitch = 0;
    for(let i=0;i<8;i++) spawnWall();
    lastWallSpawn = performance.now()/1000;
    startWave();
}
restartBtn.addEventListener('click', restartGame);

function startWave() {
    player.wave++;
    waveNumberEl.textContent = player.wave;
    enemiesToSpawn = 2 + player.wave * 2;
    waveActive = true; waveTimer = 0;
    const interval = setInterval(() => {
        if (!waveActive || enemiesToSpawn <= 0) { clearInterval(interval); return; }
        spawnEnemy(false);
        enemiesToSpawn--;
        updateEnemyCount();
    }, 500);
    if (player.wave % 5 === 0) {
        setTimeout(() => { if (waveActive) spawnEnemy(true); }, 2000);
    }
}

// ==================== Игровой цикл ====================
let lastTime = performance.now()/1000;
function animate(timestamp) {
    requestAnimationFrame(animate);
    if (!player.alive) { renderer.render(scene, camera); return; }
    const currentTime = timestamp/1000;
    const delta = Math.min(currentTime - lastTime, 0.15);
    lastTime = currentTime;

    // Волны
    if (!waveActive && enemies.length === 0 && waveTimer > 0) {
        waveTimer -= delta;
        if (waveTimer <= 0) startWave();
        else { waveAnnounce.style.display='block'; waveAnnounce.textContent = `Следующая волна через ${Math.ceil(waveTimer)}...`; }
    } else if (waveActive) waveAnnounce.style.display='none';

    // Аптечки по таймеру
    if (currentTime - lastHealthSpawn > 10) {
        lastHealthSpawn = currentTime;
        spawnHealthPack();
    }

    // Перезарядка
    if (isReloading) {
        const prog = Math.min((currentTime - reloadStartTime)/RELOAD_DURATION, 1);
        reloadFill.style.width = `${prog*100}%`;
        if (prog >= 1) finishReload();
    }

    // Движение игрока
    const forward = new THREE.Vector3(-Math.sin(yaw),0,-Math.cos(yaw)).normalize();
    const right = new THREE.Vector3(Math.cos(yaw),0,-Math.sin(yaw)).normalize();
    let mx=0,mz=0;
    if (keys['KeyW']) { mx+=forward.x; mz+=forward.z; }
    if (keys['KeyS']) { mx-=forward.x; mz-=forward.z; }
    if (keys['KeyA']) { mx-=right.x; mz-=right.z; }
    if (keys['KeyD']) { mx+=right.x; mz+=right.z; }
    const len = Math.sqrt(mx*mx+mz*mz);
    if (len>1) { mx/=len; mz/=len; }
    const speed = player.speed * (keys['ShiftLeft']?1.6:1);
    player.velocity.x = mx*speed; player.velocity.z = mz*speed;
    if (keys['Space'] && player.onGround) { player.velocity.y = player.jumpPower; player.onGround = false; }
    player.velocity.y -= player.gravity*delta;

    const newPos = camera.position.clone();
    newPos.x += player.velocity.x*delta; newPos.z += player.velocity.z*delta; newPos.y += player.velocity.y*delta;

    let collided = false;
    const pBox = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(newPos.x,newPos.y,newPos.z), new THREE.Vector3(player.radius*2,player.height,player.radius*2));
    for (const w of walls) { if (pBox.intersectsBox(new THREE.Box3().setFromObject(w))) { collided=true; break; } }
    for (const e of enemies) { if (pBox.intersectsBox(new THREE.Box3().setFromObject(e))) { collided=true; damagePlayer(5*delta); break; } }
    if (!collided) camera.position.copy(newPos);
    else { camera.position.x -= player.velocity.x*delta; camera.position.z -= player.velocity.z*delta; player.velocity.x=0; player.velocity.z=0; }

    if (camera.position.y <= player.height) { camera.position.y = player.height; player.velocity.y=0; player.onGround=true; }
    else player.onGround = false;
    camera.position.x = Math.max(-53,Math.min(53,camera.position.x));
    camera.position.z = Math.max(-53,Math.min(53,camera.position.z));
    camera.position.y = Math.min(30, camera.position.y);
    camera.rotation.order = 'YXZ'; camera.rotation.y = yaw; camera.rotation.x = pitch;

    teleportPlayer();

    if (gunRecoil>0) { gunRecoil *= Math.exp(-delta*18); if (gunRecoil<0.001) gunRecoil=0; gunGroup.rotation.x = -gunRecoil; }
    else gunGroup.rotation.x += (0-gunGroup.rotation.x)*delta*15;

    if (currentTime - lastWallSpawn > 2.5 && walls.length < MAX_WALLS) { lastWallSpawn = currentTime; spawnWall(); if (Math.random()<0.4 && walls.length<MAX_WALLS) spawnWall(); }

    // Враги
    for (const enemy of enemies) {
        const toPlayer = new THREE.Vector3().subVectors(camera.position, enemy.position);
        const dist = toPlayer.length(); toPlayer.y=0; const dir = toPlayer.clone().normalize();
        const vision = new THREE.Raycaster(enemy.position.clone().add(new THREE.Vector3(0,1,0)), dir);
        const see = vision.intersectObjects(walls, false);
        const canSee = see.length===0 || see[0].distance > dist;
        if (canSee && currentTime - enemy.userData.lastShot > enemy.userData.shootCooldown) {
            enemy.userData.lastShot = currentTime;
            const bullet = new THREE.Mesh(new THREE.SphereGeometry(0.08,4,4), new THREE.MeshBasicMaterial({ color:0xff4444 }));
            bullet.position.copy(enemy.position.clone().add(new THREE.Vector3(0,1,0)));
            bullet.userData = { velocity:dir.clone().multiplyScalar(12), life:3, age:0 };
            scene.add(bullet); enemyBullets.push(bullet);
        }
        enemy.userData.targetDir.lerp(dir, 0.05).normalize();
        const move = enemy.userData.targetDir.clone().multiplyScalar(enemy.userData.speed*delta);
        const testBox = new THREE.Box3().setFromObject(enemy).clone().translate(move);
        let blocked = false;
        for (const w of walls) if (testBox.intersectsBox(new THREE.Box3().setFromObject(w))) { blocked=true; break; }
        for (const other of enemies) { if (other===enemy) continue; if (testBox.intersectsBox(new THREE.Box3().setFromObject(other))) { blocked=true; break; } }
        if (!blocked) enemy.position.copy(enemy.position.clone().add(move));
        enemy.lookAt(new THREE.Vector3(camera.position.x, enemy.position.y, camera.position.z));
    }

    // Вражеские пули
    for (let i=enemyBullets.length-1;i>=0;i--) {
        const b = enemyBullets[i];
        b.userData.age += delta;
        if (b.userData.age > b.userData.life) { scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); continue; }
        b.position.x += b.userData.velocity.x*delta; b.position.y += b.userData.velocity.y*delta; b.position.z += b.userData.velocity.z*delta;
        if (b.position.distanceTo(camera.position) < 0.6) { damagePlayer(10); scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1); }
        else if (new THREE.Raycaster(b.position, b.userData.velocity.clone().normalize(), 0.3).intersectObjects(walls,false).length) {
            scene.remove(b); b.geometry.dispose(); b.material.dispose(); enemyBullets.splice(i,1);
        }
    }

    // Гранаты игрока
    for (let i=liveGrenades.length-1;i>=0;i--) {
        const g = liveGrenades[i];
        g.userData.age += delta;
        if (g.userData.age >= g.userData.life) {
            explode(g.position, 8, 5);
            scene.remove(g); liveGrenades.splice(i,1);
            continue;
        }
        g.position.x += g.userData.velocity.x*delta;
        g.position.y += g.userData.velocity.y*delta;
        g.position.z += g.userData.velocity.z*delta;
        g.userData.velocity.y -= 15*delta;
        if (g.position.y < 0.1) { g.position.y = 0.1; g.userData.velocity.y*=-0.5; }
    }

    // Предметы
    for (let i=droppedItems.length-1;i>=0;i--) {
        const it = droppedItems[i];
        it.userData.age += delta;
        it.rotation.y += 2*delta;
        if (it.userData.age > it.userData.life) { scene.remove(it); it.geometry.dispose(); it.material.dispose(); droppedItems.splice(i,1); }
    }
    // Подсказка
    let near = false;
    const ppos = camera.position;
    for (const it of droppedItems) if (ppos.distanceTo(it.position)<1.8) { near=true; break; }
    pickupHint.style.display = near ? 'block' : 'none';
    if (near) pickupHint.textContent = 'Нажми E, чтобы подобрать';

    // Частицы
    for (let i=particles.length-1;i>=0;i--) {
        const p = particles[i];
        p.userData.age += delta;
        if (p.userData.age >= p.userData.life) { scene.remove(p); p.geometry.dispose(); p.material.dispose(); particles.splice(i,1); continue; }
        p.position.x += p.userData.velocity.x*delta; p.position.y += p.userData.velocity.y*delta; p.position.z += p.userData.velocity.z*delta;
        p.userData.velocity.y -= 9.8*delta;
        const r = 1 - p.userData.age/p.userData.life; p.scale.setScalar(r); p.material.opacity = r; p.material.transparent = true;
    }

    for (const portal of portals) { portal.rotation.z += 0.8*delta; if (portal.children[1]) portal.children[1].rotation.z -= 0.5*delta; }
    renderer.render(scene, camera);
}

// Старт
window.addEventListener('contextmenu', e=>e.preventDefault());
window.addEventListener('resize', ()=>{ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); });
for (let i=0;i<8;i++) spawnWall();
lastWallSpawn = performance.now()/1000;
lastHealthSpawn = performance.now()/1000;
updateAmmoDisplay();
startWave();
requestAnimationFrame(animate);