<template>
  <vue-tabs class="tab-view" type="pills" centered>
    <v-tab title="First tab">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo, odio voluptatum aperiam quae commodi perferendis ab repellendus eos porro dolores necessitatibus minima consectetur nostrum laudantium? Impedit, mollitia laborum. Laudantium, ratione.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni vel optio illo incidunt tempora quaerat delectus dicta, assumenda, veritatis rem vitae molestiae sed adipisci dolor, sunt consequatur est quam sint amet minima veniam aut obcaecati officiis! Eveniet voluptatibus excepturi iusto aut doloribus omnis est a quis hic quae, fugit id voluptate veniam debitis, quaerat, vero doloremque consequuntur tempore consectetur alias? Quidem distinctio aliquam ducimus sapiente minima dolore ut rem, quia voluptatum tempora officia nulla. Quae voluptates perferendis iste? Iste nihil aperiam quasi necessitatibus aspernatur minus assumenda tenetur rerum nam. Ab hic libero minus explicabo odit quod perspiciatis velit optio eum?</p>  
    </v-tab>

    <v-tab title="Second tab">
      <p>Lorem ipsum, dolor  voluptatum sapiente deleniti commodi, quae nihil facilis atque cupiditate cum quia culpa quidem aperiam hic, ratione labore! Animi ratione aliquam ea maxime a, cumque quo cupiditate officiis incidunt velit reiciendis fuga ab vero obcaecati totam? Soluta delectus totam hic veniam minima veritatis ea deleniti saepe adipisci sapiente esse ab iure natus doloremque beatae laborum tempore commodi, earum odio quod quas! Commodi provident vitae temporibus rem eveniet placeat deserunt perferendis velit doloremque corrupti quod iure, totam dolorem minus repudiandae quae veniam, est, iste nam pariatur quo! Laboriosam rerum at numquam qui, recusandae amet officiis tempora expedita accusamus accusantium explicabo voluptate nesciunt dignissimos? Suscipit non aspernatur, sint quae hic expedita temporibus atque similique ab quam maxime facere voluptatibus quos velit nihil, ducimus quas consectetur sed neque veniam nemo unde nostrum! Ea, odio! A, corporis dignissimos cumque incidunt commodi tempora eos velit impedit libero perferendis placeat atque neque officiis? Culpa eum, necessitatibus recusandae inventore doloribus officia ex quaerat laborum, at magni, temporibus ab perferendis est ut voluptate. Dolor id quod placeat, neque ipsa aperiam assumenda ex numquam, quis, nesciunt totam. Aspernatur, mollitia fugiat modi dolores error deleniti voluptates, cupiditate necessitatibus officiis atque quidem iusto quam.</p>
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
  width: 1250px;
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