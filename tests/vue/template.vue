<template>
    <div class="test">
        <button className="prettier-class">
            Click Here
        </button>
        <button style="margin:12px;color:#fff;font-size:12px">Click Here</button>
        <button style="margin: 12px;color:#fff;font-size:12px;background-color: pink">
            Click Here
        </button>
        <button
            className="prettier-class"
            :style="{
                'fontSize': '12px',
                marginTop: '32px',
                color: '#fff'
            }"
        >
            Click Here
        </button>
        <button
            className="prettier-class"
            :style="{ marginTop: '32px', fontSize: '12px', color: '#fff' }">
            Click Here
        </button>
        <button
            className="prettier-class"
            :style="{ backgroundColor: '#fff', fontSize: '12px', color: '#fff', marginTop: '32px' }"
        >
            Click Here
        </button>
        <div></div>
        <span></span>
        <img>
        <UserInfo v-text='text' @click="eventClick" propOne='prop' v-if="true" userInfo="userInfo"></UserInfo>
    </div>
</template>
