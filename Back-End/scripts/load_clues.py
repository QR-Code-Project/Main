import json
from pymongo import MongoClient

with open('clues.json') as f:
    clues = json.load(f) 

client = MongoClient('localhost', 27017)
db = client['clues']

for clue in clues:
    print(clue)
    db.clues.insert_one(clue)

client.close()
