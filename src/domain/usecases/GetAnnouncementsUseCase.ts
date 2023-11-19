import type { Announcement } from '@/domain/entities'

import {ref, Ref} from 'vue'
import {AnnouncementRepository} from "@/domain/ports/repositories/AnnouncementRepository";
export class GetAnnouncementsUseCase {

    execute(): Ref{
        const listAnnouncement = this.AnnouncementRepository.getAllAnnouncement()
        return listAnnouncement
    }
}