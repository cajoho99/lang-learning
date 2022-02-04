<script>
  import {getRandomWord} from '../lib/polish-json-manager'
  let currentWord = undefined
  let showFacit = false 

  const getWord = () => {
    currentWord = getRandomWord()
    showFacit = false
  }

  const flipWord = () => {
    showFacit = !showFacit
  }

  if (currentWord === undefined) {
    getWord()
  }
</script>

<div class=" grid place-items-center h-screen">
  <div class="max-w-sm w-3/12 rounded overflow-hidden shadow-xl grid place-items-center" on:click="{flipWord}">
    <div class="px-10 py-8">
      <h1 class="text-3xl font-bold text-gray-700 text-center">
        {showFacit ? currentWord.english : currentWord.polish}
      </h1>
    </div>
    
  </div>
  <button on:click="{getWord}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">
    New word
  </button>
</div>