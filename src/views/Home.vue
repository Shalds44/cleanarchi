<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AnnouncementComponent from '../components/Announcement.vue'
import axios from 'axios'
let response = ref(null)

interface Announcement {
  id: number
  title: string
  city: string
  address: string
  text: string
}
let listAnnouncement = ref<Array<Announcement>>([])

const Announcement = {
  id: 5241,
  title: 'Tomates',
  city: 'Nantes',
  address: '4 rue de la paix',
  text: 'Lorem ipsum dolor sit amet. Quisque quam elit, viverra in placerat eu, posuere vitae ipsum. Duis pulvinar suscipit elit vitae consequat. Proin sit amet viverra dolor. Mauris sit amet vehicula magna, faucibus ultrices augue. Praesent non congue eros, euismod tempu'
}
for (let i = 0; i <= 20; i++) {
  listAnnouncement.value.push(Announcement)
}
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
        <div v-for="announcement in listAnnouncement" class="announcement">
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
