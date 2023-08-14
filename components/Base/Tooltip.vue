<script setup></script>

<template>
    <span
        class="pointer-events-none absolute top-[calc(100%+11px)] left-0 w-max transition-opacity bg-[rgba(0,0,0,0.8)] shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14),0px_8px_28px_-6px_rgba(24,39,75,0.12)] rounded-[10px] p-3 text-xs text-white flex flex-col after:content-[''] after:bg-[url('~/assets/images/tooltip.svg')] after:w-[14px] after:h-[6px] after:absolute after:bottom-full after:left-[11px]">
        <slot></slot>
    </span>
</template>