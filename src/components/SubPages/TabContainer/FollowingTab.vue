<template>
      <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl mb-8">Following</h1>
      <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16" v-if="followData">
            <FollowCard v-for="(item, index) in followData" :key="index" :followData="item"/>
      </div>
    </div>
</template>

<script>
import { getUserInfoByUrl } from '../../../utils';
import FollowCard from '../../Cards/FollowCard.vue';

    export default {
        components: { FollowCard },
        name : "FollowingTab",
        props : ["singleUser"],
        data () {
            return{
                followData : [],
            }
        },
        created : async function () {
            let url = `https://api.github.com/users/${this.singleUser.login}/following`
            const res = await getUserInfoByUrl(url);
              if (res.success){
                  this.followData = res.response
              }
          
        },
    }
</script>

<style  scoped>

</style>