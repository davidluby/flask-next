"""
# Author: David Luby
# Date Created: 2/15/2023
#
# hello.py is comprised of a backend API that facilitates a react.js frontend
"""

# Package imports
from flask import Flask
from flask_restful import reqparse, Api, Resource

# Script imports
import player_data

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('task')
class get_player_data(Resource):
    def get(self):
        data = player_data.main('marcus smart')
        return {'player_data':data}
api.add_resource(get_player_data, '/api/get_data')

@app.route('/api/get_data2')
def get_data():
    data = player_data.main('lebron james')
    return {'player_data':data}


if __name__ == '__main__':
    app.run(debug=True)