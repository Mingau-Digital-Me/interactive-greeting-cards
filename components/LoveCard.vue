<template>
  <div ref="loveCard" class="love-card" @click="cardManagement()">
    <div class="love-card__wrapper">
      <div
        ref="firstLoveCardItem"
        class="love-card__item love-card__item--first"
      >
        <img
          src="/public/components/LoveCard/cover.png"
          class="love-card__image"
        />
      </div>

      <div
        ref="secondLoveCardItem"
        class="love-card__item love-card__item--second"
      >
        <img
          src="/public/components/LoveCard/love-card-left.png"
          class="love-card__image"
        />
      </div>

      <div
        ref="thirdLoveCardItem"
        class="love-card__item love-card__item--third"
      >
        <img
          src="/public/components/LoveCard/love-card-right.png"
          class="love-card__image"
        />
      </div>

      <div
        ref="fourthLoveCardItem"
        class="love-card__item love-card__item--fourth"
      >
        <img
          src="/public/components/LoveCard/cover-background.png"
          class="love-card__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
enum PAGE {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
}

const loveCard = ref<HTMLElement | null>(null);
const firstLoveCardItem = ref<HTMLElement | null>(null);
const secondLoveCardItem = ref<HTMLElement | null>(null);
const thirdLoveCardItem = ref<HTMLElement | null>(null);
const fourthLoveCardItem = ref<HTMLElement | null>(null);

let isHoldingCard = false;
let currentPage = PAGE.FIRST;

function cardManagement() {
  if (!isHoldingCard) {
    isHoldingCard = true;
  }

  if (isHoldingCard) {
    refRemoveClass(loveCard, "close-and-save-card");
    requestAnimationFrame(() => {
      refAddClass(loveCard, "take-and-open-card");
    });

    if (currentPage === PAGE.FIRST) {
      setTimeout(() => {
        movePage(firstLoveCardItem, "card-next-page");

        currentPage = PAGE.SECOND;
      }, 500);
    } else if (currentPage === PAGE.SECOND) {
      movePage(secondLoveCardItem, "card-next-page");

      currentPage = PAGE.THIRD;
    } else if (currentPage === PAGE.THIRD) {
      movePage(thirdLoveCardItem, "card-next-page");

      currentPage = PAGE.FOURTH;
    } else if (currentPage === PAGE.FOURTH) {
      currentPage = PAGE.FIRST;

      setTimeout(() => {
        refRemoveClass(thirdLoveCardItem, "card-next-page");
        requestAnimationFrame(() => {
          movePage(thirdLoveCardItem, "card-back-page");
        });
      }, 400);

      setTimeout(() => {
        refRemoveClass(secondLoveCardItem, "card-next-page");
        requestAnimationFrame(() => {
          movePage(secondLoveCardItem, "card-back-page");
        });
      }, 800);

      setTimeout(() => {
        refRemoveClass(firstLoveCardItem, "card-next-page");
        requestAnimationFrame(() => {
          movePage(firstLoveCardItem, "card-back-page");
        });
      }, 1200);

      setTimeout(() => {
        refRemoveClass(loveCard, "take-and-open-card");
        requestAnimationFrame(() => {
          refAddClass(loveCard, "close-and-save-card");
        });
      }, 2000);

      setTimeout(() => {
        resetPages();
      }, 2200);
    }
  }
}

function movePage(elementRef: Ref<HTMLElement | null>, _class: string) {
  refAddClass(elementRef, _class);
}

function refAddClass(elementRef: Ref<HTMLElement | null>, _class: string) {
  elementRef.value?.classList.add(_class);
}

function refRemoveClass(elementRef: Ref<HTMLElement | null>, _class: string) {
  elementRef.value?.classList.remove(_class);
}

function resetPages() {
  refRemoveClass(firstLoveCardItem, "card-back-page");
  refRemoveClass(secondLoveCardItem, "card-back-page");
  refRemoveClass(thirdLoveCardItem, "card-back-page");

  firstLoveCardItem.value!.style.transform = "var(--first-position)";
  secondLoveCardItem.value!.style.transform = "var(--second-position)";
  thirdLoveCardItem.value!.style.transform = "var(--third-position)";
  fourthLoveCardItem.value!.style.transform = "var(--fourth-position)";
}
</script>

<style lang="postcss">
:root {
  --first-position: translate3d(0, 0, 4px);
  --second-position: translate3d(0, 0, 3px);
  --third-position: translate3d(0, 0, 2px);
  --fourth-position: translate3d(0, 0, 1px);
}

.love-card {
  @apply w-[200px] h-[190px] flex justify-center items-center cursor-pointer;

  transform-style: preserve-3d;
  transform: translate3d(0, 0, 30px);

  &__wrapper {
    @apply flex justify-center items-center relative w-[200px] h-[190px];

    transform-style: preserve-3d;
  }

  &__item {
    @apply bg-white absolute;

    transform-style: preserve-3d;

    &--first {
      transform: var(--first-position);
    }
    &--second {
      transform: var(--second-position);
    }
    &--third {
      transform: var(--third-position);
    }
    &--fourth {
      transform: var(--fourth-position);
    }
  }

  &__image {
    @apply h-28 w-20;
  }
}

.love-card.take-and-open-card {
  animation: remove-love-card 500ms ease-out forwards;
}
.love-card.close-and-save-card {
  animation: remove-love-card 500ms reverse forwards;
}

.card-next-page {
  animation: card-next-page 1s linear forwards;
}
.card-back-page {
  animation: card-next-page 1s reverse forwards;
}

@keyframes remove-love-card {
  0% {
    transform: translate3d(0, 0, 30px) rotateX(0);
  }
  100% {
    transform: translate3d(39px, 90px, 240px) rotateX(-50deg);
  }
}

@keyframes card-next-page {
  0% {
    transform: translate3d(0, 0, 4px) rotateY(0);
  }
  33% {
    ransform: translate3d(-22px, 0, 40px) rotateY(-40deg) scaleY(0.45)
      scaleX(0.25);
  }
  50% {
    transform: translate3d(-40px, 2px, 80px) rotateY(-90deg) scaleY(0.9)
      scaleX(0.49);
  }
  66% {
    transform: translate3d(-62px, 0, 40px) rotateY(-135deg) scaleY(0.95)
      scaleX(0.75);
  }
  100% {
    transform: translate3d(-80px, 0, 4px) rotateY(-180deg);
  }
}
</style>
