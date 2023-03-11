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