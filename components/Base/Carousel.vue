<script setup>
import { AutoPlay, Pagination, Arrow } from "@egjs/flicking-plugins";
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/flicking-plugins/dist/arrow.css";

const props = defineProps(["isMobile", "images", "source", "padding"])

const carouselOptions = {
    circular: true,
    align: 'center',
    panelsPerView: 1.2,
    preventClickOnDrag: true,
    duration: 300,
    renderOnlyVisible: true,
}
const largeCarouselOptions = {
    circular: true,
    align: 'center',
    panelsPerView: 1,
    preventClickOnDrag: true,
    duration: 300,
    renderOnlyVisible: true,
}

const plugins = [
    new AutoPlay({ duration: 5000, stopOnHover: true, delayAfterHover: 2000 })
]
const pluginsLarge = [
    new AutoPlay({ duration: 5000, stopOnHover: true, delayAfterHover: 2000 }),
    new Pagination({ type: 'bullet' }),
    new Arrow()
]

</script>

<template>
    <Flicking v-if="isMobile" :hide-before-init="true" :options="isMobile ? carouselOptions : largeCarouselOptions"
        :plugins="plugins">
        <div class="rounded-2xl overflow-hidden sm:rounded-3xl px-[5px] w-4/5 aspect-[1.65]" v-for="(slide, index) in props.images"
            :key="index">
            <img draggable="false" v-if="source != 'announcements'" class="rounded-3xl h-full w-full object-cover"
                src="~/assets/images/carousel.png" alt="carousel">
            <img draggable="false" v-else class="rounded-3xl h-full w-full object-cover" src="~\assets\images\announcement-carousel.jpg"
                alt="carousel">
        </div>
    </Flicking>
    <Flicking class="rounded-3xl overflow-hidden" v-else :hide-before-init="true" :options="largeCarouselOptions" :plugins="pluginsLarge">
        <div class="!w-full" :class="props.padding ? `lg:px-[${props.padding}px]` : ''"
            v-for="(slide, index) in props.images" :key="index">
            <img draggable="false" class="h-full w-full" v-if="source != 'announcements'"
                src="~/assets/images/carousel.png" alt="carousel">
            <img draggable="false" class="h-full w-full" v-else src="~\assets\images\announcement-carousel.jpg"
                alt="carousel">
        </div>
        <template #viewport>
            <span class="group/icon flicking-arrow flicking-arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.44684 0.688022C9.98592 1.11928 10.0733 1.9059 9.64206 2.44498L3.60008 9.99744L9.64205 17.5499C10.0733 18.089 9.98592 18.8756 9.44684 19.3069C8.90776 19.7381 8.12114 19.6507 7.68988 19.1116L1.02322 10.7783C0.657998 10.3218 0.657998 9.6731 1.02322 9.21657L7.68988 0.88324C8.12115 0.344162 8.90776 0.256761 9.44684 0.688022Z"
                        class="fill-white group-active/icon:fill-blue" />
                </svg>
            </span>
            <span class="group/icon flicking-arrow flicking-arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.553162 0.688022C0.0140842 1.11928 -0.0733174 1.9059 0.357944 2.44498L6.39992 9.99744L0.357945 17.5499C-0.0733167 18.089 0.014085 18.8756 0.553162 19.3069C1.09224 19.7381 1.87886 19.6507 2.31012 19.1116L8.97678 10.7783C9.342 10.3218 9.342 9.6731 8.97678 9.21657L2.31012 0.88324C1.87885 0.344162 1.09224 0.256761 0.553162 0.688022Z"
                        class="fill-white group-active/icon:fill-blue" />
                </svg>
            </span>
            <div class="flicking-pagination"></div>
        </template>
    </Flicking>
</template>

<style>
.flicking-arrow {
    border-radius: 83.333px;
    background: rgba(25, 119, 241, 0.60);
    backdrop-filter: blur(8.33);
    display: flex;
    justify-content: center;
    align-items: center;
}

.flicking-arrow:hover,
.flicking-arrow:active {
    background: rgba(25, 119, 241, 0.80);
}

.flicking-arrow-prev {
    left: 20px;
}

.flicking-arrow-prev svg {
    margin-right: 2px;
}

.flicking-arrow-next {
    right: 20px;
}

.flicking-arrow-next svg {
    margin-left: 2px;
}

.flicking-arrow-prev,
.flicking-arrow-next {
    width: 40px !important;
    height: 40px !important;
}

.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
    display: none;
}

.flicking-pagination {
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 200px;
    background: rgba(25, 119, 241, 0.60);
    backdrop-filter: blur(10px);
    padding: 10px;
    height: 24px;
    display: flex;
    align-items: center;
}

.flicking-pagination-bullet {
    width: 5px;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.50);
    transition: all 100ms ease-in-out;
}

.flicking-pagination-bullet:hover {
    background-color: rgba(255, 255, 255, 0.70);
}

.flicking-pagination-bullet-active {
    width: 10px;
    height: 10px;
    background-color: #fff;
}</style>