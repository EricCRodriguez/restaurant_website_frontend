<template>
  <div class="home">
    <body>
      <div class="about-heading-content">
        <div class="row">
          <div class="col-xl-9 col-lg-10 mx-auto">
            <div class="bg-faded rounded p-5">
              <h2 class="section-heading mb-4"></h2>
              <h1 class="site-heading text-center text-black d-none d-lg-block">
                <span class="site-heading-upper text-primary text-white mb-3"></span>
                <span class="site-heading-lower">El Cocina Fresca</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section class="page-section clearfix">
        <div class="container">
          <div class="intro">
            <img class="peopleeating-img img-fluid mb-3 mb-lg-0 rounded" src="img/peopleeating.jpg" alt="" />
          </div>
        </div>
      </section>

      <section class="page-section cta">
        <div class="container">
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <div class="cta-inner text-center rounded">
                <h2 class="section-heading mb-5">
                  <span class="section-heading-upper">Come On In</span>
                  <span class="section-heading-lower">We're Open</span>
                </h2>
                <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Sunday
                    <span class="ml-auto">Closed</span>
                  </li>
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Monday
                    <span class="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Tuesday
                    <span class="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Wednesday
                    <span class="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Thursday
                    <span class="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Friday
                    <span class="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li class="list-unstyled-item list-hours-item d-flex">
                    Saturday
                    <span class="ml-auto">9:00 AM to 5:00 PM</span>
                  </li>
                </ul>
                <p class="address mb-5">
                  <em>
                    <strong>1116 Orchard Street</strong>
                    <br />
                    Chicago, Illinois
                  </em>
                </p>
                <p class="mb-0">
                  <small>
                    <em>Call Anytime</em>
                  </small>
                  <br />
                  (312) 555-8468
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </div>
</template>
<style></style>
<script>
export default {
  data: function() {
    return {
      message: "Welcome to El Cocina Fresca!"
    };
  },
  created: function() {},
  methods: {}
};
</script>
