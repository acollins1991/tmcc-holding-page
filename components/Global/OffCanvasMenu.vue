<template>
<div id="OffCanvasMenu" uk-offcanvas="flip: true">
  <div class="uk-offcanvas-bar">
    <button class="uk-offcanvas-close" type="button" uk-close></button>
    <p>+44 (0) 1372 807189</p>
    <p>Email Us</p>
    <form>
      <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Input">
      </div>
      <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Input">
      </div>
      <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Input">
      </div>
      <div class="uk-margin">
        <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'OffCanvasMenu'
}
</script>

<style lang="scss" scoped>
#OffCanvasMenu {
  font-size:16px;
}
</style>
