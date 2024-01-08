<template>
    <div class="note-list">
        <ul>
            <li v-for="item in 6" :key="item">
                <div class="img">
                    <img src="../assets/头像.jpg" alt="">
                </div>
                <p class="time">2022/3/29</p>
                <p class="title">今天去吃了猪脚饭</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 50px;
        li{
            img{
                border-radius: 50%;
                width: 100%;
            }
        }
        .time{
            font-size: 0.37rem;
            color:rgba(16,16,16,1);
            white-space: nowrap;
            overflow: hidden;
        }
        .title{
            width: 100%;
            
        }
    }
}

</style>