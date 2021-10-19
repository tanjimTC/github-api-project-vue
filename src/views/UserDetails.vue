<template>
    <div class="bg-gray-100 bg-opacity-30">
          <div class="lg:w-8/12 lg:mx-auto mb-8">
            <div class="flex flex-wrap items-center p-4 md:py-8">
              <div class="md:w-3/12 md:ml-16">
                <img
                  class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-gray-600 p-1"
                  :src="singleUser?.avatar_url"
                  alt="profile"
                />
              </div>

              <div class="w-8/12 md:w-7/12 ml-4">
                <div class="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {{singleUser?.name
                      ? singleUser.name
                      : singleUser?.login
                      ? singleUser?.login
                      : "Name not available" }}
                  </h2>
                </div>

                <div class="hidden md:block">
                  <div class="flex items-center" >
                    <div class="w-5">
                      <img src="../assets/images/2601828.png" alt="logged" />
                    </div>
                    <h1 class="font-semibold ml-2">{{singleUser?.login}}</h1>
                  </div>
                    <p class="flex items-start mt-2" v-if="singleUser.bio">
                      <span class="font-semibold text-gray-700 mr-2 w-7">
                        <img
                          src="../assets/images/1423788.png"
                          alt="about"
                          class="mt-1 mr-2 w-full"
                        />
                      </span>
                      <span class="text-left">{{singleUser?.bio}}</span>
                    </p>
                 
                    <div class="flex items-center mt-2" v-if="singleUser.blog">
                      <svg class="w-5 h-5 mr-2 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      <span>
                        <a
                          :href="singleUser?.blog"
                          target="_blank"
                          rel="noreferrer"
                          class="underline"
                        >
                          {{singleUser?.blog}}
                        </a>
                      </span>
                    </div>

                    <p class="flex items-center mt-2" v-if="singleUser.location">
                      <span class="font-semibold text-gray-700 ">
                        <svg class="w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </span>
                      {{singleUser?.location}}
                    </p>
                 
                </div>
              </div>

              <div class="md:hidden text-sm my-2 text-left">
                <h1 class="font-semibold">{{singleUser?.login}}</h1>
              
                  <p v-if="singleUser?.bio">
                    <span class="font-semibold text-gray-700 mr-1">
                      Bio:
                    </span>
                    {{singleUser?.bio}}
                  </p>
              
                  <p v-if="singleUser?.location">
                    <span class="font-semibold text-gray-700 mr-1">
                      Location:
                    </span>
                    {{singleUser?.location}}
                  </p>
                
              </div>
            </div>
            <span v-if="singleUser">
              <TabContainer :singleUser="singleUser" />
            </span>

            <!-- {singleUser.blog ? (
              <TabContainer {...singleUser} />
            ) : (
              <div class="text-center mb-4">
                <button>
                  <Link href={singleUser?.html_url}>
                    <a
                      class="flex mx-auto py-2 px-4 bg-gitIconColor text-white shadow rounded-full"
                      target="_blank"
                    >
                      View Details <BsArrowRight class="ml-2 text-2xl" />
                    </a>
                  </Link>
                </button>
              </div>
            )} -->
          </div>
        </div>
</template>

<script>
import { getUserInfo } from '../utils';
import TabContainer from '../components/SubPages/TabContainer/TabContainer.vue';

    export default {
        name : "UserDetails",
        components : {TabContainer},
        data(){
            return{
                singleUser : {}
            }
        },
        created: async function () {
            const res = await getUserInfo(this.$route.params.id);

            if (res.success){
                // console.log(res.response)
                this.singleUser = res.response
            }
        }
    }
</script>

<style  scoped>

</style>