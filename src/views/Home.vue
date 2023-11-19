<script setup lang="ts">
import AnnouncementComponent from '../components/Announcement.vue'
import {ref, Ref} from 'vue'
import { GetAnnouncementsUseCase } from '@/domain/usecases/GetAnnouncementsUseCase'

const listAnnouncement = ref(new GetAnnouncementsUseCase().execute())
// onMounted(async () => {
//   response = await axios.get('https://127.0.0.1:8000/api/post', {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   console.log(response)
// })


</script>
<template>
  <main>
    <div class="main-content">
      <h1>Liste Annonces</h1>
      <div class="wrapper-announcement">
        <div v-for="announcement in listAnnouncement" :key="announcement.id" class="announcement">
          <AnnouncementComponent :announcement="announcement"> </AnnouncementComponent>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
.main-content {
  padding-top: 60px;
}
.wrapper-announcement {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center center;
  row-gap: 50px;
  // column-gap: 20px;
  .announcement {
    width: 320px;
  }
}
</style>
