"""
# All statistics taken from and property of Basketball-Reference.com
# Link: https://www.basketball-reference.com/
#
# Author: David Luby
# Date created: 2/10/2023
#
# This script is used for full CRUD operation between a Python-Flask
# API and AWS DB instance
"""

import pyodbc
from datetime import datetime
import json


# This function establishes a connection to an MS SQL DB
def connect():
    conn = pyodbc.connect(
                            "Driver={SQL Server Native Client 11.0};"
                            "Server=website-db.cmtiqqjm470n.us-east-1.rds.amazonaws.com,1433;"
                            "Database=decks;"
                            "Trusted_Connection=no;"
                            "UID=davidluby;"
                            "PWD=ASIOB785$^%"
                        )

    return conn


# This function creates two tables in the DB for decks and cards
def initialize_tables():
    conn = connect()
    decks =  """
        IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='decks' AND xtype='U') 
            CREATE TABLE decks (
                id int IDENTITY(1,1) PRIMARY KEY,
                saved VARCHAR(30),
                bias VARCHAR(30));
            """
    
    cards = """
        IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='cards' AND xtype='U')
            CREATE TABLE cards (
                deckId int,
                FOREIGN KEY(deckId) REFERENCES decks(id),
                name VARCHAR(50),
                pic VARCHAR(100),
                age smallint,
                team VARCHAR(5),
                pos VARCHAR(5),
                min FLOAT, 
                fg FLOAT,
                thr FLOAT,
                reb FLOAT,
                ast FLOAT, 
                stl FLOAT,
                blk FLOAT,
                tov FLOAT,
                ppg FLOAT);
            """

    cursor = conn.cursor()
    cursor.execute(decks)
    cursor.execute(cards)
    conn.commit()

    return



def display_tables():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute(
        'SELECT * FROM INFORMATION_SCHEMA.TABLES;'
    )
    

    print("\n----- Tables -----")
    tables = []
    i = -1
    for table in cursor:
        i += 1
        tables.append(table)
        print("\n----- Table "+ str(i) +" -----")
        print(tables[i])

    for table in tables:
        cursor.execute(f'SELECT * FROM {table[2]}')
        for row in cursor:
            print(f'{row}')
        print()

    return



def intake_deck(deck):
    conn = connect()
    cursor = conn.cursor()

    dateFormat = '%d-%m-%y %H:%M'
    dateTimeNow = datetime.now().strftime(dateFormat)

    if (deck[0]['id'] == 'null'):
        cursor.execute(
            'INSERT INTO decks VALUES (?, ?)',
            (dateTimeNow, 'boston'))
        conn.commit()

        id = cursor.execute("""
            SELECT * FROM decks
            WHERE ID = (
                SELECT MAX(id) FROM decks
            )
            """ 
        ).fetchval()

        for cards in deck[1::]:
            cards['deckId'] = id
            
            cursor.execute(
                'INSERT INTO cards VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                (cards["deckId"], cards["name"], cards["pic"], cards["age"], cards["team"],
                 cards["pos"], cards["min"], cards["fg"], cards["thr"], cards["reb"],
                 cards["ast"], cards["stl"], cards["blk"], cards["tov"], cards["ppg"])
            )
            

            conn.commit()

    else:
        print("update id")

    conn.commit()
    return



def read_deck():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute(
        'SELECT * FROM decks'
    )

    deck_keys = ['id', 'saved', 'bias']

    decks = []
    for row in cursor:
        deck = {}
        i = -1
        for data in row:
            i += 1
            deck[deck_keys[i]] = data
        decks.append(deck)

    cursor.execute(
        'SELECT * FROM cards'
    )

    card_keys = ["deckId", "name", "pic", "age", "team", "pos", "min",
                "fg", "thr", "reb", "ast", "stl", "blk", "tov", "ppg"]
    
    entries = []
    i = -1
    for deck in decks:
        i += 1
        combine = [deck]
        cursor.execute(
            f'SELECT * FROM cards WHERE deckID = {deck["id"]}'
        )
        for row in cursor:
            dict = {}
            j = -1
            for keys in card_keys:
                j += 1
                dict[keys] = row[j]
            combine.append(dict)
        entries.append(combine)
    #print(entries)

    return json.dumps(entries)



# This function updates data in the DB
def update():
    conn = connect()
    #print("Update")
    cursor = conn.cursor()
    cursor.execute(
        'update dummy set b = ? where a = ?;',
        ('dogzzz', 3232)
    )
    conn.commit()
    return



# This function can be used to clear the DB
def reset():
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('DROP TABLE cards')
    cursor.execute('DROP TABLE decks')

    #cursor.execute("TRUNCATE TABLE players")
    #cursor.execute("TRUNCATE TABLE decks")

    """cursor.execute(
        'delete from dummy where a > 5'
    )
    """

    conn.commit()

    return



# Main method
def main():

    #initialize_tables()
    #reset()
    display_tables()
    #read_deck()




if __name__ == '__main__':
    main()