<!--
    @author Daniel Correa <dcorreab@eafit.edu.co>
-->
<template>
  <div class="btn-group" role="group">
    <button class="btn btn-secondary dropdown-toggle" type="button"
      data-toggle="dropdown" aria-expanded="false" aria-haspopup="true" id="btnGroupActions1">
      Derivation
    </button>
    <div id="divDropdownActions" class="dropdown-menu" aria-labelledby="btnGroupActions1">
      <a class="dropdown-item dropdown-pointer" v-on:click="testDeploymentBackend">
        Test Deployment Backend
      </a>
      <a class="dropdown-item dropdown-pointer" v-on:click="uploadAppsToGitHub">
        Upload Apps to Github
      </a>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { Vue, Options } from 'vue-class-component';
import axios from 'axios';
import { DeploymentFunctions } from './DeploymentFunctions';

@Options({
  props: ['variaMosGraph'],
})
export default class DeploymentActions extends Vue {
  public variaMosGraph:any; // VariaMosGraph object

  public mounted() {
    this.customConfig = this.variaMosGraph.configApp.getCustomConfigAsJsonObject().component;
  }

  public testDeploymentBackend() {
    const modal = this.variaMosGraph.getModal();
    axios.get(`${this.customConfig.backendURL}deployment/test`)
      .then((response) => {
        if (response.data == 'Ok') {
          modal.setData('success', 'Success', 'Deployment backend connection is Ok');
          modal.click();
        } else {
          modal.setData('error', 'Error', 'Wrong backend connection');
          modal.click();
        }
      })
      .catch((error) => {
        modal.setData('error', 'Error', `Wrong backend connection. ${error}`);
        modal.click();
      });
  }

  public uploadAppsToGitHub() {
    const modal = this.variaMosGraph.getModal();
    if (this.customConfig.backendURL != '' && this.customConfig.backendPoolFolder && this.customConfig.backendDerivationFolder) {
      const apps = DeploymentFunctions.getApps(this.variaMosGraph.getGraph());
      const self = this;
      const confirmAction = function anonymousConfirm() {
        const textInput = document.getElementById('repoName') as any;
        const repoName = textInput.value;
        const app = document.querySelector('input[name="selectedApp"]:checked').value;
        axios.post(`${self.customConfig.backendURL}deployment/uploadAppsToGitHub`, {
          apps: app,
          p_derived: self.customConfig.backendDerivationFolder,
          repo: repoName,
          token: self.customConfig.token,
        })
          .then((response) => {
            modal.setData('success', 'Success', response.data);
          })
          .catch((error) => {
            modal.setData('error', 'Error', `Wrong backend connection. ${error}`);
          });
      };

      let radioHTML = '';
      for (let i = 0; i < apps.length; i += 1) {
        radioHTML += `<input name="selectedApp" type="radio" value="${apps[i]}">
        <label>${apps[i]}</label><br />`;
      }

      const stringBody = `<div>Select the app to be pushed to GitHub: <br/><br />${radioHTML}</div><br />
      <b>Enter the repo to be pushed:</b> <input class='text' id='repoName' placeholder='user/repo'></textarea></div>`;
      modal.setData(
        '',
        'Confirm App to be Pushed to GitHub',
        stringBody,
        'confirm',
        confirmAction,
      );
      modal.setSecondaryMessage(true);
      modal.click();
    }
  }
}
</script>
