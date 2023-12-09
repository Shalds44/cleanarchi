import { describe, it, expect, test, expectTypeOf } from 'vitest'
import {CommanderPizza} from '/src/designpattern/fabrique/CommanderPizza'
import {Pizza} from '/src/designpattern/fabrique/Pizza'
import { FabriquePizza } from '@/designpattern/fabrique/FabriquePizza'


describe('Commander une pizza', () => {
    test('Commander une Pizza au fromage', () => {
        const fabriquePizza = new FabriquePizza()
        const commanderPizza = new CommanderPizza("fromages", fabriquePizza)
        expect(commanderPizza.commanderPizza()).toBeInstanceOf(Pizza)
    })
    test('Commander une Pizza aux poivrons', () => {
        const fabriquePizza = new FabriquePizza()
        const commanderPizza = new CommanderPizza("poivrons", fabriquePizza)
        expect(commanderPizza.commanderPizza()).toBeInstanceOf(Pizza)
    })
})
