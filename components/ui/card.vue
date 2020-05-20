<template>
  <div class="card">
    <div class="card__photo-contaimer">
      <img
        class="card__photo"
        src="/images/card__photo/photo1.jpg"
        alt="Фото автора"
      />
    </div>

    <h3 class="card__title">Владимир Тен</h3>
    <p class="card__subtitle">
      Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
    </p>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.card__title {
  margin-bottom: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
}
.card__subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}
.card__photo-contaimer {
  width: 100%;
  padding-top: 100%;
  position: relative;
  margin-bottom: 20px;
}
.card__photo {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: top;
}

@media screen and (max-width: 1023px) {
  .card__title {
    font-size: 18px;
  }
  .card__subtitle {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
