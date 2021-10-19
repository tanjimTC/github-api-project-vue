<template>
        <div className="bg-white rounded-md overflow-hidden border shadow-md">
      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl text-gray-800 text-left" v-if="repoUrl.name">{{repoUrl.name}}</h2>
          <div className="flex justify-between mt-4 mb-4 text-gray-500">
            <div className="flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              <span className="ml-1 lg:text-xl">{{repoUrl.stargazers_count}}</span>
            </div>
            <div className="flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <span className="ml-1 lg:text-xl">{{repoUrl.watchers_count}}</span>
            </div>
            <div className="flex items-center">
              <img src="../../assets/images/9171844.png" class="w-5 opacity-70" alt="">
              <span className="ml-1 lg:text-xl">{{repoUrl.forks}}</span>
            </div>
          </div>
          <p className="mb-4 text-gray-600 flex">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            {{repoUrl.language}}
          </p>
          <p className="mb-4 text-gray-500 text-left">{{repoUrl.description}}</p>
        </div>
        <div>
          <a
            className="no-underline"
            :href="repoUrl.html_url"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex justify-center items-center text-white bg-gray-800 p-4 rounded-md w-full uppercase">
              View Git Repository
              <div className="w-6">
                <img
                  src="../../assets/images/3456772.png"
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
    export default {
        name : "RepoCard",
        props: ["repoUrl"]
    }
</script>

<style  scoped>

</style>