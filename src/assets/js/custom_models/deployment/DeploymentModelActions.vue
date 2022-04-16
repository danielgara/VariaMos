<!--
 @author Daniel Correa <dcorreab@eafit.edu.co>
-->
<template>
  <div class="btn-group flex-wrap" role="group">
    <DeploymentActions :variaMosGraph="variaMosGraph" />
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { Vue, Options } from 'vue-class-component';
import DeploymentActions from './custom/DeploymentActions.vue';

@Options({
  props: ['variaMosGraph'],
  components: {
    DeploymentActions,
  },
})
export default class DeploymentModelActions extends Vue {
  public variaMosGraph:any; // VariaMosGraph object
}
</script>
