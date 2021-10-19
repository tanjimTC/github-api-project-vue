<template>
    <div>
        <h1>Tab container</h1>
        <button @click="currentTabComponent = 'Tab1'">Repos</button>
        <button @click="currentTabComponent = 'Tab2'">Followers</button>
        <button @click="currentTabComponent = 'Tab3'">Following</button>
        <!-- <keep-alive > -->
            <component :is="currentTabComponent" :singleUser="singleUser"></component>
        <!-- </keep-alive> -->
    </div>
</template>

<script>

    import Tab1 from "./RepoTab.vue";
    import Tab2 from "./FollowersTab.vue";
    import Tab3 from "./FollowingTab.vue";

    export default {
        name : "TabContainer",
        props : ["singleUser"],
        components: {
            Tab1,
            Tab2,
            Tab3,
        },
        data () {
            return {
                currentTabComponent: "Tab1",
            }
        },
    }
</script>

<style  scoped>

</style>