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
            <div id="Backquote" class="keyboard__key" v-keypress :data-key="key" data-value="Backquote">`</div>
            <div id="Key1" class="keyboard__key" v-keypress :data-key="key" data-value="Digit1">1</div>
            <div id="Key2" class="keyboard__key" v-keypress :data-key="key" data-value="Digit2">2</div>
            <div id="Key3" class="keyboard__key" v-keypress :data-key="key" data-value="Digit3">3</div>
            <div id="Key4" class="keyboard__key" v-keypress :data-key="key" data-value="Digit4">4</div>
            <div id="Key5" class="keyboard__key" v-keypress :data-key="key" data-value="Digit5">5</div>
            <div id="Key6" class="keyboard__key" v-keypress :data-key="key" data-value="Digit6">6</div>
            <div id="Key7" class="keyboard__key" v-keypress :data-key="key" data-value="Digit7">7</div>
            <div id="Key8" class="keyboard__key" v-keypress :data-key="key" data-value="Digit8">8</div>
            <div id="Key9" class="keyboard__key" v-keypress :data-key="key" data-value="Digit9">9</div>
            <div id="Key0" class="keyboard__key" v-keypress :data-key="key" data-value="Digit0">0</div>
            <!-- <div v-for="number in numbers" :key="number.id" :id="number.id" class="keyboard__key"
                :class="{ active: number.active }">{{ number.value }}</div> -->
            <!-- <div v-for="(value, key) in numbers" :key="key" :id="value.id" class="keyboard__key" :class="{active: value.active}">{{ key }}</div> -->
            <div id="Minus" class="keyboard__key" v-keypress :data-key="key" data-value="Minus">-</div>
            <div id="Equal" class="keyboard__key" v-keypress :data-key="key" data-value="Equal">=</div>
            <div id="Backspace" class="keyboard__key keyboard__key--w2" v-keypress :data-key="key" data-value="Backspace">Backspace</div>
        </div>
        <div class="keyboard__row">
            <div class="keyboard__key keyboard__key--w1-5" v-keypress :data-key="key" data-value="Tab">Tab</div>
            <div id="KeyQ" class="keyboard__key" v-keypress :data-key="key" data-value="KeyQ">Q</div>
            <div id="KeyW" class="keyboard__key" v-keypress :data-key="key" data-value="KeyW">W</div>
            <div id="KeyE" class="keyboard__key" v-keypress :data-key="key" data-value="KeyE">E</div>
            <div id="KeyR" class="keyboard__key" v-keypress :data-key="key" data-value="KeyR">R</div>
            <div id="KeyT" class="keyboard__key" v-keypress :data-key="key" data-value="KeyT">T</div>
            <div id="KeyY" class="keyboard__key" v-keypress :data-key="key" data-value="KeyY">Y</div>
            <div id="KeyU" class="keyboard__key" v-keypress :data-key="key" data-value="KeyU">U</div>
            <div id="KeyI" class="keyboard__key" v-keypress :data-key="key" data-value="KeyI">I</div>
            <div id="KeyO" class="keyboard__key" v-keypress :data-key="key" data-value="KeyO">O</div>
            <div id="KeyP" class="keyboard__key" v-keypress :data-key="key" data-value="KeyP">P</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="BracketLeft">[</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="BracketRight">]</div>
            <div class="keyboard__key keyboard__key--w1-5" v-keypress :data-key="key" data-value="Backslash">\</div>
        </div>
        <div class="keyboard__row">
            <div id="CapsLock" class="keyboard__key keyboard__key--w1-75" v-keypress :data-key="key" data-value="CapsLock">Caps Lock</div>
            <div id="KeyA" class="keyboard__key" v-keypress :data-key="key" data-value="KeyA">A</div>
            <div id="KeyS" class="keyboard__key" v-keypress :data-key="key" data-value="KeyS">S</div>
            <div id="KeyD" class="keyboard__key" v-keypress :data-key="key" data-value="KeyD">D</div>
            <div id="KeyF" class="keyboard__key" v-keypress :data-key="key" data-value="KeyF">F</div>
            <div id="KeyG" class="keyboard__key" v-keypress :data-key="key" data-value="KeyG">G</div>
            <div id="KeyH" class="keyboard__key" v-keypress :data-key="key" data-value="KeyH">H</div>
            <div id="KeyJ" class="keyboard__key" v-keypress :data-key="key" data-value="KeyJ">J</div>
            <div id="KeyK" class="keyboard__key" v-keypress :data-key="key" data-value="KeyK">K</div>
            <div id="KeyL" class="keyboard__key" v-keypress :data-key="key" data-value="KeyL">L</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="Semicolon">;</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="Quote">'</div>
            <div id="Enter" class="keyboard__key keyboard__key--w2-25" v-keypress :data-key="key" data-value="Enter">Enter</div>
        </div>
        <div class="keyboard__row">
            <div id="ShiftLeft" class="keyboard__key keyboard__key--w2-25" v-keypress :data-key="key" data-value="ShiftLeft">Shift</div>
            <div id="KeyZ" class="keyboard__key" v-keypress :data-key="key" data-value="KeyZ">Z</div>
            <div id="KeyX" class="keyboard__key" v-keypress :data-key="key" data-value="KeyX">X</div>
            <div id="KeyC" class="keyboard__key" v-keypress :data-key="key" data-value="KeyC">C</div>
            <div id="KeyV" class="keyboard__key" v-keypress :data-key="key" data-value="KeyV">V</div>
            <div id="KeyB" class="keyboard__key" v-keypress :data-key="key" data-value="KeyB">B</div>
            <div id="KeyN" class="keyboard__key" v-keypress :data-key="key" data-value="KeyN">N</div>
            <div id="KeyM" class="keyboard__key" v-keypress :data-key="key" data-value="KeyM">M</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="Comma">,</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="Period">.</div>
            <div class="keyboard__key" v-keypress :data-key="key" data-value="Slash">/</div>
            <div id="ShiftRight" class="keyboard__key keyboard__key--w2-75" v-keypress :data-key="key" data-value="ShiftRight">Shift</div>
        </div>
        <div class="keyboard__row">
            <div id="ControlLeft" class="keyboard__key" v-keypress :data-key="key" data-value="ControlLeft">Ctrl</div>
            <div id="WindowLeft" class="keyboard__key" v-keypress :data-key="key" data-value="MetaLeft">Window</div>
            <div id="AltLeft" class="keyboard__key" v-keypress :data-key="key" data-value="AltLeft">Alt</div>
            <div id="Space" class="keyboard__key keyboard__key--space" v-keypress :data-key="key" data-value="Space">Space</div>
            <div id="AltRight" class="keyboard__key" v-keypress :data-key="key" data-value="AltRight">Alt</div>
            <div id="WindowLeft" class="keyboard__key keyboard__key--w1-25" v-keypress :data-key="key" data-value="MetaRight">Window</div>
            <div id="ControlRight" class="keyboard__key keyboard__key--w1-25" v-keypress :data-key="key" data-value="ControlRight">Ctrl</div>
            <div id="ArrowLeft" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-left" v-keypress :data-key="key" data-value="ArrowLeft">Left</div>
            <div id="ArrowUp" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-up" v-keypress :data-key="key" data-value="ArrowUp">Up</div>
            <div id="ArrowDown" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-down" v-keypress :data-key="key" data-value="ArrowDown">Down</div>
            <div id="ArrowRight" class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-right" v-keypress :data-key="key" data-value="ArrowRight">Right</div>
        </div>
    </div>
</template>

<script setup>

const key = ref('')
const isLoaded = useState('is-loaded')

function handleKeyDown(e) {
    key.value = e.code
    // key.value = e.key
    // key.value = String.fromCharCode(e.keyCode)
    // console.log('123', String.fromCharCode(e.keyCode))
    // console.log('1234', e.key.charCodeAt(0))
    // console.log('e.key', e.key)
    // console.log('e.keyCode', e.keyCode)
    // console.log('e', e)
}
function handleKeyUp(e) {
    isLoaded.value = true
    key.value = ''
    // console.log('1234', e)
    const value = e.keyCode - 48
    if (value >= 0 && value <= 9) {
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
@import '~/assets/scss/keyboard.scss'
</style>