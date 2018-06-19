<template>
<div class="uk-container uk-container-large">
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
      <nuxt-link class="uk-navbar-item uk-logo" to="/">
        <img src="/images/tmcc-logo.svg" uk-svg>
      </nuxt-link>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item uk-visible@s">
        <div>+44 (0) 1372 807189</div>
      </div>
      <div class="uk-navbar-item uk-visible@s">
        <div><a href="mailto:info@themarketingcampaigncompany.co.uk">Email us</a></div>
      </div>
      <a class="uk-navbar-toggle tmcc-nav-toggle uk-hidden@s" href="#" uk-toggle="target: #OffCanvasMenu">
        <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Contact Us</span>
      </a>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'SiteNavbar'
}
</script>

<style lang="scss">
.uk-logo {
    padding: 0;
    img {
        width: 150px;
    }
    svg {
        width: 150px;
    }

}
</style>
