//% color="#b5632e" icon="\uf108" weight=50
//% block="Javascript Extras"
namespace javaExtra {
    /**
     * An error happens with the panic code that inputted.
     */
    //% blockId="panic_block"
    //% block="panic code $code"
    export function panic_block(code: number) {
        control.panic(code)
    }
    /**
     * An error happens if the condition is false.
     */
    //% blockId="assert_block"
    //% block="assert $cond code $code"
    export function assert_block(cond: boolean, code: number) {
        control.assert(cond, code)
    }
    /**
     * An error happens
     */
    //% blockId="error_block3"
    //% block="make error: expected 1 argument, but got 0"
    export function error_block3(cond: boolean) {
        console.log(cond)
    }
    /**
     * An error happens
     */
    //% blockId="error_block"
    //% block="make error: expected 2 arguments, but got 0"
    export function error_block(cond: boolean, code: number) {
        control.assert(cond, code)
    }
    /**
     * An error happens
     */
    //% blockId="error_block2"
    //% block="make error: expected 3 arguments, but got 0"
    export function error_block2(cond: boolean, code: number, corpse: string) {
        control.assert(cond, code)
    }
    /**
     * An error happens
     */
    //% blockId="error_block4"
    //% block="make error: expected 4 arguments, but got 0"
    export function error_block4(cond: boolean, code: number, corpse: string, stoplookingatthecode: number) {
        control.assert(cond, code)
    }
}

