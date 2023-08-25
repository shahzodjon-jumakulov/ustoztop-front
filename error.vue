<script setup>
import { useOnline } from '@vueuse/core'
const localePath = useLocalePath()

const online = useOnline()
const notFound = ref(false)
if (useError().value.statusCode == 404) {
    notFound.value = true
}

const refresh = () => {
    window.location.reload();
}
</script>

<template>
    <NuxtLayout>
        <PageHeader class="lg:hidden" />
        <div class="error min-w-full flex flex-col justify-center m-auto">
            <div class="">
                <img class="h-[30vw] object-cover 2xl:object-contain" src="~/assets/images/404.svg" alt="404_not_found">
            </div>
            <div class="not-found inline-flex flex-col gap-4 sm:gap-5 text-center items-center mx-4 sm:mx-5" v-if="online">
                <div class="flex flex-col gap-2.5 items-center sm:w-min">
                    <div class="text-2xl sm:text-4xl text-blue font-bold sm:w-max">Страница не найдена</div>
                    <div class="text-gray text-xs sm:text-base">
                        Страница, на которую вы пытаетесь попасть, не существует или была удалена.
                    </div>
                </div>
                <BaseButton @click="clearError({ redirect: localePath('/') })" class="w-max" size="large" type="primary">
                    Перейти на главную страницу
                </BaseButton>
            </div>
            <div class="no_connection inline-flex flex-col gap-4 sm:gap-5 text-center items-center mx-4 sm:mx-5" v-else>
                <div class="flex flex-col gap-2.5 items-center sm:w-min">
                    <div class="text-2xl sm:text-4xl text-blue font-bold sm:w-max">Нет подключения к интернету</div>
                    <div class="text-gray text-xs sm:text-base">
                        Проверьте подключение к Wi-Fi или мобильной сети и попробуйте снова
                    </div>
                </div>
                <BaseButton @click="clearError(), refresh" class="w-max" size="large" type="primary">
                    Повторить попытку
                </BaseButton>
            </div>
        </div>
    </NuxtLayout>
</template>