import { describe, it, expect, test, expectTypeOf } from 'vitest'
import { PizzeriaStyleBrest } from '@/designpattern/fabrique/PizzeriaStyleBrest'
import type { Pizzeria } from '@/designpattern/fabrique/Pizzeria'


describe('Commander une pizza', () => {
    test('Commander une Pizza au fromage de Brest', () => {
        const pizzeriaStyleBrest: Pizzeria = new PizzeriaStyleBrest()
        const pizza = pizzeriaStyleBrest.commanderPizza("fromages")
        expect(pizza.description()).toBe('Je suis une pizza au fromage de Brest')
    })

})
