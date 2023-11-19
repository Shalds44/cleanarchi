import type {Announcement} from "@/domain/entities";

export interface AnnouncementRepository {
    getAnnouncement(id: number): Announcement
    getAllAnnouncement(): [Announcement]
}