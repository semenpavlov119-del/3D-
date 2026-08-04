// ==================== Локализация (RU / EN) ====================
const I18N = {
    ru: {
        page_title: '3D FPS – Арена',
        menu_title: 'АРЕНА',
        lang_label: 'Язык',
        diff_label: 'Сложность',
        diff_easy: 'Лёгкий',
        diff_medium: 'Средний',
        diff_hard: 'Сложный',
        headshot_mode_label: 'Спец-режим',
        headshot_mode_btn: '🎯 Только хэдшоты',
        headshot_mode_hint: 'Хардкор: только пистолет, боссы не спавнятся, засчитываются только хэдшоты',
        btn_solo: 'Одиночная игра',
        btn_campaign: 'Кампания',
        btn_tutorial: 'Обучение',
        btn_pvp: 'Дуэль (1x1)',
        btn_network: 'Сетевая игра',
        btn_basedefense: 'Защита базы',
        btn_controls: 'Управление',
        network_title: 'СЕТЕВАЯ ИГРА',
        btn_net_host: 'Создать комнату',
        btn_net_join: 'Подключиться',
        net_room_code_label: 'Код комнаты (отправь другу):',
        net_waiting: 'Ждём подключения соперника...',
        net_no_module: 'Не удалось загрузить сетевой модуль. Проверь подключение к интернету.',
        net_enter_code: 'Введи код комнаты',
        net_creating_room: 'Создаём комнату...',
        net_room_created: 'Комната создана. Жди подключения соперника...',
        net_connecting: 'Подключаемся...',
        net_error: (e) => `Ошибка сети: ${e}`,
        net_conn_error: (e) => `Ошибка соединения: ${e}`,
        net_opponent_connected: 'Соперник подключён! Запускаем игру...',
        net_code_copied: 'Код скопирован!',
        net_opponent_left: 'Соперник отключился',
        net_you_died_respawn: 'Вы погибли! Возрождение через 2 сек...',
        net_you_destroyed_opponent: 'Вы уничтожили соперника!',
        net_you_win_duel: 'Победа! Вы выиграли дуэль!',
        map_select_title: 'ВЫБОР КАРТЫ',
        map_forest: 'Лес',
        map_ruins: 'Руины',
        map_castle: 'Замок',
        map_city: 'Город',
        map_roofs: 'Крыши города',
        map_powerplant: 'Электростанция',
        map_factory: 'Завод',
        map_canyon: 'Каньон',
        map_announce: (name) => `Карта: ${name}`,
        fall_death_title: 'ВЫ УПАЛИ С КРЫШИ',
        pause_title: 'ПАУЗА',
        btn_resume: 'Продолжить',
        btn_quit: 'Главное меню',
        controls_title: 'УПРАВЛЕНИЕ',
        controls_p1_title: 'Игрок 1 (WASD + мышь)',
        controls_p1_body: 'WASD – движение<br>Shift – бег<br>Мышь – обзор<br>ЛКМ – стрельба<br>R – перезарядка<br>G – граната<br>X – авиаудар<br>1–7 – оружие<br>E – подобрать<br>Пробел – прыжок<br>Ctrl – присед<br>Esc – пауза',
        controls_p2_title: 'Игрок 2 (клавиатура)',
        controls_p2_body: 'Стрелки – движение<br>NumPad 0 – стрельба<br>NumPad Enter – перезарядка<br>NumPad + – граната<br>NumPad / – авиаудар<br>NumPad 1–7 – оружие<br>NumPad - – подобрать<br>NumPad . – прыжок<br>Правый Ctrl – присед<br>NumPad 4/6 – поворот<br>NumPad 8/5 – вверх/вниз',
        btn_back: 'Назад',
        btn_restart: 'Начать заново',
        label_health: '❤️ Здоровье',
        label_wave: '🌊 Волна',
        label_enemies: '👾 Врагов',
        label_base: '🏰 База',
        label_weapon: '🔫 Оружие',
        label_ammo: '🔫 Патроны',
        label_grenades: '💣 Гранаты',
        label_strikes: '🎯 Авиаудары',
        label_kills: '💀 Убийств',
        label_detector: '🔍 Детектор',
        hud2_player: 'ИГРОК 2 ❤️',
        pickup_hint1: 'Нажми E, чтобы подобрать',
        pickup_hint2: 'Нажми NumPad-, чтобы подобрать',
        minimap_label: 'Мини-карта с расположением врагов',
        detector_active: 'Активен',
        death_title_player: 'ВЫ ПОГИБЛИ',
        death_title_base: 'БАЗА УНИЧТОЖЕНА',
        death_kills: (n) => `Убийств: ${n}`,
        wave_cleared: (n) => `Волна ${n} пройдена!`,
        next_wave_in: (s) => `Следующая волна через ${s}...`,
        player_killed: (k, v) => `Игрок ${k} убил Игрока ${v}!`,
        player_won: (k) => `Победил Игрок ${k}!`,
        campaign_complete: 'Кампания пройдена!',
        campaign_survive_done: 'Выживание завершено!',
        campaign_mission_line: (num, name) => `Миссия ${num}: ${name}`,
        campaign_unavailable: 'Кампания недоступна: файл level.json отсутствует или повреждён',
        tutorial_welcome: 'Добро пожаловать в обучение!',
        tutorial_step0: 'Двигайтесь с помощью WASD. Посмотрите вокруг мышью.',
        tutorial_step1: 'Нажмите ЛКМ, чтобы выстрелить из пистолета.',
        tutorial_step2: 'Нажмите E, чтобы подобрать аптечку (она перед вами).',
        tutorial_step3: 'Отлично! Теперь вы готовы к бою. Нажмите Esc, чтобы выйти в меню.',
        ammo_charges: (n) => `Заряды: ${n}`,
        weapons: {
            pistol: 'Пистолет', shotgun: 'Дробовик', rifle: 'Автомат', lmg: 'Пулемёт',
            sniper: 'Снайперская', plasma: 'Плазма', rocket: 'Ракетница', designator: 'Целеуказатель',
            flamethrower: 'Огнемёт', plasmagun: 'Плазмаган', minigun: 'Миниган', railgun: 'Рельсотрон'
        },
        missions: [
            { name: 'Миссия 1: Зачистка', description: 'Убей 10 врагов' },
            { name: 'Миссия 2: Выживание', description: 'Продержись 60 секунд' },
            { name: 'Миссия 3: Снайперы', description: 'Уничтожь 3 снайперов' },
            { name: 'Миссия 4: Босс', description: 'Убей босса' },
            { name: 'Миссия 5: Финал', description: 'Уничтожь 20 врагов' }
        ],
        err_json_root: 'корень JSON должен быть объектом',
        err_player_spawn: 'не задана точка playerSpawn',
        err_enemy_spawns: 'нужна хотя бы одна точка enemySpawns',
        err_walls_array: 'поле walls должно быть массивом',
        err_enemy_coords: 'координаты enemySpawns должны быть числами',
        err_wall_fields: 'у каждой стены нужны числовые x, z, width, depth и height',
        err_http_notfound: (status) => `HTTP ${status}: файл не найден`
    },
    en: {
        page_title: '3D FPS – Arena',
        menu_title: 'ARENA',
        lang_label: 'Language',
        diff_label: 'Difficulty',
        diff_easy: 'Easy',
        diff_medium: 'Medium',
        diff_hard: 'Hard',
        headshot_mode_label: 'Special mode',
        headshot_mode_btn: '🎯 Headshots Only',
        headshot_mode_hint: 'Hardcore: pistol only, no bosses, only headshots count',
        btn_solo: 'Solo Game',
        btn_campaign: 'Campaign',
        btn_tutorial: 'Tutorial',
        btn_pvp: 'Duel (1x1)',
        btn_network: 'Network Game',
        btn_basedefense: 'Base Defense',
        btn_controls: 'Controls',
        network_title: 'NETWORK GAME',
        btn_net_host: 'Create Room',
        btn_net_join: 'Join',
        net_room_code_label: 'Room code (send to your friend):',
        net_waiting: 'Waiting for opponent to connect...',
        net_no_module: 'Could not load the network module. Check your internet connection.',
        net_enter_code: 'Enter room code',
        net_creating_room: 'Creating room...',
        net_room_created: 'Room created. Waiting for opponent...',
        net_connecting: 'Connecting...',
        net_error: (e) => `Network error: ${e}`,
        net_conn_error: (e) => `Connection error: ${e}`,
        net_opponent_connected: 'Opponent connected! Starting game...',
        net_code_copied: 'Code copied!',
        net_opponent_left: 'Opponent disconnected',
        net_you_died_respawn: 'You died! Respawning in 2 sec...',
        net_you_destroyed_opponent: 'You destroyed your opponent!',
        net_you_win_duel: 'Victory! You won the duel!',
        map_select_title: 'SELECT MAP',
        map_forest: 'Forest',
        map_ruins: 'Ruins',
        map_castle: 'Castle',
        map_city: 'City',
        map_roofs: 'City Rooftops',
        map_powerplant: 'Power Plant',
        map_factory: 'Factory',
        map_canyon: 'Canyon',
        map_announce: (name) => `Map: ${name}`,
        fall_death_title: 'YOU FELL OFF THE ROOF',
        pause_title: 'PAUSED',
        btn_resume: 'Resume',
        btn_quit: 'Main Menu',
        controls_title: 'CONTROLS',
        controls_p1_title: 'Player 1 (WASD + mouse)',
        controls_p1_body: 'WASD – move<br>Shift – sprint<br>Mouse – look<br>LMB – shoot<br>R – reload<br>G – grenade<br>X – airstrike<br>1–7 – weapons<br>E – pick up<br>Space – jump<br>Ctrl – crouch<br>Esc – pause',
        controls_p2_title: 'Player 2 (keyboard)',
        controls_p2_body: 'Arrows – move<br>NumPad 0 – shoot<br>NumPad Enter – reload<br>NumPad + – grenade<br>NumPad / – airstrike<br>NumPad 1–7 – weapons<br>NumPad - – pick up<br>NumPad . – jump<br>Right Ctrl – crouch<br>NumPad 4/6 – turn<br>NumPad 8/5 – up/down',
        btn_back: 'Back',
        btn_restart: 'Restart',
        label_health: '❤️ Health',
        label_wave: '🌊 Wave',
        label_enemies: '👾 Enemies',
        label_base: '🏰 Base',
        label_weapon: '🔫 Weapon',
        label_ammo: '🔫 Ammo',
        label_grenades: '💣 Grenades',
        label_strikes: '🎯 Airstrikes',
        label_kills: '💀 Kills',
        label_detector: '🔍 Detector',
        hud2_player: 'PLAYER 2 ❤️',
        pickup_hint1: 'Press E to pick up',
        pickup_hint2: 'Press NumPad- to pick up',
        minimap_label: 'Minimap showing enemy positions',
        detector_active: 'Active',
        death_title_player: 'YOU DIED',
        death_title_base: 'BASE DESTROYED',
        death_kills: (n) => `Kills: ${n}`,
        wave_cleared: (n) => `Wave ${n} cleared!`,
        next_wave_in: (s) => `Next wave in ${s}...`,
        player_killed: (k, v) => `Player ${k} killed Player ${v}!`,
        player_won: (k) => `Player ${k} wins!`,
        campaign_complete: 'Campaign complete!',
        campaign_survive_done: 'Survival complete!',
        campaign_mission_line: (num, name) => `Mission ${num}: ${name}`,
        campaign_unavailable: 'Campaign unavailable: level.json file is missing or corrupted',
        tutorial_welcome: 'Welcome to the tutorial!',
        tutorial_step0: 'Move with WASD. Look around with the mouse.',
        tutorial_step1: 'Press LMB to fire the pistol.',
        tutorial_step2: 'Press E to pick up the medkit (it\'s in front of you).',
        tutorial_step3: 'Great! You\'re ready for combat now. Press Esc to return to the menu.',
        ammo_charges: (n) => `Charges: ${n}`,
        weapons: {
            pistol: 'Pistol', shotgun: 'Shotgun', rifle: 'Rifle', lmg: 'LMG',
            sniper: 'Sniper Rifle', plasma: 'Plasma', rocket: 'Rocket Launcher', designator: 'Designator',
            flamethrower: 'Flamethrower', plasmagun: 'Plasma Gun', minigun: 'Minigun', railgun: 'Railgun'
        },
        missions: [
            { name: 'Mission 1: Cleanup', description: 'Kill 10 enemies' },
            { name: 'Mission 2: Survival', description: 'Survive 60 seconds' },
            { name: 'Mission 3: Snipers', description: 'Destroy 3 snipers' },
            { name: 'Mission 4: Boss', description: 'Kill the boss' },
            { name: 'Mission 5: Finale', description: 'Destroy 20 enemies' }
        ],
        err_json_root: 'the JSON root must be an object',
        err_player_spawn: 'playerSpawn point is missing',
        err_enemy_spawns: 'at least one enemySpawns point is required',
        err_walls_array: 'the walls field must be an array',
        err_enemy_coords: 'enemySpawns coordinates must be numbers',
        err_wall_fields: 'each wall needs numeric x, z, width, depth and height',
        err_http_notfound: (status) => `HTTP ${status}: file not found`
    }
};
let currentLang = 'ru';
// Возвращает переведённую строку по ключу (поддерживает вложенные ключи через точку,
// например "weapons.pistol"), и вызывает значение как функцию, если оно является функцией.
function t(key, ...args) {
    const parts = key.split('.');
    let node = I18N[currentLang];
    for (const p of parts) { if (node == null) break; node = node[p]; }
    if (node === undefined) { node = I18N.ru; for (const p of parts) { if (node == null) break; node = node[p]; } }
    return typeof node === 'function' ? node(...args) : node;
}
// Применяет текущий язык ко всей статичной разметке (меню, HUD-подписи, экраны) и,
// если игра уже идёт, обновляет зависящие от языка элементы HUD.
function applyLanguage() {
    document.title = t('page_title');
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = t(el.getAttribute('data-i18n'));
        if (typeof val === 'string' && val.indexOf('<') !== -1) el.innerHTML = val;
        else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    if (typeof player1 !== 'undefined' && player1) player1.updateHUD();
    if (typeof player2 !== 'undefined' && player2) player2.updateHUD();
}

// ==================== DOM ====================
const getEl = (id) => document.getElementById(id);
const mainMenu = getEl('main-menu');
const pauseMenu = getEl('pause-menu');
const btnSolo = getEl('btn-solo');
const btnCampaign = getEl('btn-campaign');
const btnTutorial = getEl('btn-tutorial');
const btnPvp = getEl('btn-pvp');
const btnBaseDefense = getEl('btn-basedefense');
const btnNetwork = getEl('btn-network');
const networkScreen = getEl('network-screen');
const networkStatus = getEl('network-status');
const btnNetHost = getEl('btn-net-host');
const netHostInfo = getEl('net-host-info');
const netRoomCode = getEl('net-room-code');
const netJoinInput = getEl('net-join-input');
const btnNetJoin = getEl('btn-net-join');
const btnNetworkBack = getEl('btn-network-back');
const mapSelectScreen = getEl('map-select-screen');
const btnMapBack = getEl('btn-map-back');
const mapButtons = document.querySelectorAll('.map-btn');
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
const bgMusic = getEl('bg-music');
const menuMusic = getEl('menu-music');
console.log(typeof sinon);

// level.json, если он присутствует рядом с игрой, может переопределить геометрию
// арены и точки спавна для режима "Кампания". Но он необязателен: если файла нет
// или он повреждён, используется встроенный запасной уровень ниже, и все режимы
// (включая "Кампанию") работают без каких-либо внешних файлов.
const DEFAULT_LEVEL_DATA = {
    playerSpawn: { x: 0, z: 24, rotation: Math.PI },
    enemySpawns: [
        { x: 0, z: -30 }, { x: 28, z: -18 }, { x: -28, z: -18 },
        { x: 34, z: 10 }, { x: -34, z: 10 }, { x: 20, z: 32 },
        { x: -20, z: 32 }, { x: 0, z: -42 }, { x: 40, z: -34 }, { x: -40, z: -34 }
    ],
    walls: [
        { x: 10, z: -6, width: 3, height: 2.6, depth: 0.4, rotation: 0 },
        { x: -10, z: -6, width: 3, height: 2.6, depth: 0.4, rotation: 0 },
        { x: 0, z: -18, width: 6, height: 2.6, depth: 0.4, rotation: Math.PI / 2 },
        { x: 18, z: 4, width: 4, height: 2.6, depth: 0.4, rotation: 0.5 },
        { x: -18, z: 4, width: 4, height: 2.6, depth: 0.4, rotation: -0.5 },
        { x: 24, z: -24, width: 3.5, height: 2.6, depth: 0.4, rotation: 0.9 },
        { x: -24, z: -24, width: 3.5, height: 2.6, depth: 0.4, rotation: -0.9 },
        { x: 0, z: 14, width: 5, height: 2.6, depth: 0.4, rotation: 0 }
    ]
};
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
const minimapCanvas = getEl('minimap');
const minimapContext = minimapCanvas ? minimapCanvas.getContext('2d') : null;

// ==================== Звук ====================
let audioCtx = null;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
// Фоновая музыка: играет во время любого игрового режима, останавливается при смерти/выходе в меню.
function playGameMusic() {
    stopMenuMusic(); // музыка меню не должна звучать поверх игровой
    if (!bgMusic) return;
    bgMusic.currentTime = 0;
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {}); // браузер может заблокировать autoplay до первого клика — это ловим тихо
}
function stopGameMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    bgMusic.currentTime = 0;
}
// Музыка главного меню: играет, пока открыт main-menu, останавливается при старте любого режима.
function playMenuMusic() {
    if (!menuMusic) return;
    menuMusic.volume = 0.4;
    menuMusic.play().catch(() => {}); // браузер может заблокировать autoplay до первого клика — доиграется через unlockMenuMusic()
}
function stopMenuMusic() {
    if (!menuMusic) return;
    menuMusic.pause();
    menuMusic.currentTime = 0;
}
// Из-за политики автовоспроизведения браузеров музыка меню может не запуститься сразу при загрузке страницы —
// доигрываем её по первому клику/нажатию клавиши, если всё ещё находимся в меню.
function unlockMenuMusic() {
    if (gameState === 'menu' && menuMusic && menuMusic.paused) menuMusic.play().catch(() => {});
}
document.addEventListener('click', unlockMenuMusic);
document.addEventListener('keydown', unlockMenuMusic);
// В отличие от stopGameMusic() эти две функции не сбрасывают позицию трека —
// они используются для паузы (Esc, потеря фокуса вкладки), после которой
// музыка должна продолжиться с того же места, а не начаться заново.
function pauseGameMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
}
function resumeGameMusic() {
    if (!bgMusic) return;
    bgMusic.play().catch(() => {});
}
function playTone(freq, dur, type='square', vol=0.3, delay=0) {
    if (!audioCtx) return;
    const startTime = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(vol, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(startTime); osc.stop(startTime + dur);
}
function crateAlarm() { playTone(800, 0.3, 'sawtooth', 0.5); }
function explosionSound() { playTone(100, 0.5, 'triangle', 0.8); }
function shieldClangSound() { playTone(180, 0.12, 'square', 0.4); }
function reloadSound(duration) {
    // Три коротких механических щелчка: извлечение магазина, установка и затвор.
    playTone(180, 0.08, 'square', 0.22);
    playTone(120, 0.1, 'triangle', 0.25, duration * 0.45);
    playTone(520, 0.07, 'square', 0.2, Math.max(0, duration - 0.1));
}

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
const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
scene.add(ambientLight);
const sun = new THREE.DirectionalLight(0xfff5e8, 1.8);
sun.position.set(30, 40, 20);
sun.castShadow = true;
sun.shadow.mapSize.width = 2048; sun.shadow.mapSize.height = 2048;
sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 150;
sun.shadow.camera.left = -50; sun.shadow.camera.right = 50;
sun.shadow.camera.top = 50; sun.shadow.camera.bottom = -50;
sun.shadow.bias = -0.0003;
scene.add(sun);
const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x3d2b1f, 0.4);
scene.add(hemiLight);

// Пол
const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshStandardMaterial({ color: 0x3a3a4a, roughness: 0.7, metalness: 0.2 }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);
const polarGrid = new THREE.PolarGridHelper(58, 64, 48, 256, 0x444455, 0x444455);
scene.add(polarGrid);

// Границы
const boundaryWalls = [];
function createBoundary(x, z, w, d, h = 8) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: 0x556677, roughness: 0.6, metalness: 0.3 }));
    wall.position.set(x, h / 2, z);
    wall.castShadow = true; wall.receiveShadow = true;
    scene.add(wall);
    boundaryWalls.push(wall);
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

// ==================== Карты / локации ====================
// Каждая карта — это набор текстур пола, цветов освещения/тумана и процедурно
// расставленного декора. Декор чисто визуальный (не участвует в коллизиях),
// чтобы не ломать баланс существующих боевых стен `walls`.
function createGrassTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#2f5b22'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 700; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#3a6b2a' : '#254a19';
        const x = Math.random() * 256, y = Math.random() * 256;
        ctx.fillRect(x, y, 2, 5 + Math.random() * 3);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(14, 14);
    return tex;
}
function createRubbleTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#8a7a63'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 320; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#6f6250' : '#a4927a';
        const x = Math.random() * 256, y = Math.random() * 256, s = 4 + Math.random() * 10;
        ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(11, 11);
    return tex;
}
function createStoneFloorTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#55565c'; ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = '#3a3b40'; ctx.lineWidth = 3;
    for (let i = 0; i <= 256; i += 32) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(11, 11);
    return tex;
}
function createAsphaltTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#2b2b2e'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 500; i++) {
        ctx.fillStyle = 'rgba(255,255,255,0.04)';
        const x = Math.random() * 256, y = Math.random() * 256;
        ctx.fillRect(x, y, 2, 2);
    }
    ctx.strokeStyle = '#e0c341'; ctx.lineWidth = 4; ctx.setLineDash([20, 16]);
    ctx.beginPath(); ctx.moveTo(128, 0); ctx.lineTo(128, 256); ctx.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(9, 9);
    return tex;
}
function createRoofTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#4a4d4f'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 900; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#424547' : '#57595c';
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }
    // швы рубероида
    ctx.strokeStyle = '#333537'; ctx.lineWidth = 2;
    for (let i = 0; i <= 256; i += 26) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(11, 11);
    return tex;
}
function createMetalGrateTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#2e3234'; ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = '#54595c'; ctx.lineWidth = 4;
    for (let i = 0; i <= 256; i += 18) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
    }
    ctx.strokeStyle = '#1c1f21'; ctx.lineWidth = 2; ctx.setLineDash([10, 6]);
    ctx.beginPath(); ctx.moveTo(0, 128); ctx.lineTo(256, 128); ctx.stroke();
    ctx.setLineDash([]);
    // жёлто-чёрная разметка опасной зоны
    ctx.strokeStyle = '#ddb400'; ctx.lineWidth = 6; ctx.setLineDash([16, 12]);
    ctx.beginPath(); ctx.moveTo(0, 12); ctx.lineTo(256, 12); ctx.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(11, 11);
    return tex;
}
function createFactoryFloorTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#3c3b38'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 260; i++) {
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 3 + Math.random() * 4, 3 + Math.random() * 4);
    }
    ctx.fillStyle = '#c99a2e';
    for (let i = 0; i < 6; i++) {
        const y = 20 + i * 40;
        ctx.fillRect(0, y, 256, 6);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(10, 10);
    return tex;
}
function createCanyonTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#a5613a'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 600; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#8f4f2c' : '#c47a49';
        const x = Math.random() * 256, y = Math.random() * 256, s = 3 + Math.random() * 8;
        ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(70,35,15,0.35)'; ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * 256, 0);
        ctx.lineTo(Math.random() * 256, 256);
        ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(12, 12);
    return tex;
}
const mapFloorTextures = {
    forest: createGrassTexture(),
    ruins: createRubbleTexture(),
    castle: createStoneFloorTexture(),
    city: createAsphaltTexture(),
    roofs: createRoofTexture(),
    powerplant: createMetalGrateTexture(),
    factory: createFactoryFloorTexture(),
    canyon: createCanyonTexture()
};

let mapDecorations = [];
let currentMapId = 'default';
let lastDeathWasFall = false; // отмечает, что последняя смерть произошла из-за падения с крыши

function clearMapDecorations() {
    mapDecorations.forEach(obj => {
        scene.remove(obj);
        if (obj.traverse) obj.traverse(o => { if (o.isMesh) { o.geometry.dispose(); o.material.dispose(); } });
    });
    mapDecorations = [];
}

function decorateForest() {
    const objs = [];
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3524, roughness: 0.9 });
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x2e5c22, roughness: 0.85 });
    for (let i = 0; i < 26; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 14 + Math.random() * 36;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 9) continue;
        const trunkH = 2.6 + Math.random() * 1.2;
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.32, trunkH, 8), trunkMat);
        trunk.position.set(x, trunkH / 2, z); trunk.castShadow = trunk.receiveShadow = true;
        const leaves = new THREE.Mesh(new THREE.ConeGeometry(1.5 + Math.random() * 0.7, 3.2 + Math.random() * 1.2, 8), leavesMat);
        leaves.position.set(x, trunkH + 1.6, z); leaves.castShadow = true;
        scene.add(trunk); scene.add(leaves);
        objs.push(trunk, leaves);
    }
    return objs;
}

function decorateRuins() {
    const objs = [];
    const colMat = new THREE.MeshStandardMaterial({ color: 0xb3a488, roughness: 0.9 });
    const rubbleMat = new THREE.MeshStandardMaterial({ color: 0x8a7a63, roughness: 1 });
    for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 12 + Math.random() * 38;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 9) continue;
        const h = 2 + Math.random() * 3;
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, h, 10), colMat);
        col.position.set(x, h / 2, z); col.rotation.z = Math.random() * 0.3 - 0.15;
        col.castShadow = col.receiveShadow = true;
        scene.add(col); objs.push(col);
    }
    for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 40;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const rub = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7 + Math.random() * 0.8), rubbleMat);
        rub.position.set(x, 0.5, z); rub.castShadow = rub.receiveShadow = true;
        scene.add(rub); objs.push(rub);
    }
    return objs;
}

function decorateCastle() {
    const objs = [];
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x777d82, roughness: 0.85, metalness: 0.1 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x662222, roughness: 0.7 });
    const size = 48;
    const wallSegs = [
        { x: 0, z: -size, w: size * 2, d: 2 },
        { x: 0, z: size, w: size * 2, d: 2 },
        { x: -size, z: 0, w: 2, d: size * 2 },
        { x: size, z: 0, w: 2, d: size * 2 }
    ];
    wallSegs.forEach(s => {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(s.w, 7, s.d), stoneMat);
        wall.position.set(s.x, 3.5, s.z); wall.castShadow = wall.receiveShadow = true;
        scene.add(wall); objs.push(wall);
    });
    const corners = [[-size, -size], [size, -size], [-size, size], [size, size]];
    corners.forEach(([x, z]) => {
        const tower = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.4, 10, 12), stoneMat);
        tower.position.set(x, 5, z); tower.castShadow = tower.receiveShadow = true;
        const roof = new THREE.Mesh(new THREE.ConeGeometry(3.6, 4, 12), roofMat);
        roof.position.set(x, 12, z);
        scene.add(tower); scene.add(roof);
        objs.push(tower, roof);
    });
    return objs;
}

function decorateCity() {
    const objs = [];
    const buildingColors = [0x3a4a63, 0x2f3d54, 0x445068, 0x35404f];
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6 });
    const lampMat = new THREE.MeshStandardMaterial({ color: 0xffdd88, emissive: 0xffaa33, emissiveIntensity: 0.8 });
    for (let i = 0; i < 18; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 16 + Math.random() * 34;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 9) continue;
        const w = 4 + Math.random() * 4, d = 4 + Math.random() * 4, h = 6 + Math.random() * 18;
        const mat = new THREE.MeshStandardMaterial({ color: buildingColors[Math.floor(Math.random() * buildingColors.length)], roughness: 0.6, metalness: 0.2 });
        const building = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        building.position.set(x, h / 2, z); building.castShadow = building.receiveShadow = true;
        scene.add(building); objs.push(building);
    }
    for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 40;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 4, 6), poleMat);
        pole.position.set(x, 2, z); pole.castShadow = true;
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), lampMat);
        lamp.position.set(x, 4.1, z);
        scene.add(pole); scene.add(lamp);
        objs.push(pole, lamp);
    }
    return objs;
}

// Радиус безопасной крыши: за этими пределами по X/Z начинается пустота (обрыв).
const ROOF_EDGE = 53;
// Мировой предел для карты «Крыши города» — за краем крыши игрок может пройти
// ещё немного по воздуху, прежде чем сорваться в пропасть между домами.
const ROOF_VOID_LIMIT = 62;
// Y-координата, ниже которой падение с крыши считается смертельным.
const ROOF_DEATH_Y = -12;

function decorateRoofs() {
    const objs = [];
    const acMat = new THREE.MeshStandardMaterial({ color: 0x666a6d, roughness: 0.7, metalness: 0.3 });
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x554433, roughness: 0.6, metalness: 0.4 });
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x3d3f42, roughness: 0.8 });
    const hazardMat = new THREE.MeshStandardMaterial({ color: 0xddb400, roughness: 0.6, emissive: 0x332900, emissiveIntensity: 0.3 });
    const skylineMat = [0x232936, 0x1c212c, 0x2a3140].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));

    // Кондиционеры и вентиляционные короба, разбросанные по крыше.
    for (let i = 0; i < 14; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 6 + Math.random() * 38;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 6) continue;
        const w = 1.4 + Math.random() * 1.2, h = 0.9 + Math.random() * 0.6, d = 1.2 + Math.random() * 1;
        const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), acMat);
        box.position.set(x, h / 2, z); box.rotation.y = Math.random() * Math.PI;
        box.castShadow = box.receiveShadow = true;
        scene.add(box); objs.push(box);
    }
    // Трубы вентиляции.
    for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 8 + Math.random() * 40;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const h = 1.5 + Math.random() * 2;
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, h, 10), pipeMat);
        pipe.position.set(x, h / 2, z); pipe.castShadow = true;
        scene.add(pipe); objs.push(pipe);
    }
    // Водонапорная башня — заметный ориентир в центре крыши.
    {
        const legMat = pipeMat;
        const legOffsets = [[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]];
        legOffsets.forEach(([lx, lz]) => {
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4, 6), legMat);
            leg.position.set(lx, 2, lz); leg.castShadow = true;
            scene.add(leg); objs.push(leg);
        });
        const tank = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 3, 16), towerMat);
        tank.position.set(0, 5.5, 0); tank.castShadow = tank.receiveShadow = true;
        const roof = new THREE.Mesh(new THREE.ConeGeometry(2.4, 1.4, 16), towerMat);
        roof.position.set(0, 7.7, 0);
        scene.add(tank); scene.add(roof); objs.push(tank, roof);
    }
    // Предупреждающая жёлто-чёрная разметка вдоль края крыши — «не подходи ближе».
    for (let i = 0; i < 40; i++) {
        const a = (i / 40) * Math.PI * 2;
        const x = Math.cos(a) * (ROOF_EDGE - 1.2), z = Math.sin(a) * (ROOF_EDGE - 1.2);
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 0.5), hazardMat);
        stripe.position.set(x, 0.04, z); stripe.rotation.y = a;
        scene.add(stripe); objs.push(stripe);
    }
    // Низкий парапет по периметру крыши (чисто декоративный, не блокирует проход —
    // именно поэтому можно перешагнуть край и упасть).
    const parapetMat = new THREE.MeshStandardMaterial({ color: 0x5a5d60, roughness: 0.85 });
    for (let i = 0; i < 64; i++) {
        const a = (i / 64) * Math.PI * 2;
        const x = Math.cos(a) * ROOF_EDGE, z = Math.sin(a) * ROOF_EDGE;
        const seg = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.5, 0.3), parapetMat);
        seg.position.set(x, 0.25, z); seg.rotation.y = a;
        scene.add(seg); objs.push(seg);
    }
    // Силуэты соседних высоток, видимые за пропастью — усиливают ощущение высоты.
    for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = ROOF_VOID_LIMIT + 6 + Math.random() * 30;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const w = 6 + Math.random() * 8, h = 14 + Math.random() * 40, d = 6 + Math.random() * 8;
        const mat = skylineMat[Math.floor(Math.random() * skylineMat.length)];
        const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        b.position.set(x, h / 2 - 4, z);
        scene.add(b); objs.push(b);
    }
    // Тёмная пропасть между крышами — видна, когда смотришь за парапет вниз.
    const voidFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(400, 400),
        new THREE.MeshStandardMaterial({ color: 0x05070a, roughness: 1 })
    );
    voidFloor.rotation.x = -Math.PI / 2;
    voidFloor.position.y = -40;
    scene.add(voidFloor); objs.push(voidFloor);
    return objs;
}

function decoratePowerplant() {
    const objs = [];
    const tankMat = new THREE.MeshStandardMaterial({ color: 0x8a8f93, roughness: 0.5, metalness: 0.6 });
    const coilMat = new THREE.MeshStandardMaterial({ color: 0x2255aa, roughness: 0.4, metalness: 0.5, emissive: 0x1144cc, emissiveIntensity: 0.35 });
    const hazardMat = new THREE.MeshStandardMaterial({ color: 0xe0b400, roughness: 0.6 });
    const pylonMat = new THREE.MeshStandardMaterial({ color: 0x33383c, roughness: 0.7, metalness: 0.4 });
    // Большие цилиндрические резервуары / турбины.
    for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 14 + Math.random() * 32;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 8) continue;
        const r = 2 + Math.random() * 1.6, h = 5 + Math.random() * 5;
        const tank = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 16), tankMat);
        tank.position.set(x, h / 2, z); tank.castShadow = tank.receiveShadow = true;
        scene.add(tank); objs.push(tank);
    }
    // Трансформаторные катушки с электрическим свечением.
    for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 36;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const coil = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.28, 10, 20), coilMat);
        coil.position.set(x, 1.6, z); coil.rotation.x = Math.PI / 2;
        scene.add(coil); objs.push(coil);
    }
    // Опоры ЛЭП по краям.
    const pylonPositions = [[-46,-46],[46,-46],[-46,46],[46,46],[0,-48],[0,48]];
    pylonPositions.forEach(([x,z]) => {
        const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.9, 14, 8), pylonMat);
        pylon.position.set(x, 7, z); pylon.castShadow = true;
        const crossbar = new THREE.Mesh(new THREE.BoxGeometry(6, 0.3, 0.3), pylonMat);
        crossbar.position.set(x, 12.5, z);
        scene.add(pylon); scene.add(crossbar);
        objs.push(pylon, crossbar);
    });
    // Опасная жёлто-чёрная разметка и ограждение вокруг оборудования.
    for (let i = 0; i < 24; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 9 + Math.random() * 38;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const sign = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.1), hazardMat);
        sign.position.set(x, 0.9, z); sign.rotation.y = Math.random() * Math.PI;
        scene.add(sign); objs.push(sign);
    }
    return objs;
}

function decorateFactory() {
    const objs = [];
    const machineMat = new THREE.MeshStandardMaterial({ color: 0x4d4a45, roughness: 0.6, metalness: 0.4 });
    const beltMat = new THREE.MeshStandardMaterial({ color: 0x22201d, roughness: 0.8 });
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x7a5a2e, roughness: 0.5, metalness: 0.5 });
    const chimneyMat = new THREE.MeshStandardMaterial({ color: 0x5c554a, roughness: 0.8 });
    const crateMat = new THREE.MeshStandardMaterial({ color: 0xa06a2c, roughness: 0.85 });
    // Крупные блоки станков.
    for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 12 + Math.random() * 34;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 8) continue;
        const w = 2 + Math.random() * 3, h = 1.6 + Math.random() * 2.6, d = 2 + Math.random() * 3;
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), machineMat);
        m.position.set(x, h / 2, z); m.rotation.y = Math.random() * Math.PI;
        m.castShadow = m.receiveShadow = true;
        scene.add(m); objs.push(m);
    }
    // Конвейерные линии.
    for (let i = 0; i < 4; i++) {
        const z = -30 + i * 20;
        const belt = new THREE.Mesh(new THREE.BoxGeometry(30, 0.6, 2), beltMat);
        belt.position.set(-10 + (i % 2) * 6, 0.3, z);
        belt.rotation.y = (i % 2) * 0.3;
        scene.add(belt); objs.push(belt);
    }
    // Трубы над цехом.
    for (let i = 0; i < 6; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 14 + Math.random() * 30;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 6 + Math.random() * 4, 10), pipeMat);
        pipe.rotation.z = Math.PI / 2;
        pipe.position.set(x, 4.5, z);
        scene.add(pipe); objs.push(pipe);
    }
    // Дымовые трубы завода на горизонте.
    const chimneyPositions = [[-48,-48],[50,-40],[-42,46]];
    chimneyPositions.forEach(([x,z]) => {
        const h = 18 + Math.random() * 8;
        const chimney = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.8, h, 12), chimneyMat);
        chimney.position.set(x, h / 2, z); chimney.castShadow = true;
        scene.add(chimney); objs.push(chimney);
    });
    // Штабели ящиков/паллет.
    for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 36;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const crate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), crateMat);
        crate.position.set(x, 0.6, z); crate.rotation.y = Math.random() * Math.PI;
        crate.castShadow = crate.receiveShadow = true;
        scene.add(crate); objs.push(crate);
    }
    return objs;
}

function decorateCanyon() {
    const objs = [];
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x9a5a34, roughness: 0.95 });
    const rockMat2 = new THREE.MeshStandardMaterial({ color: 0x7c4526, roughness: 0.95 });
    const cactusMat = new THREE.MeshStandardMaterial({ color: 0x3f6b3a, roughness: 0.8 });
    const plankMat = new THREE.MeshStandardMaterial({ color: 0x6b4a2c, roughness: 0.9 });
    // Скальные образования и утёсы.
    for (let i = 0; i < 18; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 12 + Math.random() * 38;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        if (Math.hypot(x, z) < 9) continue;
        const h = 3 + Math.random() * 8;
        const rock = new THREE.Mesh(new THREE.ConeGeometry(1.4 + Math.random() * 1.6, h, 6), Math.random() > 0.5 ? rockMat : rockMat2);
        rock.position.set(x, h / 2, z); rock.rotation.y = Math.random() * Math.PI;
        rock.castShadow = rock.receiveShadow = true;
        scene.add(rock); objs.push(rock);
    }
    // Каменные глыбы поменьше.
    for (let i = 0; i < 14; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 8 + Math.random() * 40;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const boulder = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8 + Math.random() * 1.2), rockMat2);
        boulder.position.set(x, 0.7, z); boulder.castShadow = boulder.receiveShadow = true;
        scene.add(boulder); objs.push(boulder);
    }
    // Редкие кактусы.
    for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 10 + Math.random() * 36;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 1.6, 8), cactusMat);
        trunk.position.set(x, 0.8, z);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.8, 8), cactusMat);
        arm.position.set(x + 0.3, 1.2, z); arm.rotation.z = Math.PI / 3;
        scene.add(trunk); scene.add(arm);
        objs.push(trunk, arm);
    }
    // Деревянный мостик через каньон — узнаваемая деталь темы.
    for (let i = -6; i <= 6; i++) {
        const plank = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 0.9), plankMat);
        plank.position.set(30, 0.3, i * 1.1);
        scene.add(plank); objs.push(plank);
    }
    // Высокие скальные стены на горизонте, обрамляющие каньон.
    for (let i = 0; i < 10; i++) {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 50 + Math.random() * 6;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const h = 16 + Math.random() * 14;
        const wall = new THREE.Mesh(new THREE.ConeGeometry(6 + Math.random() * 4, h, 7), rockMat);
        wall.position.set(x, h / 2 - 2, z);
        scene.add(wall); objs.push(wall);
    }
    return objs;
}

const MAPS = {
    default: {
        bgColor: 0x1a1a2e, fogColor: 0x1a1a2e, fogNear: 30, fogFar: 120,
        floorColor: 0x3a3a4a, floorTexture: null,
        boundaryColor: 0x556677,
        ambientColor: 0x404060, ambientIntensity: 0.6,
        sunColor: 0xfff5e8, sunIntensity: 1.8,
        hemiSky: 0x87ceeb, hemiGround: 0x3d2b1f, hemiIntensity: 0.4,
        showGrid: true, decorate: null
    },
    forest: {
        bgColor: 0x16210f, fogColor: 0x1c2c14, fogNear: 20, fogFar: 90,
        floorColor: 0xffffff, floorTexture: 'forest',
        boundaryColor: 0x3a5a28,
        ambientColor: 0x445c34, ambientIntensity: 0.65,
        sunColor: 0xfff2d0, sunIntensity: 1.6,
        hemiSky: 0x8fbf6e, hemiGround: 0x2d3a1e, hemiIntensity: 0.45,
        showGrid: false, decorate: decorateForest
    },
    ruins: {
        bgColor: 0x2a2418, fogColor: 0x3a3122, fogNear: 22, fogFar: 100,
        floorColor: 0xffffff, floorTexture: 'ruins',
        boundaryColor: 0x8a7a63,
        ambientColor: 0x6b5f47, ambientIntensity: 0.6,
        sunColor: 0xffe4b0, sunIntensity: 1.7,
        hemiSky: 0xcbb98f, hemiGround: 0x4a3f2c, hemiIntensity: 0.4,
        showGrid: false, decorate: decorateRuins
    },
    castle: {
        bgColor: 0x14151a, fogColor: 0x1f2128, fogNear: 20, fogFar: 95,
        floorColor: 0xffffff, floorTexture: 'castle',
        boundaryColor: 0x5b5e63,
        ambientColor: 0x40434a, ambientIntensity: 0.55,
        sunColor: 0xd8dfff, sunIntensity: 1.4,
        hemiSky: 0x6b7280, hemiGround: 0x24262b, hemiIntensity: 0.4,
        showGrid: false, decorate: decorateCastle
    },
    city: {
        bgColor: 0x10131c, fogColor: 0x181c26, fogNear: 22, fogFar: 100,
        floorColor: 0xffffff, floorTexture: 'city',
        boundaryColor: 0x2f3d54,
        ambientColor: 0x33415c, ambientIntensity: 0.65,
        sunColor: 0xcfe0ff, sunIntensity: 1.3,
        hemiSky: 0x3d4d68, hemiGround: 0x14161c, hemiIntensity: 0.45,
        showGrid: false, decorate: decorateCity
    },
    roofs: {
        bgColor: 0x0a0d16, fogColor: 0x11141f, fogNear: 18, fogFar: 85,
        floorColor: 0xffffff, floorTexture: 'roofs',
        boundaryColor: 0x5a5d60,
        ambientColor: 0x38405c, ambientIntensity: 0.55,
        sunColor: 0xcfe0ff, sunIntensity: 1.5,
        hemiSky: 0x27314a, hemiGround: 0x0c0e14, hemiIntensity: 0.4,
        showGrid: false, decorate: decorateRoofs,
        hideBoundary: true, fallDeath: true
    },
    powerplant: {
        bgColor: 0x14180f, fogColor: 0x1c2416, fogNear: 20, fogFar: 95,
        floorColor: 0xffffff, floorTexture: 'powerplant',
        boundaryColor: 0x33383c,
        ambientColor: 0x3c4a2e, ambientIntensity: 0.6,
        sunColor: 0xdfffcf, sunIntensity: 1.4,
        hemiSky: 0x9fd66a, hemiGround: 0x24261c, hemiIntensity: 0.4,
        showGrid: false, decorate: decoratePowerplant
    },
    factory: {
        bgColor: 0x1c1815, fogColor: 0x2a251f, fogNear: 20, fogFar: 95,
        floorColor: 0xffffff, floorTexture: 'factory',
        boundaryColor: 0x5c554a,
        ambientColor: 0x5c5142, ambientIntensity: 0.6,
        sunColor: 0xffd9a0, sunIntensity: 1.5,
        hemiSky: 0xa88f6a, hemiGround: 0x2a241c, hemiIntensity: 0.4,
        showGrid: false, decorate: decorateFactory
    },
    canyon: {
        bgColor: 0x3a2415, fogColor: 0x6b4526, fogNear: 26, fogFar: 110,
        floorColor: 0xffffff, floorTexture: 'canyon',
        boundaryColor: 0x7c4526,
        ambientColor: 0x8a5a34, ambientIntensity: 0.65,
        sunColor: 0xffdca0, sunIntensity: 1.9,
        hemiSky: 0xffb877, hemiGround: 0x5a3419, hemiIntensity: 0.45,
        showGrid: false, decorate: decorateCanyon
    }
};

// Применяет выбранную карту: тему освещения/тумана/пола и процедурный декор.
// Не трогает боевые стены (walls) — они остаются общей игровой механикой для всех карт.
function applyMap(mapId) {
    const map = MAPS[mapId] ? mapId : 'default';
    currentMapId = map;
    const cfg = MAPS[map];
    clearMapDecorations();

    scene.background = new THREE.Color(cfg.bgColor);
    scene.fog = new THREE.Fog(cfg.fogColor, cfg.fogNear, cfg.fogFar);

    floor.material.map = cfg.floorTexture ? mapFloorTextures[cfg.floorTexture] : null;
    floor.material.color.set(cfg.floorColor);
    floor.material.needsUpdate = true;

    boundaryWalls.forEach(w => { w.material.color.set(cfg.boundaryColor); w.visible = !cfg.hideBoundary; });

    ambientLight.color.set(cfg.ambientColor);
    ambientLight.intensity = cfg.ambientIntensity;
    sun.color.set(cfg.sunColor);
    sun.intensity = cfg.sunIntensity;
    hemiLight.color.set(cfg.hemiSky);
    hemiLight.groundColor.set(cfg.hemiGround);
    hemiLight.intensity = cfg.hemiIntensity;

    polarGrid.visible = !!cfg.showGrid;

    if (cfg.decorate) mapDecorations = cfg.decorate();
}

function mapDisplayName(mapId) {
    return t('map_' + (MAPS[mapId] ? mapId : 'forest'));
}

// ==================== Оружие ====================
// Поле "key" используется для получения локализованного названия через t('weapons.<key>');
// поле "name" оставлено как запасной вариант (по умолчанию — русское название).
const weapons = [
    { key: 'pistol',     name: 'Пистолет',   damage: 1, fireRate: 0.30, magSize: 12, color: 0x888888, model: 'pistol', crosshair: 'cross-pistol', tracerColor: 0xffffaa, tracerThickness: 0.015, bulletSpeed: 110 },
    { key: 'shotgun',    name: 'Дробовик',   damage: 1, fireRate: 0.70, magSize: 6,  color: 0x8B4513, model: 'shotgun', pellets:5, crosshair: 'cross-shotgun', tracerColor: 0xffaa33, tracerThickness: 0.012, bulletSpeed: 95 },
    { key: 'rifle',      name: 'Автомат',    damage: 1, fireRate: 0.10, magSize: 30, color: 0x333333, model: 'rifle', automatic: true, crosshair: 'cross-rifle', tracerColor: 0xffee66, tracerThickness: 0.02, bulletSpeed: 150 },
    { key: 'lmg',        name: 'Пулемёт',    damage: 1, fireRate: 0.07, magSize: 100,color: 0x555555, model: 'lmg', automatic: true, crosshair: 'cross-lmg', tracerColor: 0xffcc00, tracerThickness: 0.025, bulletSpeed: 150 },
    { key: 'sniper',     name: 'Снайперская',damage: 12, fireRate: 1.20, magSize: 5,  color: 0x004400, model: 'sniper', crosshair: 'cross-sniper', tracerColor: 0x77ff77, tracerThickness: 0.03, bulletSpeed: 260 },
    { key: 'plasma',     name: 'Плазма',     damage: 2, fireRate: 0.15, magSize: 20, color: 0x00ffff, model: 'plasma', automatic: true, crosshair: 'cross-plasma', tracerColor: 0x00ffff, tracerThickness: 0.05, bulletSpeed: 45 },
    { key: 'rocket',     name: 'Ракетница',  damage: 10,fireRate: 1.50, magSize: 3,  color: 0xff4400, model: 'rocket', explosive:true, crosshair: 'cross-rocket', tracerColor: 0xff5500, tracerThickness: 0.07, bulletSpeed: 24 },
    { key: 'designator', name: 'Целеуказатель', damage:0, fireRate:2.0, magSize:1, color:0xff0000, model:'designator', crosshair:'cross-designator', isDesignator:true, tracerColor: 0xff2222, tracerThickness: 0.01, bulletSpeed: 200 }
];
const powerWeapons = [
    { key: 'flamethrower', name: 'Огнемёт',    damage:1, fireRate:0.05, magSize:999, color:0xff6600, model:'flamethrower', automatic: true, duration:10, crosshair:'cross-pistol', tracerColor: 0xff8800, tracerThickness: 0.06, bulletSpeed: 60 },
    { key: 'plasmagun',    name: 'Плазмаган',  damage:3, fireRate:0.08, magSize:999, color:0xaa00ff, model:'plasma', automatic: true, duration:10, crosshair:'cross-plasma', tracerColor: 0xcc55ff, tracerThickness: 0.05, bulletSpeed: 45 },
    { key: 'minigun',      name: 'Миниган',    damage:1, fireRate:0.04, magSize:999, color:0xcccccc, model:'lmg', automatic: true, duration:10, crosshair:'cross-lmg', tracerColor: 0xffdd44, tracerThickness: 0.025, bulletSpeed: 150 },
    { key: 'railgun',      name: 'Рельсотрон', damage:15,fireRate:1.5, magSize:999, color:0x0088ff, model:'sniper', duration:10, crosshair:'cross-sniper', tracerColor: 0x55aaff, tracerThickness: 0.035, bulletSpeed: 260 }
];

// ==================== Класс игрока ====================
class Player {
    constructor(camera, gunGroup, hud, isSecond = false) {
        this.camera = camera;
        this.gunGroup = gunGroup;
        this.hud = hud;
        this.health = 100; this.maxHealth = 100; this.alive = true;
        this.weaponIndex = 0; this.mag = weapons[0].magSize; this.reserve = 200;
        this.mags = weapons.map(w => w.magSize); // боезапас в магазине для каждого оружия отдельно
        this.grenades = 3; this.designatorCharges = 1; this.kills = 0;
        this.reloading = false; this.reloadStart = 0; this.lastShot = 0; this.recoil = 0;
        this.yaw = 0; this.pitch = 0; this.velocity = new THREE.Vector3();
        this.speed = 8.0; this.jumpPower = 10; this.gravity = 18;
        this.onGround = true; this.height = 1.7; this.radius = 0.4;
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
        if (this.hud.weapon) this.hud.weapon.textContent = wp.key ? t(`weapons.${wp.key}`) : wp.name;
        if (this.hud.ammo) {
            if (wp.isDesignator) this.hud.ammo.textContent = t('ammo_charges', this.designatorCharges);
            else this.hud.ammo.textContent = `${this.mag} / ${this.reserve}`;
        }
        if (this.hud.grenades) this.hud.grenades.textContent = this.grenades;
        if (this.hud.strikes) this.hud.strikes.textContent = this.designatorCharges;
        if (this.hud.kills) this.hud.kills.textContent = this.kills;
        if (this.hud.crosshair) this.hud.crosshair.className = wp.crosshair || 'cross-default';
        if (this.hud.detector) this.hud.detector.textContent = this.detectorActive ? t('detector_active') : '0';
    }

    switchWeapon(index) {
        if (typeof headshotOnlyMode !== 'undefined' && headshotOnlyMode && this === player1) return; // только пистолет в этом режиме
        if (this.powerWeaponIndex >= 0) return;
        if (index === this.weaponIndex || index < 0 || index >= weapons.length) return;
        this.mags[this.weaponIndex] = this.mag; // запоминаем оставшиеся патроны текущего оружия
        this.weaponIndex = index;
        this.mag = this.mags[index]; // восстанавливаем патроны, оставшиеся у выбранного оружия
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
        this.addHands(weapon);
    }

    addHands(weapon) {
        const skinMat = new THREE.MeshStandardMaterial({ color:0xd9a066, roughness:0.75, metalness:0.05 });
        const sleeveMat = new THREE.MeshStandardMaterial({ color:0x2e3b2e, roughness:0.85, metalness:0.05 });

        // Задняя (стреляющая) рука — обхватывает рукоятку и спусковую скобу
        const backHand = new THREE.Group();
        const backPalm = new THREE.Mesh(new THREE.BoxGeometry(0.07,0.09,0.065), skinMat);
        backPalm.position.set(0,-0.01,0.015); backHand.add(backPalm);
        const backFingers = new THREE.Mesh(new THREE.BoxGeometry(0.065,0.05,0.05), skinMat);
        backFingers.position.set(0,0.025,-0.03); backHand.add(backFingers);
        const backThumb = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.02,0.05), skinMat);
        backThumb.position.set(0.045,0.03,-0.01); backHand.add(backThumb);
        const backSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.095,0.11,0.17), sleeveMat);
        backSleeve.position.set(0,-0.07,0.14); backSleeve.rotation.x = 0.2; backHand.add(backSleeve);
        backHand.position.set(0,-0.14,0.05); backHand.rotation.x = 0.25;
        this.gunGroup.add(backHand);

        // Передняя (поддерживающая) рука — под стволом/цевьём
        const isDesignator = weapon.model === 'designator';
        const frontZ = isDesignator ? -0.16 : -0.27;
        const frontHand = new THREE.Group();
        const frontPalm = new THREE.Mesh(new THREE.BoxGeometry(0.065,0.055,0.09), skinMat);
        frontPalm.position.set(0,-0.025,0); frontHand.add(frontPalm);
        const frontFingers = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.05,0.05), skinMat);
        frontFingers.position.set(0,0.01,-0.045); frontFingers.rotation.x = -0.3; frontHand.add(frontFingers);
        const frontSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.19), sleeveMat);
        frontSleeve.position.set(0.02,-0.05,0.15); frontSleeve.rotation.x = 0.15; frontSleeve.rotation.y = -0.1; frontHand.add(frontSleeve);
        frontHand.position.set(0,-0.03,frontZ);
        this.gunGroup.add(frontHand);
    }

    reload() {
        if (this.reloading || !this.alive) return;
        const wp = weapons[this.weaponIndex];
        if (wp.isDesignator || this.mag === wp.magSize || this.reserve <= 0) return;
        this.reloading = true;
        this.reloadStart = performance.now()/1000;
        if (this.hud.reloadBar) this.hud.reloadBar.style.opacity = 1;
        this.setReloadProgress(0);
        reloadSound(RELOAD_DURATION);
    }

    setReloadProgress(progress) {
        const normalized = THREE.MathUtils.clamp(progress, 0, 1);
        if (this.hud.reloadFill) this.hud.reloadFill.style.width = `${normalized * 100}%`;
        if (this.hud.crosshair) {
            const indicator = this.hud.crosshair.querySelector('.reload-indicator');
            if (indicator) indicator.style.setProperty('--reload-progress', `${normalized * 360}deg`);
            this.hud.crosshair.classList.toggle('reloading', this.reloading);
        }
    }

    finishReload() {
        const wp = weapons[this.weaponIndex];
        const needed = wp.magSize - this.mag;
        const add = Math.min(needed, this.reserve);
        this.mag += add; this.reserve -= add;
        this.reloading = false;
        if (this.hud.reloadBar) this.hud.reloadBar.style.opacity = 0;
        this.setReloadProgress(1);
        this.updateHUD();
    }

    respawn() {
        this.health = this.maxHealth; this.alive = true;
        this.weaponIndex = 0; this.mag = weapons[0].magSize; this.reserve = 200;
        this.mags = weapons.map(w => w.magSize);
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
            if (gameMode !== 'pvp' && gameMode !== 'netplay' && this === player1) {
                // ⬅️ раньше проверялось только gameMode === 'solo', из-за чего
                // в "Кампании" и "Обучении" здоровье могло дойти до 0, но
                // игрок формально не "умирал" (экран смерти не появлялся,
                // gameState оставался 'playing'). В PvP смерть обрабатывается
                // отдельно через handleKill(), поэтому здесь она не нужна.
                onPlayerDeath();
            } else if (gameMode === 'netplay' && this === player1) {
                if (announceEl) { announceEl.style.display = 'block'; announceEl.textContent = t('net_you_died_respawn'); }
                setTimeout(() => {
                    if (announceEl) announceEl.style.display = 'none';
                    if (gameMode === 'netplay' && gameState === 'playing') this.respawn();
                }, 2000);
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

function setupNetModels() {
    if (!player1.model) { player1.model = createPlayerModel(0x00ff00); scene.add(player1.model); }
    if (!player2.model) { player2.model = createPlayerModel(0xff3333); scene.add(player2.model); }
    player1.model.position.copy(player1.camera.position);
    player2.model.position.copy(player2.camera.position);
    crosshair1.style.left = '50%';
    crosshair2.style.display = 'none';
    hud2.style.display = 'block';
    pickupHint2.style.display = 'none';
    reloadBar2.style.display = 'none';
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
const MINIMAP_WORLD_HALF_SIZE = 55;
const GRENADE_DAMAGE = 35;
const GRENADE_BLAST_RADIUS = 16;
const KAMIKAZE_TRIGGER_RADIUS = 2.2;
const KAMIKAZE_BLAST_RADIUS = 14;
const KAMIKAZE_DAMAGE = 35;
let waveActive = false, waveTimer = 0, enemiesToSpawn = 0;
let waveSpawnInterval = null; // ссылка на активный setInterval спавна волны (Solo/Защита базы), чтобы можно было его гарантированно остановить
const WAVE_DELAY = 5;

function worldToMinimap(position, size = 180) {
    const worldSize = MINIMAP_WORLD_HALF_SIZE * 2;
    return {
        x: ((position.x + MINIMAP_WORLD_HALF_SIZE) / worldSize) * size,
        y: ((MINIMAP_WORLD_HALF_SIZE - position.z) / worldSize) * size
    };
}

function updateMinimap() {
    if (!minimapCanvas || !minimapContext) return;
    const shouldShow = gameState === 'playing' || gameState === 'paused';
    minimapCanvas.style.display = shouldShow ? 'block' : 'none';
    if (!shouldShow) return;

    const ctx = minimapContext;
    const size = minimapCanvas.width;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = 'rgba(4, 10, 16, 0.9)';
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = 'rgba(110, 150, 170, 0.22)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
        const line = (size / 4) * i;
        ctx.beginPath(); ctx.moveTo(line, 0); ctx.lineTo(line, size); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, line); ctx.lineTo(size, line); ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(0, 255, 0, 0.55)';
    ctx.strokeRect(1, 1, size - 2, size - 2);

    // Все активные враги отображаются красными точками.
    ctx.fillStyle = '#ff3333';
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 6;
    const hostilePositions = enemies.map(enemy => enemy.position);
    if (gameMode === 'pvp' && player2.alive) hostilePositions.push(player2.camera.position);
    for (const position of hostilePositions) {
        const point = worldToMinimap(position, size);
        if (point.x < 0 || point.x > size || point.y < 0 || point.y > size) continue;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Игрок 1 и направление его взгляда.
    ctx.shadowColor = '#00ff88';
    const playerPoint = worldToMinimap(player1.camera.position, size);
    ctx.fillStyle = '#55ff99';
    ctx.beginPath();
    ctx.arc(playerPoint.x, playerPoint.y, 4, 0, Math.PI * 2);
    ctx.fill();
    const facing = new THREE.Vector3(-Math.sin(player1.yaw), 0, -Math.cos(player1.yaw))
        .multiplyScalar(5)
        .add(player1.camera.position);
    const facingPoint = worldToMinimap(facing, size);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(playerPoint.x, playerPoint.y);
    ctx.lineTo(facingPoint.x, facingPoint.y);
    ctx.stroke();
    ctx.shadowBlur = 0;
}

// ==================== Режим "Защита базы" ====================
const BASE_POSITION = new THREE.Vector3(0, 0, 0);
// Радиус коллизии базы (по самой широкой части фундамента) — игрок и враги
// не могут пройти сквозь бункер, только обойти его по кругу.
const BASE_COLLISION_RADIUS = 3.8;
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

function healBase(amount) {
    if (gameMode !== 'basedefense' || gameState !== 'playing' || baseHealth <= 0) return;
    baseHealth = Math.min(baseMaxHealth, baseHealth + amount);
    updateBaseHUD();
}

function onBaseDestroyed() {
    gameState = 'menu';
    document.exitPointerLock();
    stopGameMusic();
    if (waveSpawnInterval) { clearInterval(waveSpawnInterval); waveSpawnInterval = null; }
    waveActive = false;
    if (deathScreen) {
        deathScreen.style.display = 'flex';
        if (deathTitleEl) deathTitleEl.textContent = t('death_title_base');
        if (deathKills) deathKills.textContent = t('death_kills', player1.kills);
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
    const materials = new Set(enemy.userData.bodyMaterials || []);

    // Берём материалы непосредственно из отображаемых мешей. Это важно для
    // составных/FBX-моделей: сохранённый при создании список может не содержать
    // материал, который в данный момент действительно рисуется.
    enemy.traverse(child => {
        if (!child.isMesh || !child.material || child.userData.isShield) return;
        const meshMaterials = Array.isArray(child.material) ? child.material : [child.material];
        meshMaterials.forEach(material => materials.add(material));
    });

    materials.forEach(material => {
        if (!material || !material.color) return;
        material.color.setHSL(h, s, THREE.MathUtils.clamp(l, 0, 1));
        material.needsUpdate = true;
    });
}

function applyEnemyDamageColor(enemy) {
    const maxHealth = Math.max(1, enemy.userData.maxHealth || enemy.userData.health || 1);
    const healthRatio = THREE.MathUtils.clamp(enemy.userData.health / maxHealth, 0, 1);
    // Любое успешное попадание делает врага явно красным; по мере потери
    // здоровья оттенок становится темнее. Формула работает и для боссов.
    tintEnemy(enemy, 0, 1, 0.25 + healthRatio * 0.35);
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
    const plateGeo = new THREE.BoxGeometry(0.95, 1.6, 0.14);
    // Без карты окружения (envMap) высокая metalness делает поверхность почти чёрной,
    // из-за чего щитоносец выглядел "невидимым" на тёмном фоне арены.
    // Раньше цвет щита (0x4477cc) был почти таким же, как тон тела Щитоносца
    // (0x445577), из-за чего щит визуально сливался с моделью. Берём заметно
    // более яркий и контрастный жёлто-оранжевый оттенок, который выделяется на
    // фоне синеватого тела при любом освещении.
    const plateMat = new THREE.MeshStandardMaterial({
        color: 0xffaa22, roughness: 0.35, metalness: 0.15,
        emissive: new THREE.Color(0xff8800), emissiveIntensity: 1.1
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.castShadow = true; plate.receiveShadow = true;
    shieldGroup.add(plate);

    // Окантовка щита для читаемости силуэта
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xffe699, roughness: 0.3, metalness: 0.15, emissive: new THREE.Color(0xffcc44), emissiveIntensity: 1.1 });
    const rimGeo = new THREE.BoxGeometry(1.03, 0.09, 0.18);
    const rimTop = new THREE.Mesh(rimGeo, rimMat); rimTop.position.y = 0.78; shieldGroup.add(rimTop);
    const rimBottom = new THREE.Mesh(rimGeo, rimMat); rimBottom.position.y = -0.78; shieldGroup.add(rimBottom);

    // Object3D.lookAt(...) направляет к цели локальную ось +Z. Щит должен находиться
    // на этой же стороне, чтобы Щитоносец поворачивался к игроку именно щитом.
    shieldGroup.position.set(0, 0, 0.8);
    // Помечаем каждый меш щита как неразрушимую деталь, блокирующую урон
    shieldGroup.traverse(child => {
        if (child.isMesh) child.userData.isShield = true;
    });
    shieldGroup.userData.isShield = true;
    return shieldGroup;
}

function spawnShieldBearer(pos) {
    // У Щитоносца нет общей FBX-модели врага — только простое цилиндрическое
    // тело позади собственного щита.
    const enemy = new THREE.Group();
    enemy.position.set(pos.x, 1.1, pos.z);
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x5577aa, roughness: 0.4, metalness: 0.25,
        emissive: new THREE.Color(0x223355), emissiveIntensity: 0.7
    });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 2.2, 8), bodyMaterial);
    body.position.z = 0;
    body.castShadow = true;
    body.receiveShadow = true;
    enemy.add(body);
    enemy.userData = {
        health: 12, maxHealth: 12, speed: 1.6, lastShot: 0, shootCooldown: 2.8,
        targetDir: new THREE.Vector3(), isShielded: true, turnSpeed: 1.4,
        bodyMesh: body, bodyMaterials: [bodyMaterial]
    };
    const shield = createShieldMesh();
    enemy.add(shield);
    enemy.userData.shieldMesh = shield;
    enemy.castShadow = true; enemy.receiveShadow = true;
    scene.add(enemy);
    enemies.push(enemy);
}

// ==================== Функция спавна врагов (исправленная) ====================
function spawnEnemy(isBoss = false, specialType = null) {
    if (isBoss && headshotOnlyMode) isBoss = false; // страховка: боссы запрещены в режиме "Только хэдшоты"
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

// ==================== Хедшот ====================
// Голова считается верхними ~18% габаритного бокса цели. Работает как с
// примитивными мешами (цилиндры), так и с составными FBX-моделями врагов,
// потому что THREE.Box3 строится по всей иерархии объекта.
const HEADSHOT_TOP_RATIO = 0.82;
function isHeadshotHit(object, point) {
    if (!object || !point) return false;
    const box = new THREE.Box3().setFromObject(object);
    if (!isFinite(box.min.y) || !isFinite(box.max.y)) return false;
    const height = box.max.y - box.min.y;
    if (height <= 0) return false;
    const headThreshold = box.min.y + height * HEADSHOT_TOP_RATIO;
    return point.y >= headThreshold;
}
function headshotSound() { playTone(1500, 0.07, 'square', 0.5); playTone(950, 0.12, 'square', 0.3, 0.05); }

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
        if (announceEl) { announceEl.style.display='block'; announceEl.textContent = t('wave_cleared', player1.wave); }
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
    if (gameMode === 'netplay' && wall.userData && wall.userData.netId !== undefined) {
        netSend({ type: 'wallDestroyed', id: wall.userData.netId });
    }
}

// Сетевые стены: в netplay только хост генерирует расположение стен и
// рассылает их гостю, чтобы у обоих игроков было идентичное поле боя
// (иначе пули и стены не совпадали бы между экранами).
let netWallIdCounter = 0;
function createNetWall(id, x, z, w, h, d, rotY) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), new THREE.MeshStandardMaterial({ color: 0x888888, roughness:0.55, metalness:0.15 }));
    wall.position.set(x, h/2, z); wall.rotation.y = rotY;
    wall.castShadow = wall.receiveShadow = true;
    wall.userData = { health:3, maxHealth:3, netId:id };
    scene.add(wall); walls.push(wall);
}
function netSpawnWall() {
    if (walls.length >= 25) return;
    const ppos = player1.camera.position;
    let pos = new THREE.Vector3((Math.random()-0.5)*80, 0, (Math.random()-0.5)*80);
    for (let i=0;i<20;i++) {
        const ang = Math.random()*Math.PI*2, dist = 8+Math.random()*35;
        const x = Math.max(-50,Math.min(50, ppos.x+Math.cos(ang)*dist));
        const z = Math.max(-50,Math.min(50, ppos.z+Math.sin(ang)*dist));
        pos.set(x, 0, z);
        if (pos.distanceTo(ppos) > 6) break;
    }
    const w=1.5+Math.random()*3, h=2+Math.random()*3.5, d=0.2+Math.random()*0.6;
    const rotY = Math.random()*Math.PI*2;
    const id = ++netWallIdCounter;
    createNetWall(id, pos.x, pos.z, w, h, d, rotY);
    netSend({ type:'wall', id, x:pos.x, z:pos.z, w, h, d, rotY });
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

function addGrenadeFireLayer(position, color, maxScale, life, options = {}) {
    const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: options.opacity || 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });
    const flame = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), material);
    flame.position.copy(position);
    if (options.offset) flame.position.add(options.offset);
    flame.userData = {
        maxScale,
        startScale: options.startScale || 0.05,
        startOpacity: options.opacity || 0.9,
        verticalStretch: options.verticalStretch || 1,
        velocity: options.velocity || null,
        life,
        age: -(options.delay || 0),
        isGrenadeFlame: true
    };
    scene.add(flame);
    explosionEffects.push(flame);
    return flame;
}

function spawnGrenadeFireEffect(position, radius = GRENADE_BLAST_RADIUS) {
    // Три вложенных слоя создают яркое бело-жёлто-оранжевое ядро.
    addGrenadeFireLayer(position, 0xffffdd, radius * 0.16, 0.28, { opacity: 1 });
    addGrenadeFireLayer(position, 0xffbb22, radius * 0.32, 0.55, { opacity: 0.85 });
    addGrenadeFireLayer(position, 0xff4400, radius * 0.48, 0.8, { opacity: 0.55 });

    // Разлетающиеся и поднимающиеся языки пламени.
    for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const horizontalSpeed = 3 + Math.random() * 8;
        const offsetDistance = Math.random() * 1.5;
        addGrenadeFireLayer(position, i % 3 === 0 ? 0xffff66 : (i % 2 === 0 ? 0xff9900 : 0xff3300),
            0.45 + Math.random() * 1.15,
            0.65 + Math.random() * 0.75, {
                opacity: 0.8,
                delay: Math.random() * 0.12,
                verticalStretch: 1.5 + Math.random() * 2.5,
                offset: new THREE.Vector3(Math.cos(angle) * offsetDistance, Math.random(), Math.sin(angle) * offsetDistance),
                velocity: new THREE.Vector3(
                    Math.cos(angle) * horizontalSpeed,
                    4 + Math.random() * 8,
                    Math.sin(angle) * horizontalSpeed
                )
            });
    }
}

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
                applyEnemyDamageColor(enemy);
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
    } else if (gameMode === 'netplay') {
        if (player1.alive && position.distanceTo(player1.camera.position) < radius) player1.damage(damage);
        if (player2.alive && player2.model && position.distanceTo(player2.model.position) < radius) netSend({ type: 'hit', damage });
        netSend({ type: 'explosion', x: position.x, y: position.y, z: position.z, radius });
    }
    spawnParticles(position, 0xff8800, 20);
}

function detonateKamikaze(enemy, playerDistance) {
    const data = enemy.userData;
    if (!data.isKamikaze || data.exploded || !enemies.includes(enemy)) return false;

    data.exploded = true;
    const blastPosition = enemy.position.clone();

    // Remove it before the blast so it cannot be processed twice by explode().
    killEnemy(enemy);
    explode(blastPosition, 10, KAMIKAZE_BLAST_RADIUS);

    if (player1.alive && playerDistance < KAMIKAZE_BLAST_RADIUS) {
        const settings = DIFFICULTY_SETTINGS[difficulty] || DIFFICULTY_SETTINGS.medium;
        const falloff = 1 - (playerDistance / KAMIKAZE_BLAST_RADIUS) * 0.5;
        player1.damage(Math.max(1, Math.round(KAMIKAZE_DAMAGE * settings.damageMult * falloff)));
    }
    return true;
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

const diffButtons = document.querySelectorAll('.diff-btn[data-difficulty]');
diffButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (headshotOnlyMode) return; // сложность заблокирована на Hard, пока включён режим "Только хэдшоты"
        difficulty = btn.dataset.difficulty;
        diffButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// ===== Режим "Только хэдшоты" =====
// Хардкорный спец-режим: принудительно Hard-сложность, только пистолет,
// боссы не спавнятся, засчитываются только попадания в голову — любой
// другой урон игрока по врагам/игрокам полностью игнорируется.
let headshotOnlyMode = false;
const headshotModeBtn = document.getElementById('headshot-mode-toggle');
const headshotModeHint = document.getElementById('headshot-mode-hint');
const hardDiffBtn = document.getElementById('diff-hard');
if (headshotModeBtn) {
    headshotModeBtn.addEventListener('click', () => {
        headshotOnlyMode = !headshotOnlyMode;
        headshotModeBtn.classList.toggle('active', headshotOnlyMode);
        if (headshotModeHint) headshotModeHint.style.display = headshotOnlyMode ? 'block' : 'none';
        diffButtons.forEach(b => {
            b.disabled = headshotOnlyMode;
            b.style.opacity = headshotOnlyMode ? '0.4' : '';
            b.style.cursor = headshotOnlyMode ? 'not-allowed' : 'pointer';
        });
        if (headshotOnlyMode) {
            difficulty = 'hard';
            diffButtons.forEach(b => b.classList.remove('active'));
            if (hardDiffBtn) hardDiffBtn.classList.add('active');
        }
    });
}

// Переключатель языка интерфейса (RU / EN)
const langButtons = document.querySelectorAll('.diff-btn[data-lang]');
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyLanguage();
    });
});
let gameState = 'menu';
let isPointerLocked = false;
const RELOAD_DURATION = 1.8;
let campaignMission = 0;
let tutorialHealth = null;
// name/description выводятся из I18N.missions[currentLang][index] через getMissionName()/getMissionDescription(),
// поэтому здесь эти поля не хранятся отдельно на каждом языке.
const campaignMissions = [
    { target: 'kill', count: 10, map: 'city' },
    { target: 'survive', time: 60, map: 'forest' },
    { target: 'kill_sniper', count: 3, map: 'ruins' },
    { target: 'boss', map: 'roofs' },
    { target: 'kill', count: 20, map: 'roofs' }
];
function getMissionName(index) { return (t('missions')[index] || {}).name || ''; }
function getMissionDescription(index) { return (t('missions')[index] || {}).description || ''; }

const keyState1 = {}, keyState2 = {};

window.addEventListener('keydown', (e) => {
    if (gameState !== 'playing') return;
    if (['KeyW','KeyA','KeyS','KeyD','KeyR','KeyF','KeyE','KeyG','KeyX','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Space','ShiftLeft'].includes(e.code)) {
        keyState1[e.code] = true;
        if (e.code === 'KeyR') player1.reload();
        if (e.code === 'KeyE') pickupItems(player1);
        if (e.code === 'KeyG') throwGrenade(player1);
        if (e.code === 'KeyX') useDesignator(player1);
        if (e.code.startsWith('Digit')) { const idx = parseInt(e.code.charAt(5))-1; player1.switchWeapon(idx); }
        e.preventDefault();
    }
    if (gameMode === 'pvp' && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Numpad0','Numpad1','Numpad2','Numpad3','Numpad4','Numpad5','Numpad6','Numpad7','Numpad8','NumpadDecimal','NumpadEnter','NumpadAdd','NumpadSubtract','NumpadMultiply','NumpadDivide'].includes(e.code)) {
        keyState2[e.code] = true;
        if (e.code === 'NumpadEnter') player2.reload();
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

// Уход с вкладки (переключение окна/вкладки, сворачивание браузера) во время игры
// автоматически ставит игру на паузу тем же способом, что и Esc — открывается
// меню паузы, отменяется pointer lock, музыка приостанавливается. Возврат на
// вкладку НЕ снимает паузу автоматически — игрок сам жмёт "Продолжить".
document.addEventListener('visibilitychange', () => {
    if (document.hidden && gameState === 'playing') togglePause();
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
                // Хедшот: попадание в верхнюю часть модели убивает врага сразу,
                // независимо от урона оружия. Босса исключаем — иначе бой с
                // ним превращается в убийство одним выстрелом любого оружия.
                const headshot = !enemy.userData.isBoss && isHeadshotHit(enemy, hit.point);
                if (headshot) {
                    enemy.userData.health = 0;
                    spawnParticles(hit.point, 0xffee00, 12);
                    headshotSound();
                } else if (headshotOnlyMode) {
                    // Режим "Только хэдшоты": попадания не в голову не наносят урона вообще
                    spawnParticles(hit.point, 0x888888, 3);
                } else {
                    enemy.userData.health -= damage;
                    spawnParticles(hit.point, 0xff0000, 5);
                }
                applyEnemyDamageColor(enemy);
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
            if (obj === player2.model) {
                const headshot = isHeadshotHit(player2.model, hit.point);
                if (headshot) { spawnParticles(hit.point, 0xffee00, 12); headshotSound(); player2.damage(player2.health); }
                else if (!headshotOnlyMode) player2.damage(damage);
                if (!player2.alive) handleKill(player1, player2);
            }
            else if (obj === player1.model) {
                const headshot = isHeadshotHit(player1.model, hit.point);
                if (headshot) { spawnParticles(hit.point, 0xffee00, 12); headshotSound(); player1.damage(player1.health); }
                else if (!headshotOnlyMode) player1.damage(damage);
                if (!player1.alive) handleKill(player2, player1);
            }
            else if (walls.includes(obj)) {
                // Стены неразрушимы
                spawnParticles(hit.point, 0xff6600, 5);
            }
        }
    } else if (gameMode === 'netplay') {
        const targets = [...walls];
        if (player2.alive && player2.model) targets.push(player2.model);
        const intersects = raycaster.intersectObjects(targets, false);
        if (intersects.length) {
            const hit = intersects[0]; const obj = hit.object;
            if (obj === player2.model) {
                const headshot = isHeadshotHit(player2.model, hit.point);
                if (headshot) { spawnParticles(hit.point, 0xffee00, 12); headshotSound(); }
                else spawnParticles(hit.point, 0xff0000, 5);
                netSend({ type: 'hit', damage: headshot ? 9999 : (headshotOnlyMode ? 0 : damage) });
            } else if (walls.includes(obj)) {
                obj.userData.health -= damage;
                if (obj.userData.health <= 0) destroyWall(obj);
                spawnParticles(hit.point, 0xff6600, 5);
            }
        }
    }
}

function handleKill(killer, victim) {
    killer.kills++; killer.updateHUD();
    if (announceEl) { announceEl.style.display='block'; announceEl.textContent = t('player_killed', killer===player1?'1':'2', victim===player1?'1':'2'); }
    setTimeout(()=> { if (announceEl) announceEl.style.display='none'; }, 2000);
    if (killer.kills >= 10) {
        gameState = 'menu'; if (announceEl) { announceEl.style.display='block'; announceEl.textContent = t('player_won', killer===player1?'1':'2'); }
        setTimeout(()=> { if (announceEl) announceEl.style.display='none'; showMenu(); }, 3000);
        document.exitPointerLock();
    }
    setTimeout(() => { if (gameState==='playing') victim.respawn(); }, 1500);
}

function onPlayerDeath() {
    gameState = 'menu';
    document.exitPointerLock();
    stopGameMusic();
    if (waveSpawnInterval) { clearInterval(waveSpawnInterval); waveSpawnInterval = null; }
    waveActive = false;
    if (deathScreen) {
        deathScreen.style.display = 'flex';
        if (deathTitleEl) deathTitleEl.textContent = lastDeathWasFall ? t('fall_death_title') : t('death_title_player');
        if (deathKills) deathKills.textContent = t('death_kills', player1.kills);
    }
    lastDeathWasFall = false;
}

function useDesignator(player) {
    if (headshotOnlyMode && player === player1) return; // в этом режиме доступен только пистолет — авиаудары отключены
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
    if (headshotOnlyMode && player === player1) return; // в этом режиме доступен только пистолет — гранаты отключены
    if (!player.alive || player.grenades <= 0) return;
    player.grenades--; player.updateHUD();
    const nade = new THREE.Mesh(new THREE.SphereGeometry(0.15,8,8), new THREE.MeshStandardMaterial({ color:0xaa6600, emissive:new THREE.Color(0x331100) }));
    nade.position.copy(player.camera.position.clone().add(new THREE.Vector3(0,0.5,0)));
    const dir = new THREE.Vector3(-Math.sin(player.yaw), 0.25, -Math.cos(player.yaw)).normalize();
    nade.userData = { velocity: dir.clone().multiplyScalar(14), life:3, age:0, exploded:false };
    scene.add(nade);
    thrownGrenades.push(nade);
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
            } else if (headshotOnlyMode && player === player1) {
                // В режиме "Только хэдшоты" ящики с супер-оружием просто убираются с карты без выдачи оружия
                crateAlarm(); scene.remove(crate); supplyCrates.splice(i,1);
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
                } else if (gameMode === 'basedefense') {
                    // В "Защите базы" аптечки лечат саму базу, а не игрока —
                    // именно её здоровье является условием поражения в этом режиме.
                    healBase(25);
                    if (baseObject) spawnParticles(baseObject.position.clone().add(new THREE.Vector3(0, 1, 0)), 0x00ff88, 10);
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
let lastWallSpawn = 0, lastHealthSpawn = 0, lastCrateSpawn = 0, lastNetSend = 0;
const NET_SEND_INTERVAL = 1 / 20; // 20 обновлений в секунду

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
    updateMinimap();
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
            advanceCampaignMission();
        } else if (mission.target === 'survive') {
            if (mission.timeLeft === undefined) mission.timeLeft = mission.time;
            mission.timeLeft -= delta;

            // Подкрепление: если враги закончились раньше времени - присылаем новую волну,
            // чтобы игрок не стоял без дела в ожидании таймера.
            if (mission.spawnTimer === undefined) mission.spawnTimer = mission.reinforceInterval || 6;
            if (enemies.length === 0) {
                mission.spawnTimer -= delta;
                if (mission.spawnTimer <= 0) {
                    reinforceSurvivalWave();
                    mission.spawnTimer = mission.reinforceInterval || 6;
                }
            } else {
                // пока есть живые враги, не копим обратный отсчёт впустую
                mission.spawnTimer = mission.reinforceInterval || 6;
            }

            if (mission.timeLeft <= 0) {
                advanceCampaignMission(t('campaign_survive_done'));
            }
        } else if (mission.target === 'kill_sniper') {
            if (player1.kills >= mission.count) {
                advanceCampaignMission();
            }
        } else if (mission.target === 'boss') {
            if (enemies.length === 0) {
                advanceCampaignMission();
            }
        }
    }

    if (gameMode === 'tutorial') {
        if (player1.tutorialStep === 0) {
            tutorialText.style.display = 'block';
            tutorialText.textContent = t('tutorial_step0');
            if (Math.abs(player1.velocity.x) > 0.1 || Math.abs(player1.velocity.z) > 0.1) {
                player1.tutorialStep = 1;
            }
        } else if (player1.tutorialStep === 1) {
            tutorialText.textContent = t('tutorial_step1');
            if (player1.mag < 12) {
                player1.tutorialStep = 2;
            }
        } else if (player1.tutorialStep === 2) {
            tutorialText.textContent = t('tutorial_step2');
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
            tutorialText.textContent = t('tutorial_step3');
        }
    }

    if (gameMode === 'solo' || gameMode === 'basedefense') {
        if (!waveActive && enemies.length === 0 && waveTimer > 0) {
            waveTimer -= delta;
            if (waveTimer <= 0) startWave();
            else { if (announceEl) { announceEl.style.display='block'; announceEl.textContent = t('next_wave_in', Math.ceil(waveTimer)); } }
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
    } else if (gameMode === 'netplay') {
        if (currentTime - lastNetSend > NET_SEND_INTERVAL) {
            lastNetSend = currentTime;
            netSend({
                type: 'state',
                x: player1.camera.position.x, y: player1.camera.position.y, z: player1.camera.position.z,
                yaw: player1.yaw, pitch: player1.pitch,
                weaponIndex: player1.weaponIndex, health: player1.health, alive: player1.alive, kills: player1.kills
            });
        }
        if (currentTime - lastCrateSpawn > 30) { lastCrateSpawn = currentTime; spawnSupplyCrate(); }
        if (netIsHost && currentTime - lastWallSpawn > 2.5 && walls.length < 25) { lastWallSpawn = currentTime; netSpawnWall(); }
    }

    [player1, player2].forEach(p => {
        if (p.reloading) {
            const progress = Math.min((currentTime - p.reloadStart)/RELOAD_DURATION, 1);
            p.setReloadProgress(progress);
            if (progress >= 1) p.finishReload();
        }
    });

    const wasAlive1 = player1.alive, wasAlive2 = player2.alive;
    updatePlayerMovement(player1, keyState1, delta);
    if (gameMode === 'pvp') { updatePlayerMovement(player2, keyState2, delta); updatePlayer2Rotation(delta); }
    // Если игрок сорвался с крыши и погиб именно от падения (а не от выстрела),
    // доводим это до тех же обработчиков смерти, что и при обычном убийстве.
    if (gameMode === 'pvp') {
        if (wasAlive1 && !player1.alive) handleKill(player2, player1);
        if (wasAlive2 && !player2.alive) handleKill(player1, player2);
    }

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

    if (gameMode === 'pvp' || gameMode === 'netplay') updatePlayerModels();

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

            if (data.isKamikaze && player1.alive) {
                const playerDistance = Math.hypot(
                    player1.camera.position.x - enemy.position.x,
                    player1.camera.position.z - enemy.position.z
                );
                if (playerDistance <= KAMIKAZE_TRIGGER_RADIUS &&
                    detonateKamikaze(enemy, playerDistance)) {
                    continue;
                }
            }

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
            spawnGrenadeFireEffect(nade.position, GRENADE_BLAST_RADIUS);
            explode(nade.position, GRENADE_DAMAGE, GRENADE_BLAST_RADIUS);
        }
    }

    for (let i=explosionEffects.length-1;i>=0;i--) {
        const e = explosionEffects[i]; e.userData.age += delta;
        if (e.userData.age < 0) {
            e.material.opacity = 0;
            continue;
        }
        const progress = e.userData.age / e.userData.life;
        if (progress >= 1.0) { scene.remove(e); e.geometry.dispose(); e.material.dispose(); explosionEffects.splice(i,1); continue; }
        if (e.userData.velocity) e.position.addScaledVector(e.userData.velocity, delta);
        const startScale = e.userData.startScale || 0.2;
        const scale = startScale + (e.userData.maxScale - startScale) * (1 - Math.pow(1 - progress, 3));
        const verticalStretch = e.userData.verticalStretch || 1;
        e.scale.set(scale, scale * verticalStretch, scale);
        const startOpacity = e.userData.startOpacity || 0.8;
        e.material.opacity = startOpacity * Math.pow(1 - progress, 1.5);
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
    if (!collided && gameMode === 'basedefense' && baseObject) {
        const dx = newPos.x - baseObject.position.x, dz = newPos.z - baseObject.position.z;
        if (Math.sqrt(dx*dx + dz*dz) < BASE_COLLISION_RADIUS + player.radius) collided = true;
    }
    if (!collided) player.camera.position.copy(newPos);
    else { player.camera.position.x -= player.velocity.x*delta; player.camera.position.z -= player.velocity.z*delta; player.velocity.x=0; player.velocity.z=0; }

    if (MAPS[currentMapId] && MAPS[currentMapId].fallDeath) {
        // Карта «Крыши города»: за пределами ROOF_EDGE пола нет — там пустота
        // между домами. Игрок может пройти по воздуху ещё немного (до
        // ROOF_VOID_LIMIT), но опоры под ногами уже не будет, и он начнёт падать.
        const onRoof = Math.abs(player.camera.position.x) <= ROOF_EDGE && Math.abs(player.camera.position.z) <= ROOF_EDGE;
        if (onRoof) {
            if (player.camera.position.y <= player.height) { player.camera.position.y = player.height; player.velocity.y = 0; player.onGround = true; }
            else player.onGround = false;
        } else {
            player.onGround = false; // сорвался с крыши — свободное падение
            if (player.camera.position.y < ROOF_DEATH_Y && player.alive) { lastDeathWasFall = true; player.damage(9999); }
        }
        player.camera.position.x = Math.max(-ROOF_VOID_LIMIT, Math.min(ROOF_VOID_LIMIT, player.camera.position.x));
        player.camera.position.z = Math.max(-ROOF_VOID_LIMIT, Math.min(ROOF_VOID_LIMIT, player.camera.position.z));
    } else {
        if (player.camera.position.y <= player.height) { player.camera.position.y = player.height; player.velocity.y = 0; player.onGround = true; }
        else player.onGround = false;
        player.camera.position.x = Math.max(-53,Math.min(53,player.camera.position.x));
        player.camera.position.z = Math.max(-53,Math.min(53,player.camera.position.z));
    }
    player.camera.position.y = Math.min(30, player.camera.position.y);
}

// ==================== Меню и запуск ====================
function showMenu() {
    gameState = 'menu';
    stopGameMusic();
    playMenuMusic();
    mainMenu.classList.remove('menu-hidden');
    pauseMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    document.exitPointerLock();
}
function togglePause() {
    if (gameState === 'playing') { gameState = 'paused'; pauseMenu.classList.remove('menu-hidden'); document.exitPointerLock(); pauseGameMusic(); }
    else if (gameState === 'paused') { gameState = 'playing'; pauseMenu.classList.add('menu-hidden'); renderer.domElement.requestPointerLock(); resumeGameMusic(); }
}
btnResume.addEventListener('click', togglePause);
btnQuit.addEventListener('click', () => {
    if (gameMode === 'netplay') { netSend({ type: 'leave' }); netCleanup(); }
    showMenu();
});

function startSolo(mapId) {
    initAudio();
    playGameMusic();
    gameMode = 'solo';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    resetArenaForModeSwitch();
    applyMap(mapId || currentMapId);
    announceMapName();
    player1.respawn(); player1.kills = 0;
    player1.wave = 1; if (wave1) wave1.textContent = 1;
    updateEnemyCount();
    applyLevelWalls();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    startWave();
    renderer.domElement.requestPointerLock();
}
// Короткая надпись с названием текущей карты в начале матча (Дуэль/Выживание/Сетевая игра).
function announceMapName() {
    if (!announceEl) return;
    announceEl.style.display = 'block';
    announceEl.textContent = t('map_announce', mapDisplayName(currentMapId));
    setTimeout(() => { announceEl.style.display = 'none'; }, 1500);
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
    if (player1.wave % 5 === 0 && !headshotOnlyMode) setTimeout(() => { if (waveActive) spawnEnemy(true); }, 2000);
}
btnSolo.addEventListener('click', () => openMapSelect('solo'));

function startBaseDefense() {
    initAudio();
    playGameMusic();
    gameMode = 'basedefense';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    resetArenaForModeSwitch();
    applyMap('castle');
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
    await loadLevelData(); // всегда успешен: при отсутствии level.json подставляется встроенный уровень
    initAudio();
    playGameMusic();
    gameMode = 'campaign';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    removePvPModels();
    resetArenaForModeSwitch();
    campaignMission = 0;
    applyMap(campaignMissions[campaignMission].map || 'default');
    player1.respawn(); player1.kills = 0;
    campaignMissions.forEach(m => { if (m.target === 'survive') { delete m.timeLeft; delete m.spawnTimer; } });
    announceEl.style.display='block'; announceEl.textContent = getMissionName(0);
    setTimeout(() => { announceEl.style.display='none'; }, 2000);
    applyLevelWalls();
    spawnEnemiesForMission();
    lastWallSpawn = performance.now()/1000;
    renderer.domElement.requestPointerLock();
});

// Продвигает кампанию на следующую миссию: сбрасывает счётчики, очищает врагов
// и либо запускает следующую миссию, либо (если миссий больше нет) завершает кампанию.
function advanceCampaignMission(interimMessage) {
    campaignMission++;
    if (campaignMission >= campaignMissions.length) {
        announceEl.style.display='block'; announceEl.textContent = t('campaign_complete');
        setTimeout(() => { announceEl.style.display='none'; showMenu(); }, 3000);
        gameState = 'menu';
        document.exitPointerLock();
        return;
    }
    announceEl.style.display='block';
    announceEl.textContent = interimMessage || t('campaign_mission_line', campaignMission+1, getMissionName(campaignMission));
    setTimeout(() => { announceEl.style.display='none'; }, 2000);
    player1.kills = 0;
    enemies.forEach(e => scene.remove(e)); enemies.length = 0;
    applyMap(campaignMissions[campaignMission].map || 'default');
    spawnEnemiesForMission();
}

function spawnEnemiesForMission() {
    const mission = campaignMissions[campaignMission];
    if (mission.target === 'kill') {
        for (let i=0;i<mission.count;i++) spawnEnemy(false);
    } else if (mission.target === 'survive') {
        // Стартовая волна: обычные враги + снайперы
        for (let i=0;i<6;i++) spawnEnemy(false);
        for (let i=0;i<3;i++) spawnEnemy(false, 'sniper');
        mission.spawnTimer = mission.reinforceInterval || 6; // таймер до следующего подкрепления
    } else if (mission.target === 'kill_sniper') {
        for (let i=0;i<mission.count;i++) spawnEnemy(false, 'sniper');
    } else if (mission.target === 'boss') {
        if (headshotOnlyMode) {
            // Боссы в этом режиме не спавнятся — заменяем миссию с боссом на группу обычных врагов
            for (let i=0;i<5;i++) spawnEnemy(false);
        } else {
            spawnEnemy(true);
        }
    }
}

// Подкрепление во время миссии "Выживание": не даём игроку простаивать в ожидании таймера,
// когда все текущие враги уже убиты.
function reinforceSurvivalWave() {
    const reinforcements = 3 + Math.floor(Math.random() * 2); // 3-4 бойца в волне
    for (let i = 0; i < reinforcements; i++) {
        // Каждый второй боец волны - снайпер, чтобы снайперов в миссии стало заметно больше
        if (i % 2 === 0) {
            spawnEnemy(false, 'sniper');
        } else {
            spawnEnemy(false);
        }
    }
}

btnTutorial.addEventListener('click', () => {
    initAudio();
    playGameMusic();
    gameMode = 'tutorial';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'block';
    tutorialText.textContent = t('tutorial_welcome');
    removePvPModels();
    resetArenaForModeSwitch();
    applyMap('default');
    player1.respawn();
    player1.tutorialStep = 0;
    tutorialHealth = null;
    applyLevelWalls();
    renderer.domElement.requestPointerLock();
});

function startPvpGame(mapId) {
    initAudio();
    playGameMusic();
    gameMode = 'pvp';
    gameState = 'playing';
    mainMenu.classList.add('menu-hidden');
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    setupPvPModels();
    resetArenaForModeSwitch();
    applyMap(mapId || currentMapId);
    announceMapName();
    player1.respawn(); player2.respawn();
    player1.kills = 0; player2.kills = 0;
    player1.updateHUD(); player2.updateHUD();
    applyLevelWalls();
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000;
    renderer.domElement.requestPointerLock();
}
btnPvp.addEventListener('click', () => openMapSelect('pvp'));

restartBtn.addEventListener('click', () => {
    deathScreen.style.display = 'none';
    if (gameMode === 'solo') startSolo(currentMapId);
    else if (gameMode === 'campaign') btnCampaign.click();
    else if (gameMode === 'tutorial') btnTutorial.click();
    else if (gameMode === 'pvp') startPvpGame(currentMapId);
    else if (gameMode === 'basedefense') startBaseDefense();
});

btnNetwork.addEventListener('click', () => openMapSelect('network'));
btnNetworkBack.addEventListener('click', () => {
    networkScreen.classList.add('menu-hidden');
    mainMenu.classList.remove('menu-hidden');
    netCleanup();
});

// ==================== Экран выбора карты ====================
// pendingMapMode запоминает, из какого меню был открыт выбор карты, чтобы после
// клика по одной из 4 карт (Лес/Руины/Замок/Город) продолжить нужный сценарий:
// сразу запустить Выживание/Дуэль, либо перейти к экрану сетевой игры.
let pendingMapMode = null;
function openMapSelect(mode) {
    pendingMapMode = mode;
    mainMenu.classList.add('menu-hidden');
    mapSelectScreen.classList.remove('menu-hidden');
    mapButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-map') === currentMapId));
}
mapButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const mapId = btn.getAttribute('data-map');
        mapSelectScreen.classList.add('menu-hidden');
        if (pendingMapMode === 'solo') {
            startSolo(mapId);
        } else if (pendingMapMode === 'pvp') {
            startPvpGame(mapId);
        } else if (pendingMapMode === 'network') {
            currentMapId = mapId;
            networkScreen.classList.remove('menu-hidden');
            netSetStatus('');
        } else {
            mainMenu.classList.remove('menu-hidden');
        }
    });
});
btnMapBack.addEventListener('click', () => {
    mapSelectScreen.classList.add('menu-hidden');
    mainMenu.classList.remove('menu-hidden');
    pendingMapMode = null;
});

// ==================== Сетевая игра (PeerJS) ====================
let netPeer = null;
let netConn = null;
let netIsHost = false;
let netConnected = false;

function netSetStatus(text, color) {
    if (networkStatus) { networkStatus.textContent = text; networkStatus.style.color = color || '#0f0'; }
}

function netCleanup() {
    if (netConn) { try { netConn.close(); } catch(e){} netConn = null; }
    if (netPeer) { try { netPeer.destroy(); } catch(e){} netPeer = null; }
    netConnected = false; netIsHost = false;
    if (netHostInfo) netHostInfo.style.display = 'none';
    if (netRoomCode) netRoomCode.textContent = '';
}

btnNetHost.addEventListener('click', () => {
    if (typeof Peer === 'undefined') { netSetStatus(t('net_no_module'), '#ff5555'); return; }
    netCleanup();
    netIsHost = true;
    netSetStatus(t('net_creating_room'));
    netPeer = new Peer();
    netPeer.on('open', (id) => {
        netHostInfo.style.display = 'block';
        netRoomCode.textContent = id;
        netSetStatus(t('net_room_created'));
    });
    netPeer.on('connection', (conn) => {
        netConn = conn;
        setupNetConnection();
    });
    netPeer.on('error', (err) => {
        netSetStatus(t('net_error', err && err.type ? err.type : err), '#ff5555');
    });
});

btnNetJoin.addEventListener('click', () => {
    const code = (netJoinInput.value || '').trim();
    if (!code) { netSetStatus(t('net_enter_code'), '#ff5555'); return; }
    if (typeof Peer === 'undefined') { netSetStatus(t('net_no_module'), '#ff5555'); return; }
    netCleanup();
    netIsHost = false;
    netSetStatus(t('net_connecting'));
    netPeer = new Peer();
    netPeer.on('open', () => {
        netConn = netPeer.connect(code, { reliable: true });
        setupNetConnection();
    });
    netPeer.on('error', (err) => {
        netSetStatus(t('net_error', err && err.type ? err.type : err), '#ff5555');
    });
});

netRoomCode.addEventListener('click', () => {
    if (!netRoomCode.textContent) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(netRoomCode.textContent).then(() => netSetStatus(t('net_code_copied'))).catch(()=>{});
    }
});

function setupNetConnection() {
    netConn.on('open', () => {
        netConnected = true;
        netSetStatus(t('net_opponent_connected'));
        // Хост выбирал карту на экране выбора карты — рассылаем её сопернику,
        // чтобы оба игрока увидели одну и ту же локацию (Лес/Руины/Замок/Город).
        if (netIsHost) netSend({ type: 'mapSelect', mapId: currentMapId });
        setTimeout(() => startNetPlay(), 400);
    });
    netConn.on('data', (msg) => handleNetMessage(msg));
    netConn.on('close', () => {
        netConnected = false;
        if (gameMode === 'netplay' && (gameState === 'playing' || gameState === 'paused')) {
            gameState = 'menu';
            document.exitPointerLock();
            showMenu();
            networkScreen.classList.remove('menu-hidden');
            netSetStatus(t('net_opponent_left'), '#ff5555');
        }
    });
    netConn.on('error', (err) => {
        netSetStatus(t('net_conn_error', err && err.type ? err.type : err), '#ff5555');
    });
}

function netSend(msg) {
    if (netConn && netConn.open) { try { netConn.send(msg); } catch(e){} }
}

function handleNetMessage(msg) {
    if (!msg || !msg.type) return;
    if (msg.type === 'state') {
        player2.camera.position.set(msg.x, msg.y, msg.z);
        player2.yaw = msg.yaw; player2.pitch = msg.pitch;
        player2.weaponIndex = msg.weaponIndex;
        player2.health = msg.health;
        const wasAlive = player2.alive;
        player2.alive = msg.alive;
        if (player2.model) player2.model.visible = msg.alive;
        player2.updateHUD();
        if (wasAlive && !player2.alive) {
            player1.kills++; player1.updateHUD();
            if (announceEl) { announceEl.style.display = 'block'; announceEl.textContent = t('net_you_destroyed_opponent'); }
            setTimeout(() => { if (announceEl) announceEl.style.display = 'none'; }, 2000);
            if (player1.kills >= 10) {
                gameState = 'menu';
                if (announceEl) { announceEl.style.display = 'block'; announceEl.textContent = t('net_you_win_duel'); }
                document.exitPointerLock();
                setTimeout(() => {
                    if (announceEl) announceEl.style.display = 'none';
                    netSend({ type: 'leave' });
                    netCleanup();
                    showMenu();
                    networkScreen.classList.add('menu-hidden');
                }, 3000);
            }
        }
    } else if (msg.type === 'hit') {
        if (gameMode === 'netplay' && player1.alive) player1.damage(msg.damage);
    } else if (msg.type === 'explosion') {
        window.spawnExplosionEffect(new THREE.Vector3(msg.x, msg.y, msg.z), 0xff6600, msg.radius);
        explosionSound();
    } else if (msg.type === 'wall') {
        if (!netIsHost) createNetWall(msg.id, msg.x, msg.z, msg.w, msg.h, msg.d, msg.rotY);
    } else if (msg.type === 'wallDestroyed') {
        const w = walls.find(w => w.userData && w.userData.netId === msg.id);
        if (w) { spawnParticles(w.position, 0xff6600, 25); scene.remove(w); walls.splice(walls.indexOf(w), 1); w.geometry.dispose(); w.material.dispose(); }
    } else if (msg.type === 'mapSelect') {
        currentMapId = MAPS[msg.mapId] ? msg.mapId : currentMapId;
    } else if (msg.type === 'leave') {
        netSetStatus(t('net_opponent_left'), '#ff5555');
        if (gameMode === 'netplay') {
            gameState = 'menu';
            document.exitPointerLock();
            netCleanup();
            showMenu();
            networkScreen.classList.remove('menu-hidden');
        }
    }
}

function startNetPlay() {
    initAudio();
    playGameMusic();
    networkScreen.classList.add('menu-hidden');
    mainMenu.classList.add('menu-hidden');
    gameMode = 'netplay';
    gameState = 'playing';
    deathScreen.style.display = 'none';
    tutorialText.style.display = 'none';
    setupNetModels();
    resetArenaForModeSwitch();
    applyMap(currentMapId);
    announceMapName();

    player1.respawn(); player1.kills = 0;
    if (netIsHost) { player1.camera.position.set(0, player1.height, 12); player1.yaw = Math.PI; }
    else { player1.camera.position.set(0, player1.height, -12); player1.yaw = 0; }
    player1.pitch = 0;
    if (player1.model) player1.model.position.copy(player1.camera.position);

    player2.health = 100; player2.maxHealth = 100; player2.alive = true; player2.kills = 0; player2.weaponIndex = 0;
    if (player2.model) player2.model.visible = true;
    player1.updateHUD(); player2.updateHUD();

    netWallIdCounter = 0;
    if (netIsHost) { for (let i = 0; i < 8; i++) netSpawnWall(); }
    lastWallSpawn = performance.now()/1000; lastHealthSpawn = performance.now()/1000; lastCrateSpawn = performance.now()/1000; lastNetSend = performance.now()/1000;
    renderer.domElement.requestPointerLock();
}

function validateLevel(data) {
    if (!data || typeof data !== 'object') throw new Error(t('err_json_root'));
    if (!data.playerSpawn || !Number.isFinite(data.playerSpawn.x) || !Number.isFinite(data.playerSpawn.z)) {
        throw new Error(t('err_player_spawn'));
    }
    if (!Array.isArray(data.enemySpawns) || data.enemySpawns.length === 0) {
        throw new Error(t('err_enemy_spawns'));
    }
    if (!Array.isArray(data.walls)) throw new Error(t('err_walls_array'));
    const validPoint = point => point && Number.isFinite(point.x) && Number.isFinite(point.z);
    if (!data.enemySpawns.every(validPoint)) throw new Error(t('err_enemy_coords'));
    if (!data.walls.every(wall => validPoint(wall) && Number.isFinite(wall.width) && Number.isFinite(wall.depth) && Number.isFinite(wall.height))) {
        throw new Error(t('err_wall_fields'));
    }
    return data;
}

// Пытается подгрузить level.json (необязательный внешний файл с геометрией арены).
// Если его нет, он повреждён или сервер отдал ошибку — тихо откатываемся на
// встроенный DEFAULT_LEVEL_DATA, так что "Кампания" (как и все остальные режимы)
// всегда может запуститься без каких-либо внешних файлов.
async function loadLevelData() {
    if (levelData) return levelData;
    try {
        const response = await fetch('level.json', { cache: 'no-store' });
        if (!response.ok) throw new Error(t('err_http_notfound', response.status));
        levelData = validateLevel(await response.json());
        levelLoadError = null;
    } catch (error) {
        console.warn('level.json недоступен — используется встроенный запасной уровень:', error);
        levelLoadError = error;
        levelData = JSON.parse(JSON.stringify(DEFAULT_LEVEL_DATA));
    }
    return levelData;
}

async function bootGame() {
    // Подгружаем данные уровня заранее (внешний level.json или встроенный запасной
    // вариант) — это не блокирует запуск игры и не мешает ни одному режиму.
    await loadLevelData();
    applyLanguage();
    showMenu();
    requestAnimationFrame(animate);
}

bootGame();
window.addEventListener('contextmenu', e=>e.preventDefault());
window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));
