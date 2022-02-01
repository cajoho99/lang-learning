<script>
  import polish from '../../language-files/polish.json'
  let currentWord = "Click to get a random polish word"
  const getRandom = () => {
    let i = Math.floor(Math.random()*polish.words.length)
    currentWord = polish.words[i].polish
  }
</script>

<button on:click={getRandom}>
  {currentWord}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
