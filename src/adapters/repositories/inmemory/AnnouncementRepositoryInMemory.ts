import type {AnnouncementRepository} from "@/domain/ports/repositories/AnnouncementRepository";
import type {Announcement} from "@/domain/entities";

export class AnnouncementRepositoryInMemory implements AnnouncementRepository {

    const INITIAL_ANNOUCEMENTS: [Announcement] = [
        {id: 5241, title: 'Tomates', city: 'Nantes', address: '4 rue de la paix', text: 'Lorem ipsum dolor sit ame.pu'},
        {id: 5242, title: 'Concombres', city: 'Bourges', address: '45 rue de la paix', text: 'Lorem ipsum dolor sit ame.pu'},
        {id: 5243, title: 'Courgettes', city: 'Paris', address: '96 rue de la paix', text: 'Lorem ipsum dolor sit ame.pu'},
        {id: 5244, title: 'Poireaux', city: 'Nort-sur-erdre', address: '78 rue de la paix', text: 'Lorem ipsum dolor sit ame.pu'},
    ]

    getAllAnnouncement(): [Announcement] {
        return INITIAL_ANNOUCEMENTS;
    }

    getAnnouncement(id: number): Announcement {
        const announcement = this.INITIAL_ANNOUCEMENTS.find((annoucement) => annoucement.id === id)
        return announcement;
    }

}