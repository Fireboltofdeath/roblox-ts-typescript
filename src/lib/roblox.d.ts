/// <reference lib="es2015.symbol" />

interface SymbolConstructor {
    /**
     * Overrides the binary operator `+`
     */
    readonly __add: unique symbol;

    /**
     * Overrides the binary operator `-`
     */
    readonly __sub: unique symbol;

    /**
     * Overrides the binary operator `*`
     */
    readonly __mul: unique symbol;

    /**
     * Overrides the binary operator `/`
     */
    readonly __div: unique symbol;

    /**
     * Overrides the binary operator `**`
     */
    readonly __pow: unique symbol;

    /**
     * Overrides the binary operator `%`
     */
    readonly __mod: unique symbol;
}

interface Vector {
    readonly X: number;
    readonly Y: number;
    readonly Z: number;

    [Symbol.__add](vec: vector): vector;
    [Symbol.__sub](vec: vector): vector;
    [Symbol.__mul](value: vector | number): vector;
    [Symbol.__div](value: vector | number): vector;
}

interface Thread {}

interface Userdata {}
