from flask import Flask, jsonify, request
from iPhonePrediction import PredictPrice
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
iPhonePrice = PredictPrice()


@app.route('/get_prediction', methods=['GET'])
def get_prediction():
    initial_price = request.args.get('initial_price')
    iphone_age = request.args.get('iphone_age')
    output = iPhonePrice.get_iphone_prediction(initial_price, iphone_age)
    result = {"PricePredicted": output}
    return jsonify(result)


@app.route('/get_prediction2021', methods=['GET'])
def get_prediction2021():
    initial_price = request.args.get('initial_price')
    iphone_age = 1
    output = iPhonePrice.get_iphone_prediction(initial_price, iphone_age)
    result = {"PricePredicted": output}
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
