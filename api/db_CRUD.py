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


# This function establishes a connection to an MS SQL DB
def db_connect():
    conn = pyodbc.connect(
        "Driver={SQL Server Native Client 11.0};"
        "Server=website-db.cmtiqqjm470n.us-east-1.rds.amazonaws.com,1433;"
        "Database=player_stats;"
        "Trusted_Connection=no;"
        "UID=davidluby;"
        "PWD=ASIOB785$^%"
    )
    return conn



# This function reads from the DB
def read(conn):
    #print("Read")
    cursor = conn.cursor()
    cursor.execute("select * from dummy")
    out = []
    for row in cursor:
        out.append(str(row))
        print(f'row = {row}')
    return(out)


# This function creates data entries in the DB
def create(conn):
    #print("Create")
    cursor = conn.cursor()
    cursor.execute(
        'insert into dummy(a,b) values(?,?);',
        (3232, 'catzzz')
    )
    conn.commit()
    read(conn)


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


# This function deltes data in the DB
def delete(conn):
    #print("Delete")
    cursor = conn.cursor()
    cursor.execute(
        'delete from dummy where a > 5'
    )
    conn.commit()
    read(conn)



# Main method
def main():
    conn = db_connect()
    read(conn)
    create(conn)
    update(conn)
    delete(conn)
    out = read(conn)
    conn.close()
    return(out)



if __name__ == '__main__':
    main()