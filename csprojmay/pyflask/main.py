from flask import Blueprint
from flask import render_template
from .extensions import mongo

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/apireturn', )
def onReturn():

    user_collection = mongo.db.test
    user_collection.insert({'name' : 'Cristina'})
    user_collection.insert({'name' : 'Derek'})
    # shows a user's playlists (need to be authenticated via oauth)
