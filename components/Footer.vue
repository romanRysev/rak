<template>
  <footer class="footer">
    <p class="footer__text">Спасибо всем, кто помог состояться этому проекту</p>

    <main-menu class="footer__menu" />

    <ul class="footer__links">
      <li class="footer__social">
        Мы в
        <page-link class="link" :url="links[0].url" :text="links[0].text" /> и
        <page-link class="link" :url="links[1].url" :text="links[1].text" />
      </li>
      <li class="footer__link_share">
        <page-link class="link" :url="links[2].url" :text="links[2].text" />
      </li>
    </ul>

    <p class="footer__copyright footer__copyright_project">Рак Лечится 2020</p>
    <p class="footer__copyright footer__copyright_authors">
      Сделано студентами Яндекс Практикум
    </p>
  </footer>
</template>

<script>
import Menu from '@/components/Menu';
import Link from '@/components/ui/Link';
export default {
  name: 'Link',
  components: {
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
        {
          url: '#',
          text: 'Поделитесь <span>&#8599</span>',
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  min-height: 356px;
  width: calc(100% - 120px);
  margin: 0 auto;
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
  grid-area: Share;
  color: #121212;
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
}

@media screen and (max-width: 1439px) {
  .footer {
    min-height: 316px;
    width: calc(100% - 100px);
    padding: 50px 0;
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

  .footer__copyright {
    font-size: 16px;
  }
}

@media screen and (max-width: 1279px) {
  .footer {
    min-height: 292px;
    width: calc(100% - 100px);
    padding: 50px 0;
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
    font-size: 16px;
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
  .footer {
    min-height: 402px;
    width: calc(100% - 30px);
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
