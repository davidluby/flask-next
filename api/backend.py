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
class Message(Resource):
    def get(self):
        
        return {"message": player_data.main('marcus smart')}
api.add_resource(Message, '/api/flask')

if __name__ == '__main__':
    app.run(debug=True)