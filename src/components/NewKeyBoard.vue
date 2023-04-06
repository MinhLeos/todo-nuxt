<template>
    <div class="container">
        <div class="row">
            <div class="keyboard keyboard-w--6"><p>Esc</p></div>
            <div class="keyboard"><p>F1</p></div>
            <div class="keyboard"><p>F2</p></div>
            <div class="keyboard"><p>F3</p></div>
            <div class="keyboard"><p>F4</p></div>
            <div class="keyboard"><p>F5</p></div>
            <div class="keyboard"><p>F6</p></div>
            <div class="keyboard"><p>F7</p></div>
            <div class="keyboard"><p>F8</p></div>
            <div class="keyboard"><p>F9</p></div>
            <div class="keyboard"><p>F10</p></div>
            <div class="keyboard"><p>F11</p></div>
            <div class="keyboard"><p>F12</p></div>
            <div class="keyboard keyboard-w--6"><p>Lock</p></div>
        </div>
        <div class="row">
            <div class="keyboard"><p>`</p></div>
            <!-- <div class="keyboard keyboard-key--0"><p>0</p></div>
            <div class="keyboard"><p>1</p></div>
            <div class="keyboard"><p>2</p></div>
            <div class="keyboard"><p>3</p></div>
            <div class="keyboard"><p>4</p></div>
            <div class="keyboard"><p>5</p></div>
            <div class="keyboard"><p>6</p></div>
            <div class="keyboard"><p>7</p></div>
            <div class="keyboard"><p>8</p></div>
            <div class="keyboard"><p>9</p></div> -->
            <div v-for="(value, key) in numbers" :key="key" :id="value.id" class="keyboard" :class="{active: value.active, 'keyboard-key--0': key == 0}">{{ key }}</div>
            <div class="keyboard"><p>-</p></div>
            <div class="keyboard"><p>=</p></div>
            <div class="keyboard keyboard-w--8"><p>Backspace</p></div>
        </div>
        <div class="row">
            <div class="keyboard keyboard-w--6"><p>Tab</p></div>
            <div class="keyboard"><p>Q</p></div>
            <div class="keyboard"><p>W</p></div>
            <div class="keyboard"><p>E</p></div>
            <div class="keyboard"><p>R</p></div>
            <div class="keyboard"><p>T</p></div>
            <div class="keyboard"><p>Y</p></div>
            <div class="keyboard"><p>U</p></div>
            <div class="keyboard"><p>I</p></div>
            <div class="keyboard"><p>O</p></div>
            <div class="keyboard"><p>P</p></div>
            <div class="keyboard"><p>[</p></div>
            <div class="keyboard"><p>]</p></div>
            <div class="keyboard keyboard-w--6"><p>\</p></div>
        </div>
        <div class="row">
            <div class="keyboard keyboard-w--8"><p>Caps Lock</p></div>
            <div class="keyboard"><p>A</p></div>
            <div class="keyboard"><p>S</p></div>
            <div class="keyboard"><p>D</p></div>
            <div class="keyboard"><p>F</p></div>
            <div class="keyboard"><p>G</p></div>
            <div class="keyboard"><p>H</p></div>
            <div class="keyboard"><p>J</p></div>
            <div class="keyboard"><p>K</p></div>
            <div class="keyboard"><p>L</p></div>
            <div class="keyboard"><p>;</p></div>
            <div class="keyboard"><p>'</p></div>
            <div class="keyboard keyboard-w--8"><p>Enter</p></div>
        </div>
        <div class="row">
            <div class="keyboard keyboard-w--10"><p>Shift</p></div>
            <div class="keyboard"><p>Z</p></div>
            <div class="keyboard"><p>X</p></div>
            <div class="keyboard"><p>C</p></div>
            <div class="keyboard"><p>V</p></div>
            <div class="keyboard"><p>B</p></div>
            <div class="keyboard"><p>N</p></div>
            <div class="keyboard"><p>M</p></div>
            <div class="keyboard"><p>,</p></div>
            <div class="keyboard"><p>.</p></div>
            <div class="keyboard"><p>/</p></div>
            <div class="keyboard keyboard-w--10"><p>Shift</p></div>
        </div>
        <div class="row">
            <div class="keyboard"><p>Ctrl</p></div>
            <div class="keyboard"><p>Window</p></div>
            <div class="keyboard"><p>Alt</p></div>
            <div class="keyboard keyboard-w--24"><p>Space</p></div>
            <div class="keyboard"><p>Alt</p></div>
            <div class="keyboard"><p>Window</p></div>
            <div class="keyboard"><p>Ctrl</p></div>
            <div class="keyboard keyboard-h--1-up"><p>Up</p></div>
            <div class="keyboard keyboard-h--1-left"><p>Left</p></div>,
            <div class="keyboard keyboard-h--1-down"><p>Down</p></div>
            <div class="keyboard keyboard-h--1-right"><p>Right</p></div>
        </div>
    </div>
</template>

<script setup>
    const numbers = reactive({
        0: { active: false, id: 'Digit0'},
        1: { active: false, id: 'Digit1'},
        2: { active: false, id: 'Digit2'},
        3: { active: false, id: 'Digit3'},
        4: { active: false, id: 'Digit4'},
        5: { active: false, id: 'Digit5'},
        6: { active: false, id: 'Digit6'},
        7: { active: false, id: 'Digit7'},
        8: { active: false, id: 'Digit8'},
        9: { active: false, id: 'Digit9'},
    })
    const isLoaded = useState('is-loaded')

    function handleKeyDown(e) {
        if (e.keyCode >= 48 && e.keyCode <= 57) {
        numbers[e.keyCode - 48].active = true
        }
    }
    function handleKeyUp(e) {
        isLoaded.value = true
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            numbers[e.keyCode - 48].active = false
            navigateTo(`/todo/${e.keyCode - 48}/details`)
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
@import '~/assets/scss/newkeyboard.scss'
</style>