<script setup>
import { useOnline } from '@vueuse/core'
const localePath = useLocalePath()

const online = useOnline()
const notFound = ref(false)
if (useError().value.statusCode == 404) {
    notFound.value = true
}
</script>

<template>
    <NuxtLayout>
        <div class="error min-w-full flex justify-center">
            <div class="no_connection inline-flex flex-col gap-5 text-center items-center" v-if="!online">
                <div class="flex flex-col gap-2.5 items-center">
                    <div class="text-4xl text-blue font-bold">Нет подключения к интернету</div>
                    <div class="text-gray text-base w-[90%]">Проверьте подключение к Wi-Fi или мобильной сети и попробуйте
                        снова
                    </div>
                </div>
                <BaseButton size="large" type="primary">Повторить попытку</BaseButton>
            </div>
            <div class="not-found inline-flex flex-col gap-5 text-center items-center" v-else-if="notFound">
                <div class="flex flex-col gap-2.5 items-center">
                    <div class="text-4xl text-blue font-bold">Страница не найдена</div>
                    <div class="text-gray text-base w-[90%]">
                        Страница, на которую вы пытаетесь попасть, не существует или была удалена.
                    </div>
                </div>
                <BaseButton @click="clearError({ redirect: localePath('/') })" size="large" type="primary">
                    Перейти на главную страницу
                </BaseButton>
            </div>
        </div>
    </NuxtLayout>
</template>