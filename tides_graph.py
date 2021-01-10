import pandas as pd

tides = pd.read_json('data.json')

df = pd.DataFrame(tides['datainfo']['data']['item'])

print(df.head())