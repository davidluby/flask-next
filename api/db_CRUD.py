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

def initialize_tables(conn):
    decks = """IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='decks' AND xtype='U') 
                CREATE TABLE decks (
                    id int IDENTITY(1,1) PRIMARY KEY,
                    saved datetime,
                    bias VARCHAR(30));
            """
    players = """IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='players' AND xtype='U') 
                CREATE TABLE players (
                    cardId int,
                    FOREIGN KEY(cardId) REFERENCES decks(id),
                    name VARCHAR(50),
                    pic VARCHAR(100),
                    age smallint,
                    team VARCHAR(5),
                    pos VARCHAR(5),
                    min smallint, 
                    fg smallint,
                    thr smallint,
                    reb smallint,
                    ast smallint, 
                    stl smallint,
                    blk smallint,
                    tov smallint,
                    ppg smallint);
            """
    

    cursor = conn.cursor()
    cursor.execute(decks)
    cursor.execute(players)

    #cursor.execute("DROP TABLE players")
    #cursor.execute("DROP TABLE decks")
    #cursor.execute("TRUNCATE tableName") # delete content
    
    return

def display_tables(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM INFORMATION_SCHEMA.TABLES;")
    
    for tables in cursor:
        print(tables)
    
    cursor.commit()

    return


def handle_deck(conn, deck):
    cursor = conn.cursor()
    if (deck[0]['id'] == "null"):
        #cursor.execute("""INSERT INTO DECKS""")
        print(deck[0]['id'], "new id")
    else:
        print("update id")

    return


# This function reads from the DB
def read(conn):
    #print("Read")
    cursor = conn.cursor()
    cursor.execute("select * from dummy")
    out = []
    for row in cursor:
        out.append(str(row))
        print(f'row = {row}')
    return out


# This function creates data entries in the DB
def create(conn):
    #print("Create")
    cursor = conn.cursor()
    cursor.execute(
        'insert into decks(a,b) values(?,?);',
        (3232, 'catzzz')
    )
    conn.commit()
    read(conn)
    return


# This function updates data in the DB
def update(conn):
    #print("Update")
    cursor = conn.cursor()
    cursor.execute(
        'update dummy set b = ? where a = ?;',
        ('dogzzz', 3232)
    )
    conn.commit()
    read(conn)
    return

# This function deltes data in the DB
def delete(conn):
    #print("Delete")
    cursor = conn.cursor()
    cursor.execute(
        'delete from dummy where a > 5'
    )
    conn.commit()
    read(conn)
    return

def erase(conn):
    cursor = conn.cursor()
    cursor.execute(
        'DROP TABLE dummy'
    )
    conn.commit()
    read(conn)
    return

# Main method
def main():

    conn = connect()
    initialize_tables(conn)
    display_tables(conn)



if __name__ == '__main__':
    main()