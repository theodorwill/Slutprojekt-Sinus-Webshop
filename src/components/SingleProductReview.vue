<template>
  <vue-tabs class="tab-view" type="pills" centered>
    <v-tab title="First tab">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
    </v-tab>

    <v-tab title="Second tab">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
    </v-tab>

    <v-tab title="Third tab">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
    </v-tab>
</vue-tabs>
</template>

<script>
//local registration
import {VueTabs, VTab} from 'vue-nav-tabs'
//you can also import this in your style tag
import 'vue-nav-tabs/themes/vue-tabs.css'
//component code

export default {
  components: {
  VueTabs,
  VTab
}

}
</script>

<style lang="scss" scoped>

.tab-view {

  text-align: left;
  border-radius: .2rem;
  box-shadow: 0 2px 10px 3px rgba(119, 119, 119, 0.151);
  margin: 100px auto;
  padding: 16px 0px;

  p {
    margin: 2rem;
  }
}


</style>