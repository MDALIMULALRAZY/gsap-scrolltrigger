<template>
 <div class="box" ref="box">
    <div class="box__container">
        <div class="box__wrap" style="background:white"></div>
        <div class="box__wrap" style="background:gray">
            <p class="box__wrap__text">text animation</p>
        </div>
        <div class="box__wrap" style="background:white"></div>
        <div class="box__wrap" style="background:gray"></div>
    </div>
</div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";

export default {
  data() {
    return {
      bodyScrollBar: null
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollbarOnTrigger();

    gsap.to(".box__wrap__text", {
      color: "red",
      x: "400px",
      scrollTrigger: {
        trigger: ".box__wrap__text",
        scrub: true
      }
    });
  },

  beforeDestroy() {
    this.bodyScrollBar.destroy(this.$refs.box);
    this.bodyScrollBar = null;
  },
  methods: {
    scrollbarOnTrigger() {
      // const el = document.body;
      const el = this.$refs.box;
      this.bodyScrollBar = Scrollbar.init(el, {
        damping: 0.1,
        alwaysShowTracks: true,
        delegateTo: document
      });
      const bodyScrollBar = this.bodyScrollBar;

      bodyScrollBar.setPosition(0, 0);
      bodyScrollBar.track.xAxis.element.remove();

      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
  .box
    width: 100vw
    height: fit-content
    &__wrap
      width: 100vw
      height: 100vh
      content: ""
      display: grid
      place-items: center
      &__text
        color: white
</style>
