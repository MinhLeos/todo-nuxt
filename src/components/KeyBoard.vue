<template>
    <div id="kbd" class="keyboard">
        <div class="keyboard__row">
            <div id="KeyEsc" class="keyboard__key keyboard__key--w1-5">Esc</div>
            <div id="KeyF1" class="keyboard__key">F1</div>
            <div id="KeyF2" class="keyboard__key">F2</div>
            <div id="KeyF3" class="keyboard__key">F3</div>
            <div id="KeyF4" class="keyboard__key">F4</div>
            <div id="KeyF5" class="keyboard__key">F5</div>
            <div id="KeyF6" class="keyboard__key">F6</div>
            <div id="KeyF7" class="keyboard__key">F7</div>
            <div id="KeyF8" class="keyboard__key">F8</div>
            <div id="KeyF9" class="keyboard__key">F9</div>
            <div id="KeyF10" class="keyboard__key">F10</div>
            <div id="KeyF11" class="keyboard__key">F11</div>
            <div id="KeyF12" class="keyboard__key">F12</div>
            <div id="KeyLock" class="keyboard__key keyboard__key--w1-5">Lock</div>
        </div>
        <div class="keyboard__row">
            <div id="Backquote" class="keyboard__key">`</div>
            <div v-for="number in numbers" :key="number.id" :id="number.id" class="keyboard__key"
                :class="{ active: number.active }">{{ number.value }}</div>
            <!-- <div v-for="(value, key) in numbers" :key="key" :id="value.id" class="keyboard__key" :class="{active: value.active}">{{ key }}</div> -->
            <div id="Minus" class="keyboard__key">-</div>
            <div id="Equal" class="keyboard__key">=</div>
            <div id="Backspace" class="keyboard__key keyboard__key--w2">Backspace</div>
        </div>
        <div class="keyboard__row">
            <div class="keyboard__key keyboard__key--w1-5">Tab</div>
            <div id="KeyQ" class="keyboard__key">Q</div>
            <div id="KeyW" class="keyboard__key">W</div>
            <div id="KeyE" class="keyboard__key">E</div>
            <div id="KeyR" class="keyboard__key">R</div>
            <div id="KeyT" class="keyboard__key">T</div>
            <div id="KeyY" class="keyboard__key">Y</div>
            <div id="KeyU" class="keyboard__key">U</div>
            <div id="KeyI" class="keyboard__key">I</div>
            <div id="KeyO" class="keyboard__key">O</div>
            <div id="KeyP" class="keyboard__key">P</div>
            <div class="keyboard__key">[</div>
            <div class="keyboard__key">]</div>
            <div class="keyboard__key keyboard__key--w1-5">\</div>
        </div>
        <div class="keyboard__row">
            <div id="CapsLock" class="keyboard__key keyboard__key--w1-75">Caps Lock</div>
            <div id="KeyA" class="keyboard__key">A</div>
            <div id="KeyS" class="keyboard__key">S</div>
            <div id="KeyD" class="keyboard__key">D</div>
            <div id="KeyF" class="keyboard__key">F</div>
            <div id="KeyG" class="keyboard__key">G</div>
            <div id="KeyH" class="keyboard__key">H</div>
            <div id="KeyJ" class="keyboard__key">J</div>
            <div id="KeyK" class="keyboard__key">K</div>
            <div id="KeyL" class="keyboard__key">L</div>
            <div class="keyboard__key">;</div>
            <div class="keyboard__key">''</div>
            <div id="Enter" class="keyboard__key keyboard__key--w2-25">Enter</div>
        </div>
        <div class="keyboard__row">
            <div id="ShiftLeft" class="keyboard__key keyboard__key--w2-25">Shift</div>
            <div id="KeyZ" class="keyboard__key">Z</div>
            <div id="KeyX" class="keyboard__key">X</div>
            <div id="KeyC" class="keyboard__key">C</div>
            <div id="KeyV" class="keyboard__key">V</div>
            <div id="KeyB" class="keyboard__key">B</div>
            <div id="KeyN" class="keyboard__key">N</div>
            <div id="KeyM" class="keyboard__key">M</div>
            <div class="keyboard__key">,</div>
            <div class="keyboard__key">.</div>
            <div class="keyboard__key">/</div>
            <div id="ShiftRight" class="keyboard__key keyboard__key--w2-75">Shift</div>
        </div>
        <div class="keyboard__row">
            <div id="ControlLeft" class="keyboard__key">Ctrl</div>
            <div id="WindowLeft" class="keyboard__key">Window</div>
            <div id="AltLeft" class="keyboard__key">Alt</div>
            <div id="Space" class="keyboard__key keyboard__key--space">Space</div>
            <div id="AltRight" class="keyboard__key">Alt</div>
            <div id="WindowLeft" class="keyboard__key keyboard__key--w1-25">Window</div>
            <div id="ControlRight" class="keyboard__key keyboard__key--w1-25">Ctrl</div>
            <div id="ArrowLeft" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-left">Left</div>
            <div id="ArrowUp" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-up">Up</div>
            <div id="ArrowDown" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-down">Down</div>
            <div id="ArrowRight" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-right">Right</div>
        </div>
    </div>
</template>

<script setup>

const numbers = reactive([
    {
        value: 1, active: false, id: 'Digit1'
    },
    {
        value: 2, active: false, id: 'Digit2'
    },
    {
        value: 3, active: false, id: 'Digit3'
    },
    {
        value: 4, active: false, id: 'Digit4'
    },
    {
        value: 5, active: false, id: 'Digit5'
    },
    {
        value: 6, active: false, id: 'Digit6'
    },
    {
        value: 7, active: false, id: 'Digit7'
    },
    {
        value: 8, active: false, id: 'Digit8'
    },
    {
        value: 9, active: false, id: 'Digit9'
    },
    {
        value: 0, active: false, id: 'Digit0'
    },
])
const isLoaded = useState('is-loaded')
// const numbers = reactive({
//     1: { active: false, id: 'Digit1'},
//     2: { active: false, id: 'Digit2'},
//     3: { active: false, id: 'Digit3'},
//     4: { active: false, id: 'Digit4'},
//     5: { active: false, id: 'Digit5'},
//     6: { active: false, id: 'Digit6'},
//     7: { active: false, id: 'Digit7'},
//     8: { active: false, id: 'Digit8'},
//     9: { active: false, id: 'Digit9'},
//     0: { active: false, id: 'Digit0'},
// })
function handleKeyDown(e) {
    // if (e.keyCode >= 48 && e.keyCode <= 57) {
    //    numbers[e.keyCode - 48].active = true
    // }
    const value = e.keyCode - 48
    if (value >= 0 && value <= 9) {
        const findKey = numbers.find(number => number.value === value)
        findKey.active = true
    }
}
function handleKeyUp(e) {
    isLoaded.value = true
    // if (e.keyCode >= 48 && e.keyCode <= 57) {
    //     numbers[e.keyCode - 48].active = false
    //     navigateTo(`/todo/${e.keyCode - 48}/details`)
    // }
    const value = e.keyCode - 48
    if (value >= 0 && value <= 9) {
        const findKey = numbers.find(number => number.value === value)
        findKey.active = false
        navigateTo(`/todo/${value}/details`)
    }
}
onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
})
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('keyup', handleKeyUp)
})

</script>

<style lang="scss" scoped>
@import '../assets/scss/keyboard.scss'
</style>