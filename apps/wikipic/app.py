#!/usr/bin/python3

from flask import Flask
APP = Flask(__name__)

@APP.route("/")
def hello():
  return "Hello World!"

if __name__ == "__main__":
  APP.run()