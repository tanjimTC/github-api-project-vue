<template>
  <div class="flex w-full min-h-screen bg-gray-900">
      <div class="inline mx-auto mt-10">
        <form
          class="w-full flex justify-center  "
           @submit.prevent="submitForm"
        >
          <div class="border-2 border-gray-50 flex rounded-full p-1">
            <input
            class="bg-white  px-4 py-1 text-gray-900 rounded-full focus:outline-none"
            placeholder="search"
            v-model.trim="userName"
          />
          <button
            type="submit"
            class="flex items-center justify-center w-12 h-12 text-gray-500 rounded-full "
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          </div>
        </form>


        <div class="container mx-auto p-4">
          <div class="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
               <Usercard :item="item" v-for="(item, index) in items" :key="index"/>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
import Usercard from '../components/Cards/Usercard.vue';
// @ is an alias to /src
import {getUserByName} from "../utils"



export default {
  name: 'Home',
  components: {Usercard},
  data(){
    return{
      items:[],
      userName:"",
    }
  },
  methods :{
    async submitForm () {
      const res = await getUserByName(this.userName);
      if (res.success){
        // console.log(res.response.items)
        this.items = res.response.items
      }
    }
  }
}
</script>

