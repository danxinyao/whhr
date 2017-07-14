<template>
    <div class="page">
        <ul class="clearfix">
            <li :class="prevClasses" @click="prev">
                <a>上一页</a>
            </li>
            <li :class="firstClasses" @click="changePage(1)">
                <a>1</a>
            </li>
            <li v-if="currentPage - 3 > 1" @click="fastPrev">
                <a>...</a>
            </li>
            <li v-if="currentPage - 2 > 1" @click="changePage(currentPage - 2)">
                <a>{{ currentPage - 2 }}</a>
            </li>
            <li v-if="currentPage - 1 > 1" @click="changePage(currentPage - 1)">
                <a>{{ currentPage - 1 }}</a>
            </li>
            <li class="active" v-if="currentPage != 1 && currentPage != allPages">
                <a>{{ currentPage }}</a>
            </li>
            <li v-if="currentPage + 1 < allPages" @click="changePage(currentPage + 1)">
                <a>{{ currentPage + 1 }}</a>
            </li>
            <li v-if="currentPage + 2 < allPages" @click="changePage(currentPage + 2)">
                <a>{{ currentPage + 2 }}</a>
            </li>
            <li v-if="currentPage + 3 < allPages" @click="fastNext">
                <a>...</a>
            </li>
            <li :class="lastClasses" v-if="allPages > 1" @click="changePage(allPages)">
                <a>{{ allPages }}</a>
            </li>
            <li :class="nextClasses" @click="next">
                <a>下一页</a>
            </li>
        </ul>
    </div>
</template>

<script type="text/babel">
    import page from './page'
    export default {
        ...page
    }
</script>