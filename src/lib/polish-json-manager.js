import polish from '../../static/language-files/polish.json'

export function getRandomWord(start=0, end=polish.words.length)
{
  let i = Math.floor(start + Math.random()*end)
  return polish.words[i]
}

// som ett sätt att analysera lärarens bedömningsuppdrag