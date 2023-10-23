# from flask_login import login_required

from backend.models import db, User
from flask import Blueprint , render_template,jsonify
from backend.models import User

about_routes = Blueprint('about', __name__)


about_routes.route('/artist')
# @login_required ?
def about_artist():
    artist_data = {
        "name": "Priyanka Raghuraman",
        "bio": "Priyanka Raghuraman is a passionate and talented multidisciplinary artist...",
        "achievements": "She has received numerous honors and awards for her exceptional work...",
        # Add more data as needed
    }
    return jsonify(artist_data)


# about_routes.route('/studio')
# # @login_required ?
# def about_page():
#      page_data = {
#         # Add  data as needed
#     }
#     return jsonify(artist_data)