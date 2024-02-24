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
              <p class="card-text lh-lg">Welcome to  <br/>Darbar-e-Aliya Mohra Sharif</p>
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
                <td class="fw-bold">Jummah Prayer</td>
                <td>2:00 pm</td>
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
              <p class="card-text">Darbar e Aliya Mohra Sharif, a nonprofit religious institution, extends its services to hundreds of individuals monthly, 
                offering a diverse range of community-oriented initiatives.Darbar e Aliya Mohra Sharif embarked on a significant expansion of its service portfolio,
                 introducing academic religious teachings to complement its existing programs in Islamic Studies and Arabic. </p>
              <p class="card-text">Our dedicated team, consisting of both regular members and part-time volunteers, is passionately committed to aiding others.
                 We channel our strong beliefs into impactful actions. If you share our dedication, 
                 we encourage you to reach out for more details!</p>
              <p class="card-text"> Recognizing the need for dynamic nonprofit efforts in our region,
                 we established our organization to offer practical solutions. Our growth has been continual,
                  made possible by the supportive hands of this remarkable community! </p>
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
              <p class="card-text">Darbar-e-Aliya Mohra Sharif is a Holy Shrine, offers many
                services to the community:</p>
              <ul class="list-unstyled">
                <li>Daily Prayers</li>
                <li>Weekly Programs with Islamic Studies and Arabic</li>
                <li>Taraweeh</li>
                <li>Adult Quranic Classes</li>
                <li>Children Quranic Classes</li>
                <li>Islamic Studies and Arabic School</li>
                <li>Sisters Classes</li>
                <li>Counseling</li>
                <li>Tafseer</li>
                <li>Milad Shareef Programs</li>
                <li>Annual Milad-un-Nabi in April and October </li>
                <li>Weekly Educational Lectures and Halaqas</li>
                <li>Financial Assistance to the needy when funds are available. Eligibility requirements
                  apply.
                </li>
                <li>Provides free meals</li>
                <li>Seminars and Conferences</li>
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
              <p class="card-text">Darbar-e-Aliya Mohra Sharif is committed to the Islamic way of life based on the
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
                    <label class="text-light-emphasis" for="signupEmail">info@MohraSharifRawalpindi.org</label>
                  </div>
                </div>
                <div class="col-sm-3">
                  <button class="btn btn-success btn-lg" type="button" id="button-addon2">SIGN UP</button>
                </div>
              </div>
              <p class="card-text">DARBAR-E-ALIYA MOHRA SHARIF<br/> Khyaban-e-SirSyed Sector 4B Rawalpindi</p>
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
