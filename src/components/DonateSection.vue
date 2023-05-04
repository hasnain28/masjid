<template>
  <div v-if="isHomePage" class="card mb-3 mt-3 p-3 bg-success-subtle d-flex justify-content-center align-items-center">
    <div class="card-title">
      <h3 class="text-success">ﺩﺭﻭﺩ شريف
      </h3>
    </div>
    <div class="card-body col-md-8 col-sm-12 text-center">
      <h3>
        اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَّ عَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ
        إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
      </h3>
      <h3>
        اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَّ عَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ
        إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيد
      </h3>
      <p>
        The organization is serving hundreds of individuals every month and offers a wide variety of services to the
        community. In 2020, the Masjid Faizan-e-Aisha began to expand the scope of its service activities by
        establishing academic religious teaching in addition to Islamic Studies and Arabic.
      </p>
      <p>
        Masjid Faizan-e-Aisha, a Sunni Masjid and Muslim Center, offers many services to the community including:
      </p>
      <ul class="list-unstyled">
        <li>Daily Prayers</li>
        <li>Weekly Programs with Islamic Studies and Arabic</li>
        <li>Taraweeh</li>
        <li>Adult Quranic Classes</li>
        <li>Children Quranic Classes</li>
        <li>Friday Islamic Studies and Arabic School</li>
        <li>Sisters Classes</li>
        <li>Counseling</li>
        <li>Weekly Tafseer</li>
        <li>Youth Events with special guest speakers</li>
        <li>Community BBQ’s</li>
        <li>Milad Shareef Programs</li>
        <li>Annual Milad-un-Nabi Parade in Nassau</li>
        <li>Weekly Educational Lectures and Halaqas</li>
        <li>Financial Assistance to the needy when funds are available. Eligibility requirements
          apply.
        </li>
        <li>Provides free meals every Friday night between 8:30 PM to 10:00 PM</li>
        <li>Seminars and Conferences</li>
        <li>Moonsighting</li>
        <li>Nikah Services</li>
        <li>Funeral Services</li>
      </ul>
    </div>
  </div>
  <div v-if="isHomePage" class="card mb-3 mt-3 p-3 bg-success-subtle d-flex justify-content-center align-items-center">
    <div class="card-title">

      <h3 class="text-success">Learn Quran-ul-Kareem</h3>
    </div>
    <div class="card-body col-md-8 col-sm-12 text-center">
      <p>
        The Prophet Muhammad (Sallallaho Alihi WaAlihi WaSallam) said:
      </p>
      <p>
        “The best amongst you are those who learn the Quraan and teach it to others.”
      </p>
      <p>
        (Bukhari)
      </p>
      <p>
        It is important to learn Quran-ul-Kareem for every Muslim. Masjid Faizan-e-Aisha provides best opportunity for
        everyone to learn Quran with proper Tajveed (pronunciation).
      </p>
    </div>
  </div>
  <div v-if="isHomePage" class="card mb-3 mt-3 p-3 bg-success-subtle d-flex justify-content-center align-items-center">
    <div class="card-title">

      <h3 class="text-success">Quran Class</h3>
    </div>
    <div class="card-body col-md-8 col-sm-12 text-center">
      <p>
        Masjid Faizan-e-Aisha provides daily Quran classes for the beginners. Starting from Qaida to Kirat. Children are
        encouraged to memories the Quran to be lead and a roll-model for others here and hereafter.
      </p>
      <p>
        Please look around your home for the next Hafiz-e-Quran to be our roll model. Masjid Faizan-e-Aisha will honored
        to have more and more children in Hafiz-e-Quran program.
      </p>
    </div>
  </div>
  <div v-if="!isHomePage" class="card mb-3 mt-3 bg-success-subtle text-center">
    <div class="d-flex flex-column flex-lg-row justify-content-around">
      <div class="col-lg-6 col-sm-12">
        <img src="images/img2.webp" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="align-items-center card-body d-flex h-100 justify-content-center flex-column"
             style="gap: 20px">
          <h3 class="card-title">DONATE FOR YOUR MASJID.</h3>
          <p class="card-text lh-lg">Your support and contributions will enable us to meet our goals and
            improve conditions. Your generous donation will fund our mission.</p>
          <a href="/donations" class="btn btn-lg btn-success col-10">DONATE NOW</a>
          <img class="col-4"
               src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonateSection',
  props: {
    isHomePage: Boolean
  }
}
</script>

