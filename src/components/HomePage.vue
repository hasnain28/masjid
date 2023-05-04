<template>
    <div class="container">
      <div class="card mb-3 mt-3 bg-success-subtle text-center">
        <div class="d-flex flex-column flex-lg-row justify-content-around">
          <div class="col-lg-8 col-sm-12">
            <img src="images/img1.webp" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="align-items-center card-body d-flex h-100 justify-content-center flex-column"
                 style="gap: 20px">
              <h3 class="card-title">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم</h3>
              <h1 class="card-title">ﻧَﺼْﺮٌ ﻣِّﻦ ﺍﻟﻠَّﻪِ ﻭَﻓَﺘْﺢٌ ﻗَﺮِﻳﺐٌ</h1>
              <p class="card-text lh-lg">Welcome to Sunni Masjid <br/>Faizan-e-Aisha</p>
              <a href="/donations" class="btn btn-lg btn-success col-10">Fundraising Donations</a>
            </div>
          </div>
        </div>
      </div>
      <DonateSection v-bind:is-home-page="false" />
      <div class="card mb-3 mt-3 bg-success-subtle text-center p-3">
        <h3>Prayer Schedule</h3>
        <h5>Hanafi School</h5>
        <div class="col-sm-12 d-flex justify-content-around">
          <div class="col-lg-6 col-sm-12">
            <table class="table table-bordered border-1 border-dark text-center">
              <thead class="text-bg-success">
              <tr>
                <th class="w-50">Prayer</th>
                <th>Iqamah</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="fw-bold">Fajr</td>
                <td>6:15 am</td>
              </tr>
              <tr>
                <td class="fw-bold">Zuhr</td>
                <td>1:15 pm</td>
              </tr>
              <tr>
                <td class="fw-bold">Asr</td>
                <td>4:15 pm</td>
              </tr>
              <tr>
                <td class="fw-bold">Maghrib</td>
                <td>5:24 pm</td>
              </tr>
              <tr>
                <td class="fw-bold">Isha</td>
                <td>8:00 pm</td>
              </tr>
              <tr>
                <td class="fw-bold">First Jamat</td>
                <td>1:15 pm</td>
              </tr>
              <tr>
                <td class="fw-bold">Second Jamat</td>
                <td>2:00 pm</td>
              </tr>
              <tr>
                <td class="fw-bold">Third Jamat</td>
                <td>2:45 pm</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card mb-3 mt-3 bg-success-subtle text-center">
        <div class="d-flex flex-column flex-lg-row justify-content-around">
          <div class="col-lg-6 col-sm-12">
            <img src="images/img3.webp" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="align-items-center card-body d-flex h-100 justify-content-center flex-column"
                 style="gap: 20px">
              <h3 class="card-title">How We're Helping</h3>
              <p class="card-text">The Masjid Faizan-e-Aisha is a nonprofit religious organization. The
                organization is serving hundreds of individuals every month and offers a wide variety of
                services to the community. In 2020, the Masjid Faizan-e-Aisha began to expand the scope of
                its service activities by establishing academic religious teaching in addition to Islamic
                Studies and Arabic. </p>
              <p class="card-text">Our amazing team of regulars and part-time volunteers are committed to
                helping others. We take our convictions and turn them into action. Think you would be a good
                fit? Get in touch for more information!</p>
              <p class="card-text"> Seeing a need for energetic, nonprofit work in this area, we formed our
                organization to provide sensible solutions. We've consistently grown since then, all thanks
                to the helping hands of this amazing community! </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 mt-3 bg-success-subtle text-center">
        <div class="d-flex flex-column flex-lg-row justify-content-around">
          <div class="col-lg-6 col-sm-12">
            <div class="align-items-center card-body d-flex h-100 justify-content-center flex-column"
                 style="gap: 20px">
              <h3 class="card-title">Our Humble Services</h3>
              <p class="card-text">Masjid Faizan-e-Aisha is a Sunni Masjid and Muslim Center, offers many
                services to the community:</p>
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
          <div class="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
            <img src="images/img4.webp" class="img-fluid rounded-start" alt="...">
          </div>
        </div>
      </div>
      <div class="card mb-3 mt-3 bg-success-subtle text-center">
        <div class="d-flex flex-column flex-lg-row justify-content-around">
          <div class="col-lg-6 col-sm-12">
            <img src="images/img5.webp" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="align-items-center card-body d-flex justify-content-center flex-column"
                 style="gap: 20px">
              <h3 class="card-title">Our Mission</h3>
              <p class="card-text">يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ
                الْوَسِيلَةَ وَجَاهِدُوا فِي سَبِيلِهِ لَعَلَّكُمْ تُفْلِحُونَ</p>
              <p class="card-text">O ye who believe , fear Allah and seek the means to him and strive in His
                path, that ye may prosper (35 - Sura Maida)</p>
              <p class="card-text">Masjid Faizan-e-Aisha is committed to the Islamic way of life based on the
                Qur’an and the life examples of Prophet Muhammad. We serve as a center for religious
                development, social, educational, economical, and cultural enrichment.</p>
              <p class="card-text">A community of believers adhering to the Qur’an and the sunnah of the
                Prophet Muhammad (Peace and Blessing Be Upon Him</p>
              <p class="card-text">We focus on making the maximum positive effort for our community. Our
                members and volunteers provide the momentum that helps us affect change. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 mt-3 bg-success-subtle text-center">
        <div class="d-flex flex-column flex-lg-row justify-content-around">
          <div class="col-lg-6 col-sm-12">
            <div class="align-items-center card-body d-flex justify-content-center flex-column"
                 style="gap: 20px">
              <h3 class="card-title">Stay in Touch</h3>
              <p class="card-text">Learn more about our upcoming events, fundraisers, and more!</p>
              <div class="align-items-center col-sm-12 d-flex justify-content-evenly input-group">
                <div class="col-sm-9">
                  <div class="form-floating">
                    <input type="password" id="signupEmail" class="form-control"
                           placeholder="info@faizaneaisha.org">
                    <label class="text-light-emphasis" for="signupEmail">info@faizaneaisha.org</label>
                  </div>
                </div>
                <div class="col-sm-3">
                  <button class="btn btn-success btn-lg" type="button" id="button-addon2">SIGN UP</button>
                </div>
              </div>
              <p class="card-text">MASJID FAIZAN-E-AISHA<br/>2 Heitz Place, Hicksville, New York 11801</p>
              <p class="card-text"> فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</p>
              <p class="card-text">Haq Khuleeq <br/> Nakshbandi, Qadri, Soharvardi, Chishti
                Slasilay-e-Tareekat, AhliSunnahWalJamaat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import DonateSection from './DonateSection.vue'
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    DonateSection
  }
}
</script>
