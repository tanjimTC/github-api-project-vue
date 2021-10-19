<template>
     <div className="bg-white rounded-md overflow-hidden border shadow-md">
      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <img className="w-full" :src="followData.avatar_url" alt="Follower Avatar" />

          <div className="mt-4">
            <h2 className="text-2xl text-grbg-gray-800">
              {{info?.name || info?.login}}
            </h2>
            <div className="flex justify-between mt-4 mb-4 text-gray-500">
              <div className="text-center">
                <p className=" text-gray-600">Followers</p>
                <div className=" lg:text-xl block">{{info?.followers}}</div>
              </div>
              <div className="text-center">
                <p className=" text-gray-600">Following</p>
                <div className=" lg:text-xl block">{{info?.following}}</div>
              </div>
              <div className="text-center">
                <p className=" text-gray-600">Repos</p>
                <div className=" lg:text-xl block">{{info?.public_repos}}</div>
              </div>
            </div>

            <p className="mb-4 text-gray-500">{{info?.bio}}</p>
          </div>
        </div>
        <div>
          <a
            className="no-underline"
            :href="info?.html_url"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex items-center justify-center text-white bg-gray-800 p-4 rounded-md w-full uppercase">
              View Git Profile
              <div className="w-8">
                <img
                  src="../../assets/images/3072620.png"
                  alt="git icon"
                  className="ml-2"
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    import { getUserInfoByUrl } from '../../utils';
    export default {
        name: 'FollowCard',
        props : ['followData'],
        data(){
            return {
                info : {},
            }
        },
        created: async function () {
            const res = await getUserInfoByUrl(this.followData.url);
              if (res.success){
                  this.info = res.response
              }
        }
    }
</script>

<style scoped>

</style>