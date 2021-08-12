<template>
  <div class="box" ref="box">
    <div class="box__container">
      <div class="box__wrap">
        <client-only>
          <fake3d-image-effect
            centered
            fill-height-content
            tag="div"
            image="https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_960_720.jpg"
            image-map="https://luxdamore.github.io/vue-fake3d-image-effect/imgs/about-map.jpg"
          >
          </fake3d-image-effect>
        </client-only>
      </div>
      <div class="box__wrap" id="boxs">
        <div class="container text-col">
          <div class="row">
            <div class="col-lg-4">
              <div class="text-wrap">
                <h3 class="title">Powering positive human impact.</h3>
                <p class="text">
                  We believe in Google’s core drive to improve opportunity and
                  create equity for everyone. So in 2017, we were thrilled to
                  get a few opportunities to help Google tell the world more
                  about its work. For the Diversity team, we helped amplify the
                  narrative around Google’s diversity, equity, and inclusion
                  commitments — designing them a more helpful, user-friendly
                  digital home. For Google.org, Google’s philanthropic arm, we
                  were asked to help better spotlight stories of real impact
                  created by the organization's grantees and partners. Along
                  with new visual design, we created a scalable editorial
                  system, allowing Google.org to more clearly communicate their
                  work to their key audiences. And finally, we launched the new
                  digital home for Google for Education. The launch of the site
                  came after a year of strategic collaboration around how Google
                  should address education and learning as a brand.
                </p>
              </div>
            </div>
          </div>

          <h1 class="box__wrap__text titl">2017</h1>
          <div class="row">
            <div class="col-6">
              <div class="imgwrap">
                <picture class="img-responsive"
                  ><source media="(min-width: 1024px)" />
                  <img
                    alt="jjs"
                    class="img-fluid"
                    src="//images.ctfassets.net/nk41thqytt3i/7m9obUsymcLwVPrfR657LN/71b75c7d6d6a09acb9f45902991f1883/Telling_stories_01.png?w=370&fit=fill&fm=jpg&q=90"
                /></picture>
              </div>
            </div>
            <div class="col-6">
              <div class="imgwrap">
                <picture class="img-fluid">
                  <source media="(min-width: 1024px)" />
                  <img
                    alt="aa"
                    class="img-fluid"
                    src="//images.ctfassets.net/nk41thqytt3i/1oqMnov2JyaeIf8WvaJw6j/29a4ae96cc9bfb434fdaba3a4d5c0128/image-2.jpg?w=650&fit=fill&fm=jpg&q=90"
                /></picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box__wrap" id="animbox">
        <div class="container text-col">
          <div class="row">
            <div class="offset-lg-8 col-lg-4">
              <div class="text-wrap">
                <h3 class="title">Telling Google's most important stories.</h3>
                <p class="text">
                  We believe in Google’s core drive to improve opportunity and
                  create equity for everyone. So in 2017, we were thrilled to
                  get a few opportunities to help Google tell the world more
                  about its work. For the Diversity team, we helped amplify the
                  narrative around Google’s diversity, equity, and inclusion
                  commitments — designing them a more helpful, user-friendly
                  digital home. For Google.org, Google’s philanthropic arm, we
                  were asked to help better spotlight stories of real impact
                  created by the organization's grantees and partners. Along
                  with new visual design, we created a scalable editorial
                  system, allowing Google.org to more clearly communicate their
                  work to their key audiences. And finally, we launched the new
                  digital home for Google for Education. The launch of the site
                  came after a year of strategic collaboration around how Google
                  should address education and learning as a brand.
                </p>
              </div>
            </div>
          </div>
          <h1 class="box__wrap__text title-text">2019</h1>
          <div class="row">
            <div class="col-6">
              <div class="imgwrap">
                <picture class="img-responsive"
                  ><source media="(min-width: 1024px)" />
                  <img
                    alt="jjs"
                    class="img-fluid"
                    src="//images.ctfassets.net/nk41thqytt3i/3IxjHizeVULlo7rD4NJ9tP/dc13474f68f12a3e2f35936b699ff989/Diversity_01.png?w=370&amp;fit=fill&amp;fm=jpg&amp;q=90"
                /></picture>
              </div>
            </div>
            <div class="col-6">
              <div class="imgwrap">
                <picture class="img-fluid">
                  <source media="(min-width: 1024px)" />
                  <img
                    alt="aa"
                    class="img-fluid"
                    src="//images.ctfassets.net/nk41thqytt3i/1xV5huXil0cvHLmWSRblfb/45bacee61a0339d6af39985c3368b5b4/Diversity_02.png?w=370&amp;fit=fill&amp;fm=jpg&amp;q=90"
                /></picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box__wrap" style="background: gray"></div>
    </div>
  </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";
import { Fake3dImageEffect } from "@luxdamore/vue-fake3d-image-effect";
import "@luxdamore/vue-fake3d-image-effect/dist/Fake3dImageEffect.css";
export default {
  components: {
    "fake3d-image-effect": Fake3dImageEffect,
  },
  data() {
    return {
      bodyScrollBar: null,
    };
  },
  mounted() {
    this.textanim();
    this.anim();
  },

  beforeDestroy() {
    console.log("destroy");
    this.bodyScrollBar.destroy(this.$refs.box);
    this.bodyScrollBar = null;
  },
  methods: {
    // myfunction() {
    //   var elementFirst = document.querySelector(".box__container");
    //   var elementSecond = document.querySelector("#animbox");

    //   elementFirst.classList.toggle("active");

    // },
    textanim() {
      gsap.registerPlugin(ScrollTrigger);
      this.scrollbarOnTrigger();

      gsap.to(".titl", {
        x: 400,
        duration: 1,
        scrollTrigger: {
          scroller: this.$refs.box,
          trigger: ".titl",
          scrub: true,
           start: "top 100%",
        },
      });
      gsap.to(".title-text", {
        xPercent: 80,
        color: "yellow",
        duration: 1,
        scrollTrigger: {
          scroller: this.$refs.box,
          trigger: ".title-text",
          scrub: true,
          start: "top 40%",
          //end: "top 100%",
        },
      })
      gsap.to(".title", {
        color: "yellow",
        duration: 1,
        scrollTrigger: {
          scroller: this.$refs.box,
          trigger: ".text-wrap",
          scrub: true,
          start: "top -90%",
          //end: "top 100%",
        },
      })
      gsap.to(".text", {
        color: "yellow",
        duration: 1,
        scrollTrigger: {
          scroller: this.$refs.box,
          trigger: ".text-wrap",
          scrub: true,
          start: "top -90%",
          //end: "top -100%",
        },
      },'-=1.5')
    },
    anim() {
      gsap.registerPlugin(ScrollTrigger);
      this.scrollbarOnTrigger();
      //       gsap.registerPlugin(ScrollTrigger)
      // const headings = gsap.utils.toArray(".second-section-titles");

      // headings.forEach((title) => {
      //     gsap.to(title, {
      //       scrollTrigger: {
      //         trigger: title,
      //         start: "top center",
      //         end: "+=100",
      //         scrub: true,
      //         markers: true,
      //         toggleClass:  "title-selected",
      //       }
      //     })
      // });
      // const tl = gsap.timeline({
      //   ease: "Power2.easeOut",
      //   scrollTrigger: {
      //     scroller: this.$refs.box,
      //     animation: tl,
      //     trigger: "#animbox",
      //     start: "top top",
      //     end: "top top",
      //     scrub: true,
      //     // onEnter: () => this.myfunction(),
      //     // onLeaveBack: () => this.myfunction(),
      //   },
      // });

      gsap.to(".box__container", 1, {
        background: "green",
        ease: "Power2.easeOut",
        scrollTrigger: {
          scroller: this.$refs.box,
          trigger: "#animbox",
          start: "top 30%",
          end: "top -30%",
          scrub: true,
        },
      });
    },

    scrollbarOnTrigger() {
      // const el = document.body;
      const el = this.$refs.box;
      this.bodyScrollBar = Scrollbar.init(el, {
        damping: 0.1,
        alwaysShowTracks: true,
        delegateTo: document,
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
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.title-text {
  color: #000;
}

.titl {
  color: #000;
}
.box {
  width: 100vw;
  height: 100vh;
}
.box__wrap {
  width: 100vw;
  min-height: 70vh;
  content: "";
  display: grid;
  place-items: center;
}
</style>
