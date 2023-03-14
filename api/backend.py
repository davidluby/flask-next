"""
# Author: David Luby
# Date Created: 2/15/2023
#
# hello.py is comprised of a backend API that facilitates a react.js frontend
"""

# Package imports
from flask import Flask, request
from flask_restful import reqparse, Api, Resource

# Script imports
import player_data
import db_CRUD as crud

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('task')


class get_player_data(Resource):
    def post(self):
        name = request.get_json()
        data = player_data.main(name)
        return {'player_data':data}
api.add_resource(get_player_data, '/api/get_data')


class handle_deck(Resource):
    def post(self):
        deck = request.get_json()


        conn = crud.connect()
        crud.handle_deck(conn, deck)
        print(deck)
api.add_resource(handle_deck, '/api/handle_deck')



if __name__ == '__main__':
    app.run(debug=True)