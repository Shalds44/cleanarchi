import type { Announcement } from '@/domain/entities'

import { AnnouncementRepository } from "@/domain/ports/repositories/AnnouncementRepository";

export class GetAnnouncementsUseCase {

    private announcementRepository: AnnouncementRepository

    constructor(announcementRepository: AnnouncementRepository) {
        this.announcementRepository = announcementRepository
    }
    public execute(): [Announcement] {
        //je veux une liste d'annonce. Je veux demander à mon gestionnaire d'annonce de me fournir cette liste.
        const listAnnouncement = this.announcementRepository.getAllAnnouncement()
        return listAnnouncement
    }
}