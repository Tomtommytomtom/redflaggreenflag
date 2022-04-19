<template>
  <BaseContainer class="justify-center">
    <div class="grid grid-cols-2 gap-2">
      <div>
        <span>About</span>
        <Card class="p-2">
          <span
            >This Website is inspired by a popular tik-tok filter, showing
            random red and green flags describing a fictional date prompting the
            person using the filter to react.</span
          >
        </Card>
        <span>Legal Notice</span>
        <Card class="p-2">
          <span
            >We do not claim any copyright to the text used on this website.It
            is used for private, non-commercial purposes only</span
          >
        </Card>
      </div>
      <div>
        <span class="invisible">About</span>
        <Card class="invisible p-2">
          <span
            >This Website is inspired by a popular tik-tok filter, showing
            random red and green flags describing a fictional date prompting the
            person using the filter to react.</span
          >
        </Card>
        <span class="invisible">Legal Notice</span>
        <Card class="invisible p-2">
          <span
            >We do not claim any copyright to the text used on this website. It
            is used for private, non-commercial purposes only</span
          >
        </Card>
        <span>(Us)</span>
        <Card class="flex-col justify-center" isBlack>
          <span class="mb-3"><a class="blacklink" href="https://instagram.com/henrikehof?igshid=YmMyMTA2M2Y=">Henrike <InstagramIcon style="display: inline-block"/>- Design and Concept </a></span>
          <span>Tom - Development and Coding</span>
        </Card>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
import BaseContainer from "./BaseContainer.vue";
import Card from "./Card.vue";
import InstagramIcon from "./InstagramIcon.vue";
import GithubIcon from "./GithubIcon.vue";
</script>

<style scoped lang="scss">
a {
  text-decoration: underline;
  text-decoration-style: dotted;
  color: #333;
}
.blacklink {
  color: #ddd;
  text-decoration: none;
}
</style>
