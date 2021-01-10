import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_json('data.json')

tides = pd.DataFrame(data['datainfo']['data']['item'])


def converter(val):
  return float(val)

tides['pred_in_ft']= tides['pred_in_ft'].apply(converter)