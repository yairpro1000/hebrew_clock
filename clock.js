const hebrewTime = {
    hours: {
        0: "חֲצוֹת", 1: "אַחַת", 2: "שְׁתַּיִם", 3: "שָׁלוֹשׁ", 4: "אַרְבַּע", 5: "חָמֵשׁ", 6: "שֵׁשׁ",
        7: "שֶׁבַע", 8: "שְׁמוֹנֶה", 9: "תֵּשַׁע", 10: "עֶשֶׂר", 11: "אַחַת עֶשְׂרֵה", 12: "שְׁתֵּים עֶשְׂרֵה"
    },
    minutes: {
        0: "",
        1: "וְדַקָּה", 2: "וּשְׁתֵּי דַּקּוֹת", 3: "וְשָׁלוֹשׁ דַּקּוֹת", 4: "וְאַרְבַּע דַּקּוֹת", 5: "וְחָמֵשׁ דַּקּוֹת",
        6: "וְשֵׁשׁ דַּקּוֹת", 7: "וְשֶׁבַע דַּקּוֹת", 8: "וּשְׁמוֹנֶה דַּקּוֹת", 9: "וְתֵשַׁע דַּקּוֹת",
        10: "וְעֶשֶׂר דַּקּוֹת", 11: "וְאַחַת עֶשְׂרֵה דַּקּוֹת", 12: "וּשְׁתַּיִם עֶשְׂרֵה דַּקּוֹת",
        13: "וְשָׁלוֹשׁ עֶשְׂרֵה דַּקּוֹת", 14: "וְאַרְבַּע עֶשְׂרֵה דַּקּוֹת", 15: "וַחֲמֵשׁ עֶשְׂרֵה דַּקּוֹת",
        16: "וְשֵׁשׁ עֶשְׂרֵה דַּקּוֹת", 17: "וְשֶׁבַע עֶשְׂרֵה דַּקּוֹת", 18: "וּשְׁמוֹנֶה עֶשְׂרֵה דַּקּוֹת",
        19: "וּתְשַׁע עֶשְׂרֵה דַּקּוֹת", 20: "וְעֶשְׂרִים דַּקּוֹת", 21: "וְעֶשְׂרִים וְאַחַת דַּקּוֹת",
        22: "וְעֶשְׂרִים וּשְׁתַּיִם דַּקּוֹת", 23: "וְעֶשְׂרִים וְשָׁלוֹשׁ דַּקּוֹת", 24: "וְעֶשְׂרִים וְאַרְבַּע דַּקּוֹת",
        25: "וְעֶשְׂרִים וְחָמֵשׁ דַּקּוֹת", 26: "וְעֶשְׂרִים וְשֵׁשׁ דַּקּוֹת", 27: "וְעֶשְׂרִים וְשֶׁבַע דַּקּוֹת",
        28: "וְעֶשְׂרִים וּשְׁמוֹנֶה דַּקּוֹת", 29: "וְעֶשְׂרִים וְתֵשַׁע דַּקּוֹת", 30: "וּשְׁלוֹשִׁים דַּקּוֹת",
        31: "וּשְׁלוֹשִׁים וְאַחַת דַּקּוֹת", 32: "וּשְׁלוֹשִׁים וּשְׁתַּיִם דַּקּוֹת", 33: "וּשְׁלוֹשִׁים וְשָׁלוֹשׁ דַּקּוֹת",
        34: "וּשְׁלוֹשִׁים וְאַרְבַּע דַּקּוֹת", 35: "וּשְׁלוֹשִׁים וְחָמֵשׁ דַּקּוֹת", 36: "וּשְׁלוֹשִׁים וְשֵׁשׁ דַּקּוֹת",
        37: "וּשְׁלוֹשִׁים וְשֶׁבַע דַּקּוֹת", 38: "וּשְׁלוֹשִׁים וּשְׁמוֹנֶה דַּקּוֹת", 39: "וּשְׁלוֹשִׁים וְתֵשַׁע דַּקּוֹת",
        40: "וְאַרְבָּעִים דַּקּוֹת", 41: "וְאַרְבָּעִים וְאַחַת דַּקּוֹת", 42: "וְאַרְבָּעִים וּשְׁתַּיִם דַּקּוֹת",
        43: "וְאַרְבָּעִים וְשָׁלוֹשׁ דַּקּוֹת", 44: "וְאַרְבָּעִים וְאַרְבַּע דַּקּוֹת", 45: "וְאַרְבָּעִים וְחָמֵשׁ דַּקּוֹת",
        46: "וְאַרְבָּעִים וָשֵׁשׁ דַּקּוֹת", 47: "וְאַרְבָּעִים וְשֶׁבַע דַּקּוֹת", 48: "וְאַרְבָּעִים וּשְׁמוֹנֶה דַּקּוֹת",
        49: "וְאַרְבָּעִים וְתֵשַׁע דַּקּוֹת", 50: "וַחֲמִשִּׁים דַּקּוֹת", 51: "וַחֲמִשִּׁים וְאַחַת דַּקּוֹת",
        52: "וַחֲמִשִּׁים וּשְׁתַּיִם דַּקּוֹת", 53: "וַחֲמִשִּׁים וְשָׁלוֹשׁ דַּקּוֹת", 54: "וַחֲמִשִּׁים וְאַרְבַּע דַּקּוֹת",
        55: "וַחֲמִשִּׁים וְחָמֵשׁ דַּקּוֹת", 56: "וַחֲמִשִּׁים וְשֵׁשׁ דַּקּוֹת", 57: "וַחֲמִשִּׁים וְשֶׁבַע דַּקּוֹת",
        58: "וַחֲמִשִּׁים וּשְׁמוֹנֶה דַּקּוֹת", 59: "וַחֲמִשִּׁים וְתֵשַׁע דַּקּוֹת"
    },
    seconds: {
        0: "",
        1: "וּשְׁנִיָּה אַחַת", 2: "וּשְׁתֵּי שְׁנִיּוֹת", 3: "וְשָׁלוֹשׁ שְׁנִיּוֹת", 4: "וְאַרְבַּע שְׁנִיּוֹת",
        5: "וְחָמֵשׁ שְׁנִיּוֹת", 6: "וְשֵׁשׁ שְׁנִיּוֹת", 7: "וְשֶׁבַע שְׁנִיּוֹת", 8: "וּשְׁמוֹנֶה שְׁנִיּוֹת",
        9: "וְתֵשַׁע שְׁנִיּוֹת", 10: "וְעֶשֶׂר שְׁנִיּוֹת", 11: "וְאַחַת עֶשְׂרֵה שְׁנִיּוֹת",
        12: "וּשְׁתַּיִם עֶשְׂרֵה שְׁנִיּוֹת", 13: "וְשָׁלוֹשׁ עֶשְׂרֵה שְׁנִיּוֹת", 14: "וְאַרְבַּע עֶשְׂרֵה שְׁנִיּוֹת",
        15: "וַחֲמֵשׁ עֶשְׂרֵה שְׁנִיּוֹת", 16: "וְשֵׁשׁ עֶשְׂרֵה שְׁנִיּוֹת", 17: "וְשֶׁבַע עֶשְׂרֵה שְׁנִיּוֹת",
        18: "וּשְׁמוֹנֶה עֶשְׂרֵה שְׁנִיּוֹת", 19: "וּתְשַׁע עֶשְׂרֵה שְׁנִיּוֹת", 20: "וְעֶשְׂרִים שְׁנִיּוֹת",
        21: "וְעֶשְׂרִים וְאַחַת שְׁנִיּוֹת", 22: "וְעֶשְׂרִים וּשְׁתַּיִם שְׁנִיּוֹת", 23: "וְעֶשְׂרִים וְשָׁלוֹשׁ שְׁנִיּוֹת",
        24: "וְעֶשְׂרִים וְאַרְבַּע שְׁנִיּוֹת", 25: "וְעֶשְׂרִים וְחָמֵשׁ שְׁנִיּוֹת", 26: "וְעֶשְׂרִים וְשֵׁשׁ שְׁנִיּוֹת",
        27: "וְעֶשְׂרִים וְשֶׁבַע שְׁנִיּוֹת", 28: "וְעֶשְׂרִים וּשְׁמוֹנֶה שְׁנִיּוֹת", 29: "וְעֶשְׂרִים וְתֵשַׁע שְׁנִיּוֹת",
        30: "וּשְׁלוֹשִׁים שְׁנִיּוֹת", 31: "וּשְׁלוֹשִׁים וְאַחַת שְׁנִיּוֹת", 32: "וּשְׁלוֹשִׁים וּשְׁתַּיִם שְׁנִיּוֹת",
        33: "וּשְׁלוֹשִׁים וְשָׁלוֹשׁ שְׁנִיּוֹת", 34: "וּשְׁלוֹשִׁים וְאַרְבַּע שְׁנִיּוֹת",
        35: "וּשְׁלוֹשִׁים וְחָמֵשׁ שְׁנִיּוֹת", 36: "וּשְׁלוֹשִׁים וְשֵׁשׁ שְׁנִיּוֹת",
        37: "וּשְׁלוֹשִׁים וְשֶׁבַע שְׁנִיּוֹת", 38: "וּשְׁלוֹשִׁים וּשְׁמוֹנֶה שְׁנִיּוֹת",
        39: "וּשְׁלוֹשִׁים וְתֵשַׁע שְׁנִיּוֹת", 40: "וְאַרְבָּעִים שְׁנִיּוֹת",
        41: "וְאַרְבָּעִים וְאַחַת שְׁנִיּוֹת", 42: "וְאַרְבָּעִים וּשְׁתַּיִם שְׁנִיּוֹת",
        43: "וְאַרְבָּעִים וְשָׁלוֹשׁ שְׁנִיּוֹת", 44: "וְאַרְבָּעִים וְאַרְבַּע שְׁנִיּוֹת",
        45: "וְאַרְבָּעִים וְחָמֵשׁ שְׁנִיּוֹת", 46: "וְאַרְבָּעִים וְשֵׁשׁ שְׁנִיּוֹת",
        47: "וְאַרְבָּעִים וְשֶׁבַע שְׁנִיּוֹת", 48: "וְאַרְבָּעִים וּשְׁמוֹנֶה שְׁנִיּוֹת",
        49: "וְאַרְבָּעִים וְתֵשַׁע שְׁנִיּוֹת", 50: "וַחֲמִשִּׁים שְׁנִיּוֹת",
        51: "וַחֲמִשִּׁים וְאַחַת שְׁנִיּוֹת", 52: "וַחֲמִשִּׁים וּשְׁתַּיִם שְׁנִיּוֹת",
        53: "וַחֲמִשִּׁים וְשָׁלוֹשׁ שְׁנִיּוֹת", 54: "וַחֲמִשִּׁים וְאַרְבַּע שְׁנִיּוֹת",
        55: "וַחֲמִשִּׁים וְחָמֵשׁ שְׁנִיּוֹת", 56: "וַחֲמִשִּׁים וְשֵׁשׁ שְׁנִיּוֹת",
        57: "וַחֲמִשִּׁים וְשֶׁבַע שְׁנִיּוֹת", 58: "וַחֲמִשִּׁים וּשְׁמוֹנֶה שְׁנִיּוֹת",
        59: "וַחֲמִשִּׁים וְתֵשַׁע שְׁנִיּוֹת"
    }
};

function getHebrewTimePart(timePart) {
    const now = new Date();

    if (timePart === 'h') {
        if (now.getHours() === 12) return hebrewTime.hours[12]; // שתים-עשרה
        let h = now.getHours() % 12;
        return hebrewTime.hours[h];
    }
    if (timePart === 'm') {
        return hebrewTime.minutes[now.getMinutes()];
    }
    if (timePart === 's') {
        return hebrewTime.seconds[now.getSeconds()];
    }
}

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateClock() {
    if (!hoursEl || !minutesEl || !secondsEl) return;
    hoursEl.textContent = getHebrewTimePart('h');
    minutesEl.textContent = getHebrewTimePart('m');
    secondsEl.textContent = getHebrewTimePart('s');
}

updateClock();
setInterval(updateClock, 1000);

// ── Alarm ─────────────────────────────────────────────────────────────────

const alarmHourInput = document.getElementById('alarm-hour-input');
const alarmMinuteInput = document.getElementById('alarm-minute-input');
const alarmToggle = document.getElementById('alarm-toggle');
const alarmStatus = document.getElementById('alarm-status');
const alarmSound = new Audio('sound/morning_heb_meditation.mp3');
alarmSound.preload = 'auto';
alarmSound.load();

const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
let fallbackAudioContext = null;
let alarmEnabled = false;
let alarmFired = false; // prevent re-triggering within the same minute

function setAlarmStatus(text) {
    if (alarmStatus) {
        alarmStatus.textContent = text;
    }
}

function describeAlarmState() {
    if (!alarmEnabled) return '';
    return navigator.onLine ? 'פעיל' : 'פעיל (אופליין)';
}

function ensureFallbackAudioContext() {
    if (!AudioContextCtor) return null;
    if (!fallbackAudioContext) {
        fallbackAudioContext = new AudioContextCtor();
    }
    if (fallbackAudioContext.state === 'suspended') {
        fallbackAudioContext.resume().catch(() => {});
    }
    return fallbackAudioContext;
}

function playFallbackTone() {
    const context = ensureFallbackAudioContext();
    if (!context || context.state !== 'running') {
        return false;
    }

    const start = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.24, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.7);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start);
    oscillator.stop(start + 0.7);
    return true;
}

async function primeAlarmAudio() {
    alarmSound.muted = true;
    try {
        await alarmSound.play();
        alarmSound.pause();
        alarmSound.currentTime = 0;
    } catch (error) {
        console.warn('[alarm] prime_failed', {
            online: navigator.onLine,
            name: error?.name || 'unknown',
            message: error?.message || 'unknown'
        });
    } finally {
        alarmSound.muted = false;
    }
}

async function playAlarmAudio() {
    alarmSound.currentTime = 0;
    try {
        await alarmSound.play();
        setAlarmStatus('🔔');
        return;
    } catch (error) {
        console.warn('[alarm] media_play_failed', {
            online: navigator.onLine,
            name: error?.name || 'unknown',
            message: error?.message || 'unknown'
        });
    }

    if (playFallbackTone()) {
        setAlarmStatus('🔔');
        return;
    }
    setAlarmStatus('🔕');
}

function parseAlarmTime() {
    if (!alarmHourInput || !alarmMinuteInput) return null;
    const hourDigits = alarmHourInput.value;
    const minuteDigits = alarmMinuteInput.value;
    if (hourDigits.length !== 2 || minuteDigits.length !== 2) return null;
    const h = Number.parseInt(hourDigits, 10);
    const m = Number.parseInt(minuteDigits, 10);
    if (h > 23 || m > 59) return null;
    return { h, m };
}

function validateAlarmInput() {
    if (!alarmHourInput || !alarmMinuteInput) return;

    const h = alarmHourInput.value;
    const m = alarmMinuteInput.value;

    const hourInvalid = h.length > 0 && (h.length !== 2 || Number.parseInt(h, 10) > 23);
    const minuteInvalid = m.length > 0 && (m.length !== 2 || Number.parseInt(m, 10) > 59);

    alarmHourInput.classList.toggle('invalid', hourInvalid);
    alarmMinuteInput.classList.toggle('invalid', minuteInvalid);
}

function moveCursorToEnd(inputEl) {
    const length = inputEl.value.length;
    inputEl.setSelectionRange(length, length);
}

function appendDigitsToInput(inputEl, rawDigits, maxFirstDigit) {
    const digits = rawDigits.replace(/\D/g, '');
    if (!digits) return false;

    let current = inputEl.value.replace(/\D/g, '').slice(0, 2);
    if (current.length === 2) {
        current = '';
    }

    for (const digit of digits) {
        if (current.length >= 2) break;
        if (current.length === 0 && Number.parseInt(digit, 10) > maxFirstDigit) {
            continue;
        }
        if (inputEl === alarmHourInput && current.length === 1 && current[0] === '2' && Number.parseInt(digit, 10) > 3) {
            continue;
        }
        current += digit;
    }

    inputEl.value = current;
    moveCursorToEnd(inputEl);
    return true;
}

function deleteLastDigit(inputEl) {
    const current = inputEl.value.replace(/\D/g, '').slice(0, 2);
    inputEl.value = current.slice(0, -1);
    moveCursorToEnd(inputEl);
}

function handleAlarmPartInputChange(sourceInput) {
    validateAlarmInput();
    alarmFired = false;

    if (sourceInput === alarmHourInput && alarmMinuteInput) {
        if (alarmHourInput.value.length === 2) {
            alarmMinuteInput.focus();
            moveCursorToEnd(alarmMinuteInput);
        }
    }
}

function bindAlarmPartInput(inputEl) {
    const maxFirstDigit = inputEl === alarmHourInput ? 2 : 5;

    inputEl.addEventListener('focus', () => {
        moveCursorToEnd(inputEl);
    });

    inputEl.addEventListener('click', () => {
        moveCursorToEnd(inputEl);
    });

    inputEl.addEventListener('beforeinput', event => {
        if (event.inputType === 'insertText' || event.inputType === 'insertCompositionText') {
            const accepted = appendDigitsToInput(inputEl, event.data || '', maxFirstDigit);
            event.preventDefault();
            if (accepted) handleAlarmPartInputChange(inputEl);
            return;
        }

        if (event.inputType === 'insertFromPaste' || event.inputType === 'insertReplacementText') {
            const accepted = appendDigitsToInput(inputEl, event.data || '', maxFirstDigit);
            event.preventDefault();
            if (accepted) handleAlarmPartInputChange(inputEl);
            return;
        }

        if (event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward') {
            event.preventDefault();
            deleteLastDigit(inputEl);
            handleAlarmPartInputChange(inputEl);
            return;
        }

        if (event.inputType.startsWith('insert')) {
            event.preventDefault();
        }
    });

    inputEl.addEventListener('paste', event => {
        event.preventDefault();
        const text = event.clipboardData?.getData('text') || '';
        if (appendDigitsToInput(inputEl, text, maxFirstDigit)) {
            handleAlarmPartInputChange(inputEl);
        }
    });

    inputEl.addEventListener('keydown', event => {
        if (event.key === 'Tab' || event.key === 'Shift' || event.key.startsWith('Arrow')) return;
        if (event.ctrlKey || event.metaKey || event.altKey) return;

        if (/^\d$/.test(event.key)) {
            event.preventDefault();
            if (appendDigitsToInput(inputEl, event.key, maxFirstDigit)) {
                handleAlarmPartInputChange(inputEl);
            }
            return;
        }

        if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault();
            deleteLastDigit(inputEl);
            handleAlarmPartInputChange(inputEl);
            return;
        }

        if (event.key.length === 1) {
            event.preventDefault();
        }
    });
}

function alarm(time) {
    const now = new Date();
    if (now.getHours() === time.h && now.getMinutes() === time.m) {
        if (!alarmFired) {
            alarmFired = true;
            void playAlarmAudio();
        }
    } else {
        alarmFired = false;
        setAlarmStatus(describeAlarmState());
    }
}

function checkAlarm() {
    if (!alarmEnabled) return;
    const time = parseAlarmTime();
    if (time) alarm(time);
}

if (alarmHourInput && alarmMinuteInput && alarmToggle && alarmStatus) {
    bindAlarmPartInput(alarmHourInput);
    bindAlarmPartInput(alarmMinuteInput);
    validateAlarmInput();

    alarmToggle.addEventListener('click', () => {
        const time = parseAlarmTime();
        if (!alarmEnabled && !time) {
            validateAlarmInput();
            if (alarmHourInput.value.length < 2 || Number.parseInt(alarmHourInput.value || '0', 10) > 23) {
                alarmHourInput.classList.add('invalid');
                alarmHourInput.focus();
            } else {
                alarmMinuteInput.classList.add('invalid');
                alarmMinuteInput.focus();
            }
            return;
        }

        alarmEnabled = !alarmEnabled;
        alarmToggle.classList.toggle('toggle-on', alarmEnabled);
        alarmToggle.classList.toggle('toggle-off', !alarmEnabled);

        if (!alarmEnabled) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
            setAlarmStatus('');
        } else {
            void primeAlarmAudio();
            ensureFallbackAudioContext();
            setAlarmStatus(describeAlarmState());
        }
        alarmFired = false;
    });

    window.addEventListener('online', () => {
        if (alarmEnabled) setAlarmStatus(describeAlarmState());
    });

    window.addEventListener('offline', () => {
        if (alarmEnabled) setAlarmStatus(describeAlarmState());
    });

    setInterval(checkAlarm, 1000);
} else {
    console.error('[alarm] missing_ui_elements', {
        hasHourInput: Boolean(alarmHourInput),
        hasMinuteInput: Boolean(alarmMinuteInput),
        hasToggle: Boolean(alarmToggle),
        hasStatus: Boolean(alarmStatus)
    });
}
