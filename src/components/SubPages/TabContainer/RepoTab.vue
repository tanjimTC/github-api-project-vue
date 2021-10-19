<template>
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl">
        Repositories of {{singleUser?.login}}
      </h1>
      <p className="text-center text-gray-800 mb-8">
        <a
          className="underline hover:no-underline"
          :href="singleUser?.html_url"
          target="_blank"
          rel="noreferrer"
        >
          View Git Profile
        </a>
      </p>

      <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16" v-if="repoUrl">
        <RepoCard v-for="(item, index) in repoUrl" :key="index" :repoUrl="item"/>
      </div>

    </div>
</template>

<script>
import { getUserInfoByUrl } from '../../../utils';
import RepoCard from '../../Cards/RepoCard.vue';

    export default {
        components: { RepoCard },
        name : "RepoTab",
        props : ["singleUser"],
        data () {
            return{
                repoUrl : [],
            }
        },
        created : async function () {
            let url = `https://api.github.com/users/${this.$route.params.id}/repos`
            const res = await getUserInfoByUrl(url);
              if (res.success){
                  this.repoUrl = res.response
              }
          
        },
    }
</script>

<style  scoped>

</style>