import {expect, expectTypeOf, test} from 'vitest'

import {AnnouncementRepositoryInMemory} from "./AnnouncementRepositoryInMemory";

test("test que l'attribut initial_Announcement est un taleau", () => {
    expectTypeOf(AnnouncementRepositoryInMemory.INITIAL_ANNOUCEMENTS).toBeArray()
})