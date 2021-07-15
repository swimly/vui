# Checkbox 复选

<!-- start -->
<div class="code">
  <v-checkbox value="1">复选1</v-checkbox>
  <v-checkbox value="2" checked>复选1</v-checkbox>
</div>
<!-- end -->

<!-- start -->
<div class="code">
  <v-checkbox-group value='["1", "2"]'>
    <v-checkbox value="1">复选1</v-checkbox>
    <v-checkbox value="2">复选2</v-checkbox>
    <v-checkbox value="3">复选3</v-checkbox>
    <v-checkbox value="4">复选4</v-checkbox>
  </v-checkbox-group>
</div>
<!-- end -->

<!-- start -->
<div class="code">
  <v-checkbox-group id="a">
    <v-checkbox value="1">复选1</v-checkbox>
    <v-checkbox value="2">复选2</v-checkbox>
    <v-checkbox value="3">复选3</v-checkbox>
    <v-checkbox value="4">复选4</v-checkbox>
  </v-checkbox-group>
</div>
<!-- end -->

<script>
  var a= document.querySelector('#a')
  a.value = ['1', '3']
</script>