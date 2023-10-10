<script setup>

const props = defineProps({
    isVerified: {
        default: false,
        type: Boolean,
    },
    isPremium: {
        default: false,
        type: Boolean,
    },
    type: {
        required: true,
        type: String,
        validator(value) {
            return ['tutor', 'center'].includes(value)
        },
    },
    name: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },
    lastOnline: {
        required: true,
        type: String,
    },
    avatar: {
        required: true,
        type: String,
    },
    tags: {
        required: true,
        type: Array,
    }
})

const getLastWord = (str, last = false) => {
    if (!last) {
        var lastIndex = str.lastIndexOf(" ");
        return str.substring(0, lastIndex);
    } else {
        var n = str.split(" ");
        return n[n.length - 1]
    }
}

const tooltipTags = ref([])
const visibleTags = ref([])
const isTouched = ref(false)

watch(isTouched, () => {
    if (isTouched.value) {
        setTimeout(() => {
            isTouched.value = false
        }, 5000);
    }
})

const handleTags = (tags) => {
    for (var i = 0; i < tags.length; i++) {
        if (i < 2) {
            visibleTags.value.push(tags[i]);
        } else {
            tooltipTags.value.push(tags[i]);
        }
    }
}

handleTags(props.tags)

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
// TODO handle tooltip if not in viewport
</script>

<template>
    <div class="bg-white p-4 sm:p-5 flex flex-col gap-[15px] rounded-3xl">
        <div class="flex items-center gap-[15px]">
            <div class="flex flex-none justify-start w-[64px] h-[64px] rounded-full border border-bg2 overflow-hidden">
                <img :src="props.avatar" alt="avatar">
            </div>
            <div class="flex flex-col gap-[5px]">
                <div class="flex flex-wrap gap-[5px] font-bold text-lg text-black">
                    {{ getLastWord(props.name, false) }}
                    <span class="whitespace-nowrap flex items-center gap-[5px]">
                        {{ getLastWord(props.name, true) }}
                        <img v-if="props.isVerified" class="w-[18px] h-[18px] inline-flex select-none"
                            src="~/assets/images/verified.png" alt="verified" />
                        <img v-if="props.isPremium" class="w-[18px] h-[18px] inline-flex select-none"
                            src="~/assets/images/crown.png" alt="premium" />
                    </span>
                </div>
                <div v-if="props.type == 'tutor'" class="flex gap-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25ZM9 15.75C11.8995 15.75 14.25 14.4069 14.25 12.75C14.25 11.0931 11.8995 9.75 9 9.75C6.10051 9.75 3.75 11.0931 3.75 12.75C3.75 14.4069 6.10051 15.75 9 15.75Z"
                            fill="#787B8D" />
                    </svg>
                    <span class="text-gray text-sm">Репетитор</span>
                </div>
                <div v-else class="flex gap-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.2287 15.4157H14.7828V4.39165C14.7828 2.79467 13.4881 1.5 11.8913 1.5H6.10804C4.51106 1.5 3.21659 2.79467 3.21659 4.39165V15.4157H1.77066C1.47128 15.4157 1.22852 15.6585 1.22852 15.9579C1.22852 16.2572 1.47128 16.5 1.77066 16.5H16.2287C16.5281 16.5 16.7709 16.2572 16.7709 15.9579C16.7709 15.6585 16.5281 15.4157 16.2287 15.4157ZM5.53163 3.82736C5.62982 3.72938 5.76541 3.66858 5.91521 3.66858H8.01798C8.31736 3.66858 8.56012 3.91135 8.56012 4.21073C8.56012 4.36053 8.49954 4.49611 8.40135 4.59431C8.30315 4.6925 8.16777 4.75309 8.01798 4.75309H5.91521C5.61561 4.75309 5.37285 4.51032 5.37285 4.21073C5.37285 4.06114 5.43344 3.92556 5.53163 3.82736ZM5.53163 5.69761C5.62982 5.59963 5.76541 5.53883 5.91521 5.53883H8.01798C8.31736 5.53883 8.56012 5.7816 8.56012 6.08098C8.56012 6.23056 8.49954 6.36615 8.40135 6.46434C8.30315 6.56233 8.16777 6.62312 8.01798 6.62312H5.91521C5.61561 6.62312 5.37285 6.38036 5.37285 6.08098C5.37285 5.93139 5.43344 5.7958 5.53163 5.69761ZM5.37285 7.95102C5.37285 7.80122 5.43344 7.66584 5.53163 7.56765C5.62982 7.46946 5.76541 7.40887 5.91521 7.40887H8.01798C8.31736 7.40887 8.56012 7.65163 8.56012 7.95102C8.56012 8.10081 8.49954 8.2364 8.40135 8.33438C8.30315 8.43258 8.16777 8.49316 8.01798 8.49316H5.91521C5.61561 8.49316 5.37285 8.25061 5.37285 7.95102ZM11.1683 15.4157H6.8309V12.3433C6.8309 11.1456 7.80196 10.1748 8.99969 10.1748C10.1974 10.1748 11.1683 11.1456 11.1683 12.3433V15.4157ZM12.4675 8.33438C12.3696 8.43258 12.234 8.49316 12.0842 8.49316H9.9814C9.68181 8.49316 9.43926 8.25061 9.43926 7.95102C9.43926 7.80122 9.49984 7.66584 9.59804 7.56765C9.69602 7.46946 9.83161 7.40887 9.9814 7.40887H12.0842C12.3838 7.40887 12.6263 7.65163 12.6263 7.95102C12.6263 8.10081 12.5657 8.2364 12.4675 8.33438ZM12.4675 6.46434C12.3696 6.56233 12.234 6.62312 12.0842 6.62312H9.9814C9.68181 6.62312 9.43926 6.38036 9.43926 6.08098C9.43926 5.93139 9.49984 5.7958 9.59804 5.69761C9.69623 5.59942 9.83161 5.53883 9.9814 5.53883H12.0842C12.3838 5.53883 12.6263 5.7816 12.6263 6.08098C12.6263 6.23056 12.5657 6.36615 12.4675 6.46434ZM12.4675 4.59431C12.3696 4.6925 12.234 4.75309 12.0842 4.75309H9.9814C9.68181 4.75309 9.43926 4.51032 9.43926 4.21073C9.43926 4.06114 9.49984 3.92556 9.59804 3.82736C9.69602 3.72938 9.83161 3.66858 9.9814 3.66858H12.0842C12.3838 3.66858 12.6263 3.91135 12.6263 4.21073C12.6263 4.36053 12.5657 4.49611 12.4675 4.59431Z"
                            fill="#787B8D" />
                    </svg>
                    <span class="text-gray text-sm">Учебное заведение</span>
                </div>
            </div>
        </div>
        <div class="flex gap-2.5">
            <div v-for="item in visibleTags" :key="item.key"
                class="px-2.5 text-blue text-xs bg-[#E8F1FE] rounded-full h-6 flex items-center">{{ item }}</div>
            <div class="group relative w-max" :class="{ 'tooltip': isTouched }" @touchstart="isTouched = true">
                <div class="px-2.5 text-blue text-xs bg-[#E8F1FE] rounded-full h-6 flex items-center cursor-pointer">
                    +{{ tooltipTags.length }}
                </div>
                <BaseTooltip class="opacity-0 group-hover:opacity-100 group-[.tooltip]:opacity-100">
                    <span v-for="item in tooltipTags" :key="item.key">{{ item }}</span>
                </BaseTooltip>
            </div>
        </div>
        <div class="flex flex-col gap-2.5">
            <div class="text-sm leading-[140%] line-clamp-2">
                Меня зовут Татьяна. Я люблю детей и люблю математику! Поэтому на моих занятиях не бывает скучно. Я имею
                высшее педагогическое образование по специальности "Математика" и 20-летний стаж
            </div>
            <div class="flex justify-between text-gray text-xs">
                <div class="flex gap-[5px] items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9 16.5C11.5312 16.5 15.75 11.8486 15.75 8.16667C15.75 4.48477 12.7279 1.5 9 1.5C5.27208 1.5 2.25 4.48477 2.25 8.16667C2.25 11.8486 6.46875 16.5 9 16.5ZM9 10.5C10.2426 10.5 11.25 9.49264 11.25 8.25C11.25 7.00736 10.2426 6 9 6C7.75736 6 6.75 7.00736 6.75 8.25C6.75 9.49264 7.75736 10.5 9 10.5Z"
                            fill="#787B8D" />
                    </svg>
                    {{ props.location }}
                </div>
                <div>В сети сегодня в {{ props.lastOnline }}</div>
            </div>
        </div>
        <BaseButton state="secondary" size="medium">Подробнее</BaseButton>
    </div>
</template>