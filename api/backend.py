"""
# Author: David Luby
# Date Created: 2/15/2023
#
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



class intake_deck(Resource):
    def post(self):
        deck = request.get_json()
        crud.intake_deck(deck)
        #print(deck)
        crud.display_tables()
        #print(deck)
api.add_resource(intake_deck, '/api/intake_deck')



class show_decks(Resource):
    def get(self):
        decks = crud.read_deck()
        return decks
api.add_resource(show_decks, '/api/show_decks')



if __name__ == '__main__':
    app.run(debug = True)