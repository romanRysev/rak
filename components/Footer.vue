<template>
  <footer class="footer">
    <container class="container container_footer">
      <p class="footer__text">
        Спасибо всем, кто помог состояться этому проекту
      </p>

      <main-menu class="footer__menu" />

      <ul class="footer__links">
        <li class="footer__social">
          Мы в
          <page-link class="link" :url="links[0].url" :text="links[0].text" />
          и
          <page-link class="link" :url="links[1].url" :text="links[1].text" />
        </li>
        <li class="footer__link_share">
          <button
            class="footer__share"
            type="button"
            @click="$emit('shareClick')"
          >
            Поделитесь &#8599;
          </button>
        </li>
      </ul>

      <p class="footer__copyright footer__copyright_project">
        Рак Лечится 2020
      </p>
      <a
        href="https://praktikum.yandex.ru/"
        target="_blank"
        class="footer__copyright footer__copyright_authors"
      >
        Сделано студентами Яндекс Практикум
      </a>
    </container>
  </footer>
</template>

<script>
import Container from '~/components/Container';
import Menu from '@/components/Menu';
import Link from '@/components/ui/Link';
export default {
  name: 'Link',
  components: {
    container: Container,
    'main-menu': Menu,
    'page-link': Link,
  },
  data() {
    return {
      links: [
        {
          url: 'https://www.instagram.com/raklechitsa/',
          text: 'Инстаграме',
        },
        {
          url:
            'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
          text: 'Youtube',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container_footer {
  min-height: 356px;
  width: 100%;
  padding: 60px 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, min-content) 1fr;
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    'Thanks Nav Links'
    'Project-name Copyright Copyright';
  justify-content: space-between;
  align-content: space-between;
}

.footer__text {
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
  width: 340px;
  height: min-content;
  margin: 0;
  grid-area: Thanks;
}

.footer__menu {
  grid-area: Nav;
  align-self: start;
  margin-left: 113px;
  z-index: 0;
}

.footer__links {
  font-size: 18px;
  line-height: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
  grid-area: Links;
  justify-self: end;
}

.footer__social {
  margin-bottom: 44px;
}

.footer__share {
  border: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  width: fit-content;
  grid-area: Share;
  background-color: #fff;
  color: #121212;
}

.footer__share:hover {
  opacity: 0.8;
  cursor: pointer;
}

.footer__copyright {
  font-size: 18px;
  line-height: 18px;
  margin: 0;
  color: #898989;
}

.footer__copyright_project {
  grid-area: Project-name;
}

.footer__copyright_authors {
  grid-area: Copyright;
  justify-self: end;
  text-decoration: none;
}

@media screen and (max-width: 1439px) {
  .container_footer {
    min-height: 316px;
    padding: 50px 50px;
  }

  .footer__text {
    font-size: 28px;
    line-height: 32px;
    width: 305px;
  }
  .footer__menu {
    margin-left: 102px;
  }

  .footer__links {
    font-size: 16px;
    width: 265px;
  }

  .footer__share {
    font-size: 16px;
  }

  .footer__copyright {
    font-size: 16px;
  }
}

@media screen and (max-width: 1279px) {
  .container_footer {
    min-height: 292px;
    padding: 50px 50px;
  }

  .footer__text {
    font-size: 24px;
    line-height: 28px;
    width: 288px;
  }
  .footer__menu {
    margin-left: 30px;
  }

  .footer__links {
    width: fit-content;
  }
  .footer__social {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 1023px) {
  .footer__text {
    width: 268px;
  }
  .footer__menu {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 14px;
  }

  .footer__social {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 730px) {
  .container_footer {
    min-height: 402px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, min-content);
    grid-template-areas:
      'Thanks'
      'Nav'
      'Links'
      'Project-name'
      'Copyright';
    justify-items: start;
    align-content: start;
  }
  .footer__text {
    width: 100%;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 50px;
  }
  .footer__menu {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 18px;
    margin-left: 0;
    font-size: 13px;
    line-height: 15px;
    padding-bottom: 18px;
  }

  .footer__links {
    font-size: 13px;
    line-height: 15px;
    width: 100%;
    justify-self: start;
    padding-bottom: 50px;
  }
  .footer__share {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__social {
    margin-bottom: 18px;
  }

  .footer__copyright {
    font-size: 13px;
    line-height: 15px;
  }

  .footer__copyright_project {
    padding-bottom: 18px;
  }

  .footer__copyright_authors {
    justify-self: start;
  }
}
</style>
