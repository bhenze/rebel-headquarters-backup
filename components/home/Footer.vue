<template>
  <div class="footer">
    <div class="container">
      <div class="columns level">
        <div class="column level-item has-text-centered-mobile">
          © 2018 Hash Rebel
        </div>
        <div class="column level-item has-text-centered">
          <img
            src="~/assets/images/icons/hash_rebel/main-fist-code-inlay-optimized.svg"
            height=100px
            width=100px
          >
        </div>
        <div class="column level-item has-text-right has-text-centered-mobile">
          <ul>
            <li v-for="icon in socialMediaConfig.iconInfo" :key="icon.name">
              <a
                :href="icon.url"
                target="_blank"
              >
                <img
                  width="30"
                  height="30"
                  :src="icon.imgSrc"
                  :alt="icon.name"
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import gitHubIcon from "~/assets/images/icons/social-media/github-original.svg";
  import steemitIcon from "~/assets/images/icons/social-media/steemit-original.svg";
  import telegramIcon from "~/assets/images/icons/social-media/telegram-original.svg";
  import mediumIcon from "~/assets/images/icons/social-media/medium-original.svg";
  import dockerIcon from "~/assets/images/icons/social-media/docker-original.svg";
  import twiterIcon from "~/assets/images/icons/social-media/twitter-original.svg";

  export default{
    data() {
      return {
        socialMediaConfig: {
          iconInfo: [
            {
              name: "GitHub",
              url: "https://github.com/bhenze",
              imgSrc: gitHubIcon
            },
            {
              name: "Steemit",
              url: "https://steemit.com/@hashrebel",
              imgSrc: steemitIcon
            },
            {
              name: "Telegram",
              url: "https://t.me/hash_rebel",
              imgSrc: telegramIcon
            },
            {
              name: "Medium",
              url: "https://medium.com/@henze.brian",
              imgSrc: mediumIcon
            },
            {
              name: "DockerHub",
              url: "https://hub.docker.com/u/hashrebel/",
              imgSrc: dockerIcon
            },
            {
              name: "Twitter",
              url: "httpshttps://twitter.com/HashRebel",
              imgSrc: twiterIcon
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
    padding: 2rem 1.5rem;

    .column{
        padding: 0;
    }

    a {
        text-decoration: none;

        &:hover,
        &:active {
            opacity: 0.5;
        }
    }
}
</style>
