<script>

  import polish from '../../static/language-files/polish.json'
  let currentWord = "Click to get a random polish word"
  const getRandom = () => {
    let i = Math.floor(Math.random()*polish.words.length)
    currentWord = polish.words[i].polish
  }
</script>



<h1 class="text-3xl font-bold underline" on:click="flip">
  Hello world!
</h1>

<button on:click={getRandom}>
  {currentWord}
</button>