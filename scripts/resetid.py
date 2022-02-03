import json
 
# Opening JSON file
f = open('./language-files/polish.json')

 
# returns JSON object as
# a dictionary
data = json.load(f)
 
# Iterating through the json
# list
for i in data['words']:
    print(i)
 
# Closing file
f.close()