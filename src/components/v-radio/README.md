# Radio 单选

<!-- start -->
<div class="code">
  <v-radio checked value="1">单选</v-radio>
  <v-radio value="1">单选</v-radio>
</div>
<!-- end -->

<!-- start -->
<div class="code">
  <v-radio-group value='2'>
    <v-radio value="1">单选</v-radio>
    <v-radio value="2">单选</v-radio>
    <v-radio value="3">单选</v-radio>
    <v-radio value="4">单选</v-radio>
  </v-radio-group>
</div>
<!-- end -->

<!-- start -->
<div class="code">
  <v-radio-group id="a">
    <v-radio value="1">单选</v-radio>
    <v-radio value="2">单选</v-radio>
    <v-radio value="3">单选</v-radio>
    <v-radio value="4">单选</v-radio>
  </v-radio-group>
</div>
<!-- end -->

<script>
  var a = document.querySelector('#a')
  a.value = '4'
</script>