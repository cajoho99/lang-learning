import json
 
# Opening JSON file
f = open('./language-files/polish.json')

 
# returns JSON object as
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
for i in data['words']:
  i['id'] = i['id'] - 1
  print(i)
# Closing file
f.close()

f = open('./language-files/polish.json', 'w')
json.dump(data, f, ensure_ascii=False)
f.close()