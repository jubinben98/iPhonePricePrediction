import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np
import math


class PredictPrice:
    def __init__(self):
        print('Reading the Dataset')
        file_path = "../Iphone Price Analysis.xlsx"
        df = pd.read_excel(file_path, engine='openpyxl')

        print('Initializing and Training the Model')
        x = df[['Initial Price', 'iPhone Age']]
        y = df[['Current Price']]
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=43)
        self.regression_model = LinearRegression().fit(x_train, y_train)

        print('Testing the Model')
        model_score = self.regression_model.score(x_test, y_test)
        print('Model Accuracy: ', model_score)

    def get_iphone_prediction(self, initial_price, iphone_age):
        current_price = self.regression_model.predict([[initial_price, iphone_age]])
        return "₹"+str(math.ceil(current_price[0][0]))
